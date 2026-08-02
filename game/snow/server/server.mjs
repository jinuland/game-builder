// Snow Royale multiplayer server — room-based, server-authoritative.
// - Rooms: create / join by code / public list / quick join
// - Lobby -> 20Hz simulation (engine.js runs here; clients send inputs only)
// - Empty slots filled with NPC bots; dead players become ghosts (spectate)
// - Match results written to DynamoDB (stats keyed by cookie uid)
// Run: node game/snow/server/server.mjs  (PORT=8901, DDB_TABLE=snow-royale-stats)
import { WebSocketServer } from 'ws';
import { createServer } from 'node:http';
import * as E from '../src/engine.js';
import { CONFIG as C, CLASSES } from '../src/config.js';

const PORT = parseInt(process.env.PORT || '8901', 10);
const TICK_HZ = 20;
const SNAPSHOT_EVERY = 1;             // send every tick (20/s) — small payloads
const LOBBY_TIMEOUT_MS = 10 * 60 * 1000;
const MAX_HUMANS = 8;
const TABLE = process.env.DDB_TABLE || 'snow-royale-stats';
const REGION = process.env.AWS_REGION || 'us-east-1';

// ---- DynamoDB stats (best-effort; game runs fine if DDB is unreachable) ----
let ddb = null;
try {
  const { DynamoDBClient } = await import('@aws-sdk/client-dynamodb');
  const { DynamoDBDocumentClient, UpdateCommand, GetCommand } = await import('@aws-sdk/lib-dynamodb');
  const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));
  ddb = {
    async recordMatch(uid, name, { place, kills, won, total, mode }) {
      await client.send(new UpdateCommand({
        TableName: TABLE,
        Key: { uid },
        UpdateExpression: `SET #n = :name, lastPlayedAt = :now
          ADD matches :one, wins :win, kills :kills, top3 :top3, totalPlace :place`,
        ExpressionAttributeNames: { '#n': 'name' },
        ExpressionAttributeValues: {
          ':name': name, ':now': new Date().toISOString(),
          ':one': 1, ':win': won ? 1 : 0, ':kills': kills,
          ':top3': place <= 3 ? 1 : 0, ':place': place,
        },
      }));
    },
    async getStats(uid) {
      const r = await client.send(new GetCommand({ TableName: TABLE, Key: { uid } }));
      return r.Item || null;
    },
  };
  console.log(`[ddb] stats table: ${TABLE} (${REGION})`);
} catch (e) {
  console.warn('[ddb] unavailable, stats disabled:', e.message);
}

// ---- rooms ------------------------------------------------------------------
const rooms = new Map(); // code -> room

function roomCode() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let c = '';
  do { c = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join(''); }
  while (rooms.has(c));
  return c;
}

function createRoom({ isPublic, hostName }) {
  const room = {
    code: roomCode(),
    isPublic: !!isPublic,
    createdAt: Date.now(),
    state: 'lobby',          // lobby | playing | over
    seed: Math.floor(Math.random() * 1e9) + 1,
    members: new Map(),      // uid -> member {ws, uid, name, classId, ready, playerId, ghost}
    game: null,
    tick: 0,
    hostUid: null,
    hostName: hostName || '방장',
    interval: null,
  };
  rooms.set(room.code, room);
  return room;
}

function lobbyInfo(room) {
  return {
    type: 'lobby',
    code: room.code,
    isPublic: room.isPublic,
    state: room.state,
    hostUid: room.hostUid,
    members: [...room.members.values()].map((m) => ({ uid: m.uid, name: m.name, classId: m.classId, ready: m.ready })),
  };
}

function broadcast(room, msg) {
  const data = JSON.stringify(msg);
  for (const m of room.members.values()) {
    if (m.ws && m.ws.readyState === 1) m.ws.send(data);
  }
}

function publicRooms() {
  return [...rooms.values()]
    .filter((r) => r.isPublic && r.state === 'lobby' && r.members.size < MAX_HUMANS)
    .map((r) => ({ code: r.code, host: r.hostName, players: r.members.size, max: MAX_HUMANS }));
}

// ---- match lifecycle ----------------------------------------------------------
const DROP_SEC = 8;

function startMatch(room) {
  if (room.state !== 'lobby' || room.members.size === 0) return;
  room.state = 'playing';
  room.phase = 'drop';
  room.dropDeadline = Date.now() + DROP_SEC * 1000;
  const humans = [...room.members.values()];
  const total = Math.max(C.match.total, humans.length);
  // humanId -1: engine treats nobody as "the" human — all humans are explicit
  const g = E.createGame(room.seed, { total, allNpc: true, humanId: -1, difficulty: 'normal' });
  room.game = g;
  // claim one bot slot per human member, in join order
  humans.forEach((m, i) => {
    const p = g.players[i];
    p.isNpc = false; p.npc = null; p.isHuman = true;
    p.name = m.name.slice(0, 12);           // player-chosen nickname
    p.userSkin = true;                       // renderer: distinct user look
    p.uid = m.uid;
    E.applyClass(g, p, m.classId || 'jack');
    if (m.itemId) E.equipItem(g, p, m.itemId); // carried shop item (client-owned wallet)
    m.playerId = p.id;
    m.ghost = false;
    m.input = { mvx: 0, mvy: 0, aim: 0, cover: false };
  });
  broadcast(room, {
    type: 'match_start',
    seed: room.seed,
    total,
    you: null, // filled per-member below
    players: g.players.map((p) => ({ id: p.id, name: p.name, isNpc: p.isNpc, skin: p.skin, userSkin: !!p.userSkin, classId: p.classId || null })),
  });
  // per-member "you" assignment
  for (const m of room.members.values()) {
    if (m.ws && m.ws.readyState === 1) m.ws.send(JSON.stringify({ type: 'you', playerId: m.playerId }));
  }
  room.tick = 0;
  const dt = 1 / TICK_HZ;
  room.interval = setInterval(() => {
    try { tickRoom(room, dt); } catch (e) { console.error('[tick]', room.code, e); stopMatch(room); }
  }, 1000 / TICK_HZ);
  console.log(`[room ${room.code}] match started: ${humans.length} humans, ${total - humans.length} bots`);
}

function tickRoom(room, dt) {
  const g = room.game;
  if (!g || g.over) { finishMatch(room); return; }
  // drop phase: world frozen, humans pick landing spots on the map
  if (room.phase === 'drop') {
    const left = (room.dropDeadline - Date.now()) / 1000;
    for (const m of room.members.values()) {
      if (m.playerId == null) continue;
      const p = g.players.find((pl) => pl.id === m.playerId);
      if (p && m.input.dropX != null) {
        p.x = Math.max(0, Math.min(C.map.size, m.input.dropX));
        p.y = Math.max(0, Math.min(C.map.size, m.input.dropY));
      }
    }
    room.tick++;
    if (room.tick % 4 === 0) broadcast(room, { type: 'drop_tick', left: Math.max(0, Math.round(left * 10) / 10) });
    if (left <= 0) { room.phase = 'play'; broadcast(room, { type: 'play_begin' }); }
    return;
  }
  // apply queued human inputs
  for (const m of room.members.values()) {
    if (m.ghost || m.playerId == null) continue;
    const p = g.players.find((pl) => pl.id === m.playerId);
    if (!p || !p.alive) continue;
    const inp = m.input;
    p.aim = inp.aim;
    p.cover = !!inp.cover;
    if (inp.jump) { E.jump(g, p); inp.jump = false; }
    p.jetHold = !!inp.jetHold;
    if (inp.melee) { p.aim = inp.aim; E.melee(g, p, inp.aim); inp.melee = false; }
    if (inp.useItem) { p.aim = inp.aim; E.useItem(g, p, inp.aim); inp.useItem = false; }
    if (inp.craft) { E.startCraft(g, p); inp.craft = false; }
    if (inp.wall) { p.aim = inp.aim; E.buildWall(g, p); inp.wall = false; }
    if (inp.decoy) { p.aim = inp.aim; E.placeDecoy(g, p); inp.decoy = false; }
    if (inp.throwCharge != null) { E.throwSnowball(g, p, inp.aim, inp.throwCharge); inp.throwCharge = null; }
    if (inp.mg && p.mg && p.mg.until > g.t && p.mg.ammo > 0) E.fireMachineGun(g, p, inp.aim);
    if (inp.mvx || inp.mvy) {
      if (p.crafting && (Math.abs(inp.mvx) + Math.abs(inp.mvy) > 0.2)) E.cancelCraft(g, p, 'move');
      E.movePlayer(g, p, inp.mvx, inp.mvy, dt);
    }
    E.tryPickup(g, p);
    const capsGot = E.tryPickupCaps(g, p);
    if (capsGot > 0 && m.ws && m.ws.readyState === 1) m.ws.send(JSON.stringify({ type: 'caps_got', amount: capsGot, wallet: p.caps }));
  }
  E.step(g, dt);
  room.tick++;
  // death notifications -> ghost mode + placement
  for (const m of room.members.values()) {
    if (m.ghost || m.playerId == null) continue;
    const p = g.players.find((pl) => pl.id === m.playerId);
    if (p && !p.alive) {
      m.ghost = true;
      const place = g.players.length - g.placementOrder.indexOf(p.id);
      if (m.ws && m.ws.readyState === 1) {
        m.ws.send(JSON.stringify({ type: 'you_died', place, total: g.players.length, kills: g.kills[p.id] || 0 }));
      }
      recordStats(m, { place, kills: g.kills[p.id] || 0, won: false, total: g.players.length, mode: 'online' });
    }
  }
  if (room.tick % SNAPSHOT_EVERY === 0) broadcast(room, snapshot(room));
}

// Compact snapshot: only dynamic state. Static world (piles/obstacles/pads/
// towers/pickup spots) is derived client-side from the shared seed.
function snapshot(room) {
  const g = room.game;
  return {
    type: 'snap',
    t: Math.round(g.t * 100) / 100,
    tick: room.tick,
    zone: { r: Math.round(g.zone.radius), next: Math.round(g.zone.nextShrink - g.t) },
    players: g.players.map((p) => p.alive ? [p.id, Math.round(p.x), Math.round(p.y), Math.round(p.z), Math.round(p.aim * 100) / 100, p.hp, p.snowballs, p.crafting ? 1 : 0, p.shieldHits, p.mg ? p.mg.ammo : 0, p.buff ? p.buff.kind : 0, p.cover ? 1 : 0, p.sleepUntil > g.t ? 1 : 0, p.chargeUntil > g.t ? 1 : 0, p.hasClub ? 1 : 0, p.caps || 0, p.item ? p.item.id : 0, p.item ? p.item.usesLeft : 0, Math.round(p.jetFuel || 0)] : [p.id]),
    caps: g.caps.map((cp) => [cp.id, (cp.gone || cp.takenUntil > g.t) ? 1 : 0, Math.round(cp.x), Math.round(cp.y), cp.amount]),
    nades: g.grenades.map((gr) => [gr.id, Math.round(gr.x), Math.round(gr.y), Math.round(gr.z || 0), Math.round(gr.lx), Math.round(gr.ly), gr.radius, Math.round((gr.explodeAt - g.t) * 10) / 10, gr.exploded ? 1 : 0]),
    balls: g.snowballs.map((s) => [s.id, Math.round(s.x), Math.round(s.y), s.flat ? 1 : 0, Math.round((s.traveled / (s.range || 1)) * 100)]),
    walls: g.walls.map((w) => [w.id, Math.round(w.x), Math.round(w.y), Math.round(w.angle * 100) / 100, w.hp]),
    decoys: g.decoys.map((d) => [d.id, Math.round(d.x), Math.round(d.y)]),
    corpses: g.corpses.length,
    pickups: g.pickups.map((it) => [it.id, it.takenUntil > g.t ? 1 : 0, Math.round(it.x), Math.round(it.y), it.kind === 'pill' && it.buff ? it.buff.kind : 0]),
    piles: g.piles.map((pl) => [pl.id, pl.cooldownUntil > g.t ? 1 : 0, Math.round(pl.x), Math.round(pl.y)]),
    events: g.events.splice(0).filter((e) => ['kill', 'eliminate', 'zoneShrink', 'pad', 'pill', 'shieldBlock', 'placeReward', 'wallHit', 'wallBreak', 'sleep', 'ram', 'boom', 'swing', 'caps'].includes(e.type)),
    alive: E.aliveCount(g),
  };
}

function finishMatch(room) {
  if (room.state !== 'playing') return;
  const g = room.game;
  stopMatch(room);
  room.state = 'over';
  const winner = g && g.winner;
  broadcast(room, {
    type: 'match_over',
    winner: winner ? { id: winner.id, name: winner.name, isNpc: winner.isNpc } : null,
    placements: g ? g.placementOrder.map((id, i) => ({ id, place: g.players.length - i })) : [],
  });
  // winner stats (survivor humans)
  for (const m of room.members.values()) {
    if (m.ghost || m.playerId == null) continue;
    const p = g.players.find((pl) => pl.id === m.playerId);
    if (p && p.alive) recordStats(m, { place: 1, kills: g.kills[p.id] || 0, won: true, total: g.players.length, mode: 'online' });
  }
  // room returns to lobby for a rematch
  setTimeout(() => {
    if (rooms.has(room.code)) {
      room.state = 'lobby'; room.seed = Math.floor(Math.random() * 1e9) + 1; room.game = null;
      for (const m of room.members.values()) { m.ready = false; m.playerId = null; m.ghost = false; }
      broadcast(room, lobbyInfo(room));
    }
  }, 8000);
}

function stopMatch(room) {
  if (room.interval) { clearInterval(room.interval); room.interval = null; }
}

function recordStats(m, result) {
  if (!ddb || !m.uid) return;
  ddb.recordMatch(m.uid, m.name, result).catch((e) => console.warn('[ddb] record failed:', e.message));
}

// ---- websocket wiring ----------------------------------------------------------
const http = createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); res.end('ok'); return; }
  res.writeHead(404); res.end();
});
const wss = new WebSocketServer({ server: http, path: '/ws' });

wss.on('connection', (ws) => {
  let member = null; // {room, uid, ...}
  const send = (msg) => { if (ws.readyState === 1) ws.send(JSON.stringify(msg)); };

  ws.on('message', async (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }
    const uid = String(msg.uid || '').slice(0, 64);
    const name = String(msg.name || '눈사람').slice(0, 12) || '눈사람';

    if (msg.type === 'list_rooms') { send({ type: 'rooms', rooms: publicRooms() }); return; }

    if (msg.type === 'stats' && ddb && uid) {
      try { send({ type: 'stats', stats: await ddb.getStats(uid) }); } catch { send({ type: 'stats', stats: null }); }
      return;
    }

    if (msg.type === 'create_room' || msg.type === 'join_room' || msg.type === 'quick_join') {
      if (!uid) { send({ type: 'error', error: 'uid가 필요합니다' }); return; }
      let room = null;
      if (msg.type === 'create_room') room = createRoom({ isPublic: !!msg.isPublic, hostName: name });
      else if (msg.type === 'join_room') {
        room = rooms.get(String(msg.code || '').toUpperCase());
        if (!room) { send({ type: 'error', error: '방을 찾을 수 없습니다' }); return; }
        // reload-rejoin: same uid can re-attach to a running match
        const existing = room.members.get(uid);
        if (room.state !== 'lobby' && !existing) { send({ type: 'error', error: '이미 게임이 진행 중입니다' }); return; }
        if (!existing && room.members.size >= MAX_HUMANS) { send({ type: 'error', error: '방이 가득 찼습니다' }); return; }
      } else { // quick_join
        room = [...rooms.values()].find((r) => r.isPublic && r.state === 'lobby' && r.members.size < MAX_HUMANS)
          || createRoom({ isPublic: true, hostName: name });
      }
      // replace stale connection with same uid (reload-rejoin keeps player state)
      const old = room.members.get(uid);
      if (old) {
        if (old.ws && old.ws !== ws && old.ws.readyState === 1) { const dead = old.ws; old.ws = null; dead.close(); }
        old.ws = ws; old.disconnectedAt = null;
        member = old;
      } else {
        member = { room, uid, name, classId: msg.classId || 'jack', itemId: msg.itemId && C.shop[msg.itemId] ? msg.itemId : null, ready: false, ws, playerId: null, ghost: false, input: { mvx: 0, mvy: 0, aim: 0 } };
        room.members.set(uid, member);
      }
      if (!room.hostUid) { room.hostUid = uid; room.hostName = name; }
      send({ type: 'joined', code: room.code, isPublic: room.isPublic });
      // rejoining a live match: replay match context so the client can rebuild
      if (room.state === 'playing' && member.playerId != null && room.game) {
        const g = room.game;
        // their body may have been botified while away — reclaim it
        const p = g.players.find((pl) => pl.id === member.playerId);
        if (p && p.alive && p.isNpc) { p.isNpc = false; p.isHuman = true; p.npc = null; }
        send({
          type: 'match_start', rejoin: true, seed: room.seed, total: g.players.length,
          players: g.players.map((pl) => ({ id: pl.id, name: pl.name, isNpc: pl.isNpc, skin: pl.skin, userSkin: !!pl.userSkin, classId: pl.classId || null })),
        });
        send({ type: 'you', playerId: member.playerId });
        if (member.ghost && p && !p.alive) {
          const place = g.players.length - g.placementOrder.indexOf(p.id);
          send({ type: 'you_died', place, total: g.players.length, kills: g.kills[p.id] || 0, rejoin: true });
        }
        if (room.phase === 'play') send({ type: 'play_begin' });
      } else {
        broadcast(room, lobbyInfo(room));
      }
      return;
    }

    if (!member) return;
    const room = member.room;

    if (msg.type === 'set_profile') {
      member.name = name || member.name;
      member.classId = msg.classId || member.classId;
      broadcast(room, lobbyInfo(room));
      return;
    }
    if (msg.type === 'ready') { member.ready = !!msg.ready; broadcast(room, lobbyInfo(room)); maybeAutoStart(room); return; }
    if (msg.type === 'start' && member.uid === room.hostUid && room.state === 'lobby') { startMatch(room); return; }
    if (msg.type === 'input' && room.state === 'playing' && !member.ghost) {
      const i = member.input;
      i.mvx = clampNum(msg.mvx, -1, 1); i.mvy = clampNum(msg.mvy, -1, 1);
      i.aim = clampNum(msg.aim, -10, 10); i.cover = !!msg.cover;
      if (msg.dropX != null) { i.dropX = clampNum(msg.dropX, 0, 10000); i.dropY = clampNum(msg.dropY, 0, 10000); }
      if (msg.jump) i.jump = true;
      if (msg.craft) i.craft = true;
      if (msg.wall) i.wall = true;
      if (msg.decoy) i.decoy = true;
      if (msg.melee) i.melee = true;
      if (msg.useItem) i.useItem = true;
      i.jetHold = !!msg.jetHold;
      if (msg.throwCharge != null) i.throwCharge = clampNum(msg.throwCharge, 0, 1);
      i.mg = !!msg.mg;
      return;
    }
    if (msg.type === 'leave') { leave(true); return; }
  });

  function leave(explicit = false) {
    if (!member) return;
    const room = member.room;
    // during a live match, a dropped socket gets a 60s grace window to rejoin
    // (page reloads keep your body alive as a bot until you come back)
    if (!explicit && room.state === 'playing' && member.playerId != null && room.game) {
      member.ws = null;
      member.disconnectedAt = Date.now();
      const p = room.game.players.find((pl) => pl.id === member.playerId);
      if (p && p.alive) { p.isNpc = true; p.isHuman = false; p.npc = { state: 'PATROL', target: null, reactTimer: 0, moveTx: 0, moveTy: 0 }; }
      member = null;
      return;
    }
    room.members.delete(member.uid);
    if (room.state === 'playing' && member.playerId != null && room.game) {
      const p = room.game.players.find((pl) => pl.id === member.playerId);
      if (p && p.alive) { p.isNpc = true; p.isHuman = false; p.npc = { state: 'PATROL', target: null, reactTimer: 0, moveTx: 0, moveTy: 0 }; }
    }
    const anyLive = [...room.members.values()].some((m) => m.ws);
    if (!anyLive && room.state !== 'playing') { stopMatch(room); rooms.delete(room.code); console.log(`[room ${room.code}] deleted (empty)`); }
    else if (room.members.size) {
      if (room.hostUid === member.uid) { const next = room.members.values().next().value; room.hostUid = next.uid; room.hostName = next.name; }
      broadcast(room, lobbyInfo(room));
    } else { stopMatch(room); rooms.delete(room.code); }
    member = null;
  }

  function maybeAutoStart(room) {
    // everyone ready (2+ humans) -> host auto-start convenience
    if (room.state === 'lobby' && room.members.size >= 2 && [...room.members.values()].every((m) => m.ready)) startMatch(room);
  }

  // NOTE: wrap — ws 'close' passes (code, reason); leave(1006) must not read as explicit
  ws.on('close', () => leave(false));
  ws.on('error', () => {});
});

function clampNum(v, lo, hi) { const n = Number(v); return Number.isFinite(n) ? Math.max(lo, Math.min(hi, n)) : 0; }

// GC: stale lobbies + disconnected members past their 60s rejoin window
setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms) {
    if (room.state === 'lobby' && now - room.createdAt > LOBBY_TIMEOUT_MS && room.members.size === 0) {
      rooms.delete(code);
      continue;
    }
    for (const [uid, m] of room.members) {
      if (!m.ws && m.disconnectedAt && now - m.disconnectedAt > 60_000) room.members.delete(uid);
    }
    if (room.members.size === 0 && room.state === 'playing') { stopMatch(room); rooms.delete(code); console.log(`[room ${code}] deleted (all left)`); }
  }
}, 15_000);

http.listen(PORT, () => console.log(`[snow-server] ws://0.0.0.0:${PORT}/ws (tick ${TICK_HZ}Hz)`));
