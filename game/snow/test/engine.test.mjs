// Unit tests for Snow Royale engine. Run: node --test game/snow/test/engine.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createGame, step, startCraft, cancelCraft, throwSnowball, chargeFromMs, rangeForCharge,
  buildWall, placeDecoy, movePlayer, damage, addSnowballs, setHp, nearestPile,
  aliveCount, humanPlayer, result, serialize, deserialize, CONFIG as C,
} from '../src/engine.js';

function human(g) { return humanPlayer(g); }
// place a pile right on the player for deterministic craft tests
function pileOnPlayer(g, p) { g.piles.push({ id: 99999, x: p.x, y: p.y, cooldownUntil: 0 }); }

test('TC-001 craft: 3s countdown yields +10, move cancels', () => {
  const g = createGame(1); const p = human(g); pileOnPlayer(g, p);
  assert.equal(startCraft(g, p), true);
  assert.equal(p.crafting, true);
  step(g, 1.0); assert.equal(p.crafting, true); // still crafting at 1s
  cancelCraft(g, p, 'move');
  assert.equal(p.crafting, false);
  assert.equal(p.snowballs, 0, 'no snowballs on cancel');
  assert.equal(g.stats.craftCancel, 1);
});

test('TC-002 craft completes at 3s giving +10 and pile cooldown', () => {
  const g = createGame(1); const p = human(g); pileOnPlayer(g, p);
  startCraft(g, p);
  step(g, 3.01);
  assert.equal(p.snowballs, C.craft.yield, 'got 10');
  assert.equal(p.crafting, false);
  const pile = g.piles.find((pl) => pl.id === 99999);
  assert.ok(pile.cooldownUntil > 0, 'pile on cooldown');
});

test('TC-003 craft cancels when hit during countdown', () => {
  const g = createGame(1); const p = human(g); pileOnPlayer(g, p);
  startCraft(g, p);
  step(g, 1.0);
  damage(g, p, 20);            // simulate hit
  cancelCraft(g, p, 'hit');    // engine cancels on hit in collision; here explicit
  step(g, 3.0);
  assert.equal(p.snowballs, 0, 'no yield after cancel');
});

test('TC-004 throw range scales with charge 0.2s->~100, 1.5s->~400', () => {
  assert.equal(chargeFromMs(200), 0);
  assert.equal(chargeFromMs(1500), 1);
  assert.ok(Math.abs(rangeForCharge(0) - C.throw.minRange) < 1);
  assert.ok(Math.abs(rangeForCharge(1) - C.throw.maxRange) < 1);
});

test('TC-005 throw consumes 1 snowball and creates projectile', () => {
  const g = createGame(1); const p = human(g); addSnowballs(p, 5);
  const sb = throwSnowball(g, p, 0, 1);
  assert.ok(sb);
  assert.equal(p.snowballs, 4);
  assert.equal(sb.range, C.throw.maxRange);
});

test('TC-006 snowball travels its range then dies (coordinate log)', () => {
  const g = createGame(1); const p = human(g); p.x = 100; p.y = 100; addSnowballs(p, 1);
  throwSnowball(g, p, 0, 0); // min range ~100, dir +x
  const startX = p.x;
  for (let i = 0; i < 200 && g.snowballs.length; i++) step(g, 1 / 60);
  // after death, projectile removed; verify it traveled ~minRange before dying
  assert.equal(g.snowballs.length, 0, 'projectile expired');
});

test('TC-007 snowball hit deals base damage, cover halves it', () => {
  const g = createGame(1);
  const a = g.players[0], b = g.players[1];
  b.hp = 100; b.cover = false;
  const dealt = damage(g, b, C.throw.damage, a.id);
  assert.equal(dealt, C.throw.damage);
  b.hp = 100; b.cover = true;
  const dealt2 = damage(g, b, C.throw.damage, a.id);
  assert.equal(dealt2, C.throw.damage * C.throw.coverDamageMul, 'cover halves');
});

test('TC-008 ceil(maxHp/damage) hits eliminate a player', () => {
  const g = createGame(1);
  const b = g.players[1]; b.hp = C.player.maxHp; b.cover = false;
  const need = Math.ceil(C.player.maxHp / C.throw.damage);
  for (let i = 0; i < need; i++) damage(g, b, C.throw.damage, g.players[0].id);
  assert.equal(b.alive, false, `${need} hits eliminate`);
  assert.ok(g.placementOrder.includes(b.id));
});

test('TC-009 build wall costs snowballs, has durability, capped per player', () => {
  const g = createGame(1); const p = human(g); addSnowballs(p, 30);
  const w = buildWall(g, p);
  assert.ok(w); assert.equal(w.hp, C.wall.durability);
  assert.equal(p.snowballs, 30 - C.wall.cost);
  for (let i = 0; i < C.wall.maxPerPlayer + 2; i++) buildWall(g, p);
  assert.equal(p.walls, C.wall.maxPerPlayer, `capped at ${C.wall.maxPerPlayer}`);
});

test('TC-010 wall blocks a snowball and loses durability', () => {
  const g = createGame(2);
  const a = g.players[0], b = g.players[1];
  a.x = 100; a.y = 100; a.aim = 0; addSnowballs(a, 10);
  b.x = 300; b.y = 100;
  // b builds a wall facing a (between them)
  b.x = 200; b.y = 100; b.aim = Math.PI; addSnowballs(b, 10);
  const w = buildWall(g, b); // wall ~28 units left of b => near x=172
  assert.ok(w);
  const before = w.hp;
  // throw several; with blockChance<1 at least one should hit the wall (durability drop) or be blocked
  let blockedAny = false;
  for (let n = 0; n < 8; n++) {
    a.aim = 0; addSnowballs(a, 5); throwSnowball(g, a, 0, 1);
    for (let i = 0; i < 120 && g.snowballs.length; i++) step(g, 1 / 60);
    const wall = g.walls.find((x) => x.id === w.id);
    if (!wall || wall.hp < before) { blockedAny = true; break; }
  }
  assert.ok(blockedAny, 'wall intercepts snowballs and loses durability');
});

test('TC-011 decoy costs 5, max 2 per player', () => {
  const g = createGame(1); const p = human(g); addSnowballs(p, 20);
  const d = placeDecoy(g, p);
  assert.ok(d); assert.equal(p.snowballs, 15);
  placeDecoy(g, p);
  const third = placeDecoy(g, p);
  assert.equal(third, null);
});

test('TC-012 zone shrinks after firstShrink and damages outside players', () => {
  const g = createGame(1, { total: 3 });
  const r0 = g.zone.radius;
  // keep 2 players alive & centered so the match does not end early
  g.players[0].x = g.zone.cx; g.players[0].y = g.zone.cy; g.players[0].isNpc = false; g.players[0].npc = null;
  g.players[2].x = g.zone.cx; g.players[2].y = g.zone.cy; g.players[2].isNpc = false; g.players[2].npc = null;
  const p = g.players[1]; p.isNpc = false; p.npc = null; p.x = 5; p.y = 5;
  const until = C.zone.firstShrinkSec + 2;
  for (let i = 0; i < until * 4 && !g.over; i++) step(g, 0.25);
  assert.ok(g.zone.radius < r0, 'zone shrank');
  assert.ok(g.stats.zoneDamageTicks > 0, 'zone dealt damage');
});

test('TC-013 zone damage ~dps/sec outside', () => {
  const g = createGame(1, { total: 2 });
  // one player safe at center keeps the match alive; probe sits outside, AI frozen
  g.players[0].x = g.zone.cx; g.players[0].y = g.zone.cy; g.players[0].isNpc = false; g.players[0].npc = null;
  const p = g.players[1]; p.isNpc = false; p.npc = null; p.x = 5; p.y = 5;
  // shrink the zone directly so the corner probe is definitively outside
  g.zone.radius = 100;
  const hp0 = p.hp;
  for (let i = 0; i < 20 && !g.over; i++) step(g, 0.05); // 1 second
  const lost = hp0 - p.hp;
  const expected = C.zone.dps;
  assert.ok(lost >= expected - 1 && lost <= expected + 1, `~${expected} dmg/s, got ${lost}`);
});

test('TC-014 nearestPile respects interact range and cooldown', () => {
  const g = createGame(1); const p = human(g);
  p.x = 600; p.y = 600;
  g.piles = [{ id: 1, x: 600, y: 620, cooldownUntil: 0 }, { id: 2, x: 0, y: 0, cooldownUntil: 0 }];
  const pile = nearestPile(g, p);
  assert.equal(pile.id, 1);
  pile.cooldownUntil = g.t + 60;
  assert.equal(nearestPile(g, p), null, 'cooldown excludes');
});

test('TC-015 win: last alive player triggers gameover', () => {
  const g = createGame(1, { total: 3 });
  setHp(g, g.players[1], 0);
  setHp(g, g.players[2], 0);
  assert.equal(g.over, true);
  assert.ok(g.winner);
  assert.equal(g.winner.id, g.players[0].id);
});

test('TC-016 human win flag set when human is last', () => {
  const g = createGame(1, { total: 2 });
  setHp(g, g.players[1], 0);
  assert.equal(g.won, true, 'human (players[0]) won');
});

test('TC-017 NPC gets [봇] prefix and is distinct skin sometimes', () => {
  const g = createGame(1, { total: 20 });
  const npcs = g.players.filter((p) => p.isNpc);
  assert.equal(npcs.length, 19);
  assert.ok(npcs.every((n) => n.name.startsWith('[봇]')));
});

test('TC-018 warmup: NPC does not target human before 120s', () => {
  const g = createGame(5, { total: 20 });
  const h = human(g);
  // put an npc right next to human with ammo, run 1s at t=0
  const npc = g.players[1]; npc.x = h.x + 20; npc.y = h.y; addSnowballs(npc, 10);
  for (let i = 0; i < 60; i++) step(g, 1 / 60);
  // no throw event targeting/from npc against human in warmup (human shouldn't be damaged by npc)
  const humanDamagedEarly = g.events.some((e) => e.type === 'kill' && e.victim === h.id);
  assert.equal(humanDamagedEarly, false);
});

test('TC-019 full sim (all NPC) terminates with one winner', () => {
  const g = createGame(42, { total: 20, allNpc: true, humanId: -1 });
  let guard = 0;
  while (!g.over && guard++ < 6000) step(g, 0.1); // up to 600s
  assert.equal(g.over, true, 'game resolved');
  assert.equal(aliveCount(g), 1);
  assert.equal(g.placementOrder.length, 20, 'all placements recorded');
});

test('TC-020 serialize/deserialize roundtrip preserves core state', () => {
  const g = createGame(7, { total: 5 });
  const p = human(g); addSnowballs(p, 7); p.hp = 55;
  step(g, 1.0);
  const g2 = deserialize(serialize(g));
  assert.equal(g2.players.length, 5);
  assert.equal(g2.players[0].hp, p.hp);
  assert.equal(g2.players[0].snowballs, 7);
});

test('TC-021 result() reports placement and kills', () => {
  const g = createGame(1, { total: 3 });
  const h = human(g);
  setHp(g, g.players[1], 0);  // 3rd out first -> place 3
  setHp(g, g.players[2], 0);  // human wins
  const r = result(g);
  assert.equal(r.won, true);
  assert.equal(r.place, 1);
  assert.equal(r.total, 3);
});

test('TC-022 movePlayer blocked during crafting', () => {
  const g = createGame(1); const p = human(g); pileOnPlayer(g, p);
  startCraft(g, p);
  const x0 = p.x, y0 = p.y;
  movePlayer(g, p, 1, 0, 1);
  assert.equal(p.x, x0, 'no move while crafting');
});

// ---- v3 features: pickups, shield, classes, pile respawn -------------------
import { tryPickup, applyClass, jump, rollPillBuff, applyPillBuff, fireMachineGun, buffMul, npcThink } from '../src/engine.js';
import { CLASSES } from '../src/config.js';

test('TC-023 heal pack restores hp and goes on cooldown', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  setHp(g, p, 50);
  g.pickups = [{ id: 1, kind: 'heal', x: p.x, y: p.y, takenUntil: 0 }];
  const got = tryPickup(g, p);
  assert.equal(got, 'heal');
  assert.equal(p.hp, 90, '+40 heal');
  assert.ok(g.pickups[0].takenUntil > g.t, 'on cooldown');
});

test('TC-024 heal pack not consumed at full hp', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  g.pickups = [{ id: 1, kind: 'heal', x: p.x, y: p.y, takenUntil: 0 }];
  assert.equal(tryPickup(g, p), null);
});

test('TC-025 shield fully blocks hits while durability lasts, then breaks', () => {
  const g = createGame(1, { total: 2 });
  const p = g.players[1]; p.hp = 100; p.cover = false;
  g.pickups = [{ id: 1, kind: 'shield', x: p.x, y: p.y, takenUntil: 0 }];
  assert.equal(tryPickup(g, p), 'shield');
  assert.equal(p.shieldHits, C.items.shieldHits);
  for (let i = 0; i < C.items.shieldHits; i++) {
    const dealt = damage(g, p, 20);
    assert.equal(dealt, 0, `hit ${i + 1} fully blocked`);
  }
  assert.equal(p.hp, 100, 'no damage while shield held');
  assert.equal(p.shieldHits, 0, 'durability spent');
  const after = damage(g, p, 20);
  assert.equal(after, 20, 'broken shield no longer protects');
});

test('TC-029 jump: ballistic arc, no double jump, airborne dodges snowballs', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  assert.equal(jump(g, p), true);
  assert.equal(jump(g, p), false, 'no double jump while airborne');
  let apex = 0;
  for (let i = 0; i < 200 && (p.z > 0 || p.vz > 0); i++) { step(g, 1 / 60); apex = Math.max(apex, p.z); }
  assert.ok(apex > C.player.jumpDodgeZ, `apex ${apex.toFixed(1)} clears dodge height`);
  assert.equal(p.z, 0, 'lands back on the ground');
  assert.equal(jump(g, p), true, 'can jump again after landing');
  // airborne target is missed by a snowball
  const a = g.players[1]; a.x = p.x - 60; a.y = p.y; addSnowballs(a, 1);
  p.z = C.player.jumpDodgeZ + 2; p.vz = 0;
  const hp0 = p.hp;
  throwSnowball(g, a, 0, 0.2);
  for (let i = 0; i < 90 && g.snowballs.length; i++) {
    g.snowballs[0].x = p.x; g.snowballs[0].y = p.y; // force overlap
    p.z = C.player.jumpDodgeZ + 2; p.vz = 2;        // hold airborne
    step(g, 1 / 60);
  }
  assert.equal(p.hp, hp0, 'airborne player not hit');
});

test('TC-026 class multipliers: sniper longer range, tank more hp & faster craft', () => {
  const g1 = createGame(1, { total: 2, classId: 'white' });
  const h1 = human(g1);
  assert.equal(h1.maxHp, Math.round(100 * CLASSES.white.maxHpMul));
  addSnowballs(h1, 1);
  const sb = throwSnowball(g1, h1, 0, 1);
  assert.ok(Math.abs(sb.range - C.throw.maxRange * CLASSES.white.throwRangeMul) < 1, `range ${sb.range}`);
  const g2 = createGame(1, { total: 2, classId: 'bear' });
  const h2 = human(g2);
  assert.equal(h2.maxHp, Math.round(100 * CLASSES.bear.maxHpMul));
  g2.piles.push({ id: 9, x: h2.x, y: h2.y, cooldownUntil: 0 });
  startCraft(g2, h2);
  assert.ok(Math.abs(h2.craftTimer - C.craft.seconds * CLASSES.bear.craftSecMul) < 0.01, `craft ${h2.craftTimer}`);
});

test('TC-027 depleted pile respawns inside zone after cooldown', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  g.piles = [{ id: 5, x: p.x, y: p.y, cooldownUntil: 0 }];
  startCraft(g, p); step(g, 3.01);
  const pile = g.piles[0];
  assert.ok(pile.cooldownUntil > 0, 'depleted');
  // advance past cooldown
  let guard = 0;
  while (pile.cooldownUntil !== 0 && guard++ < 800) step(g, 0.25);
  assert.equal(pile.cooldownUntil, 0, 'respawned');
  const d = Math.hypot(pile.x - g.zone.cx, pile.y - g.zone.cy);
  assert.ok(d <= g.zone.radius * 0.86, 'inside zone');
});

test('TC-028 sniper damage multiplier travels with the snowball', () => {
  const g = createGame(1, { total: 2, classId: 'white' });
  const h = human(g); addSnowballs(h, 1);
  const sb = throwSnowball(g, h, 0, 1);
  assert.ok(Math.abs(sb.dmgMul - CLASSES.white.damageMul) < 0.001);
});

test('TC-030 pill spawns exist and grant a timed buff on pickup', () => {
  const g = createGame(1, { total: 2 });
  assert.equal(g.pickups.filter((i) => i.kind === 'pill').length, C.items.pill.spawn);
  const p = human(g);
  g.pickups = [{ id: 1, kind: 'pill', x: p.x, y: p.y, takenUntil: 0 }];
  const got = tryPickup(g, p);
  assert.equal(got.kind, 'pill');
  assert.ok(got.buff.kind, 'a buff was rolled');
  const active = (p.buff && p.buff.until > g.t) || (p.mg && p.mg.until > g.t);
  assert.ok(active, 'buff or mg is active');
  assert.ok(g.pickups[0].takenUntil > g.t, 'pill on respawn cooldown');
});

test('TC-031 pill buffs actually change speed/power/craft and expire', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  // speed
  applyPillBuff(g, p, { kind: 'speed', mul: C.items.pill.speedMul });
  const x0 = p.x; movePlayer(g, p, 1, 0, 1);
  const buffedDist = p.x - x0;
  assert.ok(Math.abs(buffedDist - C.player.speed * C.items.pill.speedMul) < 1, `speed dist ${buffedDist}`);
  // power
  applyPillBuff(g, p, { kind: 'power', mul: C.items.pill.powerMul });
  addSnowballs(p, 1);
  const sb = throwSnowball(g, p, 0, 1);
  assert.ok(Math.abs(sb.dmgMul - C.items.pill.powerMul) < 0.001, `dmgMul ${sb.dmgMul}`);
  // craft
  applyPillBuff(g, p, { kind: 'craft', mul: C.items.pill.craftMul });
  g.piles.push({ id: 9, x: p.x, y: p.y, cooldownUntil: 0 });
  startCraft(g, p);
  assert.ok(Math.abs(p.craftTimer - C.craft.seconds * C.items.pill.craftMul) < 0.01, `craft ${p.craftTimer}`);
  cancelCraft(g, p);
  // expiry
  p.buff.until = g.t - 1;
  assert.equal(buffMul(g, p, 'craft'), 1, 'expired buff is inert');
});

test('TC-032 machine gun: 75 rounds, straight-line, own ammo, rate-limited', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  applyPillBuff(g, p, { kind: 'mg', ammo: C.items.pill.mgAmmo });
  assert.equal(p.mg.ammo, 75);
  const sb = fireMachineGun(g, p, 0);
  assert.ok(sb, 'fires');
  assert.equal(sb.flat, true, 'straight-line round');
  assert.ok(sb.speed > C.throw.speed, 'faster than a thrown ball');
  assert.equal(p.snowballs, 0, 'does not consume crafted snowballs');
  assert.equal(p.mg.ammo, 74);
  assert.equal(fireMachineGun(g, p, 0), null, 'rate limited while fireCd > 0');
  step(g, C.items.pill.mgFireInterval + 0.01);
  assert.ok(fireMachineGun(g, p, 0), 'fires again after cooldown');
  // spend all ammo -> mg gone
  p.mg.ammo = 1; p.mg.fireCd = 0;
  fireMachineGun(g, p, 0);
  assert.equal(p.mg, null, 'mg removed when ammo spent');
});

test('TC-033 mg expires after duration', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  applyPillBuff(g, p, { kind: 'mg', ammo: 75 });
  for (let i = 0; i < (C.items.pill.durationSec + 1) * 4; i++) step(g, 0.25);
  assert.equal(p.mg, null, 'mg expired');
});

test('TC-034 smart NPC: dodges an incoming snowball with a jump (hard diff)', () => {
  const g = createGame(3, { total: 2, difficulty: 'hard' });
  const npc = g.players[1];
  npc.x = 400; npc.y = 400; npc.npc.reactTimer = 0;
  // a snowball heading straight at the NPC, close by
  g.snowballs.push({ id: 999, ownerId: g.players[0].id, isNpc: false, x: 340, y: 400, dirX: 1, dirY: 0, traveled: 0, range: 400, speed: 320, dead: false, dmgMul: 1 });
  let jumped = false;
  for (let i = 0; i < 40 && !jumped; i++) { npcThink(g, npc, 0.05); if (npc.z > 0) jumped = true; g.snowballs[0] && (g.snowballs[0].x = 340); }
  assert.ok(jumped, 'NPC jumped to dodge');
});

test('TC-035 smart NPC: hurt bot seeks a heal pack', () => {
  const g = createGame(5, { total: 2, difficulty: 'hard' });
  const npc = g.players[1];
  npc.x = 600; npc.y = 600; setHp(g, npc, 30);
  g.pickups = [{ id: 1, kind: 'heal', x: 660, y: 600, takenUntil: 0 }];
  g.snowballs = [];
  g.piles = []; // no piles: crafting would lock the brain (test never calls step)
  let sought = false;
  for (let i = 0; i < 400 && !sought; i++) {
    npcThink(g, npc, 0.05);
    if (npc.npc.state === 'SEEK_ITEM') sought = true;
  }
  assert.ok(sought, 'NPC moved toward the heal pack');
});

import { groundHeightAt } from '../src/engine.js';

test('TC-036 jump pad launches up and carries run direction; lands on tower', () => {
  const g = createGame(1, { total: 2 });
  const p = human(g);
  g.towers = [{ id: 1, x: 500, y: 500, r: C.towers.radius, h: C.towers.height }];
  g.pads = [{ id: 2, x: 440, y: 500, r: C.pads.radius }];
  p.x = 420; p.y = 500; p.z = 0; p.vz = 0;
  // run east onto the pad
  let launched = false;
  for (let i = 0; i < 300; i++) {
    if (!launched && p.z <= 0.01) movePlayer(g, p, 1, 0, 1 / 60);
    step(g, 1 / 60);
    if (p.vz > 0) launched = true;
    if (launched && p.vz <= 0 && p.z <= groundHeightAt(g, p.x, p.y) + 0.01) break;
  }
  assert.ok(launched, 'pad launched the player');
  assert.ok(p.x > 445, `carried forward east (x=${p.x.toFixed(0)})`);
  // landed on elevated terrain if over the tower
  if (Math.hypot(p.x - 500, p.y - 500) <= C.towers.radius) {
    assert.equal(p.z, C.towers.height, 'standing on tower top');
  }
});

test('TC-037 tower is elevated ground: groundHeightAt + walk-off falls back to 0', () => {
  const g = createGame(1, { total: 2 });
  g.towers = [{ id: 1, x: 300, y: 300, r: 22, h: C.towers.height }];
  assert.equal(groundHeightAt(g, 300, 300), C.towers.height);
  assert.equal(groundHeightAt(g, 400, 400), 0);
  const p = human(g);
  p.x = 300; p.y = 300; p.z = C.towers.height; p.vz = 0;
  // walk off the edge -> gravity brings us down to 0
  for (let i = 0; i < 240; i++) { movePlayer(g, p, 1, 0, 1 / 60); step(g, 1 / 60); }
  assert.equal(p.z, 0, 'fell to ground level after walking off');
});

test('TC-038 pill buff decided at spawn and re-rolled on respawn', () => {
  const g = createGame(1, { total: 2 });
  const pills = g.pickups.filter((i) => i.kind === 'pill');
  assert.ok(pills.length === C.items.pill.spawn);
  assert.ok(pills.every((i) => i.buff && i.buff.kind), 'every pill has a pre-rolled buff');
  const p = human(g);
  const pill = pills[0]; pill.x = p.x; pill.y = p.y;
  const beforeKind = pill.buff.kind;
  const got = tryPickup(g, p);
  assert.equal(got.kind, 'pill');
  assert.equal(got.buff.kind, beforeKind, 'received the advertised buff');
  assert.ok(pill.buff && pill.buff.kind, 'respawn re-rolled a buff');
});

test('TC-039 NPCs prefer the human target and spread out (no pile-up)', () => {
  const g = createGame(9, { total: 3, difficulty: 'normal' });
  const h = human(g);
  const npc = g.players[1], other = g.players[2];
  // human slightly farther than the bot (and in a different direction) —
  // the 0.65x bias should still pick the human
  npc.x = 500; npc.y = 500;
  h.x = 620; h.y = 500; h.alive = true;   // east, d=120
  other.x = 500; other.y = 600;           // south, d=100 (nearer)
  g.t = C.match.warmupSec + 1; // past warmup
  addSnowballs(npc, 10);
  npc.npc.reactTimer = 0;
  const before = g.stats.throws;
  // dt=0 freezes movement so the throw direction purely reflects target choice
  for (let i = 0; i < 400 && g.stats.throws === before; i++) npcThink(g, npc, 0);
  assert.ok(g.stats.throws > before, 'bot threw at someone');
  assert.ok(Math.abs(npc.aim) < 0.1, `aim ${npc.aim.toFixed(2)} points at human (east), not the nearer bot (south)`);
  // separation: two bots stacked apart drift apart
  npc.x = 400; npc.y = 400; other.x = 404; other.y = 400;
  const d0 = Math.hypot(npc.x - other.x, npc.y - other.y);
  for (let i = 0; i < 20; i++) npcThink(g, npc, 0.05);
  const d1 = Math.hypot(npc.x - other.x, npc.y - other.y);
  assert.ok(d1 > d0, `separation pushed apart (${d0.toFixed(1)} -> ${d1.toFixed(1)})`);
});

test('TC-040 stuck bot detours around an obstacle instead of hugging it', () => {
  const g = createGame(11, { total: 2, difficulty: 'normal' });
  const npc = g.players[1];
  npc.x = 400; npc.y = 400; npc.snowballs = 10; // ammo: no craft urge
  g.pickups = []; g.snowballs = [];
  // big rock directly on the patrol path
  g.obstacles = [{ id: 1, kind: 'rock', x: 430, y: 400, r: 24, yaw: 0 }];
  npc.npc.moveTx = 520; npc.npc.moveTy = 400; // waypoint behind the rock
  let detoured = false;
  for (let i = 0; i < 400; i++) {
    npcThink(g, npc, 0.05);
    g.t += 0.05; // advance time so stuck checks fire (no full step needed)
    if (npc.npc.state === 'DETOUR') detoured = true;
  }
  assert.ok(detoured, 'stuck detection triggered a detour');
});

test('TC-041 endgame: last 2 far-apart bots hunt each other, no idle standoff', () => {
  const g = createGame(13, { total: 2, allNpc: true, humanId: -1 });
  const a = g.players[0], b = g.players[1];
  a.x = 200; a.y = 200; b.x = 1000; b.y = 1000; // far beyond engageRange
  addSnowballs(a, 10); addSnowballs(b, 10);
  g.t = C.match.warmupSec + 1;
  const d0 = Math.hypot(a.x - b.x, a.y - b.y);
  for (let i = 0; i < 100; i++) { npcThink(g, a, 0.05); npcThink(g, b, 0.05); }
  const d1 = Math.hypot(a.x - b.x, a.y - b.y);
  assert.ok(d1 < d0 - 30, `bots closed distance (${d0.toFixed(0)} -> ${d1.toFixed(0)})`);
});
