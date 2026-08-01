// Snow Royale core engine — pure logic, no DOM/Canvas. Fixed-timestep simulation
// usable by both the browser render loop and the headless balance simulator.
// All mutations flow through setters; no external `x.hp =` writes allowed.
import { makeRng } from './rng.js';
import { CONFIG as C, SKINS, CLASSES as CLS, actForSurvivors } from './config.js';

let _uid = 1;
const uid = () => _uid++;

// ---- construction --------------------------------------------------------
export function createGame(seed = 42, opts = {}) {
  const rng = makeRng(seed);
  const g = {
    seed, rng,
    t: 0,                    // elapsed seconds
    phase: 'drop',           // drop | play | over
    over: false, won: false, winner: null,
    difficulty: opts.difficulty || 'normal',
    players: [],             // all combatants (index 0 = human unless sim)
    snowballs: [],           // active projectiles
    walls: [], decoys: [],
    piles: [],               // {x,y,cooldownUntil}
    obstacles: [],           // static cover: {x,y,r,kind:'rock'|'tree'|'cabin'} — block movement & snowballs
    corpses: [],             // fallen players: {id,x,y,skin,at} — rendered lying down, never removed
    pickups: [],             // {id,x,y,kind:'heal'|'shield',takenUntil} — respawn after cooldown
    zone: { cx: C.map.size / 2, cy: C.map.size / 2, radius: C.map.size * C.zone.startRadiusFactor, nextShrink: C.zone.firstShrinkSec, shrinks: 0 },
    events: [],              // telemetry event log
    placementOrder: [],      // ids in order of elimination (last = winner)
    kills: {},               // id -> kill count
    _humanId: opts.humanId ?? 1,
    stats: { craftAttempts: 0, craftDone: 0, craftCancel: 0, throws: 0, hits: 0, wallsBuilt: 0, decoys: 0, zoneDamageTicks: 0, zoneDamageTotal: 0, totalDamage: 0 },
  };
  spawnPiles(g);
  spawnObstacles(g);
  spawnPickups(g);
  spawnPlayers(g, opts);
  applyClass(g, humanPlayer(g), opts.classId);
  return g;
}

// Heal packs, shields, and pills scattered on the map. Taken → respawn after cooldown.
function spawnPickups(g) {
  const m = C.map.size;
  for (let i = 0; i < C.items.healSpawn; i++) {
    g.pickups.push({ id: uid(), kind: 'heal', x: g.rng.range(80, m - 80), y: g.rng.range(80, m - 80), takenUntil: 0 });
  }
  for (let i = 0; i < C.items.shieldSpawn; i++) {
    g.pickups.push({ id: uid(), kind: 'shield', x: g.rng.range(80, m - 80), y: g.rng.range(80, m - 80), takenUntil: 0 });
  }
  for (let i = 0; i < C.items.pill.spawn; i++) {
    g.pickups.push({ id: uid(), kind: 'pill', x: g.rng.range(80, m - 80), y: g.rng.range(80, m - 80), takenUntil: 0 });
  }
}

// Roll a pill buff. Machine gun is the jackpot; the rest are timed multipliers.
export function rollPillBuff(g) {
  const P = C.items.pill;
  if (g.rng() < P.mgChance) return { kind: 'mg', ammo: P.mgAmmo };
  const roll = g.rng();
  if (roll < 1 / 3) return { kind: 'speed', mul: P.speedMul };
  if (roll < 2 / 3) return { kind: 'power', mul: P.powerMul };
  return { kind: 'craft', mul: P.craftMul };
}

export function applyPillBuff(g, p, buff) {
  if (buff.kind === 'mg') {
    p.mg = { ammo: buff.ammo, until: g.t + C.items.pill.durationSec, fireCd: 0 };
  } else {
    p.buff = { kind: buff.kind, mul: buff.mul, until: g.t + C.items.pill.durationSec };
  }
  g.events.push({ t: g.t, type: 'pill', id: p.id, buff: buff.kind });
  return buff;
}

// active buff multiplier helpers (base mods × timed pill buff)
export function buffMul(g, p, kind) {
  return p.buff && p.buff.kind === kind && p.buff.until > g.t ? p.buff.mul : 1;
}

// Snow machine gun: straight-line (no arc), fast, fires while held.
// Uses its own ammo pool, not crafted snowballs. Returns projectile or null.
export function fireMachineGun(g, p, aim) {
  const P = C.items.pill;
  if (!p.alive || p.crafting || !p.mg || p.mg.until <= g.t || p.mg.ammo <= 0 || p.mg.fireCd > 0) return null;
  p.mg.ammo--;
  p.mg.fireCd = P.mgFireInterval;
  const sb = {
    id: uid(), ownerId: p.id, isNpc: p.isNpc,
    x: p.x, y: p.y, dirX: Math.cos(aim), dirY: Math.sin(aim),
    traveled: 0, range: C.throw.maxRange * 1.1, speed: P.mgSpeed, dead: false,
    dmgMul: (p.mods && p.mods.damage) || 1, flat: true, // flat = straight line, no arc
  };
  g.snowballs.push(sb);
  g.stats.throws++;
  if (p.mg.ammo <= 0) p.mg = null; // spent
  return sb;
}

// Apply a class (character trait choice) to a player — multipliers used by
// throw/damage/move/craft. Defaults are 1.0 (jack) when no class chosen.
export function applyClass(g, p, classId) {
  if (!p) return;
  const cls = CLS[classId] || CLS.jack;
  p.classId = cls.id;
  p.skin = p.isHuman ? cls.skin : p.skin;
  p.mods = {
    throwRange: cls.throwRangeMul, damage: cls.damageMul,
    speed: cls.speedMul, craftSec: cls.craftSecMul,
  };
  p.hp = Math.round(C.player.maxHp * cls.maxHpMul);
  p.maxHp = p.hp;
}

// Try to pick up any item within range. Returns the pickup kind or null.
export function tryPickup(g, p) {
  for (const it of g.pickups) {
    if (it.takenUntil > g.t) continue;
    if (Math.hypot(it.x - p.x, it.y - p.y) > C.items.pickupRange) continue;
    if (it.kind === 'heal') {
      const max = p.maxHp || C.player.maxHp;
      if (p.hp >= max) continue; // don't waste
      setHp(g, p, Math.min(max, p.hp + C.items.healAmount));
      it.takenUntil = g.t + C.items.healRespawnSec;
      // relocate for next spawn so camping is pointless
      it.x = g.rng.range(80, C.map.size - 80); it.y = g.rng.range(80, C.map.size - 80);
      g.events.push({ t: g.t, type: 'heal', id: p.id });
      return 'heal';
    }
    if (it.kind === 'shield') {
      if (p.shieldHits > 0) continue;
      p.shieldHits = C.items.shieldHits;
      it.takenUntil = g.t + C.items.shieldRespawnSec;
      it.x = g.rng.range(80, C.map.size - 80); it.y = g.rng.range(80, C.map.size - 80);
      g.events.push({ t: g.t, type: 'shield', id: p.id });
      return 'shield';
    }
    if (it.kind === 'pill') {
      const buff = applyPillBuff(g, p, rollPillBuff(g));
      it.takenUntil = g.t + C.items.pill.respawnSec;
      it.x = g.rng.range(80, C.map.size - 80); it.y = g.rng.range(80, C.map.size - 80);
      return { kind: 'pill', buff };
    }
  }
  return null;
}

// Static obstacles: rocks, trees, cabins spread over the map. They block
// movement and snowballs — real cover for FPS play.
function spawnObstacles(g) {
  const m = C.map.size;
  const kinds = [
    { kind: 'rock', n: 14, rMin: 14, rMax: 26 },
    { kind: 'tree', n: 22, rMin: 8, rMax: 12 },
    { kind: 'cabin', n: 6, rMin: 30, rMax: 40 },
  ];
  for (const k of kinds) {
    for (let i = 0; i < k.n; i++) {
      g.obstacles.push({
        id: uid(), kind: k.kind,
        x: g.rng.range(70, m - 70), y: g.rng.range(70, m - 70),
        r: g.rng.range(k.rMin, k.rMax),
        yaw: g.rng.range(0, Math.PI * 2),
      });
    }
  }
}

function spawnPiles(g) {
  const m = C.map.size;
  for (let i = 0; i < C.map.snowPiles; i++) {
    g.piles.push({ id: uid(), x: g.rng.range(60, m - 60), y: g.rng.range(60, m - 60), cooldownUntil: 0 });
  }
}

function spawnPlayers(g, opts) {
  const total = opts.total ?? C.match.total;
  const m = C.map.size;
  const skinKeys = ['jack', 'white', 'bear'];
  // Spread spawns evenly on a jittered grid so players start far apart (no instant
  // early bloodbath). 20 players -> 5x4 grid across the map.
  const cols = 5, rows = Math.ceil(total / cols);
  const cellW = m / cols, cellH = m / rows;
  const order = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) order.push([c, r]);
  for (let i = 0; i < total; i++) {
    const isHuman = !opts.allNpc && i === 0;
    const id = g._humanId != null && isHuman ? g._humanId : uid();
    const [gc, gr] = order[i % order.length];
    const p = {
      id, isHuman, isNpc: !isHuman,
      name: isHuman ? '아이언 잭' : `[봇] ${['그레이', '프로스트', '아이시클', '블리자드'][i % 4]}-${i}`,
      skin: isHuman ? 'jack' : (i % 3 === 0 ? 'bot' : skinKeys[i % 3]),
      hp: C.player.maxHp, alive: true,
      x: Math.min(m - 40, Math.max(40, gc * cellW + cellW / 2 + g.rng.range(-cellW * 0.3, cellW * 0.3))),
      y: Math.min(m - 40, Math.max(40, gr * cellH + cellH / 2 + g.rng.range(-cellH * 0.3, cellH * 0.3))),
      aim: g.rng.range(0, Math.PI * 2),
      snowballs: 0,
      crafting: false, craftTimer: 0, craftPile: null,
      cover: false,
      walls: 0, decoys: 0,
      maxHp: C.player.maxHp, shieldHits: 0,
      z: 0, vz: 0,             // jump height / vertical velocity
      mods: { throwRange: 1, damage: 1, speed: 1, craftSec: 1 },
      npc: isHuman ? null : { state: 'PATROL', target: null, reactTimer: 0, moveTx: 0, moveTy: 0, wantCraft: false, aimError: 0 },
      diff: g.difficulty,
    };
    g.kills[id] = 0;
    g.players.push(p);
  }
}

// ---- setters -------------------------------------------------------------
export function setHp(g, p, v) {
  const nv = Math.max(0, Math.min(p.maxHp || C.player.maxHp, v));
  const delta = p.hp - nv;
  p.hp = nv;
  if (nv <= 0 && p.alive) eliminate(g, p);
  return delta;
}
export function damage(g, p, amount, byId = null) {
  // shield item: fully blocks the hit while durability lasts, then breaks.
  // (zone damage bypasses this — it calls setHp directly)
  if (p.shieldHits > 0) {
    p.shieldHits--;
    g.events.push({ t: g.t, type: 'shieldBlock', id: p.id, left: p.shieldHits });
    return 0;
  }
  let eff = p.cover ? amount * C.throw.coverDamageMul : amount;
  const before = p.hp;
  setHp(g, p, p.hp - eff);
  g.stats.totalDamage += before - p.hp;
  return before - p.hp;
}
export function addSnowballs(p, n) { p.snowballs = Math.max(0, p.snowballs + n); return p.snowballs; }

// jump: only from the ground, not while crafting. Airborne players above
// jumpDodgeZ dodge incoming snowballs (they fly under you).
export function jump(g, p) {
  if (!p.alive || p.crafting || p.z > 0.01) return false;
  p.vz = C.player.jumpVel;
  p.z = 0.011; // leave the ground immediately so a same-tick double jump is impossible
  g.events.push({ t: g.t, type: 'jump', id: p.id });
  return true;
}

function eliminate(g, p) {
  if (!p.alive) return;
  p.alive = false; p.crafting = false;
  g.placementOrder.push(p.id);
  // leave a corpse where they fell (rendered lying in the snow)
  g.corpses.push({ id: p.id, x: p.x, y: p.y, skin: p.skin, name: p.name, at: g.t, yaw: p.aim });
  g.events.push({ t: g.t, type: 'eliminate', id: p.id, isNpc: p.isNpc, place: aliveCount(g) + 1 });
  checkWin(g);
}

export function aliveCount(g) { return g.players.filter((p) => p.alive).length; }
export function humanPlayer(g) { return g.players.find((p) => p.id === g._humanId); }

function checkWin(g) {
  const alive = g.players.filter((p) => p.alive);
  if (alive.length <= 1) {
    g.phase = 'over'; g.over = true;
    g.winner = alive[0] || null;
    if (g.winner) g.placementOrder.push(g.winner.id);
    const human = humanPlayer(g);
    g.won = !!(g.winner && human && g.winner.id === human.id);
    g.events.push({ t: g.t, type: 'gameover', winnerId: g.winner ? g.winner.id : null, humanWon: g.won });
  }
}

// ---- crafting ------------------------------------------------------------
export function nearestPile(g, p, range = C.craft.interactRange) {
  let best = null, bd = range;
  for (const pile of g.piles) {
    if (pile.cooldownUntil > g.t) continue;
    const d = Math.hypot(pile.x - p.x, pile.y - p.y);
    if (d <= bd) { bd = d; best = pile; }
  }
  return best;
}

export function startCraft(g, p) {
  if (!p.alive || p.crafting) return false;
  const pile = nearestPile(g, p);
  if (!pile) return false;
  p.crafting = true; p.craftTimer = C.craft.seconds * ((p.mods && p.mods.craftSec) || 1) * buffMul(g, p, 'craft'); p.craftPile = pile.id;
  g.stats.craftAttempts++;
  g.events.push({ t: g.t, type: 'craftStart', id: p.id });
  return true;
}

export function cancelCraft(g, p, reason = 'move') {
  if (!p.crafting) return;
  p.crafting = false; p.craftTimer = 0; p.craftPile = null;
  g.stats.craftCancel++;
  g.events.push({ t: g.t, type: 'craftCancel', id: p.id, reason });
}

function finishCraft(g, p) {
  addSnowballs(p, C.craft.yield);
  const pile = g.piles.find((pl) => pl.id === p.craftPile);
  if (pile) pile.cooldownUntil = g.t + C.map.pileCooldown;
  p.crafting = false; p.craftTimer = 0; p.craftPile = null;
  g.stats.craftDone++;
  g.events.push({ t: g.t, type: 'craftDone', id: p.id });
}

// ---- throwing ------------------------------------------------------------
// charge 0..1 -> range. Returns snowball or null.
export function throwSnowball(g, p, aim, charge01) {
  if (!p.alive || p.crafting || p.snowballs <= 0) return null;
  addSnowballs(p, -1);
  const range = (C.throw.minRange + (C.throw.maxRange - C.throw.minRange) * Math.max(0, Math.min(1, charge01))) * ((p.mods && p.mods.throwRange) || 1);
  const sb = {
    id: uid(), ownerId: p.id, isNpc: p.isNpc,
    x: p.x, y: p.y, dirX: Math.cos(aim), dirY: Math.sin(aim),
    traveled: 0, range, speed: C.throw.speed, dead: false,
    dmgMul: ((p.mods && p.mods.damage) || 1) * buffMul(g, p, 'power'),
  };
  g.snowballs.push(sb);
  g.stats.throws++;
  g.events.push({ t: g.t, type: 'throw', id: p.id, charge: charge01 });
  return sb;
}

// charge from held ms
export function chargeFromMs(ms) {
  const clamped = Math.max(C.throw.minChargeMs, Math.min(C.throw.maxChargeMs, ms));
  return (clamped - C.throw.minChargeMs) / (C.throw.maxChargeMs - C.throw.minChargeMs);
}
export function rangeForCharge(charge01) {
  return C.throw.minRange + (C.throw.maxRange - C.throw.minRange) * Math.max(0, Math.min(1, charge01));
}

// ---- walls & decoys ------------------------------------------------------
export function buildWall(g, p) {
  if (!p.alive || p.crafting || p.snowballs < C.wall.cost || p.walls >= C.wall.maxPerPlayer) return null;
  addSnowballs(p, -C.wall.cost);
  const wx = p.x + Math.cos(p.aim) * C.wall.dist;
  const wy = p.y + Math.sin(p.aim) * C.wall.dist;
  const wall = { id: uid(), ownerId: p.id, x: wx, y: wy, angle: p.aim + Math.PI / 2, hp: C.wall.durability, decayAt: g.t + C.wall.decaySec };
  g.walls.push(wall); p.walls++;
  g.stats.wallsBuilt++;
  g.events.push({ t: g.t, type: 'wall', id: p.id });
  return wall;
}

export function placeDecoy(g, p) {
  if (!p.alive || p.crafting || p.snowballs < C.decoy.cost || p.decoys >= C.decoy.maxPerPlayer) return null;
  addSnowballs(p, -C.decoy.cost);
  const dx = p.x + Math.cos(p.aim) * C.decoy.dist;
  const dy = p.y + Math.sin(p.aim) * C.decoy.dist;
  const decoy = { id: uid(), ownerId: p.id, x: dx, y: dy, until: g.t + C.decoy.lureSec, alive: true };
  g.decoys.push(decoy); p.decoys++;
  g.stats.decoys++;
  g.events.push({ t: g.t, type: 'decoy', id: p.id });
  return decoy;
}

// segment-point distance for wall blocking
function wallBlocks(wall, x0, y0, x1, y1) {
  // treat wall as a segment centered at (x,y) length wall.len along angle
  const half = C.wall.len / 2;
  const ax = wall.x + Math.cos(wall.angle) * half, ay = wall.y + Math.sin(wall.angle) * half;
  const bx = wall.x - Math.cos(wall.angle) * half, by = wall.y - Math.sin(wall.angle) * half;
  return segIntersect(x0, y0, x1, y1, ax, ay, bx, by);
}
function segIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  const d = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
  if (Math.abs(d) < 1e-9) return false;
  const t = ((x3 - x1) * (y4 - y3) - (y3 - y1) * (x4 - x3)) / d;
  const u = ((x3 - x1) * (y2 - y1) - (y3 - y1) * (x2 - x1)) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

// ---- simulation step -----------------------------------------------------
export function step(g, dt) {
  if (g.over) return;
  g.t += dt;

  // zone shrink
  if (g.t >= g.zone.nextShrink && g.zone.radius > C.zone.finalRadius) {
    g.zone.radius = Math.max(C.zone.finalRadius, g.zone.radius * (1 - C.zone.shrinkStep * 0.5));
    g.zone.nextShrink = g.t + C.zone.intervalSec;
    g.zone.shrinks++;
    g.events.push({ t: g.t, type: 'zoneShrink', radius: g.zone.radius });
  }

  // pile respawn: when a depleted pile's cooldown expires it relocates INSIDE
  // the current zone, so snowball supply never dries up as the map closes in
  for (const pile of g.piles) {
    if (pile.cooldownUntil > 0 && g.t >= pile.cooldownUntil) {
      const a = g.rng.range(0, Math.PI * 2);
      const rr = g.rng.range(0, g.zone.radius * 0.85);
      pile.x = g.zone.cx + Math.cos(a) * rr;
      pile.y = g.zone.cy + Math.sin(a) * rr;
      pile.cooldownUntil = 0;
      g.events.push({ t: g.t, type: 'pileRespawn', id: pile.id });
    }
  }
  // NPCs pick up items only when deliberately seeking one (or a rare accidental
  // grab) — otherwise bots hoover up every pill/shield before the player can
  for (const p of g.players) {
    if (!p.alive || !p.isNpc) continue;
    const ai = p.npc;
    const seeking = ai && ai.itemUntil > g.t;
    if (seeking || g.rng() < 0.003) tryPickup(g, p);
  }

  // players
  for (const p of g.players) {
    if (!p.alive) continue;
    // jump physics: simple ballistic arc back to the ground
    if (p.z > 0 || p.vz !== 0) {
      p.vz -= C.player.gravity * dt;
      p.z = Math.max(0, p.z + p.vz * dt);
      if (p.z === 0 && p.vz < 0) p.vz = 0;
    }
    // machine gun cooldown tick + expiry
    if (p.mg) {
      if (p.mg.fireCd > 0) p.mg.fireCd -= dt;
      if (p.mg.until <= g.t) p.mg = null;
    }
    if (p.buff && p.buff.until <= g.t) p.buff = null;
    // crafting countdown
    if (p.crafting) {
      p.craftTimer -= dt;
      if (p.craftTimer <= 0) finishCraft(g, p);
    }
    // NPC brain
    if (p.isNpc) npcThink(g, p, dt);
    // zone damage
    const distFromCenter = Math.hypot(p.x - g.zone.cx, p.y - g.zone.cy);
    if (distFromCenter > g.zone.radius) {
      const dmg = C.zone.dps * dt;
      const before = p.hp;
      setHp(g, p, p.hp - dmg);
      g.stats.zoneDamageTicks++;
      g.stats.zoneDamageTotal += before - p.hp;
    }
    // decay walls owned counts recomputed below
  }

  // snowballs travel + collision
  for (const sb of g.snowballs) {
    if (sb.dead) continue;
    const stepDist = sb.speed * dt;
    const nx = sb.x + sb.dirX * stepDist, ny = sb.y + sb.dirY * stepDist;
    // wall collision — a low (1.2m) wall blocks most but not all shots; a
    // fraction arc over it, so pure turtling can still be punished.
    let blocked = false;
    for (const w of g.walls) {
      if (w.ownerId === sb.ownerId) continue;
      if (wallBlocks(w, sb.x, sb.y, nx, ny)) {
        if (g.rng() < C.wall.blockChance) { w.hp--; blocked = true; if (w.hp <= 0) w.dead = true; }
        break;
      }
    }
    if (blocked) { sb.dead = true; continue; }
    // obstacle collision (rocks/trees/cabins are solid cover)
    let hitObstacle = false;
    for (const o of g.obstacles) {
      if (Math.hypot(o.x - nx, o.y - ny) < o.r) { hitObstacle = true; break; }
    }
    if (hitObstacle) { sb.dead = true; continue; }
    // decoy collision (lures/destroys)
    let hitDecoy = false;
    for (const d of g.decoys) {
      if (!d.alive || d.ownerId === sb.ownerId) continue;
      if (Math.hypot(d.x - nx, d.y - ny) < 14) { d.alive = false; hitDecoy = true; break; }
    }
    if (hitDecoy) { sb.dead = true; continue; }
    // player collision (airborne players above dodge height are missed)
    for (const p of g.players) {
      if (!p.alive || p.id === sb.ownerId) continue;
      if (p.z > C.player.jumpDodgeZ) continue;
      if (Math.hypot(p.x - nx, p.y - ny) < C.player.radius + C.throw.radius) {
        const dealt = damage(g, p, C.throw.damage * (sb.dmgMul || 1), sb.ownerId);
        if (dealt > 0) { g.stats.hits++; g.kills[sb.ownerId] = (g.kills[sb.ownerId] || 0); }
        if (p.crafting) cancelCraft(g, p, 'hit');
        if (!p.alive) { g.kills[sb.ownerId] = (g.kills[sb.ownerId] || 0) + 1; g.events.push({ t: g.t, type: 'kill', by: sb.ownerId, victim: p.id }); }
        sb.dead = true;
        break;
      }
    }
    sb.x = nx; sb.y = ny; sb.traveled += stepDist;
    if (sb.traveled >= sb.range) sb.dead = true;
  }
  g.snowballs = g.snowballs.filter((s) => !s.dead);

  // cleanup walls (durability, decay, out-of-zone)
  for (const w of g.walls) {
    if (w.dead) continue;
    if (g.t >= w.decayAt) w.dead = true;
  }
  g.walls = g.walls.filter((w) => !w.dead);
  g.decoys = g.decoys.filter((d) => d.alive && d.until > g.t - 0.001 ? true : (d.until > g.t));
  g.decoys = g.decoys.filter((d) => d.alive && d.until > g.t);

  // recompute per-player wall/decoy counts
  const wc = {}, dc = {};
  for (const w of g.walls) wc[w.ownerId] = (wc[w.ownerId] || 0) + 1;
  for (const d of g.decoys) dc[d.ownerId] = (dc[d.ownerId] || 0) + 1;
  for (const p of g.players) { p.walls = wc[p.id] || 0; p.decoys = dc[p.id] || 0; }

  if (g.phase === 'drop' && g.t > 0) g.phase = 'play';
}

// ---- player movement (called by input/NPC) ------------------------------
export function movePlayer(g, p, mvx, mvy, dt) {
  if (!p.alive || p.crafting) return;
  const spd = C.player.speed * ((p.mods && p.mods.speed) || 1) * buffMul(g, p, 'speed') * (p.cover ? C.player.coverSpeedMul : 1) * dt;
  const len = Math.hypot(mvx, mvy) || 1;
  let nx = Math.max(0, Math.min(C.map.size, p.x + (mvx / len) * spd));
  let ny = Math.max(0, Math.min(C.map.size, p.y + (mvy / len) * spd));
  // obstacle collision: push out of solid circles (slide along)
  for (const o of g.obstacles) {
    const min = o.r + C.player.radius * 0.6;
    const dx = nx - o.x, dy = ny - o.y;
    const d = Math.hypot(dx, dy);
    if (d < min && d > 0.001) { nx = o.x + (dx / d) * min; ny = o.y + (dy / d) * min; }
  }
  p.x = Math.max(0, Math.min(C.map.size, nx));
  p.y = Math.max(0, Math.min(C.map.size, ny));
}

// ---- NPC AI state machine ------------------------------------------------
// PATROL -> SEEK_PILE -> CRAFT -> ATTACK -> RETREAT -> ZONE_MOVE
export function npcThink(g, p, dt) {
  const diff = C.npcDifficulty[p.diff] || C.npcDifficulty.normal;
  const ai = p.npc;
  ai.reactTimer -= dt;

  // zone safety first
  const distCenter = Math.hypot(p.x - g.zone.cx, p.y - g.zone.cy);
  if (distCenter > g.zone.radius * 0.97) {
    if (p.crafting) cancelCraft(g, p, 'zone');
    const ang = Math.atan2(g.zone.cy - p.y, g.zone.cx - p.x);
    movePlayer(g, p, Math.cos(ang), Math.sin(ang), dt);
    ai.state = 'ZONE_MOVE';
    return;
  }

  // warmup: no attacking human in first warmupSec
  const canAttackHuman = g.t >= C.match.warmupSec;

  // if crafting, just wait
  if (p.crafting) return;

  // smart dodge: jump when an enemy snowball is closing in on us
  if (diff.dodge && p.z <= 0.01 && ai.reactTimer <= 0) {
    for (const sb of g.snowballs) {
      if (sb.ownerId === p.id) continue;
      const dx = p.x - sb.x, dy = p.y - sb.y;
      const d = Math.hypot(dx, dy);
      if (d > 120) continue;
      const closing = (dx * sb.dirX + dy * sb.dirY) / (d || 1); // 1 = heading straight at us
      if (closing > 0.86 && g.rng() < diff.dodge) { jump(g, p); break; }
    }
  }

  // smart item seeking: go for a heal when hurt, a shield/pill opportunistically
  if (diff.seekItem && g.rng() < 0.02) {
    const hurt = p.hp < (p.maxHp || 100) * 0.55;
    let best = null, bd = 240;
    for (const it of g.pickups) {
      if (it.takenUntil > g.t) continue;
      if (it.kind === 'heal' && !hurt) continue;
      if (it.kind === 'shield' && p.shieldHits > 0) continue;
      const d = Math.hypot(it.x - p.x, it.y - p.y);
      const inZone = Math.hypot(it.x - g.zone.cx, it.y - g.zone.cy) < g.zone.radius * 0.95;
      if (d < bd && inZone && g.rng() < diff.seekItem) { bd = d; best = it; }
    }
    if (best) { ai.itemTx = best.x; ai.itemTy = best.y; ai.itemUntil = g.t + 6; }
  }
  if (ai.itemUntil > g.t && ai.itemTx != null) {
    const d = Math.hypot(ai.itemTx - p.x, ai.itemTy - p.y);
    if (d < 12) { ai.itemUntil = 0; }
    else {
      const a = Math.atan2(ai.itemTy - p.y, ai.itemTx - p.x);
      movePlayer(g, p, Math.cos(a), Math.sin(a), dt);
      ai.state = 'SEEK_ITEM';
      return;
    }
  }

  // find target enemy (nearest alive other, prefer decoys as lure)
  let target = null, td = Infinity;
  for (const d of g.decoys) {
    if (!d.alive || d.ownerId === p.id) continue;
    const dd = Math.hypot(d.x - p.x, d.y - p.y);
    if (dd < td && dd < C.throw.maxRange) { td = dd; target = { x: d.x, y: d.y, decoy: true }; }
  }
  if (!target) {
    for (const o of g.players) {
      if (!o.alive || o.id === p.id) continue;
      if (o.isHuman && !canAttackHuman) continue;
      const dd = Math.hypot(o.x - p.x, o.y - p.y);
      if (dd < td) { td = dd; target = { x: o.x, y: o.y, ref: o }; }
    }
  }

  // low/no ammo -> flee from a nearby threat first, else craft/seek pile.
  if (p.snowballs < diff.craftThreshold) {
    if (target && td < C.match.fleeRange) {
      // disengage: run away from threat (reduces early bloodbath & lengthens matches)
      const a = Math.atan2(p.y - target.y, p.x - target.x);
      movePlayer(g, p, Math.cos(a), Math.sin(a), dt); ai.state = 'RETREAT'; return;
    }
    const pile = nearestPile(g, p);
    if (pile) { startCraft(g, p); ai.state = 'CRAFT'; return; }
    const sp = seekPile(g, p);
    if (sp) { const a = Math.atan2(sp.y - p.y, sp.x - p.x); movePlayer(g, p, Math.cos(a), Math.sin(a), dt); ai.state = 'SEEK_PILE'; return; }
  }

  // engage target — only within the tighter engageRange (not full throw range),
  // so NPCs don't snipe across the whole map at the start (paces the match).
  if (target && td < C.match.engageRange && (p.snowballs > 0 || (p.mg && p.mg.ammo > 0))) {
    const a = Math.atan2(target.y - p.y, target.x - p.x);
    p.aim = a;
    // machine gun takes priority: continuous straight fire while it lasts
    if (p.mg && p.mg.until > g.t && p.mg.ammo > 0) {
      const err = (1 - diff.accuracy) * 0.22;
      fireMachineGun(g, p, a + g.rng.range(-err, err));
    } else if (ai.reactTimer <= 0 && g.rng() < diff.aggro) {
      // accuracy: perturb aim by error inversely to accuracy
      const err = (1 - diff.accuracy) * 0.5;
      const aimErr = g.rng.range(-err, err);
      const charge = Math.min(1, td / C.throw.maxRange);
      throwSnowball(g, p, a + aimErr, charge);
      ai.reactTimer = diff.reactSec;
    }
    // smarter footwork: strafe sideways while attacking (harder to hit),
    // back off if too close, hold if mid-range
    if (td < C.match.engageRange * 0.4) movePlayer(g, p, -Math.cos(a), -Math.sin(a), dt);
    else if (diff.strafe && g.rng() < diff.strafe) {
      if (ai.strafeDir == null || g.rng() < 0.01) ai.strafeDir = g.rng() < 0.5 ? 1 : -1;
      const sa = a + (Math.PI / 2) * ai.strafeDir;
      movePlayer(g, p, Math.cos(sa), Math.sin(sa), dt);
    }
    ai.state = 'ATTACK';
    return;
  }

  // patrol toward center-ish / wander
  if (!ai.moveTx || Math.hypot(ai.moveTx - p.x, ai.moveTy - p.y) < 20) {
    ai.moveTx = g.rng.range(0, C.map.size); ai.moveTy = g.rng.range(0, C.map.size);
  }
  const a = Math.atan2(ai.moveTy - p.y, ai.moveTx - p.x);
  movePlayer(g, p, Math.cos(a), Math.sin(a), dt);
  ai.state = 'PATROL';
}

function seekPile(g, p) {
  let best = null, bd = Infinity;
  for (const pile of g.piles) {
    if (pile.cooldownUntil > g.t) continue;
    const d = Math.hypot(pile.x - p.x, pile.y - p.y);
    if (d < bd) { bd = d; best = pile; }
  }
  return best;
}

// ---- result / grade ------------------------------------------------------
export function humanPlacement(g) {
  const human = humanPlayer(g);
  if (!human) return null;
  // placementOrder is elimination order (first out = last place). winner appended last.
  const idx = g.placementOrder.indexOf(human.id);
  if (idx < 0) return null;
  return g.players.length - idx; // 1 = winner
}

export function result(g) {
  const human = humanPlayer(g);
  const place = humanPlacement(g);
  return {
    won: g.won,
    place,
    total: g.players.length,
    kills: human ? (g.kills[human.id] || 0) : 0,
    survivedSec: g.t,
    stats: g.stats,
  };
}

// ---- save / load ---------------------------------------------------------
export function serialize(g) {
  return JSON.stringify({
    seed: g.seed, t: g.t, phase: g.phase, over: g.over, won: g.won,
    difficulty: g.difficulty,
    players: g.players, snowballs: g.snowballs, walls: g.walls, decoys: g.decoys,
    piles: g.piles, obstacles: g.obstacles, corpses: g.corpses, pickups: g.pickups,
    zone: g.zone, placementOrder: g.placementOrder, kills: g.kills,
    _humanId: g._humanId, stats: g.stats,
  });
}
export function deserialize(json) {
  const d = typeof json === 'string' ? JSON.parse(json) : json;
  const g = { rng: makeRng(d.seed), events: [] };
  Object.assign(g, d);
  return g;
}

export { C as CONFIG, SKINS, actForSurvivors };
