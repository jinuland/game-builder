import {
  sanitizeProposal,
  type GameOntology,
  type WorkshopProposal,
  workshopProposalJsonSchema,
} from "./game-ontology";
import { estimateCostUsd } from "./model-policy";
import type { RetrievedSubgraph } from "./graph-projection";

export type ModelProvider = "storyforge" | "bedrock" | "local" | "demo";

export type WorkshopMessage = {
  role: "user" | "assistant";
  content: string;
};

type WorkshopModelInput = {
  provider: ModelProvider;
  messages: WorkshopMessage[];
  graph: GameOntology;
  context?: RetrievedSubgraph;
  playtestEvidence?: Array<{
    ontologyRevisionId: string;
    endingBeatId: string;
    choiceIds: string[];
    feedback: string;
    rating: number | null;
  }>;
};

export type WorkshopModelResult = {
  provider: ModelProvider;
  model: string;
  reply: string;
  proposal: WorkshopProposal;
  usage?: { inputTokens?: number; outputTokens?: number; estimatedCostUsd?: number };
};

const systemPrompt = `너는 GAME FORGE의 게임 디렉터이자 온톨로지 설계자다.
사용자의 한국어 대화를 현재 게임 그래프와 비교하고, 반드시 JSON 객체 하나로 답한다.
게임 제작에 필요한 World, WorldRule, Character, Faction, Location, Item, Ability, Resource,
Quest, StoryBeat, Choice, Ending, Mechanic, GameLoop, Progression, Scene, Prefab, Asset 타입을 사용한다.
이미 존재하는 개념은 update_node로, 새 개념은 add_node로 제안한다. 삭제는 사용자가 명시한 경우만 제안한다.
관계 type은 영문 UPPER_SNAKE_CASE로 쓴다. 각 제안은 사용자가 승인하기 전까지 확정되지 않는다.
storyBeats에는 온톨로지 변화로 실제 영향을 받는 비트만 넣는다.
baseRevisionId는 제공된 context의 revisionId를 그대로 사용한다.
evidenceNodeIds에는 판단 근거로 사용한 context node id만 넣고 근거 없는 id를 만들지 않는다.
impactSummary에는 변경 시 영향을 받는 서사·규칙·Unity 구현을 간결하게 설명한다.
summary는 사용자에게 보여줄 자연스러운 한국어 한두 문장, rationale은 설계 이유다.
한 번의 제안은 핵심 operations 최대 8개, storyBeats 최대 4개로 제한하고 설명을 간결하게 쓴다.
질문은 정말 결정이 필요한 경우에만 최대 3개다.`;

function extractJson(text: string): unknown {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenced) return JSON.parse(fenced[1]);
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start >= 0 && end > start) return JSON.parse(trimmed.slice(start, end + 1));
    throw new Error("모델이 유효한 JSON 변경안을 반환하지 않았습니다.");
  }
}

function latestUserMessage(messages: WorkshopMessage[]): string {
  return [...messages].reverse().find((item) => item.role === "user")?.content ?? "";
}

function assertSubstantiveProposal(proposal: WorkshopProposal, provider: string) {
  if (
    proposal.operations.length === 0 &&
    proposal.storyBeats.length === 0 &&
    proposal.questions.length === 0
  ) {
    throw new Error(`${provider} 모델이 실질적인 변경안이나 확인 질문을 반환하지 않았습니다.`);
  }
}

function demoResult(input: WorkshopModelInput): WorkshopModelResult {
  const text = latestUserMessage(input.messages);
  const proposal = sanitizeProposal({
    baseRevisionId: input.context?.revisionId ?? "",
    summary: `“${text.slice(0, 50)}” 아이디어를 게임 세계의 규칙과 플레이 선택에 연결했습니다.`,
    rationale: "실제 모델 연결 전에도 승인 흐름을 검증할 수 있는 안전한 데모 변경안입니다.",
    operations: [
      {
        op: "add_node",
        node: {
          id: `idea-${Date.now().toString(36)}`,
          kind: "WorldRule",
          name: text.slice(0, 32) || "새로운 세계 규칙",
          description: text,
        },
      },
    ],
    storyBeats: [],
    questions: ["이 변화가 플레이어에게 이득인가요, 대가인가요?"],
    evidenceNodeIds: input.context?.seedNodeIds ?? [],
    impactSummary: "세계 규칙과 이를 참조하는 스토리 비트를 다시 검토해야 합니다.",
  });
  return { provider: "demo", model: "deterministic-workshop", reply: proposal.summary, proposal };
}

async function callStoryForge(input: WorkshopModelInput): Promise<WorkshopModelResult> {
  // StoryForge and GAME FORGE remain separate projects. This mode reuses the
  // same Bedrock API-key contract without importing StoryForge code or data.
  const result = await callBedrock(input);
  return {
    provider: "storyforge",
    model: `storyforge-key · ${result.model}`,
    reply: result.reply,
    proposal: result.proposal,
    usage: result.usage,
  };
}

async function callBedrock(input: WorkshopModelInput): Promise<WorkshopModelResult> {
  const region = process.env.GAMEFORGE_BEDROCK_REGION ?? process.env.AWS_REGION ?? "ap-northeast-2";
  const model = process.env.GAMEFORGE_BEDROCK_MODEL_ID ?? "us.anthropic.claude-sonnet-4-6";
  const client = new BedrockRuntimeClient({ region });
  const data = await client.send(new ConverseCommand({
    modelId: model,
    system: [{ text: systemPrompt }],
    messages: [{
      role: "user",
      content: [{
        text: JSON.stringify({
          conversation: input.messages.slice(-12),
          context: input.context ?? { legacyOntology: input.graph },
          playtestEvidence: input.playtestEvidence ?? [],
        }),
      }],
    }],
    inferenceConfig: {
      maxTokens: Number(process.env.GAMEFORGE_BEDROCK_MAX_TOKENS ?? 4000),
      temperature: 0.1,
    },
    toolConfig: {
      tools: [{
        toolSpec: {
          name: "propose_game_ontology_changes",
          description: "승인 가능한 게임 온톨로지와 스토리 변경안을 구조화한다.",
          inputSchema: { json: JSON.parse(JSON.stringify(workshopProposalJsonSchema)) },
        },
      }],
      toolChoice: { tool: { name: "propose_game_ontology_changes" } },
    },
  }));
  if (data.stopReason === "max_tokens") {
    throw new Error("Bedrock 변경안이 출력 토큰 한도에서 잘렸습니다. 토큰 한도를 높여 다시 시도해주세요.");
  }
  const blocks = data.output?.message?.content ?? [];
  const structured = blocks.find((block) => block.toolUse)?.toolUse?.input;
  const text = blocks.map((block) => block.text ?? "").join("\n").trim();
  const proposal = sanitizeProposal(structured ?? extractJson(text));
  assertSubstantiveProposal(proposal, "Bedrock");
  return {
    provider: "bedrock",
    model,
    reply: proposal.summary,
    proposal,
    usage: {
      ...data.usage,
      estimatedCostUsd: estimateCostUsd(
        "bedrock",
        data.usage?.inputTokens,
        data.usage?.outputTokens,
      ),
    },
  };
}

async function callLocal(input: WorkshopModelInput): Promise<WorkshopModelResult> {
  const baseUrl = (process.env.LOCAL_LLM_BASE_URL ?? "http://127.0.0.1:11434/v1").replace(/\/$/, "");
  const model = process.env.LOCAL_LLM_MODEL ?? "qwen3:8b";
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.LOCAL_LLM_API_KEY
        ? { Authorization: `Bearer ${process.env.LOCAL_LLM_API_KEY}` }
        : {}),
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      max_tokens: 3200,
      reasoning_effort: "none",
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "game_ontology_proposal",
          strict: true,
          schema: workshopProposalJsonSchema,
        },
      },
      messages: [
        { role: "system", content: systemPrompt },
        ...input.messages.slice(-12),
        {
          role: "user",
          content: `현재 게임 온톨로지 컨텍스트:\n${JSON.stringify(input.context ?? input.graph)}
최근 플레이테스트 근거:\n${JSON.stringify(input.playtestEvidence ?? [])}

위 대화의 변경안을 제공된 JSON Schema에 정확히 맞춰 제안해줘.
add_node에는 id, kind, name, description을 반드시 채우고, add_edge에는 id, source, target, type을 반드시 채워라.
사용자가 게임 규칙이나 이야기를 추가·변경해달라고 했다면 operations 또는 storyBeats를 비워두지 마라.`,
        },
      ],
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if (!response.ok) throw new Error(`로컬 LLM 연결 실패 (${response.status})`);
  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
    usage?: { prompt_tokens?: number; completion_tokens?: number };
  };
  const content = data.choices?.[0]?.message?.content ?? "";
  const proposal = sanitizeProposal(extractJson(content));
  assertSubstantiveProposal(proposal, "로컬 LLM");
  return {
    provider: "local",
    model,
    reply: proposal.summary,
    proposal,
    usage: {
      inputTokens: data.usage?.prompt_tokens,
      outputTokens: data.usage?.completion_tokens,
    },
  };
}

export async function runWorkshopModel(input: WorkshopModelInput): Promise<WorkshopModelResult> {
  if (input.provider === "storyforge") return callStoryForge(input);
  if (input.provider === "bedrock") return callBedrock(input);
  if (input.provider === "local") return callLocal(input);
  return demoResult(input);
}
import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
