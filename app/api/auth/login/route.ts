import { randomBytes, createHash } from "node:crypto";
import {
  oauthCookieName,
  secureCookie,
  signCookiePayload,
} from "@/lib/auth-session";

function publicUrl(request: Request) {
  return (process.env.GAMEFORGE_PUBLIC_URL || new URL(request.url).origin).replace(/\/$/, "");
}

export async function GET(request: Request) {
  const domain = process.env.COGNITO_DOMAIN;
  const clientId = process.env.COGNITO_CLIENT_ID;
  if (!domain || !clientId) {
    return Response.json({ error: "Cognito가 아직 구성되지 않았습니다." }, { status: 503 });
  }
  const verifier = randomBytes(48).toString("base64url");
  const state = randomBytes(24).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest("base64url");
  const callback = `${publicUrl(request)}/api/auth/callback`;
  const authorize = new URL("/oauth2/authorize", domain);
  authorize.searchParams.set("response_type", "code");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", callback);
  authorize.searchParams.set("scope", "openid email profile");
  authorize.searchParams.set("state", state);
  authorize.searchParams.set("code_challenge_method", "S256");
  authorize.searchParams.set("code_challenge", challenge);
  return new Response(null, {
    status: 302,
    headers: {
      Location: authorize.toString(),
      "Set-Cookie": secureCookie(
        oauthCookieName,
        signCookiePayload({ state, verifier, exp: Math.floor(Date.now() / 1000) + 600 }),
        600,
      ),
      "Cache-Control": "no-store",
    },
  });
}
