// Headless playtest driver — simulates three player perspectives (beginner,
// skilled, optimizer) through full playthroughs and measures the spec's
// observationMetrics. Emits structured findings for FUN-ITERATION-LOG.md.
import * as E from '../src/engine.js';
import { MODULES, REQUIREMENT_CARDS, PATTERN_CARDS, ROADMAP_PATHS, ACTS } from '../src/content.js';

function bestSpot(g, mid, adjacent = true) {
  let best = null, ba = -1;
  for (let r = 0; r < g.grid.rows; r++) for (let c = 0; c < g.grid.cols; c++) {
    for (const rot of (MODULES[mid].rotatable ? [0, 1] : [0])) {
      const chk = E.canPlace(g, mid, c, r, rot); if (!chk.ok) continue;
      let adj = 0;
      for (const [cc, rr] of chk.cells) for (const [dc, dr] of [[1,0],[-1,0],[0,1],[0,-1]]) { const ni=(rr+dr)*g.grid.cols+(cc+dc); if (g.grid.cells[ni]!=null) adj++; }
      const score = adjacent ? adj : -adj;
      if (score > ba) { ba = score; best = { c, r, rot }; }
    }
  }
  return best;
}

const perspectives = {
  beginner: {
    // reads requirement, places it, sometimes a random extra; picks first-family card
    turn(g) {
      const need = g.activeReq ? REQUIREMENT_CARDS[g.activeReq].need : null;
      if (need && MODULES[need].unlockAct <= E.currentAct(g).n) {
        const s = bestSpot(g, need, true); if (s) E.placeModule(g, need, s.c, s.r, s.rot);
      }
    },
    pattern(offers) { return offers[0]; },
    path() { return 'stable'; },
  },
  skilled: {
    // micro-focused: satisfies req + builds micro cluster, manages debt
    turn(g) {
      const need = g.activeReq ? REQUIREMENT_CARDS[g.activeReq].need : null;
      if (need && MODULES[need].unlockAct <= E.currentAct(g).n) { const s = bestSpot(g, need); if (s) E.placeModule(g, need, s.c, s.r, s.rot); }
      for (const m of ['cache', 'api_gateway', 'autoscaler']) {
        if (MODULES[m].unlockAct <= E.currentAct(g).n) { const s = bestSpot(g, m); if (s) { E.placeModule(g, m, s.c, s.r, s.rot); break; } }
      }
      if (g.techDebt > 55) { const rc = g.deck.find((c) => PATTERN_CARDS[c]?.refactor); if (rc) E.useRefactor(g, rc); }
    },
    pattern(offers) { return offers.find((o) => o.startsWith('p_micro')) || offers[0]; },
    path() { return 'innovation'; },
  },
  optimizer: {
    // event-driven extreme build via innovation path
    turn(g) {
      const need = g.activeReq ? REQUIREMENT_CARDS[g.activeReq].need : null;
      if (need && MODULES[need].unlockAct <= E.currentAct(g).n) { const s = bestSpot(g, need); if (s) E.placeModule(g, need, s.c, s.r, s.rot); }
      for (const m of ['message_queue', 'circuit_breaker', 'cache']) {
        if (MODULES[m].unlockAct <= E.currentAct(g).n) { const s = bestSpot(g, m); if (s) { E.placeModule(g, m, s.c, s.r, s.rot); break; } }
      }
      if (g.techDebt > 55) { const rc = g.deck.find((c) => PATTERN_CARDS[c]?.refactor); if (rc) E.useRefactor(g, rc); }
    },
    pattern(offers) { return offers.find((o) => o.startsWith('p_event')) || offers[0]; },
    path() { return 'innovation'; },
  },
};

export function playPerspective(name, seed) {
  const pol = perspectives[name];
  const g = E.createGame(seed);
  E.startAct(g);
  const metrics = { name, seed, firstPlaceOk: false, actsCleared: 0, incidentsResolved: 0, incidentsTimedOut: 0, crashes: 0, reachedAct5: false };

  for (let ai = 0; ai < ACTS.length; ai++) {
    const act = E.currentAct(g);
    if (act.n === 5) metrics.reachedAct5 = true;
    if (act.patterns) { const o = E.offerPatterns(g); if (o.length) E.pickPattern(g, pol.pattern(o)); }
    if (act.roadmap) E.chooseRoadmap(g, pol.path());

    for (let t = 0; t < act.turns; t++) {
      // resolve incidents
      for (const inc of g.incidents.slice()) {
        const p = g.placements.find((x) => x.id === inc.placementId);
        if (!p) continue;
        if (g.deck.some((c) => PATTERN_CARDS[c]?.failover)) { E.useFailover(g, inc.placementId); continue; }
        const s = bestSpot(g, p.moduleId, true); if (s) E.relocateModule(g, inc.placementId, s.c, s.r, s.rot);
      }
      const before = g.placements.length;
      pol.turn(g);
      if (ai === 0 && t === 0 && g.placements.length > before) metrics.firstPlaceOk = true;
      E.endTurn(g);
    }
    metrics.actsCleared++;
    if (act.boss) { E.finalizeAudit(g); break; }
    if (!E.nextAct(g)) break;
  }
  metrics.incidentsResolved = g.telemetry.incidentsResolved;
  metrics.incidentsTimedOut = g.telemetry.incidentsTimedOut;
  metrics.crashes = g.telemetry.crashes;
  metrics.grade = g.grade;
  metrics.finalSynergy = g.synergy;
  metrics.finalDebt = g.techDebt;
  return metrics;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  for (const p of ['beginner', 'skilled', 'optimizer']) {
    const rows = [];
    for (let s = 0; s < 20; s++) rows.push(playPerspective(p, 42 + s));
    const cleared = rows.filter((r) => r.grade && r.grade !== 'F').length;
    const s5 = rows.filter((r) => r.grade === 'S').length;
    const firstOk = rows.filter((r) => r.firstPlaceOk).length;
    console.log(`${p}: clear=${cleared}/20 S=${s5} firstPlaceOk=${firstOk}/20 avgGrade=${rows.map(r=>r.grade).join(',')}`);
  }
}
