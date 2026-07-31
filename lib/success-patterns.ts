export type PatternKind =
  | "CoreLoop"
  | "Tension"
  | "Progression"
  | "Narrative"
  | "Discovery"
  | "Mastery"
  | "Expression"
  | "Defense";

export type SuccessPattern = {
  id: string;
  kind: PatternKind;
  name: string;
  intent: string;
  sequence: string[];
  requires: string[];
  buildElements: string[];
  failureModes: string[];
};

export type PatternFormula = {
  id: string;
  title: string;
  reference: string;
  genre: string;
  thesis: string;
  sourceUrl: string;
  sourceLabel: string;
  patterns: SuccessPattern[];
  copyrightBoundary: string;
};

const boundary =
  "캐릭터·명칭·대사·세계·레벨을 복제하지 않고 추상적인 규칙, 리듬, 피드백 구조만 새 표현에 적용합니다.";

export const representativeFormulas: PatternFormula[] = [
  {
    id: "tetris-clarity-pressure",
    title: "명료한 규칙과 누적 압박",
    reference: "Tetris",
    genre: "퍼즐",
    thesis: "즉시 이해되는 단일 조작이 되돌리기 어려운 공간 결정과 속도 상승을 만나 숙련 루프를 만든다.",
    sourceUrl: "https://play.tetris.com/about",
    sourceLabel: "Tetris 공식 소개",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "simple-rule-deep-state",
        kind: "Mastery",
        name: "단순 조작·깊은 상태",
        intent: "적은 입력으로 매 순간 다른 공간 문제를 만든다.",
        sequence: ["형태 확인", "위치 예측", "배치 확정", "공간 결과 누적", "빈 줄 제거"],
        requires: ["읽기 쉬운 상태", "즉각적인 입력", "되돌리기 어려운 결정"],
        buildElements: ["그리드 상태", "다음 요소 미리보기", "점수·콤보", "속도 곡선"],
        failureModes: ["규칙 예외가 많음", "결과를 예측할 수 없음", "속도만 증가하고 새 판단은 없음"],
      },
    ],
  },
  {
    id: "mario-teach-through-play",
    title: "플레이로 가르치는 레벨",
    reference: "Super Mario Bros.",
    genre: "플랫포머",
    thesis: "안전한 소개, 변형, 압박, 회수의 순서로 설명문 없이 조작과 위험을 학습시킨다.",
    sourceUrl: "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAAAE.pdf",
    sourceLabel: "Nintendo 공식 매뉴얼",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "introduce-remix-test",
        kind: "Progression",
        name: "소개·변형·시험",
        intent: "하나의 메커니즘을 안전하게 보여준 뒤 결합 문제로 숙련을 증명시킨다.",
        sequence: ["안전한 소개", "단독 연습", "기존 요소와 결합", "압박 속 시험", "보상"],
        requires: ["일관된 조작", "위험 전 사전 신호", "짧은 재시도"],
        buildElements: ["튜토리얼 구간", "체크포인트", "파워업", "난도 곡선"],
        failureModes: ["텍스트로만 가르침", "소개 없이 처벌", "같은 문제의 수치 강화만 반복"],
      },
    ],
  },
  {
    id: "zelda-systemic-curiosity",
    title: "보이는 목표와 시스템적 해결",
    reference: "The Legend of Zelda: Breath of the Wild",
    genre: "오픈월드 어드벤처",
    thesis: "멀리서 보이는 호기심 대상과 일관된 물리·환경 규칙이 플레이어 스스로 경로와 해법을 만들게 한다.",
    sourceUrl: "https://assets.nintendo.com/image/upload/v1675114089/Microsites/zelda-breath-of-the-wild/pdf/ExplorersGuide.pdf",
    sourceLabel: "Nintendo Explorer's Guide",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "see-plan-reach-discover",
        kind: "Discovery",
        name: "발견 가능한 지평선",
        intent: "지도 마커보다 시각적 단서로 다음 모험을 선택하게 한다.",
        sequence: ["랜드마크 발견", "경로 계획", "환경 문제 대응", "도착", "새 지평선 공개"],
        requires: ["가시적 랜드마크", "복수 이동법", "환경 규칙"],
        buildElements: ["전망 지점", "스태미나", "날씨", "우회 경로", "발견 보상"],
        failureModes: ["마커만 따라감", "한 가지 정답 경로", "규칙이 상황마다 달라짐"],
      },
    ],
  },
  {
    id: "minecraft-survival-expression",
    title: "생존 제약이 만드는 창작",
    reference: "Minecraft",
    genre: "샌드박스 생존",
    thesis: "탐험·채집·제작·건설이 서로 자원을 공급하며 플레이어가 스스로 목표와 흔적을 만든다.",
    sourceUrl: "https://www.minecraft.net/en-us/article/what-minecraft",
    sourceLabel: "Minecraft 공식 소개",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "gather-craft-transform",
        kind: "Expression",
        name: "채집·제작·세계 변형",
        intent: "생존을 위한 행동이 결국 개인적인 창작과 장기 목표로 확장된다.",
        sequence: ["위험 발견", "자원 채집", "도구 제작", "안전 확보", "세계 변형", "더 먼 탐험"],
        requires: ["조합 가능한 자원", "영구적인 세계 변화", "자기 설정 목표"],
        buildElements: ["인벤토리", "제작법", "건설", "낮밤", "절차 월드"],
        failureModes: ["자원 용도가 하나뿐", "만든 결과가 보존되지 않음", "선택 없이 정해진 제작 순서"],
      },
    ],
  },
  {
    id: "dark-souls-risk-mastery",
    title: "위험·회수·숙련",
    reference: "Dark Souls",
    genre: "액션 RPG",
    thesis: "실패 비용과 회수 기회를 함께 제공해 지식과 조작 숙련 자체가 가장 큰 성장으로 느껴지게 한다.",
    sourceUrl: "https://en.bandainamcoent.eu/dark-souls",
    sourceLabel: "Bandai Namco 공식 시리즈 페이지",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "risk-loss-recovery",
        kind: "Tension",
        name: "위험 자원의 회수",
        intent: "더 진행할지 안전하게 돌아갈지 반복적으로 판단하게 한다.",
        sequence: ["가치 축적", "안전 지점과 거리 증가", "죽음", "회수 기회", "학습 후 재도전"],
        requires: ["공정한 사전 신호", "짧고 일관된 전투", "회수 가능한 손실"],
        buildElements: ["체크포인트", "손실 자원", "회수 지점", "적 재배치", "텔레그래프"],
        failureModes: ["피할 수 없는 공격", "지나치게 긴 복귀", "왜 실패했는지 알 수 없음"],
      },
    ],
  },
  {
    id: "slay-spire-synergy",
    title: "확률 속 전략적 시너지",
    reference: "Slay the Spire",
    genre: "로그라이크 덱빌딩",
    thesis: "불완전한 선택지에서 덱의 방향을 만들고 경로와 체력을 함께 관리하게 한다.",
    sourceUrl: "https://store.steampowered.com/app/646570/Slay_the_Spire/",
    sourceLabel: "공식 Steam 제품 설명",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "draft-synergy-adapt",
        kind: "CoreLoop",
        name: "드래프트·시너지·적응",
        intent: "완성 조합을 지급하지 않고 매 선택이 미래 선택의 가치를 바꾸게 한다.",
        sequence: ["전투 정보 확인", "카드 사용", "보상 선택", "덱 정제", "경로 선택", "시너지 검증"],
        requires: ["불완전 정보", "카드 간 상호작용", "제거·거절 선택"],
        buildElements: ["카드", "유물", "분기 지도", "적 의도", "보스 제약"],
        failureModes: ["좋은 카드를 모두 고르면 됨", "시너지보다 희귀도가 중요", "적 의도가 숨겨져 대응 불가"],
      },
    ],
  },
  {
    id: "hades-failure-story",
    title: "실패가 진행시키는 서사",
    reference: "Hades",
    genre: "액션 로그라이트",
    thesis: "반복 도전의 실패가 영구 성장과 관계 대화를 열어 패배도 콘텐츠를 본 경험으로 바꾼다.",
    sourceUrl: "https://www.supergiantgames.com/blog/hades-faq/",
    sourceLabel: "Supergiant 공식 FAQ",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "fail-return-reveal",
        kind: "Narrative",
        name: "실패·귀환·새 발견",
        intent: "런 종료를 벌이 아니라 다음 이야기와 빌드를 고르는 전환점으로 만든다.",
        sequence: ["도전", "가변 빌드", "실패 또는 귀환", "관계 반응", "영구 선택", "새 도전"],
        requires: ["짧은 반응 대사", "영구 진행", "매번 달라지는 조합"],
        buildElements: ["허브", "관계 상태", "런 기록", "영구 업그레이드", "가변 축복"],
        failureModes: ["죽으면 같은 내용 반복", "영구 성장이 실력보다 강함", "대화가 플레이 사건을 반영하지 않음"],
      },
    ],
  },
  {
    id: "stardew-routine-belonging",
    title: "일상 루틴과 공동체 성장",
    reference: "Stardew Valley",
    genre: "생활 RPG",
    thesis: "제한된 하루 안에서 농사·탐험·관계 중 우선순위를 선택하고 그 흔적이 농장과 마을에 누적된다.",
    sourceUrl: "https://www.stardewvalley.net/about/",
    sourceLabel: "Stardew Valley 공식 소개",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "daily-choice-visible-home",
        kind: "Progression",
        name: "일일 선택·보이는 터전",
        intent: "작은 반복 행동을 눈에 보이는 장기 변화와 관계 진전으로 연결한다.",
        sequence: ["하루 계획", "에너지 소비", "생산·관계 선택", "수확", "터전 개선", "계절 변화"],
        requires: ["제한된 시간·에너지", "복수 활동", "영구적인 공간 변화"],
        buildElements: ["일정", "관계도", "생산", "집 꾸미기", "계절", "공동체 목표"],
        failureModes: ["매일 정답 루틴 고정", "관계와 생산이 분리", "꾸민 결과가 기능·감정에 영향 없음"],
      },
    ],
  },
  {
    id: "last-of-us-bond-pressure",
    title: "공동 위험이 만드는 관계",
    reference: "The Last of Us",
    genre: "서사 생존 어드벤처",
    thesis: "희소 자원과 공동 위험 속 행동으로 관계 변화를 증명하고 후반의 가치 충돌에 감정적 무게를 만든다.",
    sourceUrl: "https://www.playstation.com/en-us/games/the-last-of-us-part-i/",
    sourceLabel: "PlayStation 공식 게임 소개",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "shared-danger-bond",
        kind: "Narrative",
        name: "공동 위험을 통한 유대",
        intent: "대사로 친밀함을 선언하지 않고 서로를 위해 감수한 손해로 관계를 보여준다.",
        sequence: ["목적이 다른 동행", "공동 위기", "손해를 감수한 도움", "조용한 반응", "역할 역전", "가치 충돌"],
        requires: ["동행자 상태", "공유 위협", "관계가 바꾸는 플레이"],
        buildElements: ["동행 AI", "희소 자원", "관계 비트", "보호·신뢰 행동", "결말 선택"],
        failureModes: ["관계 변화가 대사에만 존재", "동행자가 플레이에 불필요", "마지막 선택의 사전 준비 부족"],
      },
    ],
  },
  {
    id: "pvz-readable-counters",
    title: "읽기 쉬운 상성과 변주",
    reference: "Plants vs. Zombies",
    genre: "라인 디펜스",
    thesis: "명확한 공격 경로와 유닛 역할 위에 새로운 적·환경 변주를 하나씩 더해 빠른 전술 판단을 만든다.",
    sourceUrl: "https://www.ea.com/en/games/plants-vs-zombies/plants-vs-zombies",
    sourceLabel: "EA 공식 게임 소개",
    copyrightBoundary: boundary,
    patterns: [
      {
        id: "preview-place-counter",
        kind: "Defense",
        name: "위협 예고·배치·상성",
        intent: "적을 읽고 제한 자원을 어느 라인과 역할에 쓸지 결정하게 한다.",
        sequence: ["위협 예고", "자원 생산", "라인 배치", "상성 확인", "긴급 대응", "새 환경 변주"],
        requires: ["명확한 라인", "서로 다른 유닛 역할", "적 사전 신호"],
        buildElements: ["웨이브", "건설 자원", "유닛 쿨다운", "적 아키타입", "환경 규칙"],
        failureModes: ["한 유닛이 모든 적 해결", "다음 위협을 알 수 없음", "적 체력과 수만 증가"],
      },
    ],
  },
];

export type BuildGoal = {
  id: string;
  category: "Story" | "Gameplay" | "Controls" | "Character" | "World" | "Content" | "Quality" | "Service";
  title: string;
  definition: string;
  acceptance: string[];
  derivedFrom: string[];
};

export type GenreProfile = {
  id: string;
  name: string;
  tagline: string;
  playerFantasy: string;
  formulaIds: string[];
  color: string;
};

export const genreProfiles: GenreProfile[] = [
  { id: "defense", name: "디펜스", tagline: "예측하고 배치해 밀려오는 위협을 막는다", playerFantasy: "열세 속에서 방어선을 설계하는 지휘관", formulaIds: ["pvz-readable-counters", "slay-spire-synergy"], color: "#efb45e" },
  { id: "action-rpg", name: "액션 RPG", tagline: "전투 숙련과 성장으로 강한 적을 돌파한다", playerFantasy: "위험을 학습해 한계를 넘어서는 전사", formulaIds: ["dark-souls-risk-mastery", "hades-failure-story"], color: "#e36f62" },
  { id: "roguelite", name: "로그라이트", tagline: "실패할 때마다 새로운 빌드와 이야기가 열린다", playerFantasy: "불확실한 조합을 자신의 전략으로 완성하는 도전자", formulaIds: ["hades-failure-story", "slay-spire-synergy"], color: "#ad82e8" },
  { id: "adventure", name: "어드벤처", tagline: "탐험과 선택으로 세계의 비밀을 발견한다", playerFantasy: "자신의 호기심으로 길과 해법을 만드는 탐험가", formulaIds: ["zelda-systemic-curiosity", "last-of-us-bond-pressure"], color: "#64b9e8" },
  { id: "survival", name: "생존·제작", tagline: "제약 속에서 자원을 모아 살아갈 터전을 만든다", playerFantasy: "가혹한 세계를 살 수 있는 장소로 바꾸는 개척자", formulaIds: ["minecraft-survival-expression", "dark-souls-risk-mastery"], color: "#7ec987" },
  { id: "life-sim", name: "생활 시뮬레이션", tagline: "일상 선택이 관계와 공간의 변화로 쌓인다", playerFantasy: "나만의 생활과 공동체를 가꾸는 주민", formulaIds: ["stardew-routine-belonging", "minecraft-survival-expression"], color: "#e994ae" },
  { id: "platformer", name: "플랫포머", tagline: "움직임을 익혀 정교하게 설계된 장애를 넘는다", playerFantasy: "몸의 리듬과 공간을 지배하는 곡예가", formulaIds: ["mario-teach-through-play", "tetris-clarity-pressure"], color: "#66d7c1" },
  { id: "puzzle-strategy", name: "퍼즐·전략", tagline: "명확한 규칙 속에서 깊은 해법과 시너지를 찾는다", playerFantasy: "복잡한 상태를 읽고 우아한 해법을 만드는 설계자", formulaIds: ["tetris-clarity-pressure", "slay-spire-synergy"], color: "#ddcf69" },
];

export function formulasForGenre(genreId: string) {
  const ids = genreProfiles.find((genre) => genre.id === genreId)?.formulaIds ?? [];
  return representativeFormulas.filter((formula) => ids.includes(formula.id));
}

export function createBuildGoals(
  idea: string,
  formulas: PatternFormula[],
): BuildGoal[] {
  const patternNames = formulas.flatMap((formula) => formula.patterns.map((pattern) => pattern.name));
  const mechanics = formulas.flatMap((formula) => formula.patterns.flatMap((pattern) => pattern.buildElements));
  const sourceIds = formulas.map((formula) => formula.id);
  const unique = (items: string[]) => [...new Set(items)];
  return [
    {
      id: "goal-story",
      category: "Story",
      title: "플레이 가능한 상세 스토리",
      definition: `“${idea || "사용자 아이디어"}”를 시작·발전·위기·결정·결말의 플레이 사건으로 구현한다.`,
      acceptance: ["모든 장면에 플레이어 행동과 상태 변화가 있다", "핵심 갈등이 마지막 선택 또는 보스 규칙에서 회수된다", "최소 3개 장면과 2개 결말이 존재한다"],
      derivedFrom: patternNames,
    },
    {
      id: "goal-loop",
      category: "Gameplay",
      title: "검증 가능한 핵심 루프",
      definition: `${patternNames.join(" + ") || "탐험·행동·보상"}을 30초 안에 경험하고 반복할 수 있다.`,
      acceptance: ["플레이어 목표·성공·실패 조건이 코드로 판정된다", "2~3분마다 새 위험·능력·정보 중 하나가 열린다", "행동 결과가 즉시 시각·음향·수치로 피드백된다"],
      derivedFrom: sourceIds,
    },
    {
      id: "goal-controls",
      category: "Controls",
      title: "조작과 온보딩",
      definition: "키보드·마우스와 터치에서 동일한 핵심 행동을 수행한다.",
      acceptance: ["이동·주 행동·보조 행동·일시정지 조작이 표시된다", "첫 60초 안에 안전한 조작 연습이 있다", "재매핑 또는 대체 입력 경로가 있다"],
      derivedFrom: ["introduce-remix-test"],
    },
    {
      id: "goal-character",
      category: "Character",
      title: "캐릭터 생성과 플레이 역할",
      definition: "외형 선택이 캐릭터 카드에, 역할 선택이 능력과 조작에 반영된다.",
      acceptance: ["이름·아키타입·색상·장비를 선택한다", "각 아키타입에 고유 능력과 약점이 있다", "GLB 모델·애니메이션·충돌 크기가 검증된다"],
      derivedFrom: sourceIds,
    },
    {
      id: "goal-world",
      category: "World",
      title: "온톨로지와 일치하는 월드",
      definition: "장소·인물·자원·위험의 관계가 실제 배치와 규칙으로 보인다.",
      acceptance: ["모든 필수 노드가 장면·UI·규칙 중 하나에 매핑된다", "참조되지 않는 핵심 노드가 없다", "월드 상태 변화가 저장된다"],
      derivedFrom: sourceIds,
    },
    {
      id: "goal-content",
      category: "Content",
      title: "서비스 가능한 콘텐츠 분량",
      definition: "첫 빌드는 완결된 8~15분 플레이를 제공한다.",
      acceptance: [`필수 구현 요소: ${unique(mechanics).slice(0, 12).join(", ")}`, "최소 1개의 튜토리얼·중간 위기·클라이맥스가 있다", "반복 콘텐츠는 상태·상성·경로 중 하나를 변화시킨다"],
      derivedFrom: sourceIds,
    },
    {
      id: "goal-quality",
      category: "Quality",
      title: "자동 플레이테스트 통과",
      definition: "막힘 없이 시작부터 모든 결말까지 도달 가능한지 검사한다.",
      acceptance: ["승리 경로가 최소 1개 존재한다", "실패 이유와 재시도 방법이 표시된다", "콘솔 오류 0건·목표 FPS 30 이상·초기 로딩 10초 이내"],
      derivedFrom: formulas.flatMap((formula) => formula.patterns.flatMap((pattern) => pattern.failureModes)),
    },
    {
      id: "goal-service",
      category: "Service",
      title: "로컬 서비스 빌드",
      definition: "Bedrock 키는 서버 측에서만 사용하고 게임 결과는 정적 웹 빌드로 내보낸다.",
      acceptance: ["새로고침 후 진행 상태가 복원된다", "프로젝트 JSON과 정적 웹 ZIP을 내보낼 수 있다", "에셋 출처·라이선스·적용 공식이 빌드 명세에 포함된다"],
      derivedFrom: sourceIds,
    },
  ];
}
