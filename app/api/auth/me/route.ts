import { requestActor } from "@/lib/request-auth";

export async function GET(request: Request) {
  const actor = requestActor(request);
  return Response.json({
    authenticated: actor.authenticated,
    user: actor.authenticated
      ? { id: actor.sub, email: actor.email, name: actor.name, groups: actor.groups }
      : null,
    writer: actor.writer,
    workshopId: actor.workshopId || null,
    signInPath: "/api/auth/login",
    signOutPath: "/api/auth/logout",
  }, { headers: { "Cache-Control": "no-store" } });
}
