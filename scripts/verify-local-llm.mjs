#!/usr/bin/env node

import { runWorkshopModel } from "../lib/model-adapter.ts";

const result = await runWorkshopModel({
  provider: "local",
  messages: [
    {
      role: "user",
      content: "기억 하나를 희생하면 잠긴 길이 열리는 세계 규칙과 선택 비트를 제안해줘.",
    },
  ],
  graph: {
    version: 1,
    title: "GAME FORGE Local Verification",
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

if (!result.proposal.operations.length || !result.proposal.storyBeats.length) {
  throw new Error("로컬 LLM이 실질적인 온톨로지 연산과 스토리 비트를 반환하지 않았습니다.");
}

process.stdout.write(
  `${JSON.stringify({
    verified: true,
    provider: result.provider,
    model: result.model,
    operations: result.proposal.operations.length,
    storyBeats: result.proposal.storyBeats.length,
    usage: result.usage,
  }, null, 2)}\n`,
);
