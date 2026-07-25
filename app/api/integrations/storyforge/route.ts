import type { GameOntology, GameOntologyNode } from "@/lib/game-ontology";
import { requestActor } from "@/lib/request-auth";

function connection() {
  return {
    baseUrl: (process.env.STORYFORGE_API_URL ?? "http://127.0.0.1:9000").replace(/\/$/, ""),
    apiKey: process.env.STORYFORGE_API_KEY ?? "",
  };
}

function headers(apiKey: string): HeadersInit {
  return {
    "Content-Type": "application/json",
    ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
  };
}

async function storyForgeJson(
  url: string,
  apiKey: string,
  init: RequestInit = {},
  timeout = 15_000,
): Promise<{ response: Response; data: Record<string, unknown> }> {
  const response = await fetch(url, {
    ...init,
    headers: { ...headers(apiKey), ...(init.headers ?? {}) },
    signal: AbortSignal.timeout(timeout),
  });
  let data: Record<string, unknown> = {};
  try {
    data = await response.json() as Record<string, unknown>;
  } catch {
    data = {};
  }
  return { response, data };
}

function translateStoryForgeState(state: Record<string, unknown>): GameOntology {
  const rawNodes = Array.isArray(state.nodes) ? state.nodes : [];
  const rawEdges = Array.isArray(state.edges) ? state.edges : [];
  const kindMap: Record<string, GameOntologyNode["kind"]> = {
    Story: "World",
    Branch: "Choice",
    Chapter: "StoryBeat",
    Character: "Character",
    Setting: "Location",
    Object: "Item",
    Theme: "WorldRule",
  };
  const nodes = rawNodes
    .flatMap<GameOntologyNode>((value) => {
      const item = value && typeof value === "object" ? value as Record<string, unknown> : {};
      const kind = kindMap[String(item.kind ?? "")];
      const id = String(item.id ?? "").trim();
      const name = String(item.title ?? "").trim();
      if (!kind || !id || !name) return [];
      return [{
        id,
        kind,
        name,
        description: String(item.summary ?? ""),
        properties: { source: "storyforge" },
      } satisfies GameOntologyNode];
    });
  const nodeIds = new Set(nodes.map((node) => node.id));
  const edges = rawEdges
    .map((value, index) => {
      const item = value && typeof value === "object" ? value as Record<string, unknown> : {};
      const source = String(item.source ?? "");
      const target = String(item.target ?? "");
      if (!nodeIds.has(source) || !nodeIds.has(target)) return null;
      return {
        id: String(item.id ?? `storyforge-edge-${index + 1}`),
        source,
        target,
        type: String(item.type ?? "RELATED_TO").toUpperCase(),
        description: String(item.label ?? ""),
      };
    })
    .filter((edge): edge is NonNullable<typeof edge> => Boolean(edge));
  const story = nodes.find((node) => node.kind === "World");
  return {
    version: 1,
    title: story?.name ?? "StoryForge Import",
    nodes,
    edges,
  };
}

export async function GET(request: Request) {
  try {
    const actor = requestActor(request);
    if (!actor.writer && !actor.local) {
      return Response.json({ connected: false, error: "로그인이 필요합니다." }, { status: 401 });
    }
    const { baseUrl, apiKey } = connection();
    const response = await fetch(`${baseUrl}/api/state`, {
      headers: headers(apiKey),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) throw new Error(`StoryForge 응답 오류 (${response.status})`);
    const state = await response.json() as Record<string, unknown>;
    return Response.json({ connected: true, graph: translateStoryForgeState(state), source: baseUrl });
  } catch (error) {
    return Response.json(
      {
        connected: false,
        error: error instanceof Error ? error.message : "StoryForge에 연결하지 못했습니다.",
      },
      { status: 502 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const actor = requestActor(request);
    if (!actor.writer && !actor.local) {
      return Response.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }
    const payload = await request.json() as {
      graph?: GameOntology;
      story?: Array<{ act?: string; title?: string; body?: string; summary?: string }>;
    };
    if (!payload.graph) return Response.json({ error: "graph가 필요합니다." }, { status: 400 });
    const { baseUrl, apiKey } = connection();
    const generationModel =
      process.env.STORYFORGE_GENERATION_MODEL ?? "bedrock_claude_sonnet_4_6";
    const modelStatus = await storyForgeJson(`${baseUrl}/api/models`, apiKey);
    if (!modelStatus.response.ok) {
      throw new Error(`StoryForge 모델 상태 확인 실패 (${modelStatus.response.status})`);
    }
    const options = Array.isArray(modelStatus.data.options) ? modelStatus.data.options : [];
    const selectedModel = options.find((value) =>
      value && typeof value === "object" &&
      String((value as Record<string, unknown>).key ?? "") === generationModel
    ) as Record<string, unknown> | undefined;
    if (!selectedModel || !selectedModel.available) {
      return Response.json(
        {
          error: "StoryForge 생성 모델의 자격 증명이 없어 안전하게 내보내기를 중단했습니다.",
          requiresCredential: true,
          generationModel,
        },
        { status: 409 },
      );
    }
    const storyText = [
      "생성 제약: 정확히 4개 챕터로 구성하고, 각 summary와 draft는 각각 짧은 1~2문장으로 작성한다. 각 챕터 facts는 핵심 사실 최대 1개만 넣는다. 인물·장소·물건·테마 목록은 각각 최대 4개로 제한한다.",
      `게임 제목: ${payload.graph.title}`,
      ...payload.graph.nodes.map((node) => `${node.kind} · ${node.name}: ${node.description}`),
      ...(payload.story ?? []).map((beat) =>
        `${beat.act ?? "STORY"} · ${beat.title ?? ""}: ${beat.body ?? beat.summary ?? ""}`),
    ].join("\n");
    const backupName = `Backup before GAME FORGE export · ${new Date().toISOString()}`;
    const backup = await storyForgeJson(`${baseUrl}/api/projects/save`, apiKey, {
      method: "POST",
      body: JSON.stringify({ name: backupName }),
    });
    if (!backup.response.ok) {
      throw new Error(`StoryForge 기존 프로젝트 백업 실패 (${backup.response.status})`);
    }
    const backupProject =
      backup.data.project && typeof backup.data.project === "object"
        ? backup.data.project as Record<string, unknown>
        : {};
    const backupProjectId = String(backupProject.id ?? "");
    if (!backupProjectId) throw new Error("StoryForge 백업 프로젝트 ID를 받지 못했습니다.");

    const { response, data: result } = await storyForgeJson(`${baseUrl}/api/storyline`, apiKey, {
      method: "POST",
      body: JSON.stringify({
        story: storyText,
        knowledge_source: "game-forge",
        generation_model: generationModel,
      }),
    }, 120_000);
    if (!response.ok) {
      const detail =
        result && typeof result === "object" && "detail" in result
          ? String((result as { detail?: unknown }).detail)
          : `StoryForge 응답 오류 (${response.status})`;
      const restored = await storyForgeJson(
        `${baseUrl}/api/projects/${encodeURIComponent(backupProjectId)}/load`,
        apiKey,
        { method: "POST" },
      );
      if (!restored.response.ok) {
        throw new Error(`${detail} 기존 프로젝트 자동 복원도 실패했습니다.`);
      }
      throw new Error(`${detail} 기존 StoryForge 프로젝트는 자동 복원했습니다.`);
    }
    const saved = await storyForgeJson(`${baseUrl}/api/projects/save`, apiKey, {
      method: "POST",
      body: JSON.stringify({ name: `GAME FORGE · ${payload.graph.title}` }),
    });
    if (!saved.response.ok) {
      throw new Error("스토리는 생성됐지만 StoryForge 프로젝트 저장에 실패했습니다.");
    }
    return Response.json({
      exported: true,
      result,
      backupProject,
      project: saved.data.project ?? null,
    });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "StoryForge 내보내기에 실패했습니다." },
      { status: 502 },
    );
  }
}
