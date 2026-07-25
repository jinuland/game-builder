import {
  ExecuteQueryCommand,
  NeptuneGraphClient,
} from "@aws-sdk/client-neptune-graph";
import type { GameOntologyV2, OntologyEdgeV2, OntologyNodeV2 } from "./ontology-v2";

export type RetrievedSubgraph = {
  projectId: string;
  branchId: string;
  revisionId: string;
  nodes: OntologyNodeV2[];
  edges: OntologyEdgeV2[];
  seedNodeIds: string[];
};

const neptune = new NeptuneGraphClient({});

function graphIdentifier(): string | null {
  return process.env.GAMEFORGE_NEPTUNE_GRAPH_ID?.trim() || null;
}

function chunks<T>(values: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size));
  }
  return result;
}

function projectionId(revisionId: string, entityId: string): string {
  return `${revisionId}:${entityId}`;
}

export async function projectOntologyRevision(
  graph: GameOntologyV2,
): Promise<{ projected: boolean; nodeCount: number; edgeCount: number }> {
  const graphId = graphIdentifier();
  if (!graphId) return { projected: false, nodeCount: 0, edgeCount: 0 };
  for (const batch of chunks(graph.nodes, 100)) {
    await neptune.send(new ExecuteQueryCommand({
      graphIdentifier: graphId,
      language: "OPEN_CYPHER",
      queryString: `
        UNWIND $items AS item
        MERGE (n:GameOntologyNode {projectionId: item.projectionId})
        SET n.projectId = item.projectId,
            n.branchId = item.branchId,
            n.revisionId = item.revisionId,
            n.nodeId = item.nodeId,
            n.stableKey = item.stableKey,
            n.layer = item.layer,
            n.kind = item.kind,
            n.name = item.name,
            n.description = item.description,
            n.status = item.status,
            n.ownership = item.ownership
      `,
      parameters: {
        items: batch.map((node) => ({
          projectionId: projectionId(graph.revision.id, node.id),
          projectId: graph.projectId,
          branchId: graph.branch.id,
          revisionId: graph.revision.id,
          nodeId: node.id,
          stableKey: node.stableKey,
          layer: node.layer,
          kind: node.kind,
          name: node.name,
          description: node.description,
          status: node.status,
          ownership: node.ownership,
        })),
      },
      planCache: "AUTO",
      queryTimeoutMilliseconds: 30_000,
    }));
  }
  const byType = new Map<string, OntologyEdgeV2[]>();
  for (const edge of graph.edges) {
    if (!/^[A-Z][A-Z0-9_]{1,63}$/.test(edge.type)) {
      throw new Error(`Neptune projection 관계 타입이 잘못되었습니다: ${edge.type}`);
    }
    byType.set(edge.type, [...(byType.get(edge.type) ?? []), edge]);
  }
  for (const [type, edges] of byType) {
    for (const batch of chunks(edges, 100)) {
      await neptune.send(new ExecuteQueryCommand({
        graphIdentifier: graphId,
        language: "OPEN_CYPHER",
        queryString: `
          UNWIND $items AS item
          MATCH (source:GameOntologyNode {projectionId: item.sourceProjectionId})
          MATCH (target:GameOntologyNode {projectionId: item.targetProjectionId})
          MERGE (source)-[r:${type} {projectionId: item.projectionId}]->(target)
          SET r.edgeId = item.edgeId,
              r.projectId = item.projectId,
              r.branchId = item.branchId,
              r.revisionId = item.revisionId,
              r.description = item.description,
              r.status = item.status
        `,
        parameters: {
          items: batch.map((edge) => ({
            projectionId: projectionId(graph.revision.id, edge.id),
            sourceProjectionId: projectionId(graph.revision.id, edge.source),
            targetProjectionId: projectionId(graph.revision.id, edge.target),
            edgeId: edge.id,
            projectId: graph.projectId,
            branchId: graph.branch.id,
            revisionId: graph.revision.id,
            description: edge.description,
            status: edge.status,
          })),
        },
        planCache: "AUTO",
        queryTimeoutMilliseconds: 30_000,
      }));
    }
  }
  return { projected: true, nodeCount: graph.nodes.length, edgeCount: graph.edges.length };
}

export function retrieveLocalSubgraph(
  graph: GameOntologyV2,
  input: { seedStableKeys: string[]; depth?: number; maxNodes?: number },
): RetrievedSubgraph {
  const depth = Math.min(3, Math.max(0, input.depth ?? 2));
  const maxNodes = Math.min(200, Math.max(1, input.maxNodes ?? 80));
  const seedKeys = new Set(input.seedStableKeys);
  const seeds = graph.nodes.filter((node) => seedKeys.has(node.stableKey));
  const selected = new Set(seeds.map((node) => node.id));
  let frontier = new Set(selected);
  for (let step = 0; step < depth && selected.size < maxNodes; step += 1) {
    const next = new Set<string>();
    for (const edge of graph.edges) {
      if (frontier.has(edge.source) && !selected.has(edge.target)) next.add(edge.target);
      if (frontier.has(edge.target) && !selected.has(edge.source)) next.add(edge.source);
    }
    frontier = new Set([...next].slice(0, Math.max(0, maxNodes - selected.size)));
    for (const id of frontier) selected.add(id);
  }
  return {
    projectId: graph.projectId,
    branchId: graph.branch.id,
    revisionId: graph.revision.id,
    nodes: graph.nodes.filter((node) => selected.has(node.id)),
    edges: graph.edges.filter((edge) => selected.has(edge.source) && selected.has(edge.target)),
    seedNodeIds: seeds.map((node) => node.id),
  };
}

export function impactSubgraph(
  graph: GameOntologyV2,
  changedNodeIds: string[],
  depth = 3,
): RetrievedSubgraph {
  const stableKeys = graph.nodes
    .filter((node) => changedNodeIds.includes(node.id))
    .map((node) => node.stableKey);
  return retrieveLocalSubgraph(graph, { seedStableKeys: stableKeys, depth, maxNodes: 200 });
}
