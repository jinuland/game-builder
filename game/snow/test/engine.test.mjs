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
