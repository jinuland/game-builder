import { retrieveLocalSubgraph, type RetrievedSubgraph } from "./graph-projection";
import type { GameOntologyV2 } from "./ontology-v2";

function terms(value: string): string[] {
  return [...new Set(
    value
      .toLowerCase()
      .split(/[^a-z0-9가-힣_.-]+/)
      .map((term) => term.trim())
      .filter((term) => term.length >= 2)
      .slice(0, 40),
  )];
}

export function selectContextSeedKeys(
  graph: GameOntologyV2,
  query: string,
  limit = 6,
): string[] {
  const queryTerms = terms(query);
  const scored = graph.nodes.map((node, index) => {
    const name = node.name.toLowerCase();
    const key = node.stableKey.toLowerCase();
    const description = node.description.toLowerCase();
    let score = 0;
    for (const term of queryTerms) {
      if (key === term || name === term) score += 12;
      else if (key.includes(term) || name.includes(term)) score += 6;
      if (description.includes(term)) score += 2;
    }
    if (node.layer === "domain") score += 0.2;
    return { key: node.stableKey, score, index };
  });
  const matched = scored
    .filter((item) => item.score >= 1)
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .slice(0, limit)
    .map((item) => item.key);
  if (matched.length) return matched;
  return graph.nodes
    .filter((node) => node.status === "approved")
    .slice(0, Math.min(3, limit))
    .map((node) => node.stableKey);
}

export function retrieveContextForPrompt(
  graph: GameOntologyV2,
  query: string,
): RetrievedSubgraph {
  return retrieveLocalSubgraph(graph, {
    seedStableKeys: selectContextSeedKeys(graph, query),
    depth: 2,
    maxNodes: 80,
  });
}
