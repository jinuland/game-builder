import { createHash } from "node:crypto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import type { GameOntologyV2 } from "./ontology-v2";

const client = new S3Client({});

export type OntologySnapshotPointer = {
  bucket: string;
  key: string;
  checksumSha256: string;
  revisionId: string;
};

function snapshotBucket(): string {
  const bucket = process.env.GAMEFORGE_ONTOLOGY_SNAPSHOT_BUCKET;
  if (!bucket) throw new Error("GAMEFORGE_ONTOLOGY_SNAPSHOT_BUCKET이 필요합니다.");
  return bucket;
}

function safeSegment(value: string): string {
  if (!/^[a-zA-Z0-9._-]{1,128}$/.test(value)) {
    throw new Error("스냅샷 경로 식별자 형식이 잘못되었습니다.");
  }
  return value;
}

export async function putOntologySnapshot(
  ownerSub: string,
  graph: GameOntologyV2,
): Promise<OntologySnapshotPointer> {
  const bucket = snapshotBucket();
  const key = [
    "projects",
    safeSegment(ownerSub),
    safeSegment(graph.projectId),
    "branches",
    safeSegment(graph.branch.id),
    "revisions",
    `${safeSegment(graph.revision.id)}.json`,
  ].join("/");
  const body = JSON.stringify(graph);
  const checksum = createHash("sha256").update(body).digest();
  const checksumSha256 = checksum.toString("hex");
  try {
    await client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: "application/vnd.game-forge.ontology-v2+json",
      CacheControl: "no-store",
      ServerSideEncryption: "AES256",
      ChecksumSHA256: checksum.toString("base64"),
      IfNoneMatch: "*",
      Metadata: {
        projectid: graph.projectId,
        branchid: graph.branch.id,
        revisionid: graph.revision.id,
        revisionnumber: String(graph.revision.number),
      },
    }));
  } catch (error) {
    const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
    if (status !== 412) throw error;
  }
  return { bucket, key, checksumSha256, revisionId: graph.revision.id };
}
