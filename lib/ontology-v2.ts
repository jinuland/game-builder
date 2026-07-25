import { createHash, randomUUID } from "node:crypto";
import type { GameOntology } from "./game-ontology";

export const ontologyV2Schema = "game-forge/ontology/v2" as const;

export const ontologyLayers = ["domain", "narrative", "implementation"] as const;
export type OntologyLayer = (typeof ontologyLayers)[number];

export const ontologyOwnership = ["Generated", "Managed", "UserOwned"] as const;
export type OntologyOwnership = (typeof ontologyOwnership)[number];

export const ontologyKindsByLayer = {
  domain: [
    "World", "WorldRule", "Character", "Faction", "Location", "Item", "Ability",
    "Resource", "Mechanic", "GameLoop", "Progression",
  ],
  narrative: [
    "StoryArc", "StoryBeat", "Choice", "Condition", "Effect", "Quest", "Objective",
    "Dialogue", "Ending", "StateVariable",
  ],
  implementation: [
    "UnityScene", "Prefab", "ScriptableObject", "Component", "DialogueAsset",
    "Animation", "Audio", "BuildTask", "TestCase", "Asset",
  ],
} as const;

export type DomainNodeKind = (typeof ontologyKindsByLayer.domain)[number];
export type NarrativeNodeKind = (typeof ontologyKindsByLayer.narrative)[number];
export type ImplementationNodeKind = (typeof ontologyKindsByLayer.implementation)[number];
export type OntologyNodeKind = DomainNodeKind | NarrativeNodeKind | ImplementationNodeKind;

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

export type OntologyProvenance = {
  source: "user" | "ai" | "migration" | "unity" | "generator";
  actorId: string;
  proposalId?: string;
  importedFrom?: string;
  createdAt: string;
};

export type OntologyNodeV2 = {
  id: string;
  stableKey: string;
  layer: OntologyLayer;
  kind: OntologyNodeKind;
  name: string;
  description: string;
  properties: Record<string, JsonValue>;
  ownership: OntologyOwnership;
  provenance: OntologyProvenance;
  status: "draft" | "approved" | "deprecated";
};

export type OntologyEdgeV2 = {
  id: string;
  stableKey: string;
  source: string;
  target: string;
  type: string;
  description: string;
  properties: Record<string, JsonValue>;
  provenance: OntologyProvenance;
  status: "draft" | "approved" | "deprecated";
};

export type OntologyDecision = {
  id: string;
  title: string;
  decision: string;
  rationale: string;
  scopeNodeIds: string[];
  actorId: string;
  createdAt: string;
  status: "proposed" | "accepted" | "superseded";
};

export type InterventionTask = {
  id: string;
  title: string;
  reason: string;
  scopeNodeIds: string[];
  options: Array<{ id: string; label: string; impact: string }>;
  acceptanceCriteria: string[];
  assignedSurface: "web" | "unity" | "local-agent";
  status: "open" | "in_progress" | "resolved" | "skipped";
  createdAt: string;
  resolvedAt?: string;
};

export type OntologyBranch = {
  id: string;
  name: string;
  parentBranchId: string | null;
  baseRevisionId: string | null;
};

export type OntologyRevision = {
  id: string;
  number: number;
  parentRevisionId: string | null;
  branchId: string;
  createdAt: string;
  createdBy: string;
  source: "migration" | "proposal" | "merge" | "unity-sync" | "manual";
  message: string;
};

export type GameOntologyV2 = {
  schema: typeof ontologyV2Schema;
  projectId: string;
  title: string;
  branch: OntologyBranch;
  revision: OntologyRevision;
  nodes: OntologyNodeV2[];
  edges: OntologyEdgeV2[];
  decisions: OntologyDecision[];
  interventions: InterventionTask[];
};

export type LegacyStoryBeat = {
  id?: string;
  kind?: "StoryBeat" | "Ending";
  act?: string;
  title?: string;
  body?: string;
  summary?: string;
  tone?: string;
  questId?: string;
  choices?: Array<{
    id?: string;
    label?: string;
    targetId?: string;
    conditions?: Array<{ variable?: string; operator?: string; value?: JsonPrimitive }>;
    effects?: Array<{ variable?: string; operation?: string; value?: JsonPrimitive }>;
  }>;
};

export type OntologyValidationIssue = {
  severity: "error" | "warning";
  code: string;
  path: string;
  message: string;
};

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const stableKeyPattern = /^[a-z][a-z0-9_.-]{1,127}$/;
const relationPattern = /^[A-Z][A-Z0-9_]{1,63}$/;
const kinds = new Set<string>(Object.values(ontologyKindsByLayer).flat());
const layerForKind = new Map<string, OntologyLayer>(
  ontologyLayers.flatMap((layer) => ontologyKindsByLayer[layer].map((kind) => [kind, layer])),
);

function deterministicUuid(namespace: string, key: string): string {
  const digest = createHash("sha256").update(`${namespace}:${key}`).digest("hex").slice(0, 32);
  return `${digest.slice(0, 8)}-${digest.slice(8, 12)}-5${digest.slice(13, 16)}-a${digest.slice(17, 20)}-${digest.slice(20)}`;
}

function stableKey(value: string, fallback: string): string {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^[^a-z]+/, "")
    .replace(/-+$/g, "")
    .slice(0, 128);
  return stableKeyPattern.test(normalized) ? normalized : fallback;
}

function nowOr(value?: string): string {
  if (value && !Number.isNaN(Date.parse(value))) return new Date(value).toISOString();
  return new Date().toISOString();
}

function legacyKind(kind: string): { layer: OntologyLayer; kind: OntologyNodeKind } {
  if (kind === "Scene") return { layer: "implementation", kind: "UnityScene" };
  if (kind === "Prefab") return { layer: "implementation", kind: "Prefab" };
  if (kind === "Asset") return { layer: "implementation", kind: "Asset" };
  if (kind === "Quest") return { layer: "narrative", kind: "Quest" };
  if (kind === "StoryBeat") return { layer: "narrative", kind: "StoryBeat" };
  if (kind === "Choice") return { layer: "narrative", kind: "Choice" };
  if (kind === "Ending") return { layer: "narrative", kind: "Ending" };
  if (kinds.has(kind)) return { layer: layerForKind.get(kind) ?? "domain", kind: kind as OntologyNodeKind };
  return { layer: "domain", kind: "WorldRule" };
}

export function migrateOntologyV1(
  legacy: GameOntology,
  options: {
    projectId?: string;
    actorId: string;
    createdAt?: string;
    story?: LegacyStoryBeat[];
  },
): GameOntologyV2 {
  const createdAt = nowOr(options.createdAt);
  const projectId = options.projectId && uuidPattern.test(options.projectId)
    ? options.projectId
    : deterministicUuid("game-forge-project", `${options.actorId}:${legacy.title}`);
  const branchId = deterministicUuid(projectId, "branch:main");
  const revisionId = deterministicUuid(projectId, "revision:1");
  const provenance: OntologyProvenance = {
    source: "migration",
    actorId: options.actorId,
    importedFrom: "game-forge/ontology/v1",
    createdAt,
  };
  const idMap = new Map<string, string>();
  const nodes: OntologyNodeV2[] = legacy.nodes.map((node, index) => {
    const nodeId = deterministicUuid(projectId, `node:${node.id || index}`);
    idMap.set(node.id, nodeId);
    const mapped = legacyKind(node.kind);
    return {
      id: nodeId,
      stableKey: stableKey(node.id, `concept-${index + 1}`),
      layer: mapped.layer,
      kind: mapped.kind,
      name: node.name,
      description: node.description,
      properties: { ...(node.properties ?? {}) },
      ownership: "Managed",
      provenance,
      status: "approved",
    };
  });
  const edges: OntologyEdgeV2[] = legacy.edges
    .filter((edge) => idMap.has(edge.source) && idMap.has(edge.target))
    .map((edge, index) => ({
      id: deterministicUuid(projectId, `edge:${edge.id || index}`),
      stableKey: stableKey(edge.id, `relation-${index + 1}`),
      source: idMap.get(edge.source)!,
      target: idMap.get(edge.target)!,
      type: edge.type.toUpperCase().replace(/[^A-Z0-9_]+/g, "_"),
      description: edge.description ?? "",
      properties: {},
      provenance,
      status: "approved",
    }));

  const story = options.story ?? [];
  const storyIdMap = new Map<string, string>();
  for (const [index, beat] of story.entries()) {
    const key = stableKey(beat.id ?? "", `story-beat-${index + 1}`);
    const kind = beat.kind === "Ending" ? "Ending" : "StoryBeat";
    const existing = nodes.find((node) => node.stableKey === key && node.kind === kind);
    const storyNodeId = existing?.id ?? deterministicUuid(projectId, `story:${key}`);
    storyIdMap.set(beat.id ?? key, storyNodeId);
    if (!existing) {
      nodes.push({
        id: storyNodeId,
        stableKey: key,
        layer: "narrative",
        kind,
        name: beat.title?.trim() || `Story Beat ${index + 1}`,
        description: beat.body?.trim() || beat.summary?.trim() || "",
        properties: {
          act: beat.act?.trim() || "",
          tone: beat.tone?.trim() || "",
          order: index,
          questId: beat.questId?.trim() || "",
        },
        ownership: "Managed",
        provenance,
        status: "approved",
      });
    }
  }

  const hasStructuredChoices = story.some((beat) => Array.isArray(beat.choices));
  const questNodeIds = new Map<string, string>();
  for (const [index, beat] of story.entries()) {
    const questKey = stableKey(beat.questId ?? "", "");
    if (!questKey) continue;
    let questNodeId = questNodeIds.get(questKey);
    if (!questNodeId) {
      questNodeId = deterministicUuid(projectId, `story-quest:${questKey}`);
      questNodeIds.set(questKey, questNodeId);
      nodes.push({
        id: questNodeId,
        stableKey: questKey,
        layer: "narrative",
        kind: "Quest",
        name: beat.questId?.trim() || `Quest ${questNodeIds.size}`,
        description: "",
        properties: {},
        ownership: "Managed",
        provenance,
        status: "approved",
      });
    }
    const beatNodeId = storyIdMap.get(beat.id ?? `story-beat-${index + 1}`);
    if (beatNodeId) {
      edges.push({
        id: deterministicUuid(projectId, `story-quest-link:${questNodeId}:${beatNodeId}`),
        stableKey: `quest-${questKey}-${index + 1}`,
        source: questNodeId,
        target: beatNodeId,
        type: "CONTAINS_BEAT",
        description: "",
        properties: { order: index },
        provenance,
        status: "approved",
      });
    }
  }
  if (hasStructuredChoices) {
    for (const [beatIndex, beat] of story.entries()) {
      const sourceId = storyIdMap.get(beat.id ?? `story-beat-${beatIndex + 1}`);
      if (!sourceId) continue;
      for (const [choiceIndex, choice] of (beat.choices ?? []).entries()) {
        const choiceKey = stableKey(choice.id ?? "", `choice-${beatIndex + 1}-${choiceIndex + 1}`);
        const choiceNodeId = deterministicUuid(projectId, `story-choice:${choiceKey}`);
        nodes.push({
          id: choiceNodeId,
          stableKey: choiceKey,
          layer: "narrative",
          kind: "Choice",
          name: choice.label?.trim() || `Choice ${choiceIndex + 1}`,
          description: "",
          properties: {
            conditions: (choice.conditions ?? []).map((condition) => ({
              variable: condition.variable ?? "",
              operator: condition.operator ?? "equals",
              value: condition.value ?? null,
            })),
            effects: (choice.effects ?? []).map((effect) => ({
              variable: effect.variable ?? "",
              operation: effect.operation ?? "set",
              value: effect.value ?? null,
            })),
          },
          ownership: "Managed",
          provenance,
          status: "approved",
        });
        edges.push({
          id: deterministicUuid(projectId, `story-offers:${sourceId}:${choiceNodeId}`),
          stableKey: `offers-${choiceKey}`,
          source: sourceId,
          target: choiceNodeId,
          type: "OFFERS_CHOICE",
          description: "",
          properties: { order: choiceIndex },
          provenance,
          status: "approved",
        });
        const targetId = storyIdMap.get(choice.targetId ?? "");
        if (targetId) {
          edges.push({
            id: deterministicUuid(projectId, `story-branches:${choiceNodeId}:${targetId}`),
            stableKey: `branches-${choiceKey}`,
            source: choiceNodeId,
            target: targetId,
            type: "BRANCHES_TO",
            description: "",
            properties: {},
            provenance,
            status: "approved",
          });
        }
      }
    }
  } else {
    let previousStoryNodeId: string | null = null;
    for (const [index, beat] of story.entries()) {
      const storyNodeId = storyIdMap.get(beat.id ?? `story-beat-${index + 1}`);
      if (!storyNodeId) continue;
      if (previousStoryNodeId) {
      edges.push({
        id: deterministicUuid(projectId, `story-order:${previousStoryNodeId}:${storyNodeId}`),
        stableKey: `story-flow-${index}`,
        source: previousStoryNodeId,
        target: storyNodeId,
        type: "BRANCHES_TO",
        description: "Migrated linear story order",
        properties: { order: index },
        provenance,
        status: "approved",
      });
      }
      previousStoryNodeId = storyNodeId;
    }
  }

  return {
    schema: ontologyV2Schema,
    projectId,
    title: legacy.title,
    branch: { id: branchId, name: "main", parentBranchId: null, baseRevisionId: null },
    revision: {
      id: revisionId,
      number: 1,
      parentRevisionId: null,
      branchId,
      createdAt,
      createdBy: options.actorId,
      source: "migration",
      message: "Migrated from Game Ontology v1",
    },
    nodes,
    edges,
    decisions: [],
    interventions: [],
  };
}

export function validateOntologyV2(graph: GameOntologyV2): OntologyValidationIssue[] {
  const issues: OntologyValidationIssue[] = [];
  if (graph.schema !== ontologyV2Schema) {
    issues.push({ severity: "error", code: "INVALID_SCHEMA", path: "schema", message: "Game Ontology v2 schema가 필요합니다." });
  }
  if (!uuidPattern.test(graph.projectId)) {
    issues.push({ severity: "error", code: "INVALID_PROJECT_ID", path: "projectId", message: "projectId는 UUID여야 합니다." });
  }
  if (graph.revision.branchId !== graph.branch.id) {
    issues.push({ severity: "error", code: "REVISION_BRANCH_MISMATCH", path: "revision.branchId", message: "revision과 branch가 일치하지 않습니다." });
  }
  const nodeIds = new Set<string>();
  const stableKeys = new Set<string>();
  graph.nodes.forEach((node, index) => {
    const path = `nodes[${index}]`;
    if (!uuidPattern.test(node.id)) issues.push({ severity: "error", code: "INVALID_NODE_ID", path: `${path}.id`, message: "노드 ID는 UUID여야 합니다." });
    if (nodeIds.has(node.id)) issues.push({ severity: "error", code: "DUPLICATE_NODE_ID", path: `${path}.id`, message: "중복 노드 ID입니다." });
    nodeIds.add(node.id);
    if (!stableKeyPattern.test(node.stableKey)) issues.push({ severity: "error", code: "INVALID_STABLE_KEY", path: `${path}.stableKey`, message: "stableKey 형식이 잘못되었습니다." });
    if (stableKeys.has(node.stableKey)) issues.push({ severity: "error", code: "DUPLICATE_STABLE_KEY", path: `${path}.stableKey`, message: "중복 stableKey입니다." });
    stableKeys.add(node.stableKey);
    if (layerForKind.get(node.kind) !== node.layer) {
      issues.push({ severity: "error", code: "KIND_LAYER_MISMATCH", path: `${path}.layer`, message: `${node.kind}는 ${layerForKind.get(node.kind)} 레이어여야 합니다.` });
    }
    if (!node.name.trim()) issues.push({ severity: "error", code: "EMPTY_NODE_NAME", path: `${path}.name`, message: "노드 이름이 필요합니다." });
  });
  const edgeIds = new Set<string>();
  graph.edges.forEach((edge, index) => {
    const path = `edges[${index}]`;
    if (!uuidPattern.test(edge.id)) issues.push({ severity: "error", code: "INVALID_EDGE_ID", path: `${path}.id`, message: "관계 ID는 UUID여야 합니다." });
    if (edgeIds.has(edge.id)) issues.push({ severity: "error", code: "DUPLICATE_EDGE_ID", path: `${path}.id`, message: "중복 관계 ID입니다." });
    edgeIds.add(edge.id);
    if (!nodeIds.has(edge.source)) issues.push({ severity: "error", code: "DANGLING_EDGE_SOURCE", path: `${path}.source`, message: "관계의 source 노드가 없습니다." });
    if (!nodeIds.has(edge.target)) issues.push({ severity: "error", code: "DANGLING_EDGE_TARGET", path: `${path}.target`, message: "관계의 target 노드가 없습니다." });
    if (!relationPattern.test(edge.type)) issues.push({ severity: "error", code: "INVALID_RELATION_TYPE", path: `${path}.type`, message: "관계 타입은 UPPER_SNAKE_CASE여야 합니다." });
  });
  for (const node of graph.nodes) {
    if (node.kind === "Choice" && !graph.edges.some((edge) => edge.source === node.id && edge.type === "BRANCHES_TO")) {
      issues.push({ severity: "warning", code: "CHOICE_WITHOUT_BRANCH", path: `node:${node.stableKey}`, message: "선택지에 BRANCHES_TO 관계가 없습니다." });
    }
    if (node.kind === "Ending" && !graph.edges.some((edge) => edge.target === node.id)) {
      issues.push({ severity: "warning", code: "UNREACHABLE_ENDING", path: `node:${node.stableKey}`, message: "엔딩으로 들어오는 관계가 없습니다." });
    }
  }
  return issues;
}

export function createChildRevision(
  graph: GameOntologyV2,
  input: { actorId: string; source: OntologyRevision["source"]; message: string },
): GameOntologyV2 {
  const createdAt = new Date().toISOString();
  return {
    ...graph,
    revision: {
      id: randomUUID(),
      number: graph.revision.number + 1,
      parentRevisionId: graph.revision.id,
      branchId: graph.branch.id,
      createdAt,
      createdBy: input.actorId,
      source: input.source,
      message: input.message.slice(0, 240),
    },
  };
}
