// Headless balance simulation for Snow Royale. Runs full matches with a scripted
// "human" policy (3 build styles) vs NPCs, measures spec passCriteria, writes
// BALANCE-REPORT.md. Deterministic (seed=42 base). Run: node game/snow/sim/simulate.mjs [runs]
import {
  createGame, step, buildWall, placeDecoy, npcThink,
  humanPlayer, result, aliveCount, CONFIG as C,
} from '../src/engine.js';

// Drive the "human" combatant through the SAME NPC brain (fair 20th player), so
// the measured win rate reflects symmetric balance (~1/20), not an aimbot.
// Build styles add an occasional wall/decoy bias on top of the shared brain.
function drivePolicy(g, style, dt) {
  const p = humanPlayer(g);
  if (!p || !p.alive) return;
  const rng = g.rng;
  // ensure the human has an ai scratch object for npcThink
  if (!p.npc) p.npc = { state: 'PATROL', target: null, reactTimer: 0, moveTx: 0, moveTy: 0 };
  const wasNpc = p.isNpc; p.isNpc = true; // let warmup + AI treat it uniformly

  if (!p.crafting) {
    if (style === 'wallSpam' && p.snowballs >= C.wall.cost && p.walls < C.wall.maxPerPlayer && rng() < 0.5) {
      buildWall(g, p); p.isNpc = wasNpc; return;
    }
    if (style === 'decoySpam' && p.snowballs >= C.decoy.cost && p.decoys < C.decoy.maxPerPlayer && rng() < 0.5) {
      placeDecoy(g, p); p.isNpc = wasNpc; return;
    }
  }
  npcThink(g, p, dt);
  p.isNpc = wasNpc;
}

function runMatch(seed, style, difficulty = 'normal') {
  const g = createGame(seed, { total: C.match.total, difficulty });
  const dt = 0.1;
  let guard = 0;
  while (!g.over && guard++ < 9000) { // cap 900s
    drivePolicy(g, style, dt);
    step(g, dt);
  }
  const r = result(g);
  return { ...r, style, difficulty, crashed: guard >= 9000 };
}

function pct(n, d) { return d ? (100 * n / d) : 0; }
function median(arr) { if (!arr.length) return 0; const s = [...arr].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
function mean(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }
function std(arr) { const m = mean(arr); return Math.sqrt(mean(arr.map((x) => (x - m) ** 2))); }

function run(runs) {
  const styles = ['optimal', 'wallSpam', 'decoySpam'];
  const per = Math.floor(runs / 3);
  const all = [];
  for (let s = 0; s < styles.length; s++) {
    for (let i = 0; i < per; i++) all.push(runMatch(42 + s * 1000 + i, styles[s]));
  }
  const wins = all.filter((r) => r.won).length;
  const places = all.map((r) => r.place);
  const sessions = all.map((r) => r.survivedSec);
  // craft success across all
  const craftAtt = all.reduce((s, r) => s + r.stats.craftAttempts, 0);
  const craftDone = all.reduce((s, r) => s + r.stats.craftDone, 0);
  const zoneDmg = all.reduce((s, r) => s + r.stats.zoneDamageTotal, 0);
  const totalDmg = all.reduce((s, r) => s + r.stats.totalDamage, 0);
  const wallsAvg = mean(all.map((r) => r.stats.wallsBuilt));

  const wallRuns = all.filter((r) => r.style === 'wallSpam');
  const decoyRuns = all.filter((r) => r.style === 'decoySpam');
  const wallTop5 = pct(wallRuns.filter((r) => r.place <= 5).length, wallRuns.length);
  const decoyWin = pct(decoyRuns.filter((r) => r.won).length, decoyRuns.length);

  const m = {
    runs: all.length,
    winRate: pct(wins, all.length),
    placeMedian: median(places),
    sessionMeanMin: mean(sessions) / 60,
    sessionStdMin: std(sessions) / 60,
    craftSuccess: pct(craftDone, craftAtt),
    zoneDamageRatio: pct(zoneDmg, totalDmg),
    wallsAvg,
    wallSpamTop5: wallTop5,
    decoySpamWin: decoyWin,
    crashed: all.filter((r) => r.crashed).length,
  };

  const criteria = [
    { name: '세션 길이 평균 8~12분', val: `${m.sessionMeanMin.toFixed(1)}분`, pass: m.sessionMeanMin >= 8 && m.sessionMeanMin <= 12 },
    { name: '플레이어 승률 4~8%', val: `${m.winRate.toFixed(1)}%`, pass: m.winRate >= 4 && m.winRate <= 8 },
    { name: '제작 성공률 60~80%', val: `${m.craftSuccess.toFixed(1)}%`, pass: m.craftSuccess >= 60 && m.craftSuccess <= 80 },
    { name: '구역 이탈 피해 15~25%', val: `${m.zoneDamageRatio.toFixed(1)}%`, pass: m.zoneDamageRatio >= 15 && m.zoneDamageRatio <= 25 },
    { name: '설벽 스팸 상위5위율 ≤ 25%', val: `${m.wallSpamTop5.toFixed(1)}%`, pass: m.wallSpamTop5 <= 25 },
    { name: '미끼 스팸 승률 ≤ 15%', val: `${m.decoySpamWin.toFixed(1)}%`, pass: m.decoySpamWin <= 15 },
    { name: '생존 순위 중앙값 8~14위', val: `${m.placeMedian}위`, pass: m.placeMedian >= 8 && m.placeMedian <= 14 },
    { name: '무한루프/크래시 0', val: `${m.crashed}`, pass: m.crashed === 0 },
  ];
  return { m, criteria };
}

const runs = parseInt(process.argv[2] || '100', 10);
const { m, criteria } = run(runs);
const allPass = criteria.every((c) => c.pass);

const md = `# BALANCE-REPORT.md — 스노우 로얄 밸런스 시뮬레이션

- 결정론적 시드(seed=42 기반), ${m.runs}회 (optimal/wallSpam/decoySpam 3종 균등)
- 20인 매치(플레이어 1 + NPC 19), 고정 timestep 0.1s

## 결과 지표
| 지표 | 값 |
|---|---|
| 플레이어 승률 | ${m.winRate.toFixed(1)}% |
| 생존 순위 중앙값 | ${m.placeMedian}위 / 20 |
| 세션 길이 평균 | ${m.sessionMeanMin.toFixed(1)}분 (σ ${m.sessionStdMin.toFixed(1)}분) |
| 제작 성공률 | ${m.craftSuccess.toFixed(1)}% |
| 구역 이탈 피해 비율 | ${m.zoneDamageRatio.toFixed(1)}% |
| 평균 설벽 건설 | ${m.wallsAvg.toFixed(1)}회/게임 |
| 설벽 스팸 상위5위율 | ${m.wallSpamTop5.toFixed(1)}% |
| 미끼 스팸 승률 | ${m.decoySpamWin.toFixed(1)}% |

## passCriteria 판정
| 기준 | 값 | 판정 |
|---|---|---|
${criteria.map((c) => `| ${c.name} | ${c.val} | ${c.pass ? '✅ PASS' : '❌ FAIL'} |`).join('\n')}

## 종합
**${allPass ? '✅ 전체 passCriteria 통과' : '❌ 일부 기준 미달 — 밸런스 조정 필요'}**
`;

import { writeFileSync } from 'node:fs';
writeFileSync(new URL('../../../BALANCE-REPORT-SNOW.md', import.meta.url), md);
console.log(md);
console.log(allPass ? '\nALL_PASS' : '\nSOME_FAIL');
process.exit(allPass ? 0 : 2);
