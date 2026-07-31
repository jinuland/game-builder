// In-page automated validation harness. Loaded only when ?validate=1.
// Drives a full title->act5 playthrough via the engine+app API, records
// console errors and asserts key acceptance conditions, then writes a JSON
// report to window.__AZ_REPORT and a visible #az-report element.
import * as E from './engine.js';

export function runValidation(app) {
  const report = { checks: [], errors: [], startedAt: Date.now() };
  const origError = console.error;
  console.error = (...a) => { report.errors.push(a.map(String).join(' ')); origError.apply(console, a); };
  window.addEventListener('error', (e) => report.errors.push('uncaught: ' + e.message));
  window.addEventListener('unhandledrejection', (e) => report.errors.push('rejection: ' + (e.reason?.message || e.reason)));

  const check = (name, cond, detail = '') => { report.checks.push({ name, pass: !!cond, detail }); return !!cond; };

  function placeToSatisfy(g, moduleId) {
    // find best adjacent spot
    let best = null, bestAdj = -1;
    for (let r = 0; r < g.grid.rows; r++) for (let c = 0; c < g.grid.cols; c++) {
      const chk = E.canPlace(g, moduleId, c, r, 0);
      if (!chk.ok) continue;
      let adj = 0;
      for (const [cc, rr] of chk.cells) for (const [dc, dr] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const ni = (rr+dr)*g.grid.cols+(cc+dc); if (g.grid.cells[ni] != null) adj++;
      }
      if (adj > bestAdj) { bestAdj = adj; best = { c, r }; }
    }
    if (best) return E.placeModule(g, moduleId, best.c, best.r, 0);
    return null;
  }

  // Force a full playthrough targeting S grade using engine directly (fast path),
  // while also exercising app scene transitions for smoke coverage.
  function playAct(g, targetSGrade) {
    const act = E.currentAct(g);
    if (act.patterns) {
      const offers = E.offerPatterns(g);
      // prefer micro family for consistent synergy
      const micro = offers.find((o) => o.startsWith('p_micro')) || offers[0];
      if (micro) E.pickPattern(g, micro);
    }
    if (act.roadmap) E.chooseRoadmap(g, targetSGrade ? 'innovation' : 'fast');
    for (let t = 0; t < act.turns; t++) {
      for (const inc of g.incidents.slice()) {
        const p = g.placements.find((x) => x.id === inc.placementId);
        if (p) {
          if (g.deck.some((c) => E && false)) {}
          const spot = (() => { for (let r=0;r<g.grid.rows;r++) for (let c=0;c<g.grid.cols;c++){ if(E.canPlace(g,p.moduleId,c,r,0).ok) return {c,r}; } return null; })();
          if (spot) E.relocateModule(g, inc.placementId, spot.c, spot.r, 0);
        }
      }
      if (g.techDebt > 60) { const rc = g.deck.find((c) => c === 'p_hybrid_refactor'); if (rc) E.useRefactor(g, rc); }
      const need = g.activeReq ? require_need(g) : null;
      if (need) placeToSatisfy(g, need);
      // extra micro modules for synergy
      placeToSatisfy(g, 'cache');
      E.endTurn(g);
    }
  }
  function require_need(g) {
    const { REQUIREMENT_CARDS } = window.__AZ_CONTENT || {};
    return g.activeReq ? (window.__AZ_REQMAP ? window.__AZ_REQMAP[g.activeReq] : null) : null;
  }

  // Build a fresh engine game and run 5 acts to S-target
  const g = E.createGame(42);
  E.startAct(g);
  // requirement->module map (needed since content not imported here to keep coupling low)
  // We instead read from placements API: try all modules unlocked to satisfy.
  window.__AZ_REQMAP = null;
  // simpler: use the app's content via a helper the app attaches
  const reqMap = app.__reqNeedMap();
  window.__AZ_REQMAP = reqMap;

  const gridSeq = [];
  for (let i = 0; i < 5; i++) {
    gridSeq.push([g.grid.cols, g.grid.rows]);
    playAct(g, true);
    if (E.currentAct(g).boss) { E.finalizeAudit(g); break; }
    E.nextAct(g);
  }

  check('막 그리드 크기 4x4→6x6→6x6→8x6→8x8',
    JSON.stringify(gridSeq) === JSON.stringify([[4,4],[6,6],[6,6],[8,6],[8,8]]),
    JSON.stringify(gridSeq));
  check('막5 도달 및 등급 산출', !!g.grade, 'grade=' + g.grade);
  check('S/A/B/C/F 중 유효 등급', ['S','A','B','C','F'].includes(g.grade), g.grade);

  // S-grade condition test (forced)
  const gs = E.createGame(1); gs.actIndex = 4; E.startAct(gs);
  gs.roadmap = 'innovation'; gs.bossConstraints = ['scalability','maintainability'];
  placeToSatisfy(gs, 'autoscaler');
  E.setSynergy(gs, 85); E.setTechDebt(gs, 15);
  const sres = E.computeGrade(gs);
  check('시너지≥80·부채≤20 → S등급', sres.grade === 'S', 'got ' + sres.grade);

  // F-grade condition test
  const gf = E.createGame(1); gf.actIndex = 4; E.startAct(gf);
  gf.roadmap = 'fast'; gf.bossConstraints = ['security','scalability','cost','maintainability'];
  E.setSynergy(gf, 5); E.setTechDebt(gf, 100);
  check('부채 100·미충족 → F등급', E.computeGrade(gf).grade === 'F', 'got ' + E.computeGrade(gf).grade);

  // debt interest test
  const gd = E.createGame(1); E.startAct(gd); gd.activeReq = null; gd._structDebt = 0; E.setTechDebt(gd, 72);
  E.endTurn(gd);
  check('부채>70 시 이자 +3', gd.techDebt === 75, 'debt=' + gd.techDebt);

  // save/load roundtrip
  const gsv = E.createGame(9); E.nextAct(gsv); placeToSatisfy(gsv, 'api_gateway'); E.setTechDebt(gsv, 40);
  const json = E.serialize(gsv); const g2 = E.deserialize(json);
  check('저장·복원 라운드트립', g2.techDebt === 40 && g2.actIndex === gsv.actIndex, `debt=${g2.techDebt}`);

  report.errorCount = report.errors.length;
  report.pass = report.checks.every((c) => c.pass) && report.errors.length === 0;
  report.finishedAt = Date.now();
  window.__AZ_REPORT = report;

  const el = document.createElement('pre');
  el.id = 'az-report';
  el.style.cssText = 'position:fixed;inset:0;background:#0d1b2a;color:#f5f0e8;padding:20px;overflow:auto;z-index:9999;font:13px monospace;';
  el.textContent = 'AZ VALIDATION REPORT\n' + (report.pass ? '✅ ALL PASS' : '❌ FAIL') +
    `\nerrors: ${report.errors.length}\n\n` +
    report.checks.map((c) => `${c.pass ? '✅' : '❌'} ${c.name}${c.detail ? '  [' + c.detail + ']' : ''}`).join('\n') +
    (report.errors.length ? '\n\nERRORS:\n' + report.errors.join('\n') : '');
  document.body.appendChild(el);
  return report;
}
