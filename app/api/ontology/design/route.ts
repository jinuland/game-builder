import { formulasForGenre, genreProfiles } from "@/lib/success-patterns";

const stringArray = { type: "array", items: { type: "string" } };
const BEDROCK_TIMEOUT_MS = 15 * 60 * 1_000;
const storySchema = {
  type: "object", additionalProperties: false,
  required: ["title", "logline", "playerRole", "world", "centralConflict", "coreLoop", "acts", "nodes", "edges", "designRationale"],
  properties: {
    title: { type: "string" }, logline: { type: "string" }, playerRole: { type: "string" },
    world: { type: "string" }, centralConflict: { type: "string" }, coreLoop: stringArray,
    acts: { type: "array", items: { type: "object", additionalProperties: false, required: ["title", "story", "playerAction", "stateChange"], properties: { title: { type: "string" }, story: { type: "string" }, playerAction: { type: "string" }, stateChange: { type: "string" } } } },
    nodes: { type: "array", items: { type: "object", additionalProperties: false, required: ["id", "kind", "name", "description"], properties: { id: { type: "string" }, kind: { type: "string" }, name: { type: "string" }, description: { type: "string" } } } },
    edges: { type: "array", items: { type: "object", additionalProperties: false, required: ["source", "target", "type"], properties: { source: { type: "string" }, target: { type: "string" }, type: { type: "string" } } } },
    designRationale: stringArray,
  },
};
const goalsSchema = {
  type: "object", additionalProperties: false,
  required: ["validation", "gameGoal", "artDirection", "imageGenerationPlan", "balancePlan", "funIterationPlan", "completionContract", "goals"],
  properties: {
    validation: { type: "object", additionalProperties: false, required: ["score", "verdict", "summary", "strengths", "risks"], properties: {
      score: { type: "number" }, verdict: { type: "string" }, summary: { type: "string" },
      strengths: stringArray, risks: stringArray,
    } },
    gameGoal: { type: "string" },
    artDirection: { type: "object", additionalProperties: false, required: ["visualIdentity", "cameraAndComposition", "environmentDesign", "characterDesign", "animationPlan", "assetPipeline"], properties: {
      visualIdentity: { type: "string" }, cameraAndComposition: { type: "string" },
      environmentDesign: stringArray, characterDesign: stringArray, animationPlan: stringArray, assetPipeline: stringArray,
    } },
    imageGenerationPlan: { type: "object", additionalProperties: false, required: ["modelWorkflow", "characterPrompts", "environmentPrompts", "assetSpecs", "consistencyChecks"], properties: {
      modelWorkflow: { type: "string" }, characterPrompts: stringArray, environmentPrompts: stringArray,
      assetSpecs: stringArray, consistencyChecks: stringArray,
    } },
    balancePlan: { type: "object", additionalProperties: false, required: ["targetMetrics", "simulationCases", "playtestScenarios", "telemetry", "passCriteria"], properties: {
      targetMetrics: stringArray, simulationCases: stringArray, playtestScenarios: stringArray,
      telemetry: stringArray, passCriteria: stringArray,
    } },
    funIterationPlan: { type: "object", additionalProperties: false, required: ["funHypotheses", "firstPlayProtocol", "observationMetrics", "issueLog", "iterationLoop", "playerPerspectives", "stopCriteria"], properties: {
      funHypotheses: stringArray, firstPlayProtocol: stringArray, observationMetrics: stringArray,
      issueLog: stringArray, iterationLoop: stringArray, playerPerspectives: stringArray, stopCriteria: stringArray,
    } },
    completionContract: { type: "object", additionalProperties: false, required: ["definitionOfDone", "traceability", "sourceAudit", "browserValidation", "fullPlaythrough", "testExecution", "prohibitedChecks", "deploymentGate", "finalReport"], properties: {
      definitionOfDone: stringArray, traceability: stringArray, sourceAudit: stringArray,
      browserValidation: stringArray, fullPlaythrough: stringArray, testExecution: stringArray,
      prohibitedChecks: stringArray, deploymentGate: stringArray, finalReport: stringArray,
    } },
    goals: { type: "array", items: { type: "object", additionalProperties: false, required: ["category", "title", "objective", "tasks", "acceptance", "dependencies"], properties: {
      category: { type: "string" }, title: { type: "string" }, objective: { type: "string" },
      tasks: stringArray, acceptance: stringArray, dependencies: stringArray,
    } } },
  },
};

const conceptSchema = {
  type: "object", additionalProperties: false,
  required: ["conceptTitle", "experiencePromise", "designPillars", "gameplay", "visual", "audio", "contentPlan", "risks", "reviewQuestions"],
  properties: {
    conceptTitle: { type: "string" }, experiencePromise: { type: "string" }, designPillars: stringArray,
    gameplay: { type: "object", additionalProperties: false, required: ["perspective", "sessionFlow", "coreMechanics", "controls", "progression", "failureAndRecovery"], properties: {
      perspective: { type: "string" }, sessionFlow: { type: "string" }, coreMechanics: stringArray,
      controls: stringArray, progression: stringArray, failureAndRecovery: stringArray,
    } },
    visual: { type: "object", additionalProperties: false, required: ["style", "camera", "palette", "characters", "environments", "effects", "characterImagePrompts", "environmentImagePrompts"], properties: {
      style: { type: "string" }, camera: { type: "string" }, palette: stringArray,
      characters: stringArray, environments: stringArray, effects: stringArray,
      characterImagePrompts: stringArray, environmentImagePrompts: stringArray,
    } },
    audio: { type: "object", additionalProperties: false, required: ["musicDirection", "soundMoments"], properties: {
      musicDirection: { type: "string" }, soundMoments: stringArray,
    } },
    contentPlan: stringArray, risks: stringArray, reviewQuestions: stringArray,
  },
};

async function generate(schema: object, toolName: string, system: string, payload: unknown, strict = true, requestSignal?: AbortSignal, maxTokenOverride?: number) {
  const region = process.env.GAMEFORGE_BEDROCK_REGION ?? process.env.AWS_REGION ?? "ap-northeast-2";
  const modelId = process.env.GAMEFORGE_BEDROCK_MODEL_ID ?? "us.anthropic.claude-sonnet-4-6";
  const maxTokens = modelId.includes("opus-4-6") ? 128_000 : 64_000;
  const token = process.env.AWS_BEARER_TOKEN_BEDROCK;
  if (!token) throw new Error("AWS_BEARER_TOKEN_BEDROCK이 설정되지 않았습니다.");
  const requestBody = {
    system: [{ text: system }],
    messages: [{ role: "user", content: [{ text: JSON.stringify(payload) }] }],
    inferenceConfig: { maxTokens: maxTokenOverride ?? maxTokens, temperature: 0.3 },
    toolConfig: { tools: [{ toolSpec: { name: toolName, description: "구조화된 게임 설계 결과를 반환한다.", inputSchema: { json: JSON.parse(JSON.stringify(schema)) }, strict } }], toolChoice: { tool: { name: toolName } } },
  };
  const httpResponse = await fetch(`https://bedrock-runtime.${region}.amazonaws.com/model/${encodeURIComponent(modelId)}/converse`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
    signal: requestSignal ? AbortSignal.any([requestSignal, AbortSignal.timeout(BEDROCK_TIMEOUT_MS)]) : AbortSignal.timeout(BEDROCK_TIMEOUT_MS),
  });
  const response = await httpResponse.json() as {
    output?: { message?: { content?: Array<{ toolUse?: { input?: unknown } }> } };
    usage?: unknown;
    message?: string;
    stopReason?: string;
  };
  if (!httpResponse.ok) throw new Error(response.message ?? `Bedrock 요청 실패 (${httpResponse.status})`);
  const input = response.output?.message?.content?.find((block) => block.toolUse)?.toolUse?.input;
  if (!input) throw new Error("Bedrock이 구조화된 결과를 반환하지 않았습니다.");
  if (response.stopReason === "max_tokens") throw new Error("스토리 출력이 길어 생성이 중단됐습니다. 다시 시도해주세요.");
  return { result: input, model: modelId, usage: response.usage };
}

type ChatTurn = { role: "user" | "assistant"; content: string };
type DesignRequest = {
  action?: "story" | "concept" | "goals" | "refine";
  genreId?: string;
  customGenre?: string;   // free-text genre when genreId === "custom"
  idea?: string;
  story?: unknown;
  concept?: unknown;
  feedback?: string;
  actCount?: number | "auto";
  chat?: ChatTurn[];      // conversation history for interactive story refinement
  message?: string;       // latest user instruction for "refine"
};
let activeGoalRequestId: string | null = null;

// Resolve the working genre: a preset profile, or a synthesized profile for a
// user's custom genre. Custom genres carry NO internal formulas so the model
// leans on the idea itself rather than a reference game's pattern.
function resolveGenre(body: DesignRequest) {
  if (body.genreId === "custom") {
    const label = (body.customGenre ?? "").trim().slice(0, 60);
    if (label.length < 2) throw new Error("커스텀 장르 이름을 입력해주세요.");
    return {
      genre: { id: "custom", name: label, playerFantasy: "", tagline: "", custom: true },
      formulas: [] as unknown[],
    };
  }
  const genre = genreProfiles.find((item) => item.id === body.genreId);
  if (!genre) throw new Error("장르를 선택해주세요.");
  return { genre: { ...genre, custom: false }, formulas: formulasForGenre(genre.id) };
}

function textOkay(value: unknown, minimum = 8) {
  return typeof value === "string" && value.trim().length >= minimum && !/^(placeholder|todo|tbd|미정|추후 작성)[\s.!…]*$/i.test(value.trim());
}

function validateStory(story: unknown) {
  const value = story as Partial<{ title: string; logline: string; playerRole: string; world: string; centralConflict: string; coreLoop: string[]; acts: StoryAct[]; nodes: Array<{ id: string; name: string; description: string }>; edges: Array<{ source: string; target: string; type: string }> }>;
  const issues: string[] = [];
  if (!textOkay(value.title, 2) || !textOkay(value.logline, 15)) issues.push("게임 제목과 로그라인이 충분히 구체적이어야 합니다.");
  if (!textOkay(value.playerRole) || !textOkay(value.world) || !textOkay(value.centralConflict)) issues.push("플레이어 역할·세계·중심 갈등이 비어 있거나 지나치게 짧습니다.");
  if (!Array.isArray(value.acts) || value.acts.length < 3 || value.acts.some((act) => !textOkay(act.title, 2) || !textOkay(act.story) || !textOkay(act.playerAction) || !textOkay(act.stateChange))) issues.push("최소 3개의 막에 이야기·플레이어 행동·상태 변화가 모두 필요합니다.");
  if (!Array.isArray(value.coreLoop) || value.coreLoop.length < 3 || value.coreLoop.some((item) => !textOkay(item, 4))) issues.push("최소 3단계의 구체적인 코어 루프가 필요합니다.");
  const ids = new Set(value.nodes?.map((node) => node.id));
  if (!value.nodes || value.nodes.length < 4 || ids.size !== value.nodes.length || value.nodes.some((node) => !textOkay(node.id, 1) || !textOkay(node.name, 2) || !textOkay(node.description))) issues.push("온톨로지에는 중복되지 않은 ID와 설명을 가진 노드가 최소 4개 필요합니다.");
  if (!value.edges || value.edges.length < 3 || value.edges.some((edge) => !ids.has(edge.source) || !ids.has(edge.target) || !textOkay(edge.type, 1))) issues.push("온톨로지 관계는 존재하는 노드를 연결해야 하며 최소 3개가 필요합니다.");
  return issues;
}

type StoryAct = { title: string; story: string; playerAction: string; stateChange: string };
type GeneratedGoals = { validation?: { score?: number; verdict?: string; summary?: string; strengths?: string[]; risks?: string[] }; gameGoal?: string; artDirection?: { visualIdentity?: string; cameraAndComposition?: string; environmentDesign?: string[]; characterDesign?: string[]; animationPlan?: string[]; assetPipeline?: string[] }; imageGenerationPlan?: { modelWorkflow?: string; characterPrompts?: string[]; environmentPrompts?: string[]; assetSpecs?: string[]; consistencyChecks?: string[] }; balancePlan?: Record<string, string[]>; funIterationPlan?: Record<string, string[]>; completionContract?: Record<string, string[]>; implementationPrompt?: string; goals?: Array<{ category?: string; title?: string; objective?: string; tasks?: string[]; acceptance?: string[]; dependencies?: string[] }> };

function markdownList(items: string[] | undefined) {
  return (items ?? []).map((item) => `- ${item}`).join("\n");
}

function repairGeneratedGoals(value: GeneratedGoals) {
  const repairs: string[] = [];
  let gameGoal = value.gameGoal?.trim() ?? "";
  if (!/밸런스|균형|플레이테스트/.test(gameGoal)) {
    gameGoal += " 수치 기반 밸런스 시뮬레이션과 플레이테스트를 통과시킨다.";
    repairs.push("balance");
  }
  if (!/이미지|캐릭터|배경|에셋/.test(gameGoal)) {
    gameGoal += " 이미지 모델로 고유 캐릭터와 배경 에셋을 제작해 실제 게임에 적용한다.";
    repairs.push("assets");
  }
  if (!/직접.*플레이|반복.*플레이|재플레이|재미.*검증/.test(gameGoal)) {
    gameGoal += " 실제 브라우저에서 최소 3회 직접 반복 플레이하며 재미 문제를 찾아 개선한다.";
    repairs.push("fun-iteration");
  }
  value.gameGoal = gameGoal;
  return repairs;
}

function composeImplementationPrompt(
  genre: { name: string; playerFantasy: string },
  story: unknown,
  concept: unknown,
  goals: GeneratedGoals,
) {
  const sections = (record: Record<string, string[]> | undefined) =>
    Object.entries(record ?? {}).map(([title, items]) => `### ${title}\n${markdownList(items)}`).join("\n\n");
  const implementationGoals = (goals.goals ?? []).map((goal, index) => `### GOAL-${String(index + 1).padStart(2, "0")} · ${goal.title}
분류: ${goal.category}

목표: ${goal.objective}

작업:
${markdownList(goal.tasks)}

완료 조건:
${markdownList(goal.acceptance)}

선행 조건:
${markdownList(goal.dependencies) || "- 없음"}`).join("\n\n");

  return `# GAME FORGE 실행 명세

## 에이전트 실행 지시
당신은 아래 확정 기획을 실제 서비스 품질의 브라우저 게임으로 구현하는 수석 게임 개발자다. 질문 없이 저장소를 먼저 검사하고, 요구사항을 원자 단위 REQ ID로 분해한 뒤 구현·검증·수정·재검증한다. 일부 기능, 프로토타입, 빌드 성공만으로 완료를 선언하지 않는다. 필수 요구사항 하나라도 미구현·부분 구현·미검증이면 전체 Goal을 미완료로 보고한다.

## 제품 Goal
${goals.gameGoal}

장르: ${genre.name}
플레이어 판타지: ${genre.playerFantasy}

## 확정 스토리
\`\`\`json
${JSON.stringify(story, null, 2)}
\`\`\`

## 확정 게임 기획안
\`\`\`json
${JSON.stringify(concept, null, 2)}
\`\`\`

## 비주얼·캐릭터·배경 제작
비주얼 아이덴티티: ${goals.artDirection?.visualIdentity}
카메라와 구도: ${goals.artDirection?.cameraAndComposition}

### 캐릭터 디자인
${markdownList(goals.artDirection?.characterDesign)}

### 배경 디자인
${markdownList(goals.artDirection?.environmentDesign)}

### 애니메이션
${markdownList(goals.artDirection?.animationPlan)}

### 에셋 파이프라인
${markdownList(goals.artDirection?.assetPipeline)}

## 이미지 모델 제작 계획
${goals.imageGenerationPlan?.modelWorkflow}

### 캐릭터 생성 프롬프트
${markdownList(goals.imageGenerationPlan?.characterPrompts)}

### 배경 생성 프롬프트
${markdownList(goals.imageGenerationPlan?.environmentPrompts)}

### 규격과 일관성 검사
${markdownList([...(goals.imageGenerationPlan?.assetSpecs ?? []), ...(goals.imageGenerationPlan?.consistencyChecks ?? [])])}

## 구현 Goal
${implementationGoals}

## 밸런스 검증
${sections(goals.balancePlan)}

## 직접 플레이 재미 개선 계약
${sections(goals.funIterationPlan)}

최소 3회의 전체 플레이 사이클을 PLAY → OBSERVE → LOG → PRIORITIZE → CHANGE → REGRESSION TEST → REPLAY 순서로 수행한다. 각 회차의 문제, 원인 가설, 변경, 전후 지표, 남은 위험을 FUN-ITERATION-LOG.md에 남긴다. 문제를 발견하지 못한 플레이는 관찰 실패로 보고 초보·숙련·최적화 관점과 다른 빌드로 다시 플레이한다.

## 완료 판정 계약
${sections(goals.completionContract)}

## 강제 실행 순서
1. 저장소 전체 파일과 기존 변경을 검사하고 실행·테스트·배포 명령을 확인한다.
2. 모든 요구사항을 REQ ID 체크리스트로 만들고 구현 파일·검증 방법·증거 열을 가진 REQUIREMENTS-TRACE.md를 만든다.
3. 게임 상태 머신, 입력, 렌더링, 충돌, 저장 스키마를 먼저 설계한 뒤 수직 슬라이스를 구현한다.
4. 캐릭터·배경 에셋을 이미지 모델로 생성하고 후처리·최적화하여 실제 렌더링 경로에 연결한다. 이름만 존재하는 에셋은 구현으로 인정하지 않는다.
5. HUD, 메뉴, 튜토리얼, 오디오, 접근성, 반응형 화면, 저장·복구를 구현한다.
6. 결정론적 시드와 시간 가속을 제공해 전체 콘텐츠, 승리, 피해 승리, 게임 오버, 재도전, 새로고침 저장을 검증한다.
7. 모든 카드·시너지·상태·보스 효과는 적용 전후 실제 수치로 검사한다.
8. 실제 브라우저에서 타이틀부터 결과 화면까지 조작하고 핵심 상태별 스크린샷, 콘솔, 네트워크 404 여부를 증거로 남긴다.
9. 최소 3회 직접 플레이하며 재미 문제를 수정하고 매번 전체 회귀 테스트를 다시 실행한다.
10. 로컬 검증을 통과한 정확한 소스만 배포하고 배포 URL에서도 시작·플레이·콘솔·정적 파일을 재검증한다.

## 금지 및 품질 게이트
- TODO, placeholder, 작동하지 않는 버튼, 이름만 있는 기능, 임의의 범위 축소를 남기지 않는다.
- eval, 위험한 innerHTML, alert/confirm/prompt, 금지된 외부 에셋, 상태 머신 밖 직접 상태 변경을 전체 검색한다.
- 전체 HTML·CSS·JavaScript/TypeScript와 실제 import 그래프를 검사한다.
- console error, uncaught exception, 모듈 로드 실패, 정적 파일 404가 하나라도 있으면 완료가 아니다.
- 자동 테스트 통과만으로 재미와 플레이 완주를 입증했다고 주장하지 않는다.

## 최종 보고
구현 기능, 전체 요구사항 추적표, 모든 테스트의 입력·기대·실제·PASS/FAIL·근거, 브라우저·콘솔·스크린샷 증거, 3회 이상 재미 개선 기록, 로컬 및 배포 URL 검증, 미구현·제한 사항을 보고한다. 모든 필수 항목이 구현 완료와 검증 완료가 아니면 “Goal 달성”이라는 표현을 사용하지 않는다.
`;
}

function normalizeStoryOntology(story: unknown) {
  const value = JSON.parse(JSON.stringify(story)) as { nodes?: Array<{ id: string; name: string }>; edges?: Array<{ source: string; target: string; type: string }> };
  const nodes = value.nodes ?? [];
  const edges = value.edges ?? [];
  if (nodes.length < 2) return { story: value, repaired: false };
  const ids = new Set(nodes.map((node) => node.id));
  const normalized = (text: string) => String(text ?? "").toLowerCase().replace(/[\s_-]/g, "");
  const resolve = (candidate: string, fallbackIndex: number) => {
    if (ids.has(candidate)) return candidate;
    const key = normalized(candidate);
    const match = nodes.find((node) => normalized(node.id) === key || normalized(node.name) === key || normalized(node.id).includes(key) || (key && normalized(node.name).includes(key)));
    return match?.id ?? nodes[fallbackIndex % nodes.length].id;
  };
  let repaired = false;
  value.edges = edges.map((edge, index) => {
    const source = resolve(edge.source, index);
    let target = resolve(edge.target, index + 1);
    if (target === source) target = nodes[(nodes.findIndex((node) => node.id === source) + 1) % nodes.length].id;
    if (source !== edge.source || target !== edge.target) repaired = true;
    return { ...edge, source, target };
  });
  while (value.edges.length < 3) {
    const index = value.edges.length;
    value.edges.push({ source: nodes[index % nodes.length].id, target: nodes[(index + 1) % nodes.length].id, type: "영향" });
    repaired = true;
  }
  return { story: value, repaired };
}

function validateGeneratedGoals(value: unknown) {
  const data = value as GeneratedGoals;
  const issues: string[] = [];
  if (!data.validation || typeof data.validation.score !== "number" || !textOkay(data.validation.verdict, 4) || !textOkay(data.validation.summary, 4)) issues.push("스토리 품질 검증 결과가 없습니다.");
  if (!textOkay(data.gameGoal, 30)) issues.push("최종 게임 Goal이 구체적이지 않습니다.");
  if (!/밸런스|균형|플레이테스트/.test(data.gameGoal ?? "") || !/이미지|캐릭터|배경|에셋/.test(data.gameGoal ?? "")) issues.push("Final Game Goal에 밸런스 검증과 이미지 모델 기반 캐릭터·배경 제작이 명시되지 않았습니다.");
  if (!/직접.*플레이|반복.*플레이|재플레이|재미.*검증/.test(data.gameGoal ?? "")) issues.push("Final Game Goal에 직접 반복 플레이를 통한 재미 개선이 명시되지 않았습니다.");
  if (!data.artDirection || !textOkay(data.artDirection.visualIdentity, 80) || !textOkay(data.artDirection.cameraAndComposition, 80) || (data.artDirection.characterDesign?.length ?? 0) < 3 || (data.artDirection.environmentDesign?.length ?? 0) < 3 || (data.artDirection.assetPipeline?.length ?? 0) < 3) issues.push("캐릭터·배경·에셋 제작 지침이 불완전합니다.");
  if (!data.imageGenerationPlan || !textOkay(data.imageGenerationPlan.modelWorkflow, 80) || (data.imageGenerationPlan.characterPrompts?.length ?? 0) < 3 || (data.imageGenerationPlan.environmentPrompts?.length ?? 0) < 3 || (data.imageGenerationPlan.assetSpecs?.length ?? 0) < 3 || (data.imageGenerationPlan.consistencyChecks?.length ?? 0) < 3) issues.push("이미지 모델용 캐릭터·배경 생성 및 일관성 검수 계획이 불완전합니다.");
  const balanceSections = ["targetMetrics", "simulationCases", "playtestScenarios", "telemetry", "passCriteria"];
  if (!data.balancePlan || balanceSections.some((key) => (data.balancePlan?.[key]?.length ?? 0) < 3)) issues.push("밸런스 시뮬레이션·플레이테스트·통과 기준이 불완전합니다.");
  const funSections = ["funHypotheses", "firstPlayProtocol", "observationMetrics", "issueLog", "iterationLoop", "playerPerspectives", "stopCriteria"];
  if (!data.funIterationPlan || funSections.some((key) => (data.funIterationPlan?.[key]?.length ?? 0) < 3)) issues.push("실제 반복 플레이를 통한 재미 검증·문제 발견·개선 종료 기준이 불완전합니다.");
  const contractSections = ["definitionOfDone", "traceability", "sourceAudit", "browserValidation", "fullPlaythrough", "testExecution", "prohibitedChecks", "deploymentGate", "finalReport"];
  if (!data.completionContract || contractSections.some((key) => (data.completionContract?.[key]?.length ?? 0) < 2)) issues.push("완료 판정·추적표·브라우저 완주·테스트·배포 검증 계약이 불완전합니다.");
  if (typeof data.implementationPrompt !== "string" || data.implementationPrompt.trim().length < 4_000) issues.push("코딩 에이전트 실행 프롬프트가 4,000자 미만이거나 불완전합니다.");
  if (!Array.isArray(data.goals) || data.goals.length < 8) issues.push("구현 Goal이 8개 미만입니다.");
  if (data.goals?.some((goal) => !textOkay(goal.category, 2) || !textOkay(goal.title, 4) || !textOkay(goal.objective, 15) || !goal.tasks || goal.tasks.length < 2 || goal.tasks.some((item) => !textOkay(item, 8)) || !goal.acceptance || goal.acceptance.length < 2 || goal.acceptance.some((item) => !textOkay(item, 8)))) issues.push("빈 제목·목표·Task·완료 조건이 포함되어 있습니다.");
  return issues;
}

async function runDesign(body: DesignRequest, requestSignal?: AbortSignal) {
  const requestId = crypto.randomUUID().slice(0, 8);
  const requestStartedAt = Date.now();
  if (body.action === "goals" && activeGoalRequestId) throw new Error(`Build Goal 생성이 이미 진행 중입니다. 요청 ID: ${activeGoalRequestId}`);
  if (body.action === "goals") activeGoalRequestId = requestId;
  console.log("[gameforge-design]", JSON.stringify({ event: "bedrock_start", requestId, action: body.action, genreId: body.genreId, at: new Date().toISOString() }));
  try {
    const { genre, formulas } = resolveGenre(body);
    if (body.action === "story") {
      if (!body.idea || body.idea.trim().length < 10) throw new Error("아이디어를 조금 더 자세히 적어주세요.");
      // "auto" lets the model choose the act count that best fits the idea; a number is a soft target.
      const autoActs = body.actCount === "auto" || body.actCount == null;
      const actCount = autoActs ? "auto" : ([3, 5, 7, 4, 6].includes(body.actCount as number) ? body.actCount : 5);
      const actInstruction = autoActs
        ? "막 수는 아이디어의 서사 크기에 맞게 3~7막 사이에서 스스로 정한다. 짧고 강렬한 아이디어는 3막, 복잡한 아이디어는 더 많은 막을 쓴다."
        : `막 수는 ${actCount}막을 기본 목표로 하되, 아이디어에 더 잘 맞으면 ±1막 조정할 수 있다.`;
      const patternHint = genre.custom
        ? `장르는 사용자가 직접 정의한 "${genre.name}"이다. 정해진 참조 공식이 없으므로 오직 아이디어 자체에서 핵심 재미·플레이 루프·긴장 구조를 도출한다.`
        : `참고 장르는 "${genre.name}"이며 내부 성공 패턴(internalPatterns)은 영감의 재료일 뿐이다. 아이디어가 장르 관례와 어긋나면 아이디어를 우선하고 패턴은 느슨하게만 참고한다.`;
      const generated = await generate(
        storySchema,
        "build_editable_game_story",
        `너는 GAME FORGE의 수석 게임 디렉터다. 무엇보다 고객의 아이디어를 최우선으로 존중해 독창적이고 플레이 가능한 게임 스토리를 만든다.
${patternHint}
아이디어에 담긴 고유한 소재·톤·감정·소재를 그대로 살리고, 장르 틀에 억지로 끼워 맞춰 일반적인 결과를 내지 않는다.
참조작의 고유 캐릭터·명칭·대사·세계·레벨은 절대 복제하지 않는다. 패턴은 추상 규칙으로만 사용한다.
스토리의 모든 막에는 플레이어가 실제로 하는 행동과 코드로 관찰 가능한 상태 변화가 있어야 한다.
설정만 흥미롭고 플레이가 빈약한 결과를 피한다. ${actInstruction} 각 막이 서로 다른 플레이 상황과 상태 변화를 만들게 한다.
coreLoop은 아이디어의 핵심 반복 행동에 맞게 3~6개로 필요한 만큼만, nodes는 12개 이하, edges는 14개 이하, designRationale은 3개로 작성한다. 각 설명은 한 문장으로 제한하고 전체 결과를 간결하게 한다. nodes와 edges는 아이디어의 실제 개념(등장물·자원·규칙·목표)에서 도출한 사용자 편집용 게임 온톨로지다. 한국어로 작성한다.`,
        { genre, idea: body.idea, requestedActCount: actCount, internalPatterns: formulas, ideaFirst: true }, true, requestSignal,
      );
      const normalizedStory = normalizeStoryOntology(generated.result);
      if (normalizedStory.repaired) console.warn("[gameforge-design]", JSON.stringify({ event: "ontology_repaired", requestId, action: body.action, at: new Date().toISOString() }));
      console.log("[gameforge-design]", JSON.stringify({ event: "bedrock_complete", requestId, action: body.action, elapsedMs: Date.now() - requestStartedAt, at: new Date().toISOString() }));
      return { ...generated, result: normalizedStory.story };
    }
    if (body.action === "goals") {
      if (!body.story) throw new Error("확정할 스토리가 없습니다.");
      const normalizedStory = normalizeStoryOntology(body.story);
      if (normalizedStory.repaired) console.warn("[gameforge-design]", JSON.stringify({ event: "ontology_repaired", requestId, action: body.action, at: new Date().toISOString() }));
      const storyIssues = validateStory(normalizedStory.story);
      if (storyIssues.length) throw new Error(`스토리 검증 실패: ${storyIssues.join(" ")}`);
      const system = `너는 게임 디자인 리뷰어, 아트 디렉터, 오디오 디렉터, 웹 게임 테크 리드다. 먼저 확정된 스토리를 재미·플레이 명확성·상태 변화·구현 가능성·온톨로지 일관성 기준으로 냉정하게 검증하고 validation에 기록한다.
verdict는 반드시 PASS 또는 RISK 중 하나이며 score는 0~100이다. strengths와 risks는 각각 정확히 2개의 짧고 구체적인 문장이다. 그 다음 Codex 또는 Claude 같은 코딩 에이전트가 바로 구현할 수 있는 Goal 묶음으로 변환한다.
결과는 8~15분 분량의 서비스 품질 브라우저 게임을 목표로 한다. Gameplay, Story, Controls, Character, World, UI, Audio, Persistence, QA, Packaging을 빠짐없이 다룬다.
각 Goal은 모호한 희망이 아니라 구현 task, 기계적으로 검사 가능한 acceptance, 선행 dependencies를 갖는다.
정확히 8개의 Goal을 작성한다. 각 Goal의 objective는 한 문장, tasks는 정확히 2개, acceptance는 정확히 2개, dependencies는 최대 2개다. 각 문장은 80자 이내로 쓴다. 빈 문자열, placeholder, TODO, 미정, 생략 표현은 절대 사용하지 않는다.
artDirection에는 저작권을 침해하지 않는 고유한 비주얼 아이덴티티를 정의한다. 카메라·화면 구도, 캐릭터별 실루엣·비율·색·재질·표정·장비, 배경 레이어·랜드마크·조명·시간 변화, 필수 애니메이션 상태, 실제 제작 방법(Canvas/SVG/스프라이트/3D 모델링 중 프로젝트에 맞는 방식)과 파일 규격·이름·크기를 구체적으로 작성한다.
gameGoal에는 서비스 품질 게임 구현뿐 아니라 수치 기반 밸런스 검증, 이미지 생성 모델을 활용한 고유 캐릭터·배경 에셋 제작 및 실제 게임 적용, 최소 3회의 직접 반복 플레이를 통한 재미 문제 발견과 개선을 명시한다.
imageGenerationPlan에는 이미지 모델 선택·반복 생성·배경제거·시트 제작·리사이즈·최적화 흐름을 작성한다. characterPrompts와 environmentPrompts는 이미지 모델에 그대로 입력 가능한 완결된 한국어 프롬프트로 각각 3개 이상 작성하며, 스타일·시점·구도·조명·팔레트·투명 배경 여부·금지 요소를 포함한다. 캐릭터 간 외형 일관성, 배경 원근과 게임 카메라 일치, 저작권·상표·참조작 복제 방지, 실제 렌더링 검수를 consistencyChecks에 넣는다.
balancePlan에는 승률·세션 길이·자원 곡선·난이도 상승·빌드 다양성·보스 클리어율 같은 목표 지표, 결정론적 시뮬레이션과 시드 반복, 초보·숙련·극단 빌드 플레이테스트, 런타임 텔레메트리, 조정 후 전체 회귀 테스트와 수치형 통과 기준을 작성한다. 감으로 밸런스가 좋다고 판단하지 않는다.
funIterationPlan에는 코딩 에이전트가 실제 브라우저에서 직접 게임을 처음부터 끝까지 플레이하며 재미를 검증하는 반복 개선 계약을 작성한다. 핵심 재미 가설, 설명 없이 시작하는 첫 플레이 절차, 지루함·혼란·무의미한 선택·과도한 대기·불공정한 실패·피드백 부족을 찾는 관찰 지표, 재현 단계와 심각도가 포함된 이슈 로그 형식, 한 번에 하나의 원인을 수정하는 반복 루프, 초보·숙련자·최적화 플레이어 관점, 명확한 중단 기준을 각각 3개 이상 작성한다.
최소 3회의 전체 플레이 개선 사이클을 강제한다. 각 사이클은 PLAY → OBSERVE → LOG → PRIORITIZE → CHANGE → REGRESSION TEST → REPLAY 순서다. 단순히 자동 테스트가 통과했거나 개발자가 재미있다고 주장하는 것은 통과가 아니다. 첫 60초의 이해 가능성, 의미 있는 선택 빈도, 입력 피드백, 실패 원인 가독성, 재도전 의향, 지배적 전략 부재를 실제 플레이 증거로 확인한다. 문제를 발견하지 못한 플레이는 관찰 실패로 보고 다른 플레이어 관점과 빌드로 다시 실행한다.
긴 코딩 에이전트 실행 문서는 서버가 이 구조화 결과와 확정 기획안으로 조립한다. implementationPrompt 필드는 생성하지 않는다. 대신 goals와 각 계획에는 게임 고유 수치·규칙·에셋·검증 기준을 짧지만 빠짐없이 담는다.
completionContract에는 다음 실행 계약을 빠짐없이 포함한다:
- 구현 전에 모든 요구사항을 원자 단위 체크리스트와 REQ ID로 변환하고 구현 파일·검증 방법·증거를 연결하는 추적표를 만든다.
- 부분 구현, 프로토타입, 빌드 성공만으로 완료를 선언하지 않는다. 필수 항목 하나라도 미구현·부분 구현·미검증이면 전체 Goal은 미완료다.
- 전체 HTML·CSS·JavaScript와 실제 import 그래프를 검사하고 모든 모듈 문법, 콘솔 error, uncaught exception, 모듈 실패, 정적 파일 404를 확인한다.
- 실제 브라우저에서 타이틀부터 튜토리얼, 핵심 조작, 전투, 웨이브 전환, 성장 선택, 환경 변화, 보스, 결과, 재도전까지 조작한다. Canvas 게임이면 핵심 상태별 픽셀 스크린샷을 증거로 남긴다.
- 최소 3회의 전체 플레이 개선 사이클을 수행하고 각 회차의 재미 문제, 원인 가설, 변경 사항, 전후 지표, 남은 위험을 FUN-ITERATION-LOG.md에 기록한다.
- 테스트 시간 가속을 사용해 처음부터 마지막 콘텐츠까지 완주하고 완전 승리·피해 승리·게임 오버 경로를 각각 검증한다. 재도전 초기화와 새로고침 후 영구 저장도 검사한다.
- 생성한 모든 TC를 실행하여 입력·기대·실제 결과·PASS/FAIL·근거를 기록하고, 실패가 하나라도 있으면 수정 후 전체 회귀 테스트를 반복한다.
- 카드·시너지·상태·보스 이름만 존재하는 구현을 금지하며 모든 효과의 적용 전후 실제 수치 변화를 검사한다.
- eval, innerHTML, alert, confirm, prompt, TODO, placeholder, 금지된 외부 에셋, 상태 직접 변경 등 프로젝트별 금지사항을 전체 검색한다.
- 로컬 검증을 통과한 정확한 소스만 배포하고 배포 URL에서도 실제 시작과 플레이, 콘솔, 네트워크 404를 재검증한다.
- 최종 보고에 기능 목록, 요구사항 추적표, 전체 TC 결과, 브라우저·콘솔 증거, 로컬·배포 URL 검증, 미구현·제한 사항을 포함한다.
한국어로 작성한다.`;
      if (!body.concept) throw new Error("확정된 게임 기획안이 없습니다. 먼저 기획안을 만들고 검토해주세요.");
      // This schema is intentionally large. Bedrock's strict tool grammar compiler
      // rejects it before inference, so validate the returned structure with the
      // server-side quality gate below instead.
      const generated = await generate(goalsSchema, "create_validated_implementation_goals", system, { genre: { name: genre.name, playerFantasy: genre.playerFantasy }, approvedStory: normalizedStory.story, approvedGameConcept: body.concept }, false, requestSignal, 32_000);
      const resultSummary = generated.result as GeneratedGoals;
      const repairs = repairGeneratedGoals(resultSummary);
      if (repairs.length) console.warn("[gameforge-design]", JSON.stringify({ event: "goal_auto_repaired", requestId, repairs, at: new Date().toISOString() }));
      resultSummary.implementationPrompt = composeImplementationPrompt(
        { name: genre.name, playerFantasy: genre.playerFantasy },
        normalizedStory.story,
        body.concept,
        resultSummary,
      );
      const outputIssues = validateGeneratedGoals(resultSummary);
      console.log("[gameforge-design]", JSON.stringify({ event: "quality_check", requestId, goalCount: resultSummary.goals?.length ?? 0, promptLength: resultSummary.implementationPrompt?.length ?? 0, validationScore: resultSummary.validation?.score ?? null, issueCount: outputIssues.length, at: new Date().toISOString() }));
      if (outputIssues.length) {
        console.warn("[gameforge-design]", JSON.stringify({ event: "quality_warning", requestId, issues: outputIssues, at: new Date().toISOString() }));
      }
      console.log("[gameforge-design]", JSON.stringify({ event: "bedrock_complete", requestId, action: body.action, elapsedMs: Date.now() - requestStartedAt, at: new Date().toISOString() }));
      return { ...generated, result: resultSummary, normalizedStory: normalizedStory.story };
    }
    if (body.action === "refine") {
      // Interactive story refinement: apply the user's chat instruction to the
      // current story, returning a full updated story that keeps ontology causality.
      if (!body.story) throw new Error("다듬을 스토리가 없습니다. 먼저 스토리를 생성하세요.");
      const message = (body.message ?? "").trim();
      if (message.length < 2) throw new Error("스토리에 대한 요청을 입력해주세요.");
      const normalizedStory = normalizeStoryOntology(body.story);
      const history = Array.isArray(body.chat) ? body.chat.slice(-6).map((t) => `${t.role === "user" ? "사용자" : "디렉터"}: ${String(t.content).slice(0, 500)}`).join("\n") : "";
      const generated = await generate(
        storySchema,
        "refine_editable_game_story",
        `너는 GAME FORGE의 게임 디렉터다. 입력의 currentStory에 대해 userRequest(사용자 지시)를 반드시 실제로 반영한 새 스토리를 반환한다.
가장 중요한 규칙: userRequest에 담긴 변경을 눈에 보이게 적용해야 한다. 요청을 무시하거나 원본을 그대로 되돌려주는 것은 실패다.
- 요청이 등장인물·소재·톤 변경이면 관련 필드(playerRole, logline, world, nodes, acts 내용)를 실제로 바꾼다.
- 요청이 "N막으로" 또는 막 추가/삭제이면 acts 배열의 길이를 정확히 그 수로 맞춘다.
- 요청이 특정 막·요소만 겨냥하면 그 부분만 바꾸고 나머지는 보존한다.
막·플레이어 행동·상태 변화·온톨로지(nodes·edges)의 인과 일관성은 유지한다. 아이디어의 고유한 톤을 살리고 클리셰로 후퇴하지 않는다. 참조작 고유 요소는 복제하지 않는다.
결과는 편집 가능한 전체 스토리다. coreLoop 3~6개, nodes 12개 이하, edges 14개 이하, designRationale 3개. 각 설명 한 문장. 한국어로 작성한다.`,
        { instruction: "아래 userRequest를 반드시 반영해 currentStory를 수정하라", userRequest: message, currentStory: normalizedStory.story, genre, conversation: history }, true, requestSignal,
      );
      const refined = normalizeStoryOntology(generated.result);
      console.log("[gameforge-design]", JSON.stringify({ event: "bedrock_complete", requestId, action: body.action, elapsedMs: Date.now() - requestStartedAt, at: new Date().toISOString() }));
      return { ...generated, result: refined.story };
    }
    if (body.action === "concept") {
      if (!body.story) throw new Error("기획안으로 발전시킬 스토리가 없습니다.");
      const normalizedStory = normalizeStoryOntology(body.story);
      const storyIssues = validateStory(normalizedStory.story);
      if (storyIssues.length) throw new Error(`스토리 검증 실패: ${storyIssues.join(" ")}`);
      const generated = await generate(
        conceptSchema,
        "create_editable_game_concept",
        `너는 게임 디렉터, 시스템 디자이너, 내러티브 디자이너, 아트 디렉터다. 확정 전 스토리를 사용자가 눈으로 검토하고 피드백할 수 있는 편집 가능한 게임 기획안으로 변환한다.
설정 설명에 머물지 말고 플레이어가 매 순간 무엇을 보고, 입력하고, 선택하고, 실패하고, 성장하는지 구체화한다.
characters는 주요 캐릭터·적마다 이름, 역할, 실루엣, 신체 비율, 의상·장비, 재질, 핵심 색, 표정, 전투 동작을 한 문장에 담아 최소 4개 작성한다.
environments는 주요 배경마다 공간 구조, 전경·중경·후경, 랜드마크, 조명, 색, 움직이는 요소, 플레이 기능을 담아 최소 4개 작성한다.
characterImagePrompts와 environmentImagePrompts는 이미지 모델에 그대로 넣을 수 있도록 스타일·시점·구도·조명·팔레트·배경 투명 여부·금지 요소까지 포함해 각각 최소 3개 작성한다.
coreMechanics, controls, progression, failureAndRecovery는 각각 최소 3개이며 실제 구현 가능한 규칙과 상태 변화를 포함한다.
reviewQuestions는 사용자가 취향과 방향을 결정할 수 있는 구체적인 선택 질문을 최소 5개 작성한다.
이전 기획안과 사용자 피드백이 있으면 피드백을 우선 반영하되 스토리 온톨로지의 인과관계는 유지한다. 참조작의 고유 캐릭터·명칭·시각 요소를 복제하지 않는다. 한국어로 작성한다.`,
        { genre, approvedStory: normalizedStory.story, previousConcept: body.concept ?? null, userFeedback: body.feedback?.trim() || null },
        true,
        requestSignal,
      );
      console.log("[gameforge-design]", JSON.stringify({ event: "bedrock_complete", requestId, action: body.action, elapsedMs: Date.now() - requestStartedAt, at: new Date().toISOString() }));
      return { ...generated, normalizedStory: normalizedStory.story };
    }
    throw new Error("지원하지 않는 작업입니다.");
  } catch (error) {
    console.error("[gameforge-design]", JSON.stringify({ event: "bedrock_failed", requestId, action: body.action, elapsedMs: Date.now() - requestStartedAt, error: error instanceof Error ? error.message : String(error), at: new Date().toISOString() }));
    throw error instanceof Error ? error : new Error("Bedrock 설계 요청에 실패했습니다.");
  } finally {
    if (activeGoalRequestId === requestId) activeGoalRequestId = null;
  }
}

export async function POST(request: Request) {
  try {
    return Response.json(await runDesign(await request.json() as DesignRequest, request.signal));
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "생성 실패" }, { status: 500 });
  }
}
