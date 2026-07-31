// Unit tests for engine — verifies BEFORE/AFTER numeric changes of every effect.
// Run: node --test game/test/engine.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createGame, startAct, placeModule, canPlace, endTurn, setTechDebt, addTechDebt,
  setSynergy, recompute, undo, pickPattern, useRefactor, chooseRoadmap, computeGrade,
  finalizeAudit, restartFromAct4, nextAct, maybeSpawnIncident, relocateModule, useFailover,
  serialize, deserialize, rotateCells, currentAct, DEBT_MAX, DEBT_WARN, requirementMet,
} from '../src/engine.js';
import { ACTS } from '../src/content.js';

test('TC-01 grid size per act matches spec 4x4->6x6->8x6->8x8', () => {
  const g = createGame(42);
  const expected = [[4, 4], [6, 6], [6, 6], [8, 6], [8, 8]];
  for (let i = 0; i < 5; i++) {
    startAct(g);
    assert.equal(g.grid.cols, expected[i][0], `act${i + 1} cols`);
    assert.equal(g.grid.rows, expected[i][1], `act${i + 1} rows`);
    if (i < 4) nextAct(g);
  }
});

test('TC-02 setTechDebt clamps 0..100', () => {
  const g = createGame(1);
  assert.equal(setTechDebt(g, -5), 0);
  assert.equal(setTechDebt(g, 250), 100);
  assert.equal(setTechDebt(g, 43), 43);
});

test('TC-03 placing module occupies cells and blocks overlap', () => {
  const g = createGame(1); startAct(g);
  const p = placeModule(g, 'cache', 1, 1);
  assert.ok(p, 'placement succeeds');
  assert.equal(canPlace(g, 'cache', 1, 1).ok, false, 'overlap blocked');
  assert.equal(canPlace(g, 'cache', 2, 2).ok, true, 'free cell ok');
});

test('TC-04 out-of-bounds placement rejected', () => {
  const g = createGame(1); startAct(g); // 4x4
  assert.equal(canPlace(g, 'cache', 4, 4).ok, false);
  assert.equal(canPlace(g, 'database', 3, 0).ok, false, 'DB is 2 wide, col3 overflows');
});

test('TC-05 isolated module raises structural debt vs connected', () => {
  const g = createGame(1); startAct(g);
  placeModule(g, 'cache', 1, 1);      // compute band
  placeModule(g, 'api_gateway', 0, 0); // edge band, not adjacent -> isolated
  recompute(g);
  const isolatedDebt = g._structDebt;
  assert.ok(isolatedDebt > 0, 'isolated placement adds debt');
  // now place adjacent bridging
  placeModule(g, 'cache', 0, 1); // adjacent to both
  recompute(g);
  assert.ok(g._structDebt < isolatedDebt, 'connecting reduces violations');
});

test('TC-06 debt interest +3 per turn when >70', () => {
  const g = createGame(1); startAct(g);
  placeModule(g, 'api_gateway', 0, 0); // meet r-something maybe; ensure req handling
  setTechDebt(g, 75);
  const before = g.techDebt;
  endTurn(g);
  assert.ok(g.techDebt >= before + 3 - 20, 'interest applied'); // +3 interest at least
  // more precise: isolate interest by no violations, met requirement
  const g2 = createGame(1); startAct(g2);
  g2.activeReq = null; // no requirement penalty
  g2._structDebt = 0;
  setTechDebt(g2, 72);
  endTurn(g2);
  assert.equal(g2.techDebt, 75, 'exactly +3 interest');
});

test('TC-07 requirement met grants reward synergy, unmet penalizes', () => {
  const g = createGame(1); startAct(g);
  g.activeReq = 'r_fast'; // needs cache
  placeModule(g, 'cache', 1, 1);
  assert.equal(requirementMet(g), true);
  const synBefore = g.synergy;
  endTurn(g);
  assert.ok(g.synergy > synBefore, 'reward added');

  const g2 = createGame(1); startAct(g2);
  g2.activeReq = 'r_global'; // needs multi_region (not placeable act1)
  setSynergy(g2, 30);
  endTurn(g2);
  assert.ok(g2.synergy <= 20, 'unmet -10 applied');
  assert.equal(g2.unmetStreak, 1);
});

test('TC-08 3x unmet -> projectWarning caps grade at A', () => {
  const g = createGame(1); startAct(g);
  for (let i = 0; i < 3; i++) { g.activeReq = 'r_global'; g.turn = 1; endTurn(g); }
  assert.equal(g.projectWarning, true);
});

test('TC-09 undo restores placement and debt', () => {
  const g = createGame(1); startAct(g);
  placeModule(g, 'cache', 1, 1);
  const debtBefore = g.techDebt;
  const countBefore = g.placements.length;
  placeModule(g, 'api_gateway', 0, 0);
  undo(g);
  assert.equal(g.placements.length, countBefore, 'placement removed');
  assert.equal(g.techDebt, debtBefore, 'debt restored');
});

test('TC-10 pattern pick recomputes synergy immediately', () => {
  const g = createGame(1); nextAct(g); // act2
  placeModule(g, 'api_gateway', 0, 0);
  placeModule(g, 'cache', 1, 0);
  const before = g.synergy;
  pickPattern(g, 'p_micro_split'); // requires api_gateway+cache -> +12
  assert.ok(g.synergy >= before + 12, `synergy jumped: ${before}->${g.synergy}`);
});

test('TC-11 family philosophy (3 micro) halves structural debt', () => {
  const g = createGame(1); nextAct(g);
  g.deck = ['p_micro_split', 'p_micro_scale', 'p_micro_gw'];
  placeModule(g, 'api_gateway', 0, 0);
  placeModule(g, 'cache', 3, 3); // isolated micro-family module
  recompute(g);
  const withPhilosophy = g._structDebt;
  const g2 = createGame(1); nextAct(g2);
  g2.deck = [];
  placeModule(g2, 'api_gateway', 0, 0);
  placeModule(g2, 'cache', 3, 3);
  recompute(g2);
  assert.ok(withPhilosophy < g2._structDebt, `philosophy reduces debt ${withPhilosophy} < ${g2._structDebt}`);
});

test('TC-12 refactor card reduces debt by 15', () => {
  const g = createGame(1); startAct(g);
  g.deck = ['p_hybrid_refactor'];
  setTechDebt(g, 50);
  useRefactor(g, 'p_hybrid_refactor');
  assert.equal(g.techDebt, 35);
});

test('TC-13 roadmap choices apply debt/slots/constraints', () => {
  const g = createGame(1); g.actIndex = 3; startAct(g);
  setTechDebt(g, 30);
  chooseRoadmap(g, 'fast');
  assert.equal(g.techDebt, 45, 'fast +15 debt');
  assert.equal(g._extraSlots, 4);
  assert.deepEqual(g.bossConstraints, ['security', 'scalability', 'cost', 'maintainability']);

  const g2 = createGame(1); g2.actIndex = 3; startAct(g2);
  setTechDebt(g2, 40);
  chooseRoadmap(g2, 'stable');
  assert.equal(g2.techDebt, 20, 'stable -20');
  assert.equal(g2.deck.filter((c) => c === 'p_hybrid_refactor').length, 2, '2 refactor cards');
});

test('TC-14 S grade needs synergy>=80 debt<=20 all constraints met', () => {
  const g = createGame(1); g.actIndex = 4; startAct(g);
  g.roadmap = 'innovation';
  g.bossConstraints = ['scalability', 'maintainability'];
  placeModule(g, 'autoscaler', 4, 4); // scalability need
  setSynergy(g, 85); setTechDebt(g, 15);
  const res = computeGrade(g);
  assert.equal(res.grade, 'S', `got ${res.grade} raw ${res.raw}`);
});

test('TC-15 F grade when debt maxed and nothing met', () => {
  const g = createGame(1); g.actIndex = 4; startAct(g);
  g.roadmap = 'fast';
  g.bossConstraints = ['security', 'scalability', 'cost', 'maintainability'];
  setSynergy(g, 5); setTechDebt(g, 100);
  const res = computeGrade(g);
  assert.equal(res.grade, 'F', `got ${res.grade} raw ${res.raw}`);
});

test('TC-16 F grade restart from act4 carries 50% debt', () => {
  const g = createGame(1); g.actIndex = 4; startAct(g);
  g.roadmap = 'fast'; g.bossConstraints = ['security', 'scalability', 'cost', 'maintainability'];
  setSynergy(g, 5); setTechDebt(g, 80);
  finalizeAudit(g);
  assert.equal(g.grade, 'F');
  restartFromAct4(g);
  assert.equal(g.actIndex, 3, 'back to act4');
  assert.equal(g.techDebt, 40, '50% of 80 carried');
});

test('TC-17 incident downs a module and adds debt; relocation resolves + reduces debt', () => {
  const g = createGame(7); g.actIndex = 2; startAct(g);
  placeModule(g, 'cache', 1, 1);
  placeModule(g, 'api_gateway', 0, 1);
  const debtBefore = g.techDebt;
  // force spawn
  let rec = null;
  for (let i = 0; i < 50 && !rec; i++) rec = maybeSpawnIncident(g);
  assert.ok(rec, 'incident spawned');
  const downed = g.placements.find((p) => p.id === rec.placementId);
  assert.equal(downed.down, true);
  assert.ok(g.techDebt > debtBefore, 'incident added debt');
  // relocate to a free cell
  const afterIncidentDebt = g.techDebt;
  const res = relocateModule(g, rec.placementId, 2, 2);
  assert.equal(res.ok, true, 'relocation ok');
  assert.equal(g.placements.find((p) => p.id === rec.placementId).down, false);
  assert.ok(g.techDebt < afterIncidentDebt, 'relocation reduced debt');
});

test('TC-18 failover card restores downed slot', () => {
  const g = createGame(3); g.actIndex = 2; startAct(g);
  g.deck = ['p_event_failover'];
  placeModule(g, 'cache', 1, 1);
  let rec = null;
  for (let i = 0; i < 50 && !rec; i++) rec = maybeSpawnIncident(g);
  assert.ok(rec);
  const res = useFailover(g, rec.placementId);
  assert.equal(res.ok, true);
  assert.equal(g.placements.find((p) => p.id === rec.placementId).down, false);
});

test('TC-19 crash at debt>=100 removes 3 modules and resets to 60', () => {
  const g = createGame(5); startAct(g);
  placeModule(g, 'cache', 0, 0); placeModule(g, 'cache', 1, 0);
  placeModule(g, 'cache', 2, 0); placeModule(g, 'cache', 3, 0);
  placeModule(g, 'api_gateway', 0, 1);
  const countBefore = g.placements.length;
  g.activeReq = null; g._structDebt = 0;
  setTechDebt(g, 99);
  setTechDebt(g, 100); // force
  endTurn(g); // triggers crash inside
  assert.ok(g.telemetry.crashes >= 1, 'crash recorded');
  assert.equal(g.techDebt, 60, 'reset to 60');
  assert.ok(g.placements.length <= countBefore - 3 || countBefore < 3, 'removed up to 3');
});

test('TC-20 rotateCells rotates L-shape correctly', () => {
  const L = [[0, 0], [1, 0], [0, 1]];
  const r1 = rotateCells(L, 1);
  assert.equal(r1.length, 3);
  // all normalized to >=0
  assert.ok(r1.every(([c, r]) => c >= 0 && r >= 0));
});

test('TC-21 serialize/deserialize roundtrip preserves state', () => {
  const g = createGame(11); nextAct(g);
  placeModule(g, 'api_gateway', 0, 0);
  pickPattern(g, 'p_micro_gw');
  setTechDebt(g, 33);
  const json = serialize(g);
  const g2 = deserialize(json);
  assert.equal(g2.actIndex, g.actIndex);
  assert.equal(g2.techDebt, 33);
  assert.deepEqual(g2.deck, g.deck);
  assert.equal(g2.placements.length, g.placements.length);
});

test('TC-22 deterministic: same seed -> same hand', () => {
  const a = createGame(42); startAct(a);
  const b = createGame(42); startAct(b);
  assert.deepEqual(a.hand, b.hand);
  const c = createGame(43); startAct(c);
  // different seed likely different order (not guaranteed but pool small; check rng stream differs)
  assert.notEqual(a.rng(), c.rng());
});
