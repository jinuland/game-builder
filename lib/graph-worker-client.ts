import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import type { OntologySnapshotPointer } from "./snapshot-store";

const lambda = new LambdaClient({});

export type ProjectionQueueResult = {
  enabled: boolean;
  queued: boolean;
  revisionId: string;
  error?: string;
};

export async function queueOntologyProjection(
  snapshot: OntologySnapshotPointer,
): Promise<ProjectionQueueResult> {
  const arn = process.env.GAMEFORGE_GRAPH_WORKER_ARN?.trim();
  if (!arn) {
    return { enabled: false, queued: false, revisionId: snapshot.revisionId };
  }
  try {
    const response = await lambda.send(new InvokeCommand({
      FunctionName: arn,
      InvocationType: "Event",
      Payload: Buffer.from(JSON.stringify({
        action: "project_snapshot",
        bucket: snapshot.bucket,
        key: snapshot.key,
        expectedRevisionId: snapshot.revisionId,
      })),
    }));
    return {
      enabled: true,
      queued: response.StatusCode === 202,
      revisionId: snapshot.revisionId,
      ...(response.StatusCode === 202 ? {} : { error: `예상하지 못한 Lambda 상태 ${response.StatusCode}` }),
    };
  } catch (error) {
    return {
      enabled: true,
      queued: false,
      revisionId: snapshot.revisionId,
      error: error instanceof Error ? error.message.slice(0, 240) : "Graph projection 요청 실패",
    };
  }
}
