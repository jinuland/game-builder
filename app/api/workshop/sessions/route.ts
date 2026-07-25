import {
  getProposal,
  getWorkshop,
  listWorkshops,
  resolveProposal,
  saveWorkshop,
} from "@/lib/aws-store";
import { applyProposal, type GameOntology, type WorkshopProposal } from "@/lib/game-ontology";
import {
  createChildRevision,
  migrateOntologyV1,
  ontologyV2Schema,
  validateOntologyV2,
  type GameOntologyV2,
  type LegacyStoryBeat,
} from "@/lib/ontology-v2";
import { requestActor } from "@/lib/request-auth";
import { putOntologySnapshot } from "@/lib/snapshot-store";
import { queueOntologyProjection } from "@/lib/graph-worker-client";
import {
  narrativeFromBeats,
  normalizeNarrativeBeats,
  validateNarrativeGraph,
} from "@/lib/narrative-graph";

function noStore(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

export async function GET(request: Request) {
  try {
    const actor = requestActor(request);
    if (!actor.authenticated) {
      return noStore({ sessions: [], storage: "login-required", writer: false });
    }
    const rows = await listWorkshops(actor.sub);
    return noStore({
      sessions: rows.map((row) => ({
        id: row.id,
        title: row.title,
        provider: row.provider,
        revision: row.revision,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
        graph: row.graph,
        ontologyV2: row.ontologyV2,
        ontologySnapshot: row.ontologySnapshot,
        story: row.story,
        messages: row.messages,
      })),
      storage: "aws-dynamodb",
      writer: actor.writer,
      workshopId: actor.workshopId || null,
    });
  } catch (error) {
    return noStore(
      { error: error instanceof Error ? error.message : "세션을 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const actor = requestActor(request);
    if (!actor.authenticated) return noStore({ error: "로그인이 필요합니다." }, { status: 401 });
    if (!actor.writer) {
      return noStore(
        { error: "참가 코드가 만료되었거나 writer 권한이 없습니다.", code: "WRITER_REQUIRED" },
        { status: 403 },
      );
    }
    const maxBytes = 512_000;
    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (declaredLength > maxBytes) return noStore({ error: "세션 데이터가 너무 큽니다." }, { status: 413 });
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxBytes) {
      return noStore({ error: "세션 데이터가 너무 큽니다." }, { status: 413 });
    }
    const payload = JSON.parse(rawBody) as {
      id?: string;
      title?: string;
      provider?: string;
      graph?: { nodes?: unknown[]; edges?: unknown[] };
      story?: unknown[];
      messages?: unknown[];
      revision?: number;
      proposalId?: string;
      proposalBaseRevisionId?: string;
    };
    if (!payload.graph || !Array.isArray(payload.graph.nodes) || !Array.isArray(payload.graph.edges)) {
      return noStore({ error: "유효한 graph가 필요합니다." }, { status: 400 });
    }
    if (payload.graph.nodes.length > 500 || payload.graph.edges.length > 2_000) {
      return noStore({ error: "세션 그래프의 항목 수가 한도를 초과했습니다." }, { status: 413 });
    }
    const id = String(payload.id || crypto.randomUUID()).slice(0, 100);
    const existing = await getWorkshop(actor.sub, id);
    const proposalId = String(payload.proposalId || "").slice(0, 80);
    const proposalBaseRevisionId = String(payload.proposalBaseRevisionId || "").slice(0, 80);
    const pendingProposal = proposalId ? await getProposal(actor.sub, proposalId) : null;
    if (proposalId && (!pendingProposal || pendingProposal.status !== "pending")) {
      return noStore({ error: "승인할 수 있는 pending 제안을 찾지 못했습니다.", code: "PROPOSAL_NOT_PENDING" }, { status: 409 });
    }
    if (
      proposalId &&
      String(pendingProposal?.baseRevisionId ?? "") !== proposalBaseRevisionId
    ) {
      return noStore({ error: "제안의 기준 revision이 요청과 일치하지 않습니다.", code: "PROPOSAL_REVISION_MISMATCH" }, { status: 409 });
    }
    if (
      existing?.ontologyV2 &&
      proposalBaseRevisionId &&
      (existing.ontologyV2 as GameOntologyV2).revision.id !== proposalBaseRevisionId
    ) {
      return noStore({ error: "더 최신 revision이 존재합니다. 변경안을 다시 생성해주세요.", code: "STALE_PROPOSAL" }, { status: 409 });
    }
    const approvedGraph =
      proposalId && pendingProposal
        ? applyProposal(
            pendingProposal.baseGraph as GameOntology,
            pendingProposal.proposal as WorkshopProposal,
          )
        : payload.graph as GameOntology;
    const narrativeBeats = normalizeNarrativeBeats(payload.story);
    const narrativeIssues = validateNarrativeGraph(narrativeFromBeats(narrativeBeats))
      .filter((issue) => issue.severity === "error");
    if (narrativeIssues.length) {
      return noStore({
        error: "스토리 분기 검증에 실패했습니다.",
        code: "NARRATIVE_VALIDATION_FAILED",
        issues: narrativeIssues.slice(0, 20),
      }, { status: 422 });
    }
    const migrated = migrateOntologyV1(approvedGraph, {
      projectId: id,
      actorId: actor.sub,
      story: narrativeBeats as LegacyStoryBeat[],
    });
    const previousV2 =
      existing?.ontologyV2 &&
      typeof existing.ontologyV2 === "object" &&
      (existing.ontologyV2 as { schema?: string }).schema === ontologyV2Schema
        ? existing.ontologyV2 as GameOntologyV2
        : null;
    const ontologyV2 = previousV2
      ? createChildRevision({
          ...migrated,
          branch: previousV2.branch,
          revision: previousV2.revision,
          decisions: previousV2.decisions,
          interventions: previousV2.interventions,
        }, {
          actorId: actor.sub,
          source: "manual",
          message: "Saved from workshop editor",
        })
      : migrated;
    const ontologyErrors = validateOntologyV2(ontologyV2)
      .filter((issue) => issue.severity === "error");
    if (ontologyErrors.length) {
      return noStore({
        error: "Game Ontology v2 검증에 실패했습니다.",
        code: "ONTOLOGY_VALIDATION_FAILED",
        issues: ontologyErrors.slice(0, 20),
      }, { status: 422 });
    }
    const ontologySnapshot = await putOntologySnapshot(actor.sub, ontologyV2);
    const saved = await saveWorkshop({
      id,
      ownerSub: actor.sub,
      ownerEmail: actor.email,
      title: String(payload.title || "새 게임 워크샵").slice(0, 100),
      provider: String(payload.provider || "demo").slice(0, 40),
      graph: approvedGraph,
      ontologyV2,
      ontologySnapshot,
      story: narrativeBeats.slice(0, 64),
      messages: Array.isArray(payload.messages) ? payload.messages.slice(-200) : [],
      revision: Number(payload.revision || 0),
    });
    if (saved.conflict) {
      return noStore(
        { error: "다른 창에서 프로젝트가 변경되었습니다. 최신 프로젝트를 다시 불러와주세요.", revision: saved.revision },
        { status: 409 },
      );
    }
    const graphProjection = await queueOntologyProjection(ontologySnapshot);
    if (proposalId) {
      await resolveProposal({
        ownerSub: actor.sub,
        proposalId,
        status: "approved",
        revisionId: ontologyV2.revision.id,
      });
    }
    return noStore({
      id,
      revision: saved.revision,
      updatedAt: saved.updatedAt,
      storage: "aws-dynamodb",
      ontologyRevision: ontologyV2.revision,
      ontologySnapshot,
      graphProjection,
      graph: approvedGraph,
      workshopId: actor.workshopId,
    });
  } catch (error) {
    return noStore(
      { error: error instanceof Error ? error.message : "세션을 저장하지 못했습니다." },
      { status: 500 },
    );
  }
}
