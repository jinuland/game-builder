import {
  authCookieName,
  clearCookie,
  writerCookieName,
} from "@/lib/auth-session";

function publicUrl(request: Request) {
  return (process.env.GAMEFORGE_PUBLIC_URL || new URL(request.url).origin).replace(/\/$/, "");
}

export async function GET(request: Request) {
  const domain = process.env.COGNITO_DOMAIN;
  const clientId = process.env.COGNITO_CLIENT_ID;
  const destination = `${publicUrl(request)}/`;
  const location = domain && clientId
    ? `${domain.replace(/\/$/, "")}/logout?client_id=${encodeURIComponent(clientId)}&logout_uri=${encodeURIComponent(destination)}`
    : destination;
  const headers = new Headers({ Location: location, "Cache-Control": "no-store" });
  headers.append("Set-Cookie", clearCookie(authCookieName));
  headers.append("Set-Cookie", clearCookie(writerCookieName));
  return new Response(null, { status: 302, headers });
}
