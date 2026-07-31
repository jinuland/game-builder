import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
import type { PatternFormula, PatternKind } from "@/lib/success-patterns";

const kinds = ["CoreLoop", "Tension", "Progression", "Narrative", "Discovery", "Mastery", "Expression", "Defense"] as const;

const formulaSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "genre", "thesis", "pattern"],
  properties: {
    title: { type: "string" },
    genre: { type: "string" },
    thesis: { type: "string" },
    pattern: {
      type: "object",
      additionalProperties: false,
      required: ["kind", "name", "intent", "sequence", "requires", "buildElements", "failureModes"],
      properties: {
        kind: { type: "string", enum: kinds },
        name: { type: "string" },
        intent: { type: "string" },
        sequence: { type: "array", items: { type: "string" } },
        requires: { type: "array", items: { type: "string" } },
        buildElements: { type: "array", items: { type: "string" } },
        failureModes: { type: "array", items: { type: "string" } },
      },
    },
  },
};

function text(value: unknown, max = 300) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { idea?: string; selectedFormulas?: unknown[] };
    const idea = text(body.idea, 1600);
    if (idea.length < 8) return Response.json({ error: "게임 아이디어를 더 자세히 입력해주세요." }, { status: 400 });
    const region = process.env.GAMEFORGE_BEDROCK_REGION ?? process.env.AWS_REGION ?? "ap-northeast-2";
    const modelId = process.env.GAMEFORGE_BEDROCK_MODEL_ID ?? "us.anthropic.claude-sonnet-4-6";
    const client = new BedrockRuntimeClient({ region });
    const response = await client.send(new ConverseCommand({
      modelId,
      system: [{ text: `너는 상업 게임의 시스템 디자이너다. 사용자의 아이디어와 선택된 추상 디자인 패턴을 결합해 새로운 성공 공식 후보 하나를 만든다.
작품의 캐릭터, 명칭, 대사, 세계, 레벨을 복제하지 않는다. 스토리가 실제 조작·자원·상태·승패에 영향을 주게 한다.
모든 sequence는 플레이어가 관찰하거나 수행하는 행동이어야 하고, buildElements는 웹 게임으로 구현 가능한 구체 시스템이어야 한다.
failureModes에는 이 공식이 재미없게 구현되는 징후를 쓴다. 한국어로 간결하고 구체적으로 작성한다.` }],
      messages: [{ role: "user", content: [{ text: JSON.stringify({ idea, selectedFormulas: body.selectedFormulas ?? [] }) }] }],
      inferenceConfig: { maxTokens: 1800, temperature: 0.35 },
      toolConfig: {
        tools: [{
          toolSpec: {
            name: "create_transferable_game_formula",
            description: "사용자 게임에 적용할 새 추상 디자인 공식을 생성한다.",
            inputSchema: { json: JSON.parse(JSON.stringify(formulaSchema)) },
            strict: true,
          },
        }],
        toolChoice: { tool: { name: "create_transferable_game_formula" } },
      },
    }));
    const raw = response.output?.message?.content?.find((block) => block.toolUse)?.toolUse?.input as Record<string, unknown> | undefined;
    const pattern = raw?.pattern as Record<string, unknown> | undefined;
    if (!raw || !pattern) throw new Error("Bedrock이 구조화된 공식을 반환하지 않았습니다.");
    const id = `bedrock-${Date.now().toString(36)}`;
    const formula: PatternFormula = {
      id,
      title: text(raw.title, 80),
      reference: "Bedrock × 고객 아이디어",
      genre: text(raw.genre, 40),
      thesis: text(raw.thesis, 500),
      sourceUrl: "",
      sourceLabel: "고객 아이디어에서 생성",
      copyrightBoundary: "참조작의 고유 표현을 복제하지 않고 추상적인 설계 규칙만 적용합니다.",
      patterns: [{
        id: `${id}-pattern`,
        kind: kinds.includes(pattern.kind as PatternKind) ? pattern.kind as PatternKind : "CoreLoop",
        name: text(pattern.name, 80),
        intent: text(pattern.intent, 400),
        sequence: Array.isArray(pattern.sequence) ? pattern.sequence.map((item) => text(item, 100)).filter(Boolean).slice(0, 8) : [],
        requires: Array.isArray(pattern.requires) ? pattern.requires.map((item) => text(item, 100)).filter(Boolean).slice(0, 8) : [],
        buildElements: Array.isArray(pattern.buildElements) ? pattern.buildElements.map((item) => text(item, 100)).filter(Boolean).slice(0, 12) : [],
        failureModes: Array.isArray(pattern.failureModes) ? pattern.failureModes.map((item) => text(item, 120)).filter(Boolean).slice(0, 8) : [],
      }],
    };
    return Response.json({ formula, model: modelId, usage: response.usage });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Bedrock 공식 생성에 실패했습니다." }, { status: 500 });
  }
}
