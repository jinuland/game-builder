// Core game engine — pure logic, no DOM. All mutations go through setters so
// state changes are traceable and testable (no external `state.x =` allowed).
import { makeRng } from './rng.js';
import {
  MODULES, PATTERN_CARDS, REQUIREMENT_CARDS, INCIDENTS, ACTS, FAMILIES,
  CONSTRAINTS, ROADMAP_PATHS, LAYERS,
} from './content.js';

export const DEBT_MAX = 100;
export const DEBT_WARN = 70;      // interest penalty threshold
export const DEBT_INTEREST = 3;   // per-turn debt when > DEBT_WARN
export const CRASH_RESET = 60;    // debt after a crash
export const INCIDENT_DEADLINE = 3;

// ---- construction -------------------------------------------------------
export function createGame(seed = 42) {
  const rng = makeRng(seed);
  return {
    seed,
    rng,
    actIndex: 0,
    turn: 1,
    techDebt: 0,
    synergy: 0,
    synergyBonus: 0,          // accumulated rewards/penalties/crisis bonuses (persist across recompute)
    deck: [],                 // pattern card ids
    grid: null,               // {cols, rows, cells: Int-> placement}
    placements: [],           // {id, moduleId, layer, cells:[[c,r]], down:bool, downTurnsLeft}
    hand: [],                 // requirement card ids for this act
    activeReq: null,          // current requirement card id
    incidents: [],            // active incident refs {placementId, turnsLeft}
    roadmap: null,            // chosen path id
    bossConstraints: [],      // constraint ids for act 5
    unmetStreak: 0,
    projectWarning: false,    // caps grade at A
    history: [],              // undo stack (per-turn placement snapshots)
    log: [],
    grade: null,
    ending: null,
    over: false,
    won: false,
    lastFDebt: null,          // for F->act4 restart carry
    telemetry: { acts: [], incidentsFired: 0, incidentsResolved: 0, incidentsTimedOut: 0, crashes: 0, cardPicks: {}, pathPicks: {} },
    _placeSeq: 1,
  };
}

// ---- setters (single mutation points) -----------------------------------
export function setTechDebt(g, v) {
  g.techDebt = Math.max(0, Math.min(DEBT_MAX, Math.round(v)));
  return g.techDebt;
}
export function addTechDebt(g, delta) { return setTechDebt(g, g.techDebt + delta); }
// Synergy = structural (recomputed from grid+deck) + persistent bonus (rewards/penalties).
// setSynergy overrides the bonus so total equals v after next recompute is folded in;
// used mainly by tests/sim to force a baseline.
export function setSynergy(g, v) {
  g.synergyBonus = Math.round(v) - (g._structuralSynergy || 0);
  g.synergy = Math.max(0, Math.round(v));
  return g.synergy;
}
export function addSynergy(g, delta) {
  g.synergyBonus += delta;
  g.synergy = Math.max(0, (g._structuralSynergy || 0) + g.synergyBonus);
  return g.synergy;
}

// ---- act / grid lifecycle ----------------------------------------------
export function currentAct(g) { return ACTS[g.actIndex]; }

export function startAct(g) {
  const act = currentAct(g);
  g.turn = 1;
  g.grid = makeGrid(act.cols, act.rows);
  g.placements = [];
  g.incidents = [];
  g.history = [];
  g.hand = g.rng.shuffle(act.reqPool).slice(0, Math.min(act.turns, act.reqPool.length));
  // ensure we have one requirement per turn (repeat pool if needed)
  while (g.hand.length < act.turns) g.hand.push(g.rng.pick(act.reqPool));
  g.activeReq = g.hand[0];
  g.telemetry.acts.push({ n: act.n, startTurn: g.turn, startDebt: g.techDebt, maxDebt: g.techDebt });
  return act;
}

function makeGrid(cols, rows) {
  return { cols, rows, cells: new Array(cols * rows).fill(null) };
}
export function idx(g, c, r) { return r * g.grid.cols + c; }
export function inBounds(g, c, r) { return c >= 0 && r >= 0 && c < g.grid.cols && r < g.grid.rows; }

// Which architecture layer does a column belong to? Grid split into 3 vertical bands:
// left band = edge, middle = compute, right = data. This is the spatial rule players learn.
export function cellLayer(g, c) {
  const band = g.grid.cols / 3;
  if (c < band) return LAYERS[0];
  if (c < band * 2) return LAYERS[1];
  return LAYERS[2];
}

// rotate relative cells by 90° * times
export function rotateCells(cells, times) {
  let out = cells.map(([c, r]) => [c, r]);
  for (let t = 0; t < ((times % 4) + 4) % 4; t++) {
    out = out.map(([c, r]) => [-r, c]);
  }
  // normalize to min 0,0
  const minC = Math.min(...out.map((p) => p[0]));
  const minR = Math.min(...out.map((p) => p[1]));
  return out.map(([c, r]) => [c - minC, r - minR]);
}

// Compute absolute cells for a module placed at anchor (ac,ar) with rotation.
export function absCells(mod, ac, ar, rot) {
  const shape = mod.rotatable ? rotateCells(mod.cells, rot) : mod.cells;
  return shape.map(([c, r]) => [ac + c, ar + r]);
}

// Can a module be placed at anchor? Returns {ok, cells, reason}.
export function canPlace(g, moduleId, ac, ar, rot = 0) {
  const mod = MODULES[moduleId];
  const cells = absCells(mod, ac, ar, rot);
  for (const [c, r] of cells) {
    if (!inBounds(g, c, r)) return { ok: false, cells, reason: 'out' };
    const occ = g.grid.cells[idx(g, c, r)];
    if (occ !== null) return { ok: false, cells, reason: 'occupied' };
  }
  return { ok: true, cells, reason: null };
}

// Place a module. Records undo snapshot. Returns placement or null.
export function placeModule(g, moduleId, ac, ar, rot = 0) {
  const check = canPlace(g, moduleId, ac, ar, rot);
  if (!check.ok) return null;
  const mod = MODULES[moduleId];
  snapshot(g);
  const placement = {
    id: g._placeSeq++, moduleId, layer: mod.layer,
    cells: check.cells, anchor: [ac, ar], rot, down: false, downTurnsLeft: 0,
  };
  g.placements.push(placement);
  for (const [c, r] of check.cells) g.grid.cells[idx(g, c, r)] = placement.id;
  recompute(g);
  return placement;
}

// Remove a placement (used for relocation & crash). Does NOT snapshot by default.
export function removePlacement(g, placementId, { snap = false } = {}) {
  if (snap) snapshot(g);
  const i = g.placements.findIndex((p) => p.id === placementId);
  if (i < 0) return false;
  const p = g.placements[i];
  for (const [c, r] of p.cells) {
    if (inBounds(g, c, r)) g.grid.cells[idx(g, c, r)] = null;
  }
  g.placements.splice(i, 1);
  // drop any incident referencing it
  g.incidents = g.incidents.filter((inc) => inc.placementId !== placementId);
  recompute(g);
  return true;
}

// ---- undo ----------------------------------------------------------------
function snapshot(g) {
  g.history.push({
    cells: g.grid.cells.slice(),
    placements: g.placements.map((p) => ({ ...p, cells: p.cells.map((x) => x.slice()) })),
    techDebt: g.techDebt,
    synergy: g.synergy,
    synergyBonus: g.synergyBonus,
    placeSeq: g._placeSeq,
  });
  if (g.history.length > 20) g.history.shift();
}
export function undo(g) {
  const snap = g.history.pop();
  if (!snap) return false;
  g.grid.cells = snap.cells;
  g.placements = snap.placements;
  g._placeSeq = snap.placeSeq;
  setTechDebt(g, snap.techDebt);
  g.synergyBonus = snap.synergyBonus || 0;
  recompute(g);
  return true;
}

// ---- connection rules & tech debt ---------------------------------------
// A placement is "connected" if it is orthogonally adjacent to at least one other
// placement of the same or adjacent layer. Isolated/mismatched modules add debt.
export function layerDistance(a, b) {
  return Math.abs(LAYERS.indexOf(a) - LAYERS.indexOf(b));
}

export function neighborsOf(g, placement) {
  const seen = new Set();
  const out = [];
  for (const [c, r] of placement.cells) {
    for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nc = c + dc, nr = r + dr;
      if (!inBounds(g, nc, nr)) continue;
      const pid = g.grid.cells[idx(g, nc, nr)];
      if (pid === null || pid === placement.id || seen.has(pid)) continue;
      seen.add(pid);
      out.push(g.placements.find((p) => p.id === pid));
    }
  }
  return out;
}

// Full evaluation of connection violations. Returns {violations, connectedCount}.
export function evaluateConnections(g) {
  let violations = 0;
  const detail = [];
  for (const p of g.placements) {
    if (p.down) continue;
    const nbrs = neighborsOf(g, p).filter((n) => n && !n.down);
    if (g.placements.filter((x) => !x.down).length <= 1) continue; // lone first module ok
    if (nbrs.length === 0) {
      violations++; detail.push({ id: p.id, kind: 'isolated' });
      continue;
    }
    // any neighbor more than 1 layer away is a mismatch
    const bad = nbrs.some((n) => layerDistance(p.layer, n.layer) > 1);
    if (bad) { violations++; detail.push({ id: p.id, kind: 'mismatch' }); }
  }
  return { violations, detail };
}

// Overcrowding: if >75% of grid filled, extra debt pressure.
function crowding(g) {
  const filled = g.grid.cells.filter((x) => x !== null).length;
  const ratio = filled / g.grid.cells.length;
  return ratio > 0.75 ? Math.round((ratio - 0.75) * 40) : 0;
}

// Whether a family philosophy (3+ same-family cards) is active — halves debt from
// violations of modules in that family.
export function activeFamilies(g) {
  const counts = {};
  for (const cid of g.deck) {
    const fam = PATTERN_CARDS[cid]?.family;
    if (fam) counts[fam] = (counts[fam] || 0) + 1;
  }
  return Object.keys(counts).filter((f) => counts[f] >= 3);
}

// Recompute derived metrics (debt from structure + synergy). Called after any change.
export function recompute(g) {
  const { violations, detail } = evaluateConnections(g);
  const fams = activeFamilies(g);
  // structural debt: each violation +6, halved for modules whose family philosophy active
  let structDebt = 0;
  for (const d of detail) {
    const p = g.placements.find((x) => x.id === d.id);
    const mod = p && MODULES[p.moduleId];
    const famActive = mod && fams.includes(mod.family);
    structDebt += famActive ? 3 : 6;
  }
  structDebt += crowding(g);
  g._structDebt = structDebt;
  g._violations = violations;
  g._violationDetail = detail;
  g._structuralSynergy = computeSynergy(g);
  g.synergy = Math.max(0, g._structuralSynergy + (g.synergyBonus || 0));
  return { structDebt, violations, synergy: g.synergy };
}

// Synergy = sum of fired pattern cards (requires modules present) * path mult
// + adjacency bonus for same-family connected modules.
export function computeSynergy(g) {
  const present = new Set(g.placements.filter((p) => !p.down).map((p) => p.moduleId));
  let s = 0;
  const fired = [];
  for (const cid of g.deck) {
    const card = PATTERN_CARDS[cid];
    if (!card) continue;
    const ok = card.requires.every((m) => present.has(m));
    if (ok && card.requires.length >= 0) {
      // layered "계층 분리" needs different layers
      if (card.id === 'p_layered_tier') {
        const db = g.placements.find((p) => p.moduleId === 'database' && !p.down);
        const gw = g.placements.find((p) => p.moduleId === 'api_gateway' && !p.down);
        if (db && gw && db.layer !== gw.layer) { s += card.synergy; fired.push(cid); }
        continue;
      }
      if (card.requires.length === 0 && !card.refactor) { s += card.synergy; fired.push(cid); continue; }
      if (card.requires.length > 0) { s += card.synergy; fired.push(cid); }
    }
  }
  // adjacency bonus: connected same-family module pairs +3 each (once per pair)
  const counted = new Set();
  for (const p of g.placements) {
    if (p.down) continue;
    for (const n of neighborsOf(g, p)) {
      if (!n || n.down) continue;
      const key = [p.id, n.id].sort((a, b) => a - b).join('-');
      if (counted.has(key)) continue;
      counted.add(key);
      if (MODULES[p.moduleId].family === MODULES[n.moduleId].family) s += 3;
    }
  }
  const mult = g.roadmap ? ROADMAP_PATHS[g.roadmap].synergyMult : 1;
  g._firedCards = fired;
  return Math.round(s * mult);
}

// ---- turn flow -----------------------------------------------------------
// Predict debt change if the turn ends now (for the end-turn popup).
export function predictTurnEndDebt(g) {
  let delta = g._structDebt || 0;
  if (g.techDebt > DEBT_WARN) delta += DEBT_INTEREST;
  // unmet requirement
  if (!requirementMet(g)) delta += 4;
  // incident timeouts
  for (const inc of g.incidents) if (inc.turnsLeft <= 1) delta += 20;
  return delta;
}

export function requirementMet(g) {
  if (!g.activeReq) return true;
  const need = REQUIREMENT_CARDS[g.activeReq].need;
  return g.placements.some((p) => p.moduleId === need && !p.down);
}

// End the current turn: apply structural debt, interest, requirement outcome,
// incident countdown, then either advance turn or trigger act-end.
export function endTurn(g) {
  const act = currentAct(g);
  const events = [];

  // apply structural debt accrued this turn
  if (g._structDebt) { addTechDebt(g, g._structDebt); events.push({ t: 'debt', v: g._structDebt, why: 'struct' }); }

  // debt interest
  if (g.techDebt > DEBT_WARN) { addTechDebt(g, DEBT_INTEREST); events.push({ t: 'debt', v: DEBT_INTEREST, why: 'interest' }); }

  // requirement outcome (skip if no active requirement)
  if (!g.activeReq) {
    // no requirement this turn — no reward/penalty
  } else if (requirementMet(g)) {
    addSynergy(g, REQUIREMENT_CARDS[g.activeReq].reward);
    g.unmetStreak = 0;
    events.push({ t: 'reqMet', card: g.activeReq });
  } else {
    addSynergy(g, -10);
    g.unmetStreak++;
    if (g.unmetStreak >= 3) { g.projectWarning = true; events.push({ t: 'projectWarning' }); }
    events.push({ t: 'reqUnmet', card: g.activeReq });
  }

  // clean-design payoff: a tidy turn (requirement met, no connection violations,
  // no active incidents) pays down technical debt — elegant design reduces debt.
  if (g.activeReq && requirementMet(g) && (g._violations || 0) === 0 && g.incidents.length === 0) {
    addTechDebt(g, -6);
    events.push({ t: 'cleanTurn', v: -6 });
  }

  // incident countdown
  for (const inc of g.incidents) {
    inc.turnsLeft--;
    if (inc.turnsLeft <= 0) {
      addTechDebt(g, 20);
      g.telemetry.incidentsTimedOut++;
      // chain failure: down an adjacent module
      const p = g.placements.find((x) => x.id === inc.placementId);
      if (p) {
        const nbr = neighborsOf(g, p).find((n) => n && !n.down);
        if (nbr) { nbr.down = true; events.push({ t: 'chain', id: nbr.id }); }
      }
      events.push({ t: 'incidentTimeout', v: 20 });
    }
  }
  g.incidents = g.incidents.filter((inc) => inc.turnsLeft > 0);

  // crash check
  if (g.techDebt >= DEBT_MAX) { events.push(...crash(g)); }

  recompute(g);
  const tel = g.telemetry.acts[g.telemetry.acts.length - 1];
  if (tel) tel.maxDebt = Math.max(tel.maxDebt, g.techDebt);

  // fire incident at start of next turn (act 3+) with 60% chance, if modules exist
  const advance = advanceTurnOrAct(g, events, act);
  return { events, ...advance };
}

function advanceTurnOrAct(g, events, act) {
  g.history = []; // undo only within a turn
  if (g.turn >= act.turns) {
    return { actEnded: true };
  }
  g.turn++;
  g.activeReq = g.hand[Math.min(g.turn - 1, g.hand.length - 1)];
  // maybe spawn incident
  if (act.incidents) maybeSpawnIncident(g, events);
  recompute(g);
  return { actEnded: false };
}

// ---- incidents -----------------------------------------------------------
export function maybeSpawnIncident(g, events = []) {
  const candidates = g.placements.filter((p) => !p.down);
  if (candidates.length === 0) return null;
  if (g.rng() > 0.6) return null;
  const target = g.rng.pick(candidates);
  target.down = true;
  const inc = g.rng.pick(Object.values(INCIDENTS));
  addTechDebt(g, inc.debt);
  const record = { placementId: target.id, incidentId: inc.id, turnsLeft: INCIDENT_DEADLINE };
  g.incidents.push(record);
  g.telemetry.incidentsFired++;
  events.push({ t: 'incident', inc: inc.id, placementId: target.id });
  recompute(g);
  return record;
}

// Resolve an incident by relocating the downed module to a new valid anchor.
export function relocateModule(g, placementId, ac, ar, rot = 0) {
  const p = g.placements.find((x) => x.id === placementId);
  if (!p || !p.down) return { ok: false };
  const mod = p.moduleId;
  // free current cells first
  for (const [c, r] of p.cells) if (inBounds(g, c, r)) g.grid.cells[idx(g, c, r)] = null;
  const check = canPlace(g, mod, ac, ar, rot);
  if (!check.ok) {
    // restore
    for (const [c, r] of p.cells) g.grid.cells[idx(g, c, r)] = p.id;
    return { ok: false, reason: check.reason };
  }
  p.cells = check.cells; p.anchor = [ac, ar]; p.rot = rot; p.down = false;
  for (const [c, r] of check.cells) g.grid.cells[idx(g, c, r)] = p.id;
  return resolveIncidentSuccess(g, placementId);
}

// Use a failover pattern card to instantly restore a downed slot.
export function useFailover(g, placementId) {
  const hasFailover = g.deck.some((cid) => PATTERN_CARDS[cid]?.failover);
  const p = g.placements.find((x) => x.id === placementId);
  if (!hasFailover || !p || !p.down) return { ok: false };
  p.down = false;
  return resolveIncidentSuccess(g, placementId);
}

function resolveIncidentSuccess(g, placementId) {
  const wasChained = g.incidents.some((inc) => inc.turnsLeft < INCIDENT_DEADLINE);
  g.incidents = g.incidents.filter((inc) => inc.placementId !== placementId);
  g.telemetry.incidentsResolved++;
  addTechDebt(g, -8); // relocation success reduces debt
  let bonus = 0;
  if (wasChained) { addSynergy(g, 15); bonus = 15; } // 위기 극복 bo/ crisis-overcome
  recompute(g);
  return { ok: true, crisisBonus: bonus };
}

// ---- crash ---------------------------------------------------------------
function crash(g) {
  const events = [{ t: 'crash' }];
  g.telemetry.crashes++;
  const removable = g.rng.shuffle(g.placements.map((p) => p.id)).slice(0, 3);
  for (const id of removable) removePlacement(g, id);
  setTechDebt(g, CRASH_RESET);
  events.push({ t: 'crashReset', v: CRASH_RESET, removed: removable.length });
  return events;
}

// ---- pattern draft -------------------------------------------------------
// Offer 3 pattern cards for the current act from unlocked pool (no dups already owned unless refactor).
export function offerPatterns(g) {
  const act = currentAct(g);
  const pool = Object.values(PATTERN_CARDS).filter((c) => c.unlockAct <= act.n);
  const owned = new Set(g.deck.filter((cid) => !PATTERN_CARDS[cid].refactor));
  const avail = pool.filter((c) => c.refactor || !owned.has(c.id));
  return g.rng.shuffle(avail).slice(0, 3).map((c) => c.id);
}

export function pickPattern(g, cardId) {
  g.deck.push(cardId);
  g.telemetry.cardPicks[cardId] = (g.telemetry.cardPicks[cardId] || 0) + 1;
  recompute(g);
  return g.synergy;
}

// Use refactor card effect (reduce debt). Reusable, stays in deck.
export function useRefactor(g, cardId) {
  const card = PATTERN_CARDS[cardId];
  if (!card || !card.refactor || !g.deck.includes(cardId)) return false;
  addTechDebt(g, -card.refactor);
  recompute(g);
  return true;
}

// ---- roadmap (act 4) -----------------------------------------------------
export function chooseRoadmap(g, pathId) {
  const path = ROADMAP_PATHS[pathId];
  if (!path) return false;
  g.roadmap = pathId;
  addTechDebt(g, path.debt);
  for (let i = 0; i < path.refactorCards; i++) g.deck.push('p_hybrid_refactor');
  if (path.extraSlots) g._extraSlots = path.extraSlots;
  g.bossConstraints = path.constraints.slice();
  g.telemetry.pathPicks[pathId] = (g.telemetry.pathPicks[pathId] || 0) + 1;
  recompute(g);
  return true;
}

// ---- audit / grade (act 5 end) ------------------------------------------
// Evaluate boss constraints and produce S~F grade + ending text.
export function evaluateConstraints(g) {
  const present = new Set(g.placements.filter((p) => !p.down).map((p) => p.moduleId));
  const results = g.bossConstraints.map((cid) => {
    const con = CONSTRAINTS[cid];
    let met = true;
    if (con.need) met = present.has(con.need);
    if (con.maxDebt != null) met = g.techDebt <= con.maxDebt;
    if (con.minSynergy != null) met = g.synergy >= con.minSynergy;
    return { id: cid, name: con.name, met };
  });
  return results;
}

export function computeGrade(g) {
  const cons = evaluateConstraints(g);
  const metCount = cons.filter((c) => c.met).length;
  const total = cons.length || 1;
  const metRatio = metCount / total;
  // score blends synergy (higher better) and debt (lower better) and constraint satisfaction
  const debtScore = Math.max(0, 100 - g.techDebt);        // 0..100
  const synScore = Math.min(100, g.synergy);              // 0..100
  const raw = synScore * 0.45 + debtScore * 0.35 + metRatio * 100 * 0.2;

  let grade;
  // Hard rule from spec: synergy>=80 & debt<=20 => S; debt hit 100 (crash flagged) handled by caller
  if (g.synergy >= 80 && g.techDebt <= 20 && metCount === total) grade = 'S';
  else if (raw >= 78 && metRatio >= 0.75) grade = 'A';
  else if (raw >= 60) grade = 'B';
  else if (raw >= 42) grade = 'C';
  else grade = 'F';

  if (g.projectWarning && grade === 'S') grade = 'A'; // warning caps at A
  return { grade, raw: Math.round(raw), constraints: cons, metCount, total };
}

const ENDINGS = {
  S: { title: '수석 아키텍트 임명', text: '우아한 아키텍처가 모든 제약을 시너지로 흡수했다. 이사회는 만장일치로 아키를 수석 아키텍트로 임명한다.' },
  A: { title: '신뢰받는 설계자', text: '견고한 설계로 감사를 통과했다. 아키는 팀의 핵심 설계자로 자리 잡는다.' },
  B: { title: '무사 통과', text: '몇 가지 부채를 남겼지만 시스템은 살아남았다. 다음엔 더 우아하게.' },
  C: { title: '아슬아슬한 승인', text: '조건부 승인. 기술 부채가 발목을 잡았지만 프로젝트는 계속된다.' },
  F: { title: '설계 재검토', text: '그리드는 기술 부채 앞에 무너졌다. 막 4로 돌아가 다른 경로를 택할 수 있다.' },
};

export function finalizeAudit(g) {
  const { grade, raw, constraints, metCount, total } = computeGrade(g);
  g.grade = grade;
  g.ending = { grade, ...ENDINGS[grade], raw, constraints, metCount, total };
  const tel = g.telemetry.acts[g.telemetry.acts.length - 1];
  if (tel) { tel.synergy = g.synergy; tel.finalDebt = g.techDebt; tel.grade = grade; }
  if (grade === 'F') {
    g.lastFDebt = g.techDebt;
    g.won = false;
  } else {
    g.won = true;
  }
  g.over = true;
  return g.ending;
}

// F-grade -> restart from Act 4 roadmap with 50% debt carried.
export function restartFromAct4(g) {
  g.actIndex = 3; // Act 4
  setTechDebt(g, Math.round((g.lastFDebt ?? g.techDebt) * 0.5));
  g.roadmap = null;
  g.bossConstraints = [];
  g.over = false;
  g.grade = null;
  g.ending = null;
  g.projectWarning = false;
  g.unmetStreak = 0;
  startAct(g);
  return g;
}

// Advance to next act. Returns false if no more acts (caller should finalize).
export function nextAct(g) {
  if (g.actIndex >= ACTS.length - 1) return false;
  g.actIndex++;
  startAct(g);
  return true;
}

// ---- save / load ---------------------------------------------------------
export function serialize(g) {
  return JSON.stringify({
    seed: g.seed, actIndex: g.actIndex, turn: g.turn, techDebt: g.techDebt,
    synergy: g.synergy, synergyBonus: g.synergyBonus, deck: g.deck, grid: g.grid, placements: g.placements,
    hand: g.hand, activeReq: g.activeReq, incidents: g.incidents, roadmap: g.roadmap,
    bossConstraints: g.bossConstraints, unmetStreak: g.unmetStreak,
    projectWarning: g.projectWarning, grade: g.grade, ending: g.ending,
    over: g.over, won: g.won, lastFDebt: g.lastFDebt, telemetry: g.telemetry,
    _placeSeq: g._placeSeq,
  });
}
export function deserialize(json) {
  const d = typeof json === 'string' ? JSON.parse(json) : json;
  const g = createGame(d.seed);
  Object.assign(g, d);
  g.rng = makeRng(d.seed); // note: rng stream position not restored (simulation uses fresh games)
  g.history = [];
  recompute(g);
  return g;
}
