#!/usr/bin/env node

if (!process.env.AWS_BEARER_TOKEN_BEDROCK && !process.env.AWS_PROFILE) {
  throw new Error("AWS_BEARER_TOKEN_BEDROCK 또는 AWS_PROFILE이 필요합니다.");
}
if (process.env.AWS_PROFILE) {
  delete process.env.AWS_BEARER_TOKEN_BEDROCK;
}
const { runWorkshopModel } = await import("../lib/model-adapter.ts");

const result = await runWorkshopModel({
  provider: "bedrock",
  messages: [
    {
      role: "user",
      content: "기억을 되돌릴 때 능력 하나가 사라지는 세계 규칙과 스토리 비트를 제안해줘.",
    },
  ],
  graph: {
    version: 1,
    title: "GAME FORGE Bedrock Verification",
    nodes: [
      {
        id: "world",
        kind: "World",
        name: "기억을 먹는 도시",
        description: "도시는 기억을 세금으로 걷는다.",
      },
    ],
    edges: [],
  },
});

if (
  !result.proposal.operations.length ||
  !result.proposal.storyBeats.length ||
  !result.proposal.impactSummary ||
  !result.usage?.inputTokens ||
  !result.usage?.outputTokens
) {
  throw new Error("Bedrock이 완전한 변경안과 사용량을 반환하지 않았습니다.");
}

process.stdout.write(
  `${JSON.stringify({
    verified: true,
    provider: result.provider,
    model: result.model,
    operations: result.proposal.operations.length,
    storyBeats: result.proposal.storyBeats.length,
    impactSummary: result.proposal.impactSummary,
    usage: result.usage,
  }, null, 2)}\n`,
);
