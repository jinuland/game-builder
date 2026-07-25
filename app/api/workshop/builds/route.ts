import { createBuildManifest, signBuildRevision } from "@/lib/build-revision";
import {
  listWorkshops,
  saveBuildPairLookup,
  saveBuildRevision,
  writeAudit,
} from "@/lib/aws-store";
import { requestActor } from "@/lib/request-auth";

function noStore(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

export async function POST(request: Request) {
  try {
    const actor = requestActor(request);
    if (!actor.authenticated) return noStore({ error: "로그인이 필요합니다." }, { status: 401 });
    if (!actor.writer) return noStore({ error: "writer 권한이 필요합니다." }, { status: 403 });
    const payload = await request.json() as { projectId?: string };
    const projectId = String(payload.projectId ?? "").slice(0, 100);
    const workshop = (await listWorkshops(actor.sub)).find((item) => item.id === projectId);
    if (!workshop) return noStore({ error: "프로젝트를 찾지 못했습니다." }, { status: 404 });
    const buildId = crypto.randomUUID();
    const manifest = createBuildManifest(workshop, buildId);
    const envelope = signBuildRevision(manifest);
    const pairing = await saveBuildRevision({
      ownerSub: actor.sub,
      projectId,
      envelope,
    });
    await saveBuildPairLookup({
      buildId,
      pairingCode: pairing.pairingCode,
      pairExpiresAt: pairing.pairExpiresAt,
    });
    await writeAudit({
      ownerSub: actor.sub,
      sessionId: projectId,
      action: "build.revision.created",
      detail: {
        buildId,
        projectRevision: manifest.projectRevision,
        ontologyRevisionId: manifest.ontologyRevisionId,
        keyId: envelope.keyId,
      },
    });
    return noStore({
      buildId,
      projectId,
      projectRevision: manifest.projectRevision,
      ontologyRevisionId: manifest.ontologyRevisionId,
      pairingCode: pairing.pairingCode,
      pairExpiresAt: pairing.pairExpiresAt,
      buildExpiresAt: manifest.expiresAt,
      keyId: envelope.keyId,
    }, { status: 201 });
  } catch (error) {
    return noStore({
      error: error instanceof Error ? error.message : "Build Revision을 만들지 못했습니다.",
    }, { status: 500 });
  }
}
