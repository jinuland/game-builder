import { createRemoteJWKSet, jwtVerify } from "jose";
import {
  authCookieName,
  clearCookie,
  oauthCookieName,
  readCookie,
  secureCookie,
  signCookiePayload,
  verifyCookiePayload,
} from "@/lib/auth-session";

type OAuthState = { state: string; verifier: string; exp: number };

function publicUrl(request: Request) {
  return (process.env.GAMEFORGE_PUBLIC_URL || new URL(request.url).origin).replace(/\/$/, "");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const oauth = verifyCookiePayload<OAuthState>(readCookie(request, oauthCookieName));
  const domain = process.env.COGNITO_DOMAIN;
  const clientId = process.env.COGNITO_CLIENT_ID;
  const userPoolId = process.env.COGNITO_USER_POOL_ID;
  const region = process.env.AWS_REGION || "ap-northeast-2";
  if (!code || !state || !oauth || state !== oauth.state || !domain || !clientId || !userPoolId) {
    return Response.redirect(`${publicUrl(request)}/?auth=failed`, 302);
  }
  const callback = `${publicUrl(request)}/api/auth/callback`;
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    code,
    code_verifier: oauth.verifier,
    redirect_uri: callback,
  });
  const tokenResponse = await fetch(new URL("/oauth2/token", domain), {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(15_000),
  });
  if (!tokenResponse.ok) return Response.redirect(`${publicUrl(request)}/?auth=failed`, 302);
  const tokens = await tokenResponse.json() as { id_token?: string };
  if (!tokens.id_token) return Response.redirect(`${publicUrl(request)}/?auth=failed`, 302);
  const issuer = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`;
  const jwks = createRemoteJWKSet(new URL(`${issuer}/.well-known/jwks.json`));
  const { payload } = await jwtVerify(tokens.id_token, jwks, {
    issuer,
    audience: clientId,
  });
  const sub = String(payload.sub ?? "");
  if (!sub) return Response.redirect(`${publicUrl(request)}/?auth=failed`, 302);
  const now = Math.floor(Date.now() / 1000);
  const maxAge = 7 * 24 * 60 * 60;
  const session = signCookiePayload({
    sub,
    email: String(payload.email ?? ""),
    name: String(payload.name ?? payload.email ?? "Game Maker"),
    groups: Array.isArray(payload["cognito:groups"]) ? payload["cognito:groups"].map(String) : [],
    exp: now + maxAge,
  });
  const headers = new Headers({
    Location: `${publicUrl(request)}/`,
    "Cache-Control": "no-store",
  });
  headers.append("Set-Cookie", secureCookie(authCookieName, session, maxAge));
  headers.append("Set-Cookie", clearCookie(oauthCookieName));
  return new Response(null, { status: 302, headers });
}
