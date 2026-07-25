import {
  secureCookie,
  signCookiePayload,
  writerCookieName,
} from "@/lib/auth-session";
import { markInviteUsed, redeemWorkshopInvite } from "@/lib/aws-store";
import { requestActor } from "@/lib/request-auth";

export async function POST(request: Request) {
  const actor = requestActor(request);
  if (!actor.authenticated) return Response.json({ error: "로그인이 필요합니다." }, { status: 401 });
  const body = await request.json() as { code?: string };
  const code = String(body.code ?? "").trim().toUpperCase();
  if (!/^[A-Z2-9]{4}-[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(code)) {
    return Response.json({ error: "참가 코드 형식이 올바르지 않습니다." }, { status: 400 });
  }
  const invite = await redeemWorkshopInvite(code);
  if (!invite) return Response.json({ error: "만료되었거나 유효하지 않은 참가 코드입니다." }, { status: 403 });
  await markInviteUsed(invite.inviteId, actor.sub);
  const now = Math.floor(Date.now() / 1000);
  const maxAge = Math.max(1, invite.expiresAt - now);
  const cookie = signCookiePayload({
    sub: actor.sub,
    workshopId: invite.workshopId,
    inviteId: invite.inviteId,
    exp: invite.expiresAt,
  });
  return Response.json({
    writer: true,
    workshopId: invite.workshopId,
    label: invite.label,
    expiresAt: new Date(invite.expiresAt * 1000).toISOString(),
  }, {
    headers: { "Set-Cookie": secureCookie(writerCookieName, cookie, maxAge), "Cache-Control": "no-store" },
  });
}
