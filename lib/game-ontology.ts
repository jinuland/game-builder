export const nodeKinds = [
  "World",
  "WorldRule",
  "Character",
  "Faction",
  "Location",
  "Item",
  "Ability",
  "Resource",
  "Quest",
  "StoryBeat",
  "Choice",
  "Ending",
  "Mechanic",
  "GameLoop",
  "Progression",
  "Scene",
  "Prefab",
  "Asset",
] as const;

export type GameNodeKind = (typeof nodeKinds)[number];

export type GameOntologyNode = {
  id: string;
  kind: GameNodeKind;
  name: string;
  description: string;
  properties?: Record<string, string | number | boolean>;
};

export type GameOntologyEdge = {
  id: string;
  source: string;
  target: string;
  type: string;
  description?: string;
};

export type GameOntology = {
  version: 1;
  title: string;
  nodes: GameOntologyNode[];
  edges: GameOntologyEdge[];
};

export type OntologyOperation =
  | { op: "add_node"; node: GameOntologyNode }
  | { op: "update_node"; nodeId: string; patch: Partial<Omit<GameOntologyNode, "id">> }
  | { op: "remove_node"; nodeId: string }
  | { op: "add_edge"; edge: GameOntologyEdge }
  | { op: "remove_edge"; edgeId: string };

export type StoryBeatProposal = {
  act: string;
  title: string;
  summary: string;
  playerAction: string;
  consequence: string;
};

export type WorkshopProposal = {
  id: string;
  baseRevisionId: string;
  summary: string;
  rationale: string;
  operations: OntologyOperation[];
  storyBeats: StoryBeatProposal[];
  questions: string[];
  evidenceNodeIds: string[];
  impactSummary: string;
};

const allowedKinds = new Set<string>(nodeKinds);
const idPattern = /^[a-z][a-z0-9_-]{1,63}$/;
const proposalIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function cleanText(value: unknown, max = 400): string {
  return String(value ?? "").trim().slice(0, max);
}

function cleanId(value: unknown, fallback: string): string {
  const normalized = cleanText(value, 64)
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return idPattern.test(normalized) ? normalized : fallback;
}

function cleanNode(value: unknown, index: number): GameOntologyNode | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const kind = cleanText(raw.kind, 40);
  const name = cleanText(raw.name, 80);
  if (!allowedKinds.has(kind) || !name) return null;
  return {
    id: cleanId(raw.id, `concept-${index + 1}`),
    kind: kind as GameNodeKind,
    name,
    description: cleanText(raw.description, 500),
  };
}

export function sanitizeProposal(value: unknown): WorkshopProposal {
  const raw =
    value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const rawOperations = Array.isArray(raw.operations) ? raw.operations : [];
  const operations: OntologyOperation[] = [];

  rawOperations.slice(0, 20).forEach((candidate, index) => {
    if (!candidate || typeof candidate !== "object") return;
    const item = candidate as Record<string, unknown>;
    const op = cleanText(item.op, 30);
    if (op === "add_node") {
      const node = cleanNode(item.node, index);
      if (node) operations.push({ op, node });
    } else if (op === "update_node") {
      const nodeId = cleanId(item.nodeId, "");
      const patchRaw =
        item.patch && typeof item.patch === "object"
          ? (item.patch as Record<string, unknown>)
          : {};
      if (nodeId) {
        operations.push({
          op,
          nodeId,
          patch: {
            ...(cleanText(patchRaw.name, 80) ? { name: cleanText(patchRaw.name, 80) } : {}),
            ...(cleanText(patchRaw.description, 500)
              ? { description: cleanText(patchRaw.description, 500) }
              : {}),
          },
        });
      }
    } else if (op === "remove_node") {
      const nodeId = cleanId(item.nodeId, "");
      if (nodeId) operations.push({ op, nodeId });
    } else if (op === "add_edge") {
      const edgeRaw =
        item.edge && typeof item.edge === "object"
          ? (item.edge as Record<string, unknown>)
          : {};
      const source = cleanId(edgeRaw.source, "");
      const target = cleanId(edgeRaw.target, "");
      const type = cleanText(edgeRaw.type, 60)
        .toUpperCase()
        .replace(/[^A-Z0-9_]+/g, "_");
      if (source && target && type) {
        operations.push({
          op,
          edge: {
            id: cleanId(edgeRaw.id, `relation-${index + 1}`),
            source,
            target,
            type,
            description: cleanText(edgeRaw.description, 240),
          },
        });
      }
    } else if (op === "remove_edge") {
      const edgeId = cleanId(item.edgeId, "");
      if (edgeId) operations.push({ op, edgeId });
    }
  });

  const beats = (Array.isArray(raw.storyBeats) ? raw.storyBeats : [])
    .slice(0, 8)
    .map((candidate) => {
      const item =
        candidate && typeof candidate === "object"
          ? (candidate as Record<string, unknown>)
          : {};
      return {
        act: cleanText(item.act, 30),
        title: cleanText(item.title, 80),
        summary: cleanText(item.summary, 320),
        playerAction: cleanText(item.playerAction, 240),
        consequence: cleanText(item.consequence, 240),
      };
    })
    .filter((beat) => beat.title && beat.summary);

  return {
    id: proposalIdPattern.test(cleanText(raw.id, 80))
      ? cleanText(raw.id, 80)
      : crypto.randomUUID(),
    baseRevisionId: cleanText(raw.baseRevisionId, 80),
    summary: cleanText(raw.summary, 400) || "게임 세계 변경안을 준비했습니다.",
    rationale: cleanText(raw.rationale, 600),
    operations,
    storyBeats: beats,
    questions: (Array.isArray(raw.questions) ? raw.questions : [])
      .map((item) => cleanText(item, 180))
      .filter(Boolean)
      .slice(0, 3),
    evidenceNodeIds: (Array.isArray(raw.evidenceNodeIds) ? raw.evidenceNodeIds : [])
      .map((item) => cleanText(item, 80))
      .filter(Boolean)
      .slice(0, 40),
    impactSummary: cleanText(raw.impactSummary, 600),
  };
}

export function applyProposal(
  graph: GameOntology,
  proposal: WorkshopProposal,
): GameOntology {
  const nodes = new Map(graph.nodes.map((node) => [node.id, { ...node }]));
  const edges = new Map(graph.edges.map((edge) => [edge.id, { ...edge }]));

  for (const operation of proposal.operations) {
    if (operation.op === "add_node") {
      nodes.set(operation.node.id, operation.node);
    } else if (operation.op === "update_node") {
      const current = nodes.get(operation.nodeId);
      if (current) nodes.set(operation.nodeId, { ...current, ...operation.patch });
    } else if (operation.op === "remove_node") {
      nodes.delete(operation.nodeId);
      for (const [id, edge] of edges) {
        if (edge.source === operation.nodeId || edge.target === operation.nodeId) {
          edges.delete(id);
        }
      }
    } else if (operation.op === "add_edge") {
      if (nodes.has(operation.edge.source) && nodes.has(operation.edge.target)) {
        edges.set(operation.edge.id, operation.edge);
      }
    } else if (operation.op === "remove_edge") {
      edges.delete(operation.edgeId);
    }
  }

  return { ...graph, nodes: [...nodes.values()], edges: [...edges.values()] };
}

export const workshopProposalJsonSchema = {
  type: "object",
  properties: {
    baseRevisionId: { type: "string" },
    summary: { type: "string" },
    rationale: { type: "string" },
    operations: {
      type: "array",
      maxItems: 8,
      items: {
        type: "object",
        properties: {
          op: {
            type: "string",
            enum: ["add_node", "update_node", "remove_node", "add_edge", "remove_edge"],
          },
          node: {
            type: ["object", "null"],
            properties: {
              id: { type: "string" },
              kind: { type: "string", enum: nodeKinds },
              name: { type: "string" },
              description: { type: "string" },
              properties: { type: ["object", "null"] },
            },
            required: ["id", "kind", "name", "description"],
          },
          nodeId: { type: ["string", "null"] },
          patch: {
            type: ["object", "null"],
            properties: {
              kind: { type: ["string", "null"], enum: [...nodeKinds, null] },
              name: { type: ["string", "null"] },
              description: { type: ["string", "null"] },
            },
          },
          edge: {
            type: ["object", "null"],
            properties: {
              id: { type: "string" },
              source: { type: "string" },
              target: { type: "string" },
              type: { type: "string" },
              description: { type: ["string", "null"] },
            },
            required: ["id", "source", "target", "type"],
          },
          edgeId: { type: ["string", "null"] },
        },
        required: ["op"],
      },
    },
    storyBeats: {
      type: "array",
      maxItems: 4,
      items: {
        type: "object",
        properties: {
          act: { type: "string" },
          title: { type: "string" },
          summary: { type: "string" },
          playerAction: { type: "string" },
          consequence: { type: "string" },
        },
        required: ["act", "title", "summary", "playerAction", "consequence"],
      },
    },
    questions: { type: "array", maxItems: 3, items: { type: "string" } },
    evidenceNodeIds: { type: "array", maxItems: 12, items: { type: "string" } },
    impactSummary: { type: "string" },
  },
  required: [
    "baseRevisionId",
    "summary",
    "rationale",
    "operations",
    "storyBeats",
    "questions",
    "evidenceNodeIds",
    "impactSummary",
  ],
} as const;
