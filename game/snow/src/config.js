// Snow Royale balance & content config. Single source of truth for all tunable
// numbers (referenced by spec's balance/pass criteria). Pure data.

export const CONFIG = {
  map: { size: 1200, snowPiles: 40, pileRadius: 1.5 * 10, pileCooldown: 60 }, // world units; pile interact radius scaled ~x10 for readable top-down
  player: { maxHp: 100, radius: 12, speed: 150, coverSpeedMul: 0.6 },
  craft: { seconds: 3, yield: 10, interactRange: 34 },
  throw: {
    minChargeMs: 200, maxChargeMs: 1500, minRange: 100, maxRange: 400,
    speed: 320, damage: 14, coverDamageMul: 0.5, radius: 6, hitChanceBase: 0.5,
  },
  wall: { cost: 4, durability: 3, maxPerPlayer: 2, decaySec: 14, len: 40, dist: 28, blockChance: 0.65 },
  decoy: { cost: 5, maxPerPlayer: 2, lureSec: 3, dist: 40 },
  // Zone is the metronome: it must close enough to force endgame within 8-12 min.
  zone: {
    firstShrinkSec: 75, intervalSec: 48, dps: 10, finalRadius: 40,
    startRadiusFactor: 0.72, shrinkStep: 0.26,
  },
  match: { total: 20, npc: 19, warmupSec: 45, engageRange: 170, fleeRange: 130 },
  // Low aggro + long reactSec keeps time-to-kill high so ~19 eliminations spread
  // across an 8-12 min match; the closing zone finishes stragglers.
  npcDifficulty: {
    easy:   { accuracy: 0.34, reactSec: 3.4, craftThreshold: 5, aggro: 0.07 },
    normal: { accuracy: 0.42, reactSec: 2.8, craftThreshold: 6, aggro: 0.09 },
    hard:   { accuracy: 0.6, reactSec: 2.0, craftThreshold: 7, aggro: 0.15 },
  },
  session: { targetMinSec: 8 * 60, targetMaxSec: 12 * 60 },
};

// The 5 narrative acts, derived from spec. Each maps to a match phase, tracked
// by elapsed time / survivor count for HUD storytelling.
export const ACTS = [
  { n: 1, title: '막 1 — 낙하와 첫 눈뭉치 제작', untilSurvivors: 20 },
  { n: 2, title: '막 2 — 눈뭉치 교전과 재보급', untilSurvivors: 15 },
  { n: 3, title: '막 3 — 설벽 건설과 제작 엄폐', untilSurvivors: 10 },
  { n: 4, title: '막 4 — 좁아지는 눈보라 구역', untilSurvivors: 5 },
  { n: 5, title: '막 5 — 최후의 눈싸움', untilSurvivors: 1 },
];

export function actForSurvivors(survivors) {
  for (const a of ACTS) if (survivors >= a.untilSurvivors) return a;
  return ACTS[ACTS.length - 1];
}

// Character skins → asset keys (HUD portrait + NPC distinction).
export const SKINS = {
  jack: { name: '아이언 잭', asset: 'char_jack', color: '#1B2A4A' },
  white: { name: '화이트 아이', asset: 'char_white', color: '#A8D8EA' },
  bear: { name: '빅 베어', asset: 'char_bear', color: '#D4A017' },
  bot: { name: '[봇] 그레이 솔저', asset: 'char_bot', color: '#9E9E9E' },
};
