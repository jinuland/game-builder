import {
  getWorkshop,
  listPlaytestRuns,
  recentModelUsage,
  savePendingProposal,
  writeAudit as persistAudit,
} from "@/lib/aws-store";
import type { GameOntology } from "@/lib/game-ontology";
import { retrieveContextForPrompt } from "@/lib/graph-context";
import { migrateOntologyV1, ontologyV2Schema, type GameOntologyV2 } from "@/lib/ontology-v2";
import {
  checkModelBudget,
  estimateInputTokens,
  limitsFor,
  type UsageRecord,
} from "@/lib/model-policy";
import { runWorkshopModel, type ModelProvider, type WorkshopMessage } from "@/lib/model-adapter";
import { requestActor } from "@/lib/request-auth";

const providers = new Set<ModelProvider>(["storyforge", "bedrock", "local", "demo"]);
const maxRequestBytes = 256_000;

async function actorKey(request: Request, email: string): Promise<string> {
  if (email) return email;
  const address =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "anonymous";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(address));
  const suffix = [...new Uint8Array(digest)]
    .slice(0, 8)
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
  return `public-demo:${suffix}`;
}

async function writeAudit(
  sessionId: string,
  actorSub: string,
  action: string,
  detail: Record<string, unknown>,
) {
  await persistAudit({
    ownerSub: actorSub,
    sessionId,
    action,
    detail,
  });
}

export async function POST(request: Request) {
  let auditContext: { actorEmail: string; sessionId: string; provider: ModelProvider } | null = null;
  let localRequest = false;
  try {
    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (declaredLength > maxRequestBytes) {
      return Response.json({ error: "요청 본문이 너무 큽니다." }, { status: 413 });
    }
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxRequestBytes) {
      return Response.json({ error: "요청 본문이 너무 큽니다." }, { status: 413 });
    }
    const payload = JSON.parse(rawBody) as {
      provider?: ModelProvider;
      messages?: WorkshopMessage[];
      graph?: GameOntology;
      sessionId?: string;
    };
    const provider = providers.has(payload.provider ?? "storyforge")
      ? (payload.provider ?? "storyforge")
      : "storyforge";
    const actor = requestActor(request);
    localRequest = actor.local;
    if (!actor.writer && !actor.local) {
      return Response.json(
        { error: "유효한 참가 코드가 있어야 게임과 스토리를 생성할 수 있습니다.", code: "WRITER_REQUIRED" },
        { status: actor.authenticated ? 403 : 401 },
      );
    }
    const messages = Array.isArray(payload.messages)
      ? payload.messages
          .filter((item) => item && ["user", "assistant"].includes(item.role) && item.content?.trim())
          .slice(-20)
          .map((item) => ({ ...item, content: item.content.slice(0, 8_000) }))
      : [];
    if (!messages.length || !payload.graph) {
      return Response.json({ error: "messages와 graph가 필요합니다." }, { status: 400 });
    }
    if (JSON.stringify(payload.graph).length > 200_000) {
      return Response.json({ error: "게임 온톨로지가 허용 크기를 초과했습니다." }, { status: 413 });
    }

    const actorEmail = await actorKey(request, actor.sub || actor.email);
    const sessionId = String(payload.sessionId || "pre-session").slice(0, 100);
    const latestUserText =
      [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
    const stored = sessionId === "pre-session" ? null : await getWorkshop(actor.sub, sessionId);
    const storedV2 =
      stored?.ontologyV2 &&
      typeof stored.ontologyV2 === "object" &&
      (stored.ontologyV2 as { schema?: string }).schema === ontologyV2Schema
        ? stored.ontologyV2 as GameOntologyV2
        : null;
    const ontologyV2 = storedV2 ?? migrateOntologyV1(payload.graph, {
      projectId: sessionId === "pre-session" ? undefined : sessionId,
      actorId: actor.sub || actorEmail,
    });
    const context = retrieveContextForPrompt(ontologyV2, latestUserText);
    const playtestEvidence = sessionId === "pre-session"
      ? []
      : (await listPlaytestRuns(actor.sub, sessionId, 10)).map((run) => ({
          ontologyRevisionId: run.ontologyRevisionId,
          endingBeatId: run.endingBeatId,
          choiceIds: run.choiceIds,
          feedback: run.feedback,
          rating: run.rating,
        }));
    auditContext = { actorEmail, sessionId, provider };
    const estimatedInputTokens = estimateInputTokens(messages, payload.graph);
    const limits = limitsFor(provider);
    let budget: ReturnType<typeof checkModelBudget>;
    try {
      const cutoff = new Date(Date.now() - 86_400_000).toISOString();
      const rows = await recentModelUsage(actorEmail, cutoff);
      const records: UsageRecord[] = rows
        .map((detail) => detail.provider === provider ? detail as UsageRecord : null)
        .filter((record): record is UsageRecord => Boolean(record));
      budget = checkModelBudget(records, limits, estimatedInputTokens);
    } catch {
      if (!actor.local) {
        return Response.json(
          { error: "사용량 한도를 확인할 수 없어 모델 호출을 안전하게 중단했습니다." },
          { status: 503 },
        );
      }
      budget = checkModelBudget([], limits, estimatedInputTokens);
    }
    if (!budget.allowed) {
      try {
        await writeAudit(sessionId, actorEmail, "model.denied", {
          provider,
          reason: budget.reason,
        });
      } catch {
        // The denial still stands even if audit persistence is temporarily unavailable.
      }
      return Response.json({ error: budget.reason }, { status: 429 });
    }

    const result = await runWorkshopModel({
      provider,
      messages,
      graph: payload.graph,
      context,
      playtestEvidence,
    });
    const allowedEvidence = new Set(context.nodes.map((node) => node.id));
    result.proposal.baseRevisionId = context.revisionId;
    result.proposal.evidenceNodeIds = result.proposal.evidenceNodeIds
      .filter((nodeId) => allowedEvidence.has(nodeId));
    if (!result.proposal.evidenceNodeIds.length) {
      result.proposal.evidenceNodeIds = context.seedNodeIds;
    }
    await savePendingProposal({
      ownerSub: actor.sub,
      sessionId,
      proposal: result.proposal,
      baseRevisionId: context.revisionId,
      provider,
      baseGraph: payload.graph,
    });
    try {
      await writeAudit(sessionId, actorEmail, "model.invoked", {
        provider: result.provider,
        model: result.model,
        inputTokens: result.usage?.inputTokens ?? estimatedInputTokens,
        outputTokens: result.usage?.outputTokens ?? null,
        estimatedCostUsd: result.usage?.estimatedCostUsd ?? 0,
        operationCount: result.proposal.operations.length,
        baseRevisionId: context.revisionId,
        evidenceNodeIds: result.proposal.evidenceNodeIds,
      });
    } catch {
      if (!localRequest) {
        return Response.json(
          { error: "모델 응답의 감사 기록을 저장하지 못했습니다." },
          { status: 503 },
        );
      }
    }
    return Response.json({ ...result, budget: budget.remaining });
  } catch (error) {
    const message = error instanceof Error ? error.message : "워크샵 모델 호출에 실패했습니다.";
    if (auditContext) {
      try {
        await writeAudit(
          auditContext.sessionId,
          auditContext.actorEmail,
          "model.failed",
          { provider: auditContext.provider, error: message.slice(0, 240) },
        );
      } catch {
        // Preserve the original model error.
      }
    }
    return Response.json({ error: message }, { status: 502 });
  }
}
