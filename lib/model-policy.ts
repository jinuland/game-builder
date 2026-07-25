import type { ModelProvider } from "./model-adapter";

export type UsageRecord = {
  createdAt: string;
  inputTokens?: number | null;
  outputTokens?: number | null;
  estimatedCostUsd?: number | null;
};

export type ModelLimits = {
  requestsPerMinute: number;
  requestsPerDay: number;
  tokensPerDay: number;
  costUsdPerDay: number;
};

function positiveNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function limitsFor(provider: ModelProvider): ModelLimits {
  const prefix = provider === "demo" ? "GAMEFORGE_DEMO" : "GAMEFORGE_MODEL";
  return {
    requestsPerMinute: positiveNumber(
      process.env[`${prefix}_REQUESTS_PER_MINUTE`],
      provider === "demo" ? 30 : 20,
    ),
    requestsPerDay: positiveNumber(
      process.env[`${prefix}_REQUESTS_PER_DAY`],
      provider === "demo" ? 500 : 100,
    ),
    tokensPerDay: positiveNumber(process.env.GAMEFORGE_MODEL_TOKENS_PER_DAY, 500_000),
    costUsdPerDay: positiveNumber(process.env.GAMEFORGE_MODEL_COST_USD_PER_DAY, 10),
  };
}

export function estimateInputTokens(messages: Array<{ content: string }>, graph: unknown): number {
  const characters =
    messages.reduce((total, message) => total + message.content.length, 0) +
    JSON.stringify(graph).length;
  return Math.max(1, Math.ceil(characters / 3.5));
}

export function estimateCostUsd(
  provider: ModelProvider,
  inputTokens = 0,
  outputTokens = 0,
): number {
  if (provider === "demo" || provider === "local") return 0;
  const inputPerMillion = positiveNumber(process.env.GAMEFORGE_BEDROCK_INPUT_USD_PER_MILLION, 3);
  const outputPerMillion = positiveNumber(process.env.GAMEFORGE_BEDROCK_OUTPUT_USD_PER_MILLION, 15);
  return Number(
    ((inputTokens * inputPerMillion + outputTokens * outputPerMillion) / 1_000_000).toFixed(6),
  );
}

export function checkModelBudget(
  records: UsageRecord[],
  limits: ModelLimits,
  estimatedInputTokens: number,
  now = new Date(),
): { allowed: true; remaining: ModelLimits } | { allowed: false; reason: string } {
  const minuteAgo = now.getTime() - 60_000;
  const dayAgo = now.getTime() - 86_400_000;
  const daily = records.filter((record) => Date.parse(record.createdAt) >= dayAgo);
  const minuteRequests = daily.filter((record) => Date.parse(record.createdAt) >= minuteAgo).length;
  const dailyTokens = daily.reduce(
    (total, record) => total + (record.inputTokens ?? 0) + (record.outputTokens ?? 0),
    0,
  );
  const dailyCost = daily.reduce((total, record) => total + (record.estimatedCostUsd ?? 0), 0);

  if (minuteRequests >= limits.requestsPerMinute) {
    return { allowed: false, reason: "분당 모델 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요." };
  }
  if (daily.length >= limits.requestsPerDay) {
    return { allowed: false, reason: "오늘의 모델 요청 한도를 모두 사용했습니다." };
  }
  if (dailyTokens + estimatedInputTokens > limits.tokensPerDay) {
    return { allowed: false, reason: "오늘의 모델 토큰 한도를 초과합니다." };
  }
  if (dailyCost >= limits.costUsdPerDay) {
    return { allowed: false, reason: "오늘의 모델 비용 한도를 모두 사용했습니다." };
  }
  return {
    allowed: true,
    remaining: {
      requestsPerMinute: Math.max(0, limits.requestsPerMinute - minuteRequests - 1),
      requestsPerDay: Math.max(0, limits.requestsPerDay - daily.length - 1),
      tokensPerDay: Math.max(0, limits.tokensPerDay - dailyTokens - estimatedInputTokens),
      costUsdPerDay: Math.max(0, Number((limits.costUsdPerDay - dailyCost).toFixed(6))),
    },
  };
}
