// Snow Royale balance & content config. Single source of truth for all tunable
// numbers (referenced by spec's balance/pass criteria). Pure data.

export const CONFIG = {
  map: { size: 1200, snowPiles: 40, pileRadius: 1.5 * 10, pileCooldown: 60, pileRespawnSec: 45 }, // piles respawn elsewhere after depletion
  player: {
    maxHp: 100, radius: 12, speed: 150, coverSpeedMul: 0.6,
    jumpVel: 46, gravity: 100, jumpDodgeZ: 5, // jump arc ~10u apex; above dodgeZ snowballs pass under you
  },
  items: {
    healSpawn: 10, healAmount: 40, healRespawnSec: 50,   // heal packs on the map
    shieldSpawn: 6, shieldHits: 4, shieldRespawnSec: 60, // shield fully blocks the next N hits (durability), then breaks
    pickupRange: 26,
    // pills: buff rolled at spawn so the capsule color telegraphs what you get.
    pill: {
      spawn: 14, respawnSec: 45, durationSec: 20,
      speedMul: 1.35, powerMul: 1.5, craftMul: 0.5,
      mgChance: 0.45, mgAmmo: 75, mgFireInterval: 0.12, mgSpeed: 540, // straight-line rapid fire
    },
  },
  // bottle caps: battlefield currency. Pick up scattered caps (2-7 random),
  // dead players drop their wallet where they fell. Spend in the pre-match shop.
  caps: { spawn: 26, min: 2, max: 7, respawnSec: 40, pickupRange: 26 },
  // shop items — buy with caps, carry exactly ONE into a match
  shop: {
    hardtack: { id: 'hardtack', cost: 10, name: '건빵 패키지', desc: '먹으면 체력 +20, 총 3회 사용', emoji: '🍪', heals: 3, healAmount: 20 },
    charge: { id: 'charge', cost: 40, name: '돌격 물약', desc: '15초 무적 돌격! 박치기로 적을 20m 날려버림', emoji: '⚗️', durationSec: 15, ramRange: 30, knockback: 800, ramDamage: 24, speedMul: 1.6 }, // knockback 800u/s w/ fast decay ≈ 200u (~20m) total
    sleepgun: { id: 'sleepgun', cost: 40, name: '수면총', desc: '단 한 발 — 맞은 적은 5초간 잠듦', emoji: '🔫', sleepSec: 5, speed: 620, range: 500 },
    jetpack: { id: 'jetpack', cost: 60, name: '올드 제트팩', desc: '점프키를 누르는 동안 비행 (연료 60초, 키 3배 높이)', emoji: '🚀', fuelSec: 60, maxHeightMul: 3, riseVel: 55 },
    grenade: { id: 'grenade', cost: 30, name: '눈 수류탄', desc: '던지면 반경 표시 후 3초 뒤 폭발 (반경 60, 피해 40)', emoji: '💣', fuseSec: 3, radius: 60, damage: 40, throwRange: 260 },
    club: { id: 'club', cost: 20, name: '몽둥이', desc: '근접 공격(F키)이 강해진다 — 주먹 10 → 몽둥이 26 피해', emoji: '🏏' },
  },
  // melee (F key): everyone punches by default; a club hits much harder.
  // Clubs also drop on the battlefield (fieldSpawn) — grab one mid-match.
  melee: { range: 36, arcDot: 0.35, cooldownSec: 0.6, fistDamage: 10, clubDamage: 26, clubKnockback: 220, clubFieldSpawn: 4 },
  // spring jump pads (Fortnite-style): step on → launch up + carry your run direction.
  // FIXED layout (fractions of map size): same spots every match, learnable.
  pads: {
    radius: 14, launchVel: 100, carryMul: 2.0,
    spots: [
      [0.50, 0.50],                                   // center
      [0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72], // inner diagonals
      [0.50, 0.15], [0.85, 0.50], [0.50, 0.85], [0.15, 0.50], // edge midpoints
    ],
  },
  // climbable rock towers, one story high — solid sides, reachable via the
  // adjacent jump pad. FIXED layout paired 1:1 with the first pads.
  towers: {
    radius: 22, height: 26,
    spots: [
      [0.44, 0.50],                                   // next to center pad
      [0.22, 0.28], [0.78, 0.28], [0.22, 0.72], [0.78, 0.72], // beside diagonal pads
      [0.50, 0.09],                                   // north edge
    ],
  },
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
  match: { total: 20, npc: 19, warmupSec: 45, engageRange: 170, fleeRange: 130, totalOptions: [10, 20, 30, 40] },
  // Low aggro + long reactSec keeps time-to-kill high so ~19 eliminations spread
  // across an 8-12 min match; the closing zone finishes stragglers.
  // smart* fields: dodge = jump chance when a snowball closes in, strafe = lateral
  // movement while attacking, seekItem = go for heal/shield/pill when it helps.
  npcDifficulty: {
    easy:   { accuracy: 0.34, reactSec: 3.4, craftThreshold: 5, aggro: 0.07, dodge: 0.15, strafe: 0.3, seekItem: 0.3 },
    normal: { accuracy: 0.42, reactSec: 2.8, craftThreshold: 6, aggro: 0.09, dodge: 0.3, strafe: 0.55, seekItem: 0.55 },
    hard:   { accuracy: 0.6, reactSec: 2.0, craftThreshold: 7, aggro: 0.15, dodge: 0.5, strafe: 0.8, seekItem: 0.8 },
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

// Playable classes — pick one before dropping. Multipliers apply to the player.
export const CLASSES = {
  jack: {
    id: 'jack', skin: 'jack', name: '아이언 잭 — 밸런스',
    desc: '균형 잡힌 만능형. 모든 능력치 표준.',
    throwRangeMul: 1.0, damageMul: 1.0, speedMul: 1.0, craftSecMul: 1.0, maxHpMul: 1.0,
  },
  white: {
    id: 'white', skin: 'white', name: '화이트 아이 — 저격수',
    desc: '투척 사거리 +30%, 피해 +15%. 대신 체력 -20%.',
    throwRangeMul: 1.3, damageMul: 1.15, speedMul: 1.0, craftSecMul: 1.0, maxHpMul: 0.8,
  },
  bear: {
    id: 'bear', skin: 'bear', name: '빅 베어 — 탱커',
    desc: '체력 +30%, 제작 20% 빠름. 대신 이동 -15%, 사거리 -10%.',
    throwRangeMul: 0.9, damageMul: 1.0, speedMul: 0.85, craftSecMul: 0.8, maxHpMul: 1.3,
  },
  dash: {
    id: 'dash', skin: 'white', name: '스노우 러너 — 질주형',
    desc: '이동 +25%. 대신 피해 -15%.',
    throwRangeMul: 1.0, damageMul: 0.85, speedMul: 1.25, craftSecMul: 1.0, maxHpMul: 1.0,
  },
};
