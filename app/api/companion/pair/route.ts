import {
  buildReceiptToken,
  redeemBuildPairingCode,
  writeAudit,
} from "@/lib/aws-store";
import type { SignedBuildRevision } from "@/lib/build-revision";

function noStore(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as { code?: string };
    const build = await redeemBuildPairingCode(String(payload.code ?? ""));
    if (!build) {
      return noStore({
        error: "페어링 코드가 유효하지 않거나 만료·사용되었습니다.",
        code: "PAIRING_CODE_INVALID",
      }, { status: 404 });
    }
    const envelope = build.envelope as SignedBuildRevision;
    const buildId = String(envelope.manifest.buildId);
    await writeAudit({
      ownerSub: String(build.ownerSub),
      sessionId: String(build.projectId),
      action: "build.revision.delivered",
      detail: {
        buildId,
        ontologyRevisionId: envelope.manifest.ontologyRevisionId,
        keyId: envelope.keyId,
      },
    });
    return noStore({
      envelope,
      receiptToken: buildReceiptToken(buildId),
      receiptPath: "/api/companion/receipt",
    });
  } catch (error) {
    return noStore({
      error: error instanceof Error ? error.message : "Companion 페어링에 실패했습니다.",
    }, { status: 400 });
  }
}
