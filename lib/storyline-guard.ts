import type { GameOntologyV2, OntologyEdgeV2, OntologyNodeV2 } from "./ontology-v2";

export const storylineRelationshipTypes = new Set([
  "APPEARS_IN",
  "BRANCHES_TO",
  "CAUSES",
  "REQUIRES",
  "CHANGES_STATE",
  "UNLOCKS",
  "OCCURS_AT",
  "OFFERS",
  "CONSUMES",
]);

export type LocalChangeOperation =
  | { action: "create_asset"; implementationNodeId?: string; path: string }
  | { action: "update_asset"; implementationNodeId: string; path: string }
  | { action: "fix_code"; implementationNodeId?: string; path: string }
  | { action: "update_node"; nodeId: string; fields: string[] }
  | { action: "remove_node"; nodeId: string }
  | { action: "add_edge"; edge: Pick<OntologyEdgeV2, "source" | "target" | "type"> }
  | { action: "remove_edge"; edgeId: string };

export type LocalChangePlan = {
  id: string;
  baseRevisionId: string;
  summary: string;
  operations: LocalChangeOperation[];
};

export type StorylineViolation = {
  code:
    | "STALE_BUILD_REVISION"
    | "USER_OWNED_TARGET"
    | "APPROVED_STORY_MUTATION"
    | "REFERENCED_NODE_REMOVAL"
    | "STORY_BINDING_REMOVAL"
    | "STORY_BINDING_CREATION";
  message: string;
  nodeIds: string[];
  edgeIds: string[];
};

export type StorylineGuardResult = {
  decision: "allow" | "block";
  notification: string;
  violations: StorylineViolation[];
};

function byId(graph: GameOntologyV2): Map<string, OntologyNodeV2> {
  return new Map(graph.nodes.map((node) => [node.id, node]));
}

export function evaluateLocalChangeAgainstStoryline(
  graph: GameOntologyV2,
  plan: LocalChangePlan,
): StorylineGuardResult {
  const violations: StorylineViolation[] = [];
  const nodes = byId(graph);
  const edges = new Map(graph.edges.map((edge) => [edge.id, edge]));
  if (plan.baseRevisionId !== graph.revision.id) {
    violations.push({
      code: "STALE_BUILD_REVISION",
      message: "로컬 작업이 최신 확정 스토리 revision을 기준으로 하지 않습니다.",
      nodeIds: [],
      edgeIds: [],
    });
  }

  for (const operation of plan.operations) {
    if (
      operation.action === "create_asset" ||
      operation.action === "update_asset" ||
      operation.action === "fix_code"
    ) {
      const node = operation.implementationNodeId
        ? nodes.get(operation.implementationNodeId)
        : undefined;
      if (node?.ownership === "UserOwned") {
        violations.push({
          code: "USER_OWNED_TARGET",
          message: `${node.name}은 사용자가 소유한 구현이므로 자동 수정할 수 없습니다.`,
          nodeIds: [node.id],
          edgeIds: [],
        });
      }
      continue;
    }

    if (operation.action === "update_node") {
      const node = nodes.get(operation.nodeId);
      if (node?.ownership === "UserOwned") {
        violations.push({
          code: "USER_OWNED_TARGET",
          message: `${node.name}은 사용자가 소유한 노드입니다.`,
          nodeIds: [node.id],
          edgeIds: [],
        });
      }
      if (node && node.status === "approved" && node.layer !== "implementation") {
        violations.push({
          code: "APPROVED_STORY_MUTATION",
          message: `${node.name}은 확정된 ${node.layer} 온톨로지이므로 로컬 명령에서 변경할 수 없습니다.`,
          nodeIds: [node.id],
          edgeIds: [],
        });
      }
      continue;
    }

    if (operation.action === "remove_node") {
      const node = nodes.get(operation.nodeId);
      const references = graph.edges.filter(
        (edge) =>
          edge.status === "approved" &&
          (edge.source === operation.nodeId || edge.target === operation.nodeId),
      );
      if (node?.ownership === "UserOwned") {
        violations.push({
          code: "USER_OWNED_TARGET",
          message: `${node.name}은 사용자가 소유한 노드입니다.`,
          nodeIds: [node.id],
          edgeIds: references.map((edge) => edge.id),
        });
      }
      if (node?.status === "approved" || references.length) {
        violations.push({
          code: "REFERENCED_NODE_REMOVAL",
          message: `${node?.name ?? operation.nodeId} 삭제는 확정 스토리 관계를 끊습니다.`,
          nodeIds: [operation.nodeId],
          edgeIds: references.map((edge) => edge.id),
        });
      }
      continue;
    }

    if (operation.action === "remove_edge") {
      const edge = edges.get(operation.edgeId);
      if (
        edge?.status === "approved" &&
        storylineRelationshipTypes.has(edge.type)
      ) {
        violations.push({
          code: "STORY_BINDING_REMOVAL",
          message: `${edge.type} 관계는 확정 스토리라인의 일부이므로 제거할 수 없습니다.`,
          nodeIds: [edge.source, edge.target],
          edgeIds: [edge.id],
        });
      }
      continue;
    }

    if (
      operation.action === "add_edge" &&
      storylineRelationshipTypes.has(operation.edge.type)
    ) {
      violations.push({
        code: "STORY_BINDING_CREATION",
        message: `${operation.edge.type} 관계 추가는 스토리 의미를 바꾸므로 웹에서 새 제안으로 승인해야 합니다.`,
        nodeIds: [operation.edge.source, operation.edge.target],
        edgeIds: [],
      });
    }
  }

  if (violations.length) {
    return {
      decision: "block",
      notification:
        "요청한 로컬 변경이 확정 스토리라인 또는 사용자 소유 작업과 충돌하여 적용하지 않았습니다. 웹에서 영향 범위를 검토하고 새 revision으로 승인해주세요.",
      violations,
    };
  }
  return {
    decision: "allow",
    notification: "확정 스토리라인을 변경하지 않는 로컬 구현 작업입니다.",
    violations: [],
  };
}
