import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  ExecuteQueryCommand,
  NeptuneGraphClient,
} from "@aws-sdk/client-neptune-graph";
import { projectOntologyRevision } from "../lib/graph-projection";
import { ontologyV2Schema, validateOntologyV2, type GameOntologyV2 } from "../lib/ontology-v2";

const s3 = new S3Client({});
const neptune = new NeptuneGraphClient({});

type ProjectSnapshotEvent = {
  action: "project_snapshot";
  bucket: string;
  key: string;
  expectedRevisionId: string;
};

type RetrieveEvent = {
  action: "retrieve";
  projectId: string;
  branchId: string;
  revisionId: string;
  seedStableKeys: string[];
  depth?: number;
  maxNodes?: number;
};

type GraphWorkerEvent = ProjectSnapshotEvent | RetrieveEvent;

function requiredEnvironment(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} 환경 변수가 필요합니다.`);
  return value;
}

function validateSnapshotLocation(bucket: string, key: string): void {
  if (bucket !== requiredEnvironment("GAMEFORGE_ONTOLOGY_SNAPSHOT_BUCKET")) {
    throw new Error("허용되지 않은 스냅샷 버킷입니다.");
  }
  if (!/^projects\/[a-zA-Z0-9._-]+\/[a-f0-9-]+\/branches\/[a-f0-9-]+\/revisions\/[a-f0-9-]+\.json$/.test(key)) {
    throw new Error("허용되지 않은 스냅샷 경로입니다.");
  }
}

async function loadSnapshot(event: ProjectSnapshotEvent): Promise<GameOntologyV2> {
  validateSnapshotLocation(event.bucket, event.key);
  const response = await s3.send(new GetObjectCommand({ Bucket: event.bucket, Key: event.key }));
  const body = await response.Body?.transformToString();
  if (!body) throw new Error("온톨로지 스냅샷이 비어 있습니다.");
  const graph = JSON.parse(body) as GameOntologyV2;
  if (graph.schema !== ontologyV2Schema || graph.revision.id !== event.expectedRevisionId) {
    throw new Error("스냅샷 revision이 작업 요청과 일치하지 않습니다.");
  }
  const errors = validateOntologyV2(graph).filter((issue) => issue.severity === "error");
  if (errors.length) throw new Error(`유효하지 않은 온톨로지 스냅샷입니다: ${errors[0].code}`);
  return graph;
}

async function retrieve(event: RetrieveEvent) {
  const depth = Math.min(3, Math.max(0, event.depth ?? 2));
  const maxNodes = Math.min(200, Math.max(1, event.maxNodes ?? 80));
  const seedStableKeys = event.seedStableKeys
    .filter((value) => /^[a-z][a-z0-9_.-]{1,127}$/.test(value))
    .slice(0, 20);
  if (!seedStableKeys.length) throw new Error("검색할 stableKey가 필요합니다.");
  const response = await neptune.send(new ExecuteQueryCommand({
    graphIdentifier: requiredEnvironment("GAMEFORGE_NEPTUNE_GRAPH_ID"),
    language: "OPEN_CYPHER",
    queryString: `
      MATCH (seed:GameOntologyNode)
      WHERE seed.projectId = $projectId
        AND seed.branchId = $branchId
        AND seed.revisionId = $revisionId
        AND seed.stableKey IN $seedStableKeys
      OPTIONAL MATCH path = (seed)-[*0..${depth}]-(related:GameOntologyNode)
      WHERE related.projectId = $projectId
        AND related.branchId = $branchId
        AND related.revisionId = $revisionId
      RETURN DISTINCT properties(related) AS node
      LIMIT ${maxNodes}
    `,
    parameters: {
      projectId: event.projectId,
      branchId: event.branchId,
      revisionId: event.revisionId,
      seedStableKeys,
    },
    planCache: "AUTO",
    queryTimeoutMilliseconds: 10_000,
  }));
  const payload = await response.payload.transformToString();
  return { revisionId: event.revisionId, raw: JSON.parse(payload) };
}

export async function handler(event: GraphWorkerEvent) {
  if (!event || typeof event !== "object") throw new Error("Graph Worker 작업이 필요합니다.");
  if (event.action === "project_snapshot") {
    const graph = await loadSnapshot(event);
    const result = await projectOntologyRevision(graph);
    return { ...result, projectId: graph.projectId, revisionId: graph.revision.id };
  }
  if (event.action === "retrieve") return retrieve(event);
  throw new Error("지원하지 않는 Graph Worker 작업입니다.");
}
