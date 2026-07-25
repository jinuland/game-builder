import {
  getWorkshop,
  listPlaytestRuns,
  savePlaytestRun,
  writeAudit,
} from "@/lib/aws-store";
import { narrativeFromBeats, normalizeNarrativeBeats } from "@/lib/narrative-graph";
import {
  chooseNarrativeBranch,
  playtestCoverage,
  startNarrativePlaytest,
} from "@/lib/narrative-simulator";
import { requestActor } from "@/lib/request-auth";
import type { GameOntologyV2 } from "@/lib/ontology-v2";

function noStore(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

function projectIdFrom(request: Request): string {
  return new URL(request.url).searchParams.get("projectId")?.trim().slice(0, 100) ?? "";
}

export async function GET(request: Request) {
  try {
    const actor = requestActor(request);
    if (!actor.authenticated) return noStore({ error: "로그인이 필요합니다." }, { status: 401 });
    const projectId = projectIdFrom(request);
    if (!projectId) return noStore({ error: "projectId가 필요합니다." }, { status: 400 });
    const project = await getWorkshop(actor.sub, projectId);
    if (!project) return noStore({ error: "프로젝트를 찾을 수 없습니다." }, { status: 404 });
    const runs = await listPlaytestRuns(actor.sub, projectId);
    return noStore({ runs });
  } catch (error) {
    return noStore(
      { error: error instanceof Error ? error.message : "플레이테스트 기록을 불러오지 못했습니다." },
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
        { error: "유효한 참가 코드가 있어야 플레이테스트를 저장할 수 있습니다.", code: "WRITER_REQUIRED" },
        { status: 403 },
      );
    }
    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (declaredLength > 64_000) return noStore({ error: "요청 본문이 너무 큽니다." }, { status: 413 });
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 64_000) {
      return noStore({ error: "요청 본문이 너무 큽니다." }, { status: 413 });
    }
    const payload = JSON.parse(rawBody) as {
      projectId?: string;
      ontologyRevisionId?: string;
      choiceIds?: unknown[];
      feedback?: string;
      rating?: number;
    };
    const projectId = String(payload.projectId ?? "").trim().slice(0, 100);
    if (!projectId) return noStore({ error: "먼저 프로젝트 revision을 저장해주세요." }, { status: 400 });
    const project = await getWorkshop(actor.sub, projectId);
    if (!project) return noStore({ error: "프로젝트를 찾을 수 없습니다." }, { status: 404 });
    const ontologyRevisionId = String(
      (project.ontologyV2 as GameOntologyV2 | undefined)?.revision?.id ?? "",
    );
    if (!ontologyRevisionId || ontologyRevisionId !== String(payload.ontologyRevisionId ?? "")) {
      return noStore(
        { error: "플레이테스트 기준 revision이 최신 프로젝트와 일치하지 않습니다.", code: "STALE_PLAYTEST" },
        { status: 409 },
      );
    }
    const graph = narrativeFromBeats(normalizeNarrativeBeats(project.story));
    const choiceIds = (Array.isArray(payload.choiceIds) ? payload.choiceIds : [])
      .map((item) => String(item).slice(0, 100))
      .slice(0, 200);
    let state = startNarrativePlaytest(graph);
    for (const choiceId of choiceIds) {
      const next = chooseNarrativeBranch(graph, state, choiceId);
      if (next.error) {
        return noStore(
          { error: `서버 재검증에 실패했습니다: ${next.error}`, code: "INVALID_PLAYTEST_PATH" },
          { status: 422 },
        );
      }
      state = next;
    }
    if (!state.ended) {
      return noStore(
        { error: "Ending에 도착한 플레이테스트만 결과로 저장할 수 있습니다.", code: "PLAYTEST_NOT_ENDED" },
        { status: 422 },
      );
    }
    const feedback = String(payload.feedback ?? "").trim().slice(0, 1_000);
    const rating = Number.isInteger(payload.rating) && Number(payload.rating) >= 1 && Number(payload.rating) <= 5
      ? Number(payload.rating)
      : null;
    const coverage = playtestCoverage(graph, state);
    const run = await savePlaytestRun(actor.sub, {
      projectId,
      ontologyRevisionId,
      endingBeatId: state.currentBeatId,
      choiceIds,
      visitedBeatIds: [
        ...new Set([...state.history.map((step) => step.beatId), state.currentBeatId]),
      ],
      variables: state.variables,
      coverage,
      feedback,
      rating,
    });
    await writeAudit({
      ownerSub: actor.sub,
      sessionId: projectId,
      action: "playtest.completed",
      detail: {
        playtestId: run.id,
        ontologyRevisionId,
        endingBeatId: run.endingBeatId,
        coverage,
        rating,
      },
    });
    return noStore({ run }, { status: 201 });
  } catch (error) {
    return noStore(
      { error: error instanceof Error ? error.message : "플레이테스트 결과를 저장하지 못했습니다." },
      { status: 500 },
    );
  }
}
