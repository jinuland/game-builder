// Headless balance simulation. Plays full 5-act games with bot policies and
// measures spec passCriteria. Writes BALANCE-REPORT.md.
// Run: node game/sim/simulate.mjs [runs]
import {
  createGame, startAct, placeModule, canPlace, endTurn, nextAct, currentAct,
  offerPatterns, pickPattern, chooseRoadmap, finalizeAudit, maybeSpawnIncident,
  relocateModule, useFailover, useRefactor, computeGrade, absCells,
} from '../src/engine.js';
import { MODULES, ACTS, REQUIREMENT_CARDS, ROADMAP_PATHS, PATTERN_CARDS } from '../src/content.js';
import { makeRng } from '../src/rng.js';
import { writeFileSync } from 'node:fs';

// find any valid anchor for a module (scan). Returns {ac,ar,rot} or null.
function findSpot(g, moduleId, preferAdjacent = true) {
  const spots = [];
  for (let r = 0; r < g.grid.rows; r++) {
    for (let c = 0; c < g.grid.cols; c++) {
      for (const rot of (MODULES[moduleId].rotatable ? [0, 1] : [0])) {
        const chk = canPlace(g, moduleId, c, r, rot);
        if (chk.ok) {
          // score by adjacency to existing placements
          let adj = 0;
          if (preferAdjacent && g.placements.length) {
            for (const [cc, rr] of chk.cells) {
              for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                const ni = (rr + dr) * g.grid.cols + (cc + dc);
                if (g.grid.cells[ni] != null) adj++;
              }
            }
          }
          spots.push({ ac: c, ar: r, rot, adj });
        }
      }
    }
  }
  if (!spots.length) return null;
  spots.sort((a, b) => b.adj - a.adj);
  return preferAdjacent ? spots[0] : spots[Math.floor(spots.length / 2)];
}

function unlockedModules(actN) {
  return Object.values(MODULES).filter((m) => m.unlockAct <= actN).map((m) => m.id);
}

// Policies decide: which module to place per turn, which pattern to draft, which path.
const policies = {
  random: {
    // random CHOICES (which module, which card, which path) but competent adjacent
    // placement — models a first-time human who naturally clusters modules.
    module: (g, rng) => {
      const need = g.activeReq ? REQUIREMENT_CARDS[g.activeReq].need : null;
      const unlocked = unlockedModules(currentAct(g).n);
      // 65% of the time a beginner tries to satisfy the visible requirement
      if (need && unlocked.includes(need) && rng() < 0.65) return need;
      return rng.pick(unlocked);
    },
    pattern: (g, offers, rng) => rng.pick(offers),
    path: (g, rng) => rng.pick(Object.keys(ROADMAP_PATHS)),
    adjacent: true,
  },
  optimalMicro: {
    // prioritize the required module, then micro-family modules; place adjacent
    module: (g) => {
      const need = g.activeReq ? REQUIREMENT_CARDS[g.activeReq].need : null;
      if (need && unlockedModules(currentAct(g).n).includes(need)) return need;
      const micro = ['cache', 'api_gateway', 'autoscaler'].filter((m) => unlockedModules(currentAct(g).n).includes(m));
      return micro[0] || 'cache';
    },
    pattern: (g, offers) => {
      const micro = offers.find((o) => PATTERN_CARDS[o].family === 'micro');
      return micro || offers[0];
    },
    path: () => 'innovation',
    adjacent: true,
  },
  worst: {
    // deliberately place mismatched modules far apart to maximize violations
    module: (g, rng) => {
      const mods = unlockedModules(currentAct(g).n);
      return rng.pick(mods);
    },
    pattern: (g, offers, rng) => rng.pick(offers),
    path: () => 'fast',
    adjacent: false,
    scatter: true,
  },
};

function playGame(seed, policyName) {
  const pol = policies[policyName];
  const rng = makeRng(seed * 2654435761 >>> 0);
  const g = createGame(seed);
  startAct(g);
  const perAct = [];
  let reachedAct5 = false;

  for (let ai = 0; ai < ACTS.length; ai++) {
    const act = currentAct(g);
    if (act.n === 5) reachedAct5 = true;

    // pattern draft at start of acts that allow it
    if (act.patterns) {
      const offers = offerPatterns(g);
      if (offers.length) pickPattern(g, pol.pattern(g, offers, rng));
    }
    // roadmap choice
    if (act.roadmap) chooseRoadmap(g, pol.path(g, rng));

    for (let t = 0; t < act.turns; t++) {
      // resolve incidents first
      for (const inc of g.incidents.slice()) {
        const p = g.placements.find((x) => x.id === inc.placementId);
        if (!p) continue;
        if (g.deck.some((c) => PATTERN_CARDS[c]?.failover)) { useFailover(g, inc.placementId); continue; }
        const spot = findSpot(g, p.moduleId, true);
        if (spot) relocateModule(g, inc.placementId, spot.ac, spot.ar, spot.rot);
      }
      // use refactor if debt high
      if (g.techDebt > 65) {
        const rc = g.deck.find((c) => PATTERN_CARDS[c]?.refactor);
        if (rc) useRefactor(g, rc);
      }
      // place 1-2 modules
      const placeCount = pol.scatter ? 1 : (1 + (rng() > 0.5 ? 1 : 0));
      for (let k = 0; k < placeCount; k++) {
        const mid = pol.module(g, rng);
        const spot = findSpot(g, mid, pol.adjacent && !pol.scatter);
        if (spot) placeModule(g, mid, spot.ac, spot.ar, spot.rot);
      }
      endTurn(g);
    }
    perAct.push({ n: act.n, debt: g.techDebt, synergy: g.synergy, crashes: g.telemetry.crashes });

    if (act.n === 5) { finalizeAudit(g); break; }
    if (!nextAct(g)) break;
  }

  return {
    reachedAct5,
    grade: g.grade,
    debt: g.techDebt,
    synergy: g.synergy,
    crashes: g.telemetry.crashes,
    path: g.roadmap,
    perAct,
    telemetry: g.telemetry,
  };
}

function pct(n, d) { return d ? (100 * n / d) : 0; }

function run(runs = 1000) {
  const results = { random: [], optimalMicro: [], worst: [] };
  const pathClear = { fast: { c: 0, t: 0 }, stable: { c: 0, t: 0 }, innovation: { c: 0, t: 0 } };
  const cardPicks = {};
  const pathPicks = { fast: 0, stable: 0, innovation: 0 };
  let crashAct = 0, crashTotal = 0;

  for (let i = 0; i < runs; i++) {
    const r = playGame(42 + i, 'random');
    results.random.push(r);
    if (r.path) {
      pathPicks[r.path]++;
      pathClear[r.path].t++;
      if (r.grade && r.grade !== 'F') pathClear[r.path].c++;
    }
    for (const [n, c] of Object.entries(r.telemetry.cardPicks)) cardPicks[n] = (cardPicks[n] || 0) + c;
    r.perAct.forEach((a) => { crashTotal++; if (a.crashes > 0) crashAct++; });
  }
  // optimal & worst: smaller batches for reference bounds
  const OPT_N = 200, WORST_N = 200;
  for (let i = 0; i < OPT_N; i++) results.optimalMicro.push(playGame(42 + i, 'optimalMicro'));
  for (let i = 0; i < WORST_N; i++) results.worst.push(playGame(42 + i, 'worst'));

  // metrics
  const reached5 = results.random.filter((r) => r.reachedAct5).length;
  const graded = results.random.filter((r) => r.grade);
  const sCount = graded.filter((r) => r.grade === 'S').length;
  const gradeDist = {};
  for (const r of graded) gradeDist[r.grade] = (gradeDist[r.grade] || 0) + 1;

  const avgSynRandom = graded.reduce((s, r) => s + r.synergy, 0) / (graded.length || 1);
  const optGraded = results.optimalMicro.filter((r) => r.grade);
  const avgSynOpt = optGraded.reduce((s, r) => s + r.synergy, 0) / (optGraded.length || 1);
  const maxSynOpt = Math.max(...optGraded.map((r) => r.synergy));

  const worstGraded = results.worst.filter((r) => r.grade);
  const worstAvgDebt = worstGraded.reduce((s, r) => s + r.debt, 0) / (worstGraded.length || 1);

  // path clear diff
  const pathRates = Object.fromEntries(Object.entries(pathClear).map(([k, v]) => [k, pct(v.c, v.t)]));
  const pathVals = Object.values(pathRates).filter((_, i) => Object.values(pathClear)[i].t > 0);
  const pathSpread = pathVals.length ? Math.max(...pathVals) - Math.min(...pathVals) : 0;

  // card family pick distribution
  const famPicks = {};
  for (const [cid, c] of Object.entries(cardPicks)) {
    const fam = PATTERN_CARDS[cid]?.family;
    if (fam) famPicks[fam] = (famPicks[fam] || 0) + c;
  }
  const totalPicks = Object.values(famPicks).reduce((a, b) => a + b, 0) || 1;
  const famPct = Object.fromEntries(Object.entries(famPicks).map(([k, v]) => [k, pct(v, totalPicks)]));

  const pathPickTotal = Object.values(pathPicks).reduce((a, b) => a + b, 0) || 1;
  const pathPickPct = Object.fromEntries(Object.entries(pathPicks).map(([k, v]) => [k, pct(v, pathPickTotal)]));

  const metrics = {
    runs,
    reached5Pct: pct(reached5, runs),
    sPct: pct(sCount, graded.length),
    gradeDist,
    avgSynRandom, avgSynOpt, maxSynOpt,
    optVsBaseRatio: avgSynOpt / (avgSynRandom || 1),
    worstAvgDebt,
    pathRates, pathSpread, pathPickPct,
    famPct,
    crashRatePerAct: pct(crashAct, crashTotal),
  };

  // pass criteria
  const criteria = [
    { name: '막5 도달률 ≥ 60%', pass: metrics.reached5Pct >= 60, val: `${metrics.reached5Pct.toFixed(1)}%` },
    { name: 'S등급 달성률 10~35%', pass: metrics.sPct >= 10 && metrics.sPct <= 35, val: `${metrics.sPct.toFixed(1)}%` },
    { name: '최적빌드 시너지 ≤ 기본 평균 2.5배', pass: metrics.optVsBaseRatio <= 2.5, val: `${metrics.optVsBaseRatio.toFixed(2)}x` },
    { name: '경로별 클리어율 차이 ≤ 15%p', pass: metrics.pathSpread <= 15, val: `${metrics.pathSpread.toFixed(1)}%p` },
    { name: '크래시 발생률 막당 ≤ 20%', pass: metrics.crashRatePerAct <= 20, val: `${metrics.crashRatePerAct.toFixed(1)}%` },
    { name: '특정 계열 선택률 ≤ 50%', pass: Math.max(...Object.values(metrics.famPct), 0) <= 50, val: `max ${Math.max(...Object.values(metrics.famPct), 0).toFixed(1)}%` },
    { name: '로드맵 3경로 각 ≥ 20%', pass: Math.min(...Object.values(metrics.pathPickPct)) >= 20, val: Object.entries(metrics.pathPickPct).map(([k, v]) => `${k}:${v.toFixed(0)}%`).join(' ') },
  ];

  return { metrics, criteria };
}

const runs = parseInt(process.argv[2] || '1000', 10);
const { metrics, criteria } = run(runs);
const allPass = criteria.every((c) => c.pass);

const md = `# BALANCE-REPORT.md — 아키텍트 제로 밸런스 시뮬레이션

- 시드: seed=42 기준 결정론적, ${runs}회 (랜덤 정책) + 최적 200 + 최악 200
- 생성 시각(런 기준): 결정론적 재현 가능

## 결과 지표
| 지표 | 값 |
|---|---|
| 막5 도달률 | ${metrics.reached5Pct.toFixed(1)}% |
| S등급 달성률 | ${metrics.sPct.toFixed(1)}% |
| 등급 분포 | ${JSON.stringify(metrics.gradeDist)} |
| 랜덤 평균 시너지 | ${metrics.avgSynRandom.toFixed(1)} |
| 최적 평균 시너지 | ${metrics.avgSynOpt.toFixed(1)} |
| 최적 최대 시너지 | ${metrics.maxSynOpt} |
| 최적/기본 배율 | ${metrics.optVsBaseRatio.toFixed(2)}x |
| 최악빌드 평균 부채 | ${metrics.worstAvgDebt.toFixed(1)} |
| 경로별 클리어율 | ${JSON.stringify(Object.fromEntries(Object.entries(metrics.pathRates).map(([k, v]) => [k, +v.toFixed(1)])))} |
| 경로 클리어율 스프레드 | ${metrics.pathSpread.toFixed(1)}%p |
| 경로 선택 분포 | ${JSON.stringify(Object.fromEntries(Object.entries(metrics.pathPickPct).map(([k, v]) => [k, +v.toFixed(1)])))} |
| 계열 선택 분포 | ${JSON.stringify(Object.fromEntries(Object.entries(metrics.famPct).map(([k, v]) => [k, +v.toFixed(1)])))} |
| 크래시 발생률(막당) | ${metrics.crashRatePerAct.toFixed(1)}% |

## passCriteria 판정
| 기준 | 값 | 판정 |
|---|---|---|
${criteria.map((c) => `| ${c.name} | ${c.val} | ${c.pass ? '✅ PASS' : '❌ FAIL'} |`).join('\n')}

## 종합
**${allPass ? '✅ 전체 passCriteria 통과' : '❌ 일부 기준 미달 — 밸런스 조정 필요'}**
`;

writeFileSync(new URL('../../BALANCE-REPORT.md', import.meta.url), md);
console.log(md);
console.log(allPass ? '\nALL_PASS' : '\nSOME_FAIL');
process.exit(allPass ? 0 : 2);
