import {
  createHash,
  createPrivateKey,
  createPublicKey,
  sign,
  verify,
} from "node:crypto";
import type { StoredWorkshop } from "./aws-store";

export const buildRevisionSchema = "game-forge/build-revision/v1" as const;

export type BuildRevisionManifest = {
  schema: typeof buildRevisionSchema;
  buildId: string;
  projectId: string;
  projectRevision: number;
  ontologyRevisionId: string;
  ontologySnapshot: StoredWorkshop["ontologySnapshot"];
  createdAt: string;
  expiresAt: string;
  game: {
    schema: "game-forge/v1";
    title: string;
    genre: string;
    ontology: unknown;
    ontologyV2: StoredWorkshop["ontologyV2"];
    story: unknown[];
    unity: {
      version: "Unity 6 LTS";
      renderPipeline: "URP";
      packages: string[];
      scenes: string[];
    };
  };
};

export type SignedBuildRevision = {
  manifest: BuildRevisionManifest;
  algorithm: "Ed25519";
  keyId: string;
  publicKey: string;
  signature: string;
};

function signingSecret() {
  const value = process.env.GAMEFORGE_BUILD_SIGNING_SECRET;
  if (!value || value.length < 32) {
    throw new Error("GAMEFORGE_BUILD_SIGNING_SECRET은 32자 이상이어야 합니다.");
  }
  return value;
}

function canonicalize(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  const record = value as Record<string, unknown>;
  return `{${Object.keys(record).sort().map((key) => (
    `${JSON.stringify(key)}:${canonicalize(record[key])}`
  )).join(",")}}`;
}

function signingKeys(secret = signingSecret()) {
  const seed = createHash("sha256").update(`game-forge-build-v1:${secret}`).digest();
  const pkcs8Prefix = Buffer.from("302e020100300506032b657004220420", "hex");
  const privateKey = createPrivateKey({
    key: Buffer.concat([pkcs8Prefix, seed]),
    format: "der",
    type: "pkcs8",
  });
  const publicKeyObject = createPublicKey(privateKey);
  const publicKey = publicKeyObject.export({ format: "der", type: "spki" }).toString("base64");
  const keyId = createHash("sha256").update(publicKey, "base64").digest("hex").slice(0, 16);
  return { privateKey, publicKeyObject, publicKey, keyId };
}

export function signBuildRevision(manifest: BuildRevisionManifest): SignedBuildRevision {
  const keys = signingKeys();
  const payload = Buffer.from(canonicalize(manifest));
  return {
    manifest,
    algorithm: "Ed25519",
    keyId: keys.keyId,
    publicKey: keys.publicKey,
    signature: sign(null, payload, keys.privateKey).toString("base64"),
  };
}

export function buildSigningPublicKey() {
  const keys = signingKeys();
  return { publicKey: keys.publicKey, keyId: keys.keyId };
}

export function verifySignedBuildRevision(envelope: SignedBuildRevision): boolean {
  if (envelope.algorithm !== "Ed25519" || envelope.manifest.schema !== buildRevisionSchema) return false;
  const publicKey = createPublicKey({
    key: Buffer.from(envelope.publicKey, "base64"),
    format: "der",
    type: "spki",
  });
  return verify(
    null,
    Buffer.from(canonicalize(envelope.manifest)),
    publicKey,
    Buffer.from(envelope.signature, "base64"),
  );
}

export function createBuildManifest(
  workshop: StoredWorkshop,
  buildId: string,
  now = new Date(),
): BuildRevisionManifest {
  const ontologyRevisionId = String(workshop.ontologyV2?.revision?.id ?? "");
  if (!ontologyRevisionId || !workshop.ontologySnapshot) {
    throw new Error("먼저 승인된 ontology revision을 저장해주세요.");
  }
  return {
    schema: buildRevisionSchema,
    buildId,
    projectId: workshop.id,
    projectRevision: workshop.revision,
    ontologyRevisionId,
    ontologySnapshot: workshop.ontologySnapshot,
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
    game: {
      schema: "game-forge/v1",
      title: workshop.title,
      genre: "Ontology-driven Narrative Adventure",
      ontology: workshop.graph,
      ontologyV2: workshop.ontologyV2,
      story: workshop.story,
      unity: {
        version: "Unity 6 LTS",
        renderPipeline: "URP",
        packages: ["Input System", "Cinemachine", "AI Navigation"],
        scenes: ["Boot", "MemoryHub", "EchoDistrict", "FinalChoice"],
      },
    },
  };
}
