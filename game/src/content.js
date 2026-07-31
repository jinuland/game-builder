// Static game content: modules, pattern cards, requirement cards, incidents, acts.
// All numbers here are balance knobs; logic lives in engine.js.

// Palette (single source of truth, shared by render + assets)
export const PALETTE = {
  navy: '#1a2744',
  cyan: '#00e5ff',
  errorRed: '#cc2200',
  warnYellow: '#ffcc00',
  synergyGold: '#ffaa00',
  warmWhite: '#f5f0e8',
  midGray: '#4a5568',
  midnight: '#0d1b2a',
};

// Architecture layers — modules only connect cleanly to same or adjacent layer.
// Layer index used by connection-rule validator.
export const LAYERS = ['edge', 'compute', 'data'];

// Module definitions. `cells` = relative occupied cells (rotatable shapes).
// `layer` = architecture layer for connection rules. `family` = synergy family.
// `unlockAct` = first act the module becomes available.
export const MODULES = {
  api_gateway: {
    id: 'api_gateway', name: 'API 게이트웨이', short: 'API GW', glyph: '⛩',
    layer: 'edge', family: 'micro', color: PALETTE.cyan,
    cells: [[0, 0]], rotatable: false, unlockAct: 1,
    tip: '외부 요청의 관문. 우편함 앞 안내데스크처럼 트래픽을 라우팅한다.',
  },
  database: {
    id: 'database', name: '데이터베이스', short: 'DB', glyph: '▤',
    layer: 'data', family: 'layered', color: '#7c5cff',
    cells: [[0, 0], [1, 0]], rotatable: true, unlockAct: 1,
    tip: '영구 저장소. 2칸을 차지하며 데이터 레이어에 놓여야 한다.',
  },
  cache: {
    id: 'cache', name: '캐시', short: 'Cache', glyph: '⚡',
    layer: 'compute', family: 'micro', color: '#00e5ff',
    cells: [[0, 0]], rotatable: false, unlockAct: 1,
    tip: '빠른 임시 저장. 컴퓨트 레이어에서 응답을 가속한다.',
  },
  message_queue: {
    id: 'message_queue', name: '메시지 큐', short: 'MQ', glyph: '✉',
    layer: 'compute', family: 'event', color: '#ffcc00',
    cells: [[0, 0], [0, 1]], rotatable: true, unlockAct: 2,
    tip: '우편함 모듈. 작업을 비동기로 전달해 부하를 흡수한다.',
  },
  circuit_breaker: {
    id: 'circuit_breaker', name: '서킷 브레이커', short: 'CB', glyph: '🛡',
    layer: 'edge', family: 'event', color: '#ff8800',
    cells: [[0, 0]], rotatable: false, unlockAct: 3,
    tip: '장애 차단기. 연쇄 장애를 끊어 시스템을 보호한다.',
  },
  autoscaler: {
    id: 'autoscaler', name: '오토스케일러', short: 'Auto', glyph: '⤢',
    layer: 'compute', family: 'micro', color: '#33ffaa',
    cells: [[0, 0], [1, 0], [0, 1]], rotatable: true, unlockAct: 4,
    tip: '자동 확장기. 트래픽에 따라 컴퓨트 용량을 늘린다.',
  },
  multi_region: {
    id: 'multi_region', name: '멀티리전 복제', short: 'Multi', glyph: '🌐',
    layer: 'data', family: 'layered', color: '#ff66cc',
    cells: [[0, 0], [1, 0], [0, 1], [1, 1]], rotatable: false, unlockAct: 5,
    tip: '지역 복제. 4칸 대형 모듈로 최고 수준의 가용성을 제공한다.',
  },
};

// Pattern families — 3+ of a family in deck triggers "아키텍처 철학" (halves debt gen).
export const FAMILIES = {
  micro: { id: 'micro', name: '마이크로서비스', color: PALETTE.cyan },
  event: { id: 'event', name: '이벤트 드리븐', color: PALETTE.warnYellow },
  layered: { id: 'layered', name: '레이어드', color: '#7c5cff' },
  hybrid: { id: 'hybrid', name: '하이브리드', color: PALETTE.synergyGold },
};

// Pattern cards. `synergy` = base synergy when its `requires` modules are present.
// `requires` = module ids that must exist on grid to fire. `effect` describes special.
export const PATTERN_CARDS = {
  p_micro_split: {
    id: 'p_micro_split', name: '서비스 분할', family: 'micro', synergy: 12,
    requires: ['api_gateway', 'cache'], cost: 0, unlockAct: 2,
    text: 'API GW + 캐시가 그리드에 있으면 시너지 +12.',
  },
  p_micro_scale: {
    id: 'p_micro_scale', name: '독립 확장', family: 'micro', synergy: 14,
    requires: ['autoscaler'], cost: 0, unlockAct: 2,
    text: '오토스케일러 배치 시 시너지 +14.',
  },
  p_micro_gw: {
    id: 'p_micro_gw', name: '게이트웨이 집약', family: 'micro', synergy: 10,
    requires: ['api_gateway'], cost: 0, unlockAct: 2,
    text: 'API GW 배치 시 시너지 +10.',
  },
  p_event_queue: {
    id: 'p_event_queue', name: '비동기 파이프', family: 'event', synergy: 10,
    requires: ['message_queue'], cost: 0, unlockAct: 3,
    text: '메시지 큐 배치 시 시너지 +10.',
  },
  p_event_failover: {
    id: 'p_event_failover', name: '페일오버', family: 'event', synergy: 9,
    requires: ['circuit_breaker'], cost: 0, unlockAct: 3, failover: true,
    text: '서킷 브레이커와 함께 장애 슬롯 1개를 즉시 복구(페일오버).',
  },
  p_event_buffer: {
    id: 'p_event_buffer', name: '버퍼 흡수', family: 'event', synergy: 10,
    requires: ['message_queue', 'cache'], cost: 0, unlockAct: 3,
    text: '메시지 큐 + 캐시가 있으면 시너지 +10.',
  },
  p_layered_tier: {
    id: 'p_layered_tier', name: '계층 분리', family: 'layered', synergy: 12,
    requires: ['database', 'api_gateway'], cost: 0, unlockAct: 4,
    text: 'DB + API GW가 서로 다른 레이어에 있으면 시너지 +12.',
  },
  p_layered_data: {
    id: 'p_layered_data', name: '데이터 정합', family: 'layered', synergy: 14,
    requires: ['database'], cost: 0, unlockAct: 4,
    text: 'DB 배치 시 시너지 +14.',
  },
  p_layered_repl: {
    id: 'p_layered_repl', name: '복제 계층', family: 'layered', synergy: 16,
    requires: ['multi_region'], cost: 0, unlockAct: 5,
    text: '멀티리전 복제 배치 시 시너지 +16.',
  },
  p_hybrid_refactor: {
    id: 'p_hybrid_refactor', name: '리팩터링', family: 'hybrid', synergy: 6,
    requires: [], cost: 0, unlockAct: 3, refactor: 15,
    text: '사용 시 기술 부채 -15 (덱에 남아 재사용 가능).',
  },
  p_hybrid_balance: {
    id: 'p_hybrid_balance', name: '균형 설계', family: 'hybrid', synergy: 10,
    requires: [], cost: 0, unlockAct: 5,
    text: '어떤 구성에서도 시너지 +10 (안정적).',
  },
};

// Requirement cards: each demands a module type be present. `debtIfUnmet` on turn-end.
export const REQUIREMENT_CARDS = {
  r_login: { id: 'r_login', name: '사용자 로그인', need: 'api_gateway', reward: 8, tip: '외부 사용자가 접속할 관문이 필요합니다.' },
  r_store: { id: 'r_store', name: '주문 저장', need: 'database', reward: 10, tip: '주문 데이터를 영구 보관할 저장소가 필요합니다.' },
  r_fast: { id: 'r_fast', name: '빠른 응답', need: 'cache', reward: 8, tip: '응답 속도를 높일 캐시가 필요합니다.' },
  r_async: { id: 'r_async', name: '비동기 처리', need: 'message_queue', reward: 11, tip: '작업을 비동기로 넘길 큐가 필요합니다.' },
  r_resilient: { id: 'r_resilient', name: '장애 격리', need: 'circuit_breaker', reward: 12, tip: '연쇄 장애를 막을 차단기가 필요합니다.' },
  r_scale: { id: 'r_scale', name: '트래픽 확장', need: 'autoscaler', reward: 13, tip: '트래픽 급증에 대응할 확장기가 필요합니다.' },
  r_global: { id: 'r_global', name: '글로벌 가용성', need: 'multi_region', reward: 16, tip: '전 지역 가용성을 위한 복제가 필요합니다.' },
};

// Incident events (Act 3+): disrupt a placed module -> down state.
export const INCIDENTS = {
  i_traffic: { id: 'i_traffic', name: '트래픽 폭증', debt: 12, tip: '갑작스러운 트래픽으로 슬롯 하나가 다운되었습니다.' },
  i_dbfail: { id: 'i_dbfail', name: 'DB 과부하', debt: 14, tip: '데이터 레이어 과부하로 슬롯이 다운되었습니다.' },
  i_network: { id: 'i_network', name: '네트워크 단절', debt: 10, tip: '엣지 연결이 끊겨 슬롯이 다운되었습니다.' },
};

// Boss audit constraints for Act 5. Composition determined by roadmap choice.
export const CONSTRAINTS = {
  security: { id: 'security', name: '보안', need: 'circuit_breaker', tip: '장애 차단기로 보안 경계를 확보하라.' },
  scalability: { id: 'scalability', name: '확장성', need: 'autoscaler', tip: '오토스케일러로 확장성을 입증하라.' },
  cost: { id: 'cost', name: '비용 효율', maxDebt: 45, tip: '기술 부채를 45 이하로 유지하라.' },
  maintainability: { id: 'maintainability', name: '유지보수성', minSynergy: 60, tip: '시너지 점수 60 이상을 달성하라.' },
};

// Roadmap paths (Act 4). Each alters debt/rewards and Act 5 boss constraints.
export const ROADMAP_PATHS = {
  fast: {
    id: 'fast', name: '빠른 출시', icon: '🚀', debt: 15, extraSlots: 4,
    refactorCards: 0, synergyMult: 1,
    constraints: ['security', 'scalability', 'cost', 'maintainability'],
    tip: '기술 부채 +15, 새 모듈 슬롯 +4. 보스는 4개 제약을 모두 요구.',
  },
  stable: {
    id: 'stable', name: '안정화', icon: '🛡', debt: -20, extraSlots: 0,
    refactorCards: 2, synergyMult: 1,
    constraints: ['security', 'cost', 'maintainability'],
    tip: '기술 부채 -20, 리팩터링 카드 2장. 보스 제약 3개(확장성 면제).',
  },
  innovation: {
    id: 'innovation', name: '혁신', icon: '💡', debt: 0, extraSlots: 0,
    refactorCards: 0, synergyMult: 1.35,
    constraints: ['scalability', 'maintainability'],
    tip: '시너지 ×1.5, 그리드 재편. 보스 제약 2개지만 기준이 높음.',
  },
};

// Act configuration: grid size, requirement pool, whether patterns/incidents active.
export const ACTS = [
  {
    n: 1, title: '막 1 — 첫 설계 브리핑', cols: 4, rows: 4,
    reqPool: ['r_login', 'r_store', 'r_fast'], turns: 3,
    patterns: false, incidents: false, character: 'archi',
    briefing: '신입 SA 지망생 아키의 첫 프로젝트. 제한된 4×4 서버 그리드에 모듈을 배치해 클라이언트 요구사항을 충족하라. 연결이 끊기면 기술 부채가 쌓인다.',
  },
  {
    n: 2, title: '막 2 — 패턴 드래프트', cols: 6, rows: 6,
    reqPool: ['r_login', 'r_store', 'r_fast', 'r_async'], turns: 3,
    patterns: true, incidents: false, character: 'kang',
    briefing: '요구사항이 늘었다. 강 디렉터가 아키텍처 패턴 카드를 소개한다. 3장 중 1장을 골라 덱에 추가하고, 일관된 방향의 시너지를 노려라.',
  },
  {
    n: 3, title: '막 3 — 장애 대응 압박', cols: 6, rows: 6,
    reqPool: ['r_async', 'r_resilient', 'r_fast', 'r_store'], turns: 4,
    patterns: true, incidents: true, character: 'incbot',
    briefing: '스테이징에서 장애가 터졌다. 인시던트 봇이 슬롯을 다운시킨다. 3턴 안에 재배치하거나 페일오버로 복구하라. 방치하면 연쇄 장애로 번진다.',
  },
  {
    n: 4, title: '막 4 — 로드맵 분기', cols: 8, rows: 6,
    reqPool: ['r_scale', 'r_resilient', 'r_async', 'r_store'], turns: 3,
    patterns: true, incidents: true, character: 'kang', roadmap: true,
    briefing: '클라이언트가 확장을 요청한다. 세 갈래 로드맵 앞에 섰다. 선택한 경로가 최종 감사의 제약 구성을 결정한다.',
  },
  {
    n: 5, title: '막 5 — 최종 기술 감사', cols: 8, rows: 8,
    reqPool: ['r_global', 'r_scale', 'r_resilient'], turns: 4,
    patterns: true, incidents: true, character: 'incbot', boss: true,
    briefing: '이사회 기술 감사. 로드맵에서 정해진 제약들을 동시에 충족해야 한다. 지금까지 쌓아온 모든 선택이 S~F 등급으로 확정된다.',
  },
];

export function moduleList() { return Object.values(MODULES); }
export function patternList() { return Object.values(PATTERN_CARDS); }
