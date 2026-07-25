import { createHmac, randomBytes } from "node:crypto";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import type { GameOntologyV2 } from "./ontology-v2";
import type { OntologySnapshotPointer } from "./snapshot-store";
import type { WorkshopProposal } from "./game-ontology";
import type { GameOntology } from "./game-ontology";
import type { SignedBuildRevision } from "./build-revision";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({}));

function tableName() {
  const value = process.env.GAMEFORGE_TABLE_NAME;
  if (!value) throw new Error("GAMEFORGE_TABLE_NAME이 설정되지 않았습니다.");
  return value;
}

function inviteSecret() {
  const value = process.env.GAMEFORGE_INVITE_SECRET;
  if (!value || value.length < 32) throw new Error("GAMEFORGE_INVITE_SECRET은 32자 이상이어야 합니다.");
  return value;
}

export function inviteCodeHash(code: string) {
  return createHmac("sha256", inviteSecret()).update(code.trim().toUpperCase()).digest("hex");
}

export function generateInviteCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(12);
  const raw = [...bytes].map((byte) => alphabet[byte % alphabet.length]).join("");
  return `${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8)}`;
}

export async function createWorkshopInvite(input: {
  organizerSub: string;
  workshopId: string;
  label: string;
}) {
  const code = generateInviteCode();
  const inviteId = crypto.randomUUID();
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = now + 5 * 24 * 60 * 60;
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `INVITE#${inviteCodeHash(code)}`,
      sk: "META",
      entity: "INVITE",
      inviteId,
      workshopId: input.workshopId,
      label: input.label,
      organizerSub: input.organizerSub,
      createdAt: new Date(now * 1000).toISOString(),
      expiresAt,
      enabled: true,
    },
    ConditionExpression: "attribute_not_exists(pk)",
  }));
  return { code, inviteId, expiresAt, workshopId: input.workshopId, label: input.label };
}

export async function redeemWorkshopInvite(code: string) {
  const response = await client.send(new GetCommand({
    TableName: tableName(),
    Key: { pk: `INVITE#${inviteCodeHash(code)}`, sk: "META" },
    ConsistentRead: true,
  }));
  const item = response.Item;
  const now = Math.floor(Date.now() / 1000);
  if (!item || item.entity !== "INVITE" || !item.enabled || Number(item.expiresAt) <= now) return null;
  return {
    inviteId: String(item.inviteId),
    workshopId: String(item.workshopId),
    label: String(item.label ?? "GAME FORGE WORKSHOP"),
    expiresAt: Number(item.expiresAt),
  };
}

export type StoredWorkshop = {
  id: string;
  ownerSub: string;
  ownerEmail: string;
  title: string;
  provider: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  graph: unknown;
  ontologyV2?: GameOntologyV2;
  ontologySnapshot?: OntologySnapshotPointer;
  story: unknown[];
  messages: unknown[];
};

export async function listWorkshops(ownerSub: string): Promise<StoredWorkshop[]> {
  const response = await client.send(new QueryCommand({
    TableName: tableName(),
    KeyConditionExpression: "pk = :pk AND begins_with(sk, :prefix)",
    ExpressionAttributeValues: { ":pk": `USER#${ownerSub}`, ":prefix": "PROJECT#" },
    ScanIndexForward: false,
    Limit: 50,
  }));
  return (response.Items ?? []).map((item) => ({
    id: String(item.projectId),
    ownerSub,
    ownerEmail: String(item.ownerEmail ?? ""),
    title: String(item.title),
    provider: String(item.provider),
    revision: Number(item.revision),
    createdAt: String(item.createdAt),
    updatedAt: String(item.updatedAt),
    graph: item.graph,
    ontologyV2: item.ontologyV2 as GameOntologyV2 | undefined,
    ontologySnapshot: item.ontologySnapshot as OntologySnapshotPointer | undefined,
    story: Array.isArray(item.story) ? item.story : [],
    messages: Array.isArray(item.messages) ? item.messages : [],
  }));
}

export async function getWorkshop(ownerSub: string, projectId: string) {
  const response = await client.send(new GetCommand({
    TableName: tableName(),
    Key: { pk: `USER#${ownerSub}`, sk: `PROJECT#${projectId}` },
    ConsistentRead: true,
  }));
  return response.Item;
}

export async function saveWorkshop(input: Omit<StoredWorkshop, "createdAt" | "updatedAt">) {
  const now = new Date().toISOString();
  const existing = await getWorkshop(input.ownerSub, input.id);
  if (existing && Number(existing.revision) !== input.revision) {
    return { conflict: true as const, revision: Number(existing.revision) };
  }
  const revision = (existing ? Number(existing.revision) : 0) + 1;
  const createdAt = String(existing?.createdAt ?? now);
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `USER#${input.ownerSub}`,
      sk: `PROJECT#${input.id}`,
      entity: "PROJECT",
      projectId: input.id,
      ownerSub: input.ownerSub,
      ownerEmail: input.ownerEmail,
      title: input.title,
      provider: input.provider,
      graph: input.graph,
      ontologyV2: input.ontologyV2,
      ontologySnapshot: input.ontologySnapshot,
      story: input.story,
      messages: input.messages,
      revision,
      createdAt,
      updatedAt: now,
    },
  }));
  return { conflict: false as const, revision, createdAt, updatedAt: now };
}

export type StoredPlaytestRun = {
  id: string;
  projectId: string;
  ontologyRevisionId: string;
  endingBeatId: string;
  choiceIds: string[];
  visitedBeatIds: string[];
  variables: Record<string, string | number | boolean>;
  coverage: {
    visitedBeats: number;
    totalBeats: number;
    visitedChoices: number;
    totalChoices: number;
    beatPercent: number;
    choicePercent: number;
  };
  feedback: string;
  rating: number | null;
  createdAt: string;
};

export async function savePlaytestRun(
  ownerSub: string,
  input: Omit<StoredPlaytestRun, "id" | "createdAt">,
): Promise<StoredPlaytestRun> {
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const run: StoredPlaytestRun = { id, createdAt, ...input };
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `USER#${ownerSub}`,
      sk: `PLAYTEST#${input.projectId}#${createdAt}#${id}`,
      entity: "PLAYTEST",
      ...run,
      expiresAt: Math.floor(Date.now() / 1000) + 180 * 24 * 60 * 60,
    },
    ConditionExpression: "attribute_not_exists(pk) AND attribute_not_exists(sk)",
  }));
  return run;
}

export async function listPlaytestRuns(
  ownerSub: string,
  projectId: string,
  limit = 20,
): Promise<StoredPlaytestRun[]> {
  const response = await client.send(new QueryCommand({
    TableName: tableName(),
    KeyConditionExpression: "pk = :pk AND begins_with(sk, :prefix)",
    ExpressionAttributeValues: {
      ":pk": `USER#${ownerSub}`,
      ":prefix": `PLAYTEST#${projectId}#`,
    },
    ScanIndexForward: false,
    Limit: Math.min(100, Math.max(1, limit)),
  }));
  return (response.Items ?? []).map((item) => ({
    id: String(item.id),
    projectId: String(item.projectId),
    ontologyRevisionId: String(item.ontologyRevisionId),
    endingBeatId: String(item.endingBeatId),
    choiceIds: Array.isArray(item.choiceIds) ? item.choiceIds.map(String) : [],
    visitedBeatIds: Array.isArray(item.visitedBeatIds) ? item.visitedBeatIds.map(String) : [],
    variables: item.variables && typeof item.variables === "object"
      ? item.variables as Record<string, string | number | boolean>
      : {},
    coverage: item.coverage as StoredPlaytestRun["coverage"],
    feedback: String(item.feedback ?? ""),
    rating: typeof item.rating === "number" ? item.rating : null,
    createdAt: String(item.createdAt),
  }));
}

export async function savePendingProposal(input: {
  ownerSub: string;
  sessionId: string;
  proposal: WorkshopProposal;
  baseRevisionId: string;
  provider: string;
  baseGraph: GameOntology;
}) {
  const createdAt = new Date().toISOString();
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `USER#${input.ownerSub}`,
      sk: `PROPOSAL#${input.proposal.id}`,
      entity: "PROPOSAL",
      proposalId: input.proposal.id,
      sessionId: input.sessionId,
      baseRevisionId: input.baseRevisionId,
      provider: input.provider,
      proposal: input.proposal,
      baseGraph: input.baseGraph,
      status: "pending",
      createdAt,
      expiresAt: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
    },
    ConditionExpression: "attribute_not_exists(pk) AND attribute_not_exists(sk)",
  }));
}

export async function getProposal(ownerSub: string, proposalId: string) {
  const response = await client.send(new GetCommand({
    TableName: tableName(),
    Key: { pk: `USER#${ownerSub}`, sk: `PROPOSAL#${proposalId}` },
    ConsistentRead: true,
  }));
  return response.Item;
}

export async function resolveProposal(input: {
  ownerSub: string;
  proposalId: string;
  status: "approved" | "rejected";
  revisionId?: string;
}) {
  const resolvedAt = new Date().toISOString();
  await client.send(new UpdateCommand({
    TableName: tableName(),
    Key: { pk: `USER#${input.ownerSub}`, sk: `PROPOSAL#${input.proposalId}` },
    UpdateExpression: "SET #status = :status, resolvedAt = :resolvedAt, resolvedRevisionId = :revisionId",
    ConditionExpression: "#status = :pending",
    ExpressionAttributeNames: { "#status": "status" },
    ExpressionAttributeValues: {
      ":status": input.status,
      ":pending": "pending",
      ":resolvedAt": resolvedAt,
      ":revisionId": input.revisionId ?? null,
    },
  }));
}

export async function writeAudit(input: {
  ownerSub: string;
  sessionId: string;
  action: string;
  detail: Record<string, unknown>;
}) {
  const createdAt = new Date().toISOString();
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `AUDIT#${input.ownerSub}`,
      sk: `${createdAt}#${crypto.randomUUID()}`,
      entity: "AUDIT",
      sessionId: input.sessionId,
      action: input.action,
      detail: input.detail,
      createdAt,
      expiresAt: Math.floor(Date.now() / 1000) + 90 * 24 * 60 * 60,
    },
  }));
}

export async function recentModelUsage(
  ownerSub: string,
  since: string,
): Promise<Array<Record<string, unknown> & { createdAt: string }>> {
  const response = await client.send(new QueryCommand({
    TableName: tableName(),
    KeyConditionExpression: "pk = :pk AND sk >= :since",
    ExpressionAttributeValues: { ":pk": `AUDIT#${ownerSub}`, ":since": since },
    ScanIndexForward: false,
    Limit: 1000,
  }));
  return (response.Items ?? [])
    .filter((item) => item.action === "model.invoked")
    .map((item) => ({ createdAt: String(item.createdAt), ...(item.detail as Record<string, unknown>) }));
}

export async function markInviteUsed(inviteId: string, userSub: string) {
  await client.send(new UpdateCommand({
    TableName: tableName(),
    Key: { pk: `MEMBERSHIP#${userSub}`, sk: `INVITE#${inviteId}` },
    UpdateExpression: "SET entity = :entity, redeemedAt = :now",
    ExpressionAttributeValues: { ":entity": "MEMBERSHIP", ":now": new Date().toISOString() },
  }));
}

function buildPairSecret() {
  const value = process.env.GAMEFORGE_BUILD_SIGNING_SECRET;
  if (!value || value.length < 32) {
    throw new Error("GAMEFORGE_BUILD_SIGNING_SECRET은 32자 이상이어야 합니다.");
  }
  return value;
}

export function generatePairingCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(8);
  return [...bytes].map((byte) => alphabet[byte % alphabet.length]).join("");
}

function pairingCodeHash(code: string) {
  return createHmac("sha256", buildPairSecret())
    .update(`pair:${code.trim().toUpperCase()}`)
    .digest("hex");
}

export async function saveBuildRevision(input: {
  ownerSub: string;
  projectId: string;
  envelope: SignedBuildRevision;
}) {
  const pairingCode = generatePairingCode();
  const now = Math.floor(Date.now() / 1000);
  const pairExpiresAt = now + 10 * 60;
  const buildExpiresAt = Math.floor(Date.parse(input.envelope.manifest.expiresAt) / 1000);
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `BUILD#${input.envelope.manifest.buildId}`,
      sk: "META",
      entity: "BUILD_REVISION",
      ownerSub: input.ownerSub,
      projectId: input.projectId,
      ontologyRevisionId: input.envelope.manifest.ontologyRevisionId,
      projectRevision: input.envelope.manifest.projectRevision,
      pairingCodeHash: pairingCodeHash(pairingCode),
      pairExpiresAt,
      expiresAt: buildExpiresAt,
      status: "ready",
      envelope: input.envelope,
      createdAt: input.envelope.manifest.createdAt,
    },
    ConditionExpression: "attribute_not_exists(pk)",
  }));
  return { pairingCode, pairExpiresAt };
}

export async function redeemBuildPairingCode(code: string) {
  const normalized = code.trim().toUpperCase();
  if (!/^[A-HJ-NP-Z2-9]{8}$/.test(normalized)) return null;
  const lookup = await client.send(new GetCommand({
    TableName: tableName(),
    Key: { pk: `PAIR#${pairingCodeHash(normalized)}`, sk: "META" },
    ConsistentRead: true,
  }));
  const pair = lookup.Item;
  if (!pair || Number(pair.pairExpiresAt) <= Math.floor(Date.now() / 1000)) return null;
  const build = await client.send(new GetCommand({
    TableName: tableName(),
    Key: { pk: `BUILD#${String(pair.buildId)}`, sk: "META" },
    ConsistentRead: true,
  }));
  if (!build.Item || build.Item.status !== "ready") return null;
  await client.send(new UpdateCommand({
    TableName: tableName(),
    Key: { pk: `PAIR#${pairingCodeHash(normalized)}`, sk: "META" },
    UpdateExpression: "SET #status = :redeemed, redeemedAt = :now",
    ConditionExpression: "#status = :ready AND pairExpiresAt > :epoch",
    ExpressionAttributeNames: { "#status": "status" },
    ExpressionAttributeValues: {
      ":ready": "ready",
      ":redeemed": "redeemed",
      ":now": new Date().toISOString(),
      ":epoch": Math.floor(Date.now() / 1000),
    },
  }));
  await client.send(new UpdateCommand({
    TableName: tableName(),
    Key: { pk: `BUILD#${String(pair.buildId)}`, sk: "META" },
    UpdateExpression: "SET #status = :delivered, deliveredAt = :now",
    ExpressionAttributeNames: { "#status": "status" },
    ExpressionAttributeValues: { ":delivered": "delivered", ":now": new Date().toISOString() },
  }));
  return build.Item;
}

export async function saveBuildPairLookup(input: {
  buildId: string;
  pairingCode: string;
  pairExpiresAt: number;
}) {
  await client.send(new PutCommand({
    TableName: tableName(),
    Item: {
      pk: `PAIR#${pairingCodeHash(input.pairingCode)}`,
      sk: "META",
      entity: "BUILD_PAIR",
      buildId: input.buildId,
      status: "ready",
      pairExpiresAt: input.pairExpiresAt,
      expiresAt: input.pairExpiresAt,
      createdAt: new Date().toISOString(),
    },
    ConditionExpression: "attribute_not_exists(pk)",
  }));
}

export async function acknowledgeBuildReceipt(input: {
  buildId: string;
  receiptToken: string;
  detail: Record<string, unknown>;
}) {
  const expected = createHmac("sha256", buildPairSecret())
    .update(`receipt:${input.buildId}`)
    .digest("base64url");
  if (input.receiptToken !== expected) return false;
  await client.send(new UpdateCommand({
    TableName: tableName(),
    Key: { pk: `BUILD#${input.buildId}`, sk: "META" },
    UpdateExpression: "SET #status = :received, receivedAt = :now, receiptDetail = :detail",
    ConditionExpression: "attribute_exists(pk)",
    ExpressionAttributeNames: { "#status": "status" },
    ExpressionAttributeValues: {
      ":received": "received",
      ":now": new Date().toISOString(),
      ":detail": input.detail,
    },
  }));
  return true;
}

export function buildReceiptToken(buildId: string) {
  return createHmac("sha256", buildPairSecret())
    .update(`receipt:${buildId}`)
    .digest("base64url");
}
