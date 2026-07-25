import { createWorkshopInvite } from "@/lib/aws-store";
import { requestActor } from "@/lib/request-auth";

export async function POST(request: Request) {
  const actor = requestActor(request);
  if (!actor.authenticated || !actor.groups.includes("organizer")) {
    return Response.json({ error: "진행자 권한이 필요합니다." }, { status: 403 });
  }
  const body = await request.json() as { workshopId?: string; label?: string };
  const workshopId = String(body.workshopId || crypto.randomUUID()).slice(0, 100);
  const label = String(body.label || "GAME FORGE WORKSHOP").slice(0, 100);
  const invite = await createWorkshopInvite({ organizerSub: actor.sub, workshopId, label });
  return Response.json({
    ...invite,
    expiresAt: new Date(invite.expiresAt * 1000).toISOString(),
  }, { status: 201, headers: { "Cache-Control": "no-store" } });
}
