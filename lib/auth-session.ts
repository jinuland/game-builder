import { createHmac, timingSafeEqual } from "node:crypto";

export const authCookieName = "__Host-gameforge_session";
export const writerCookieName = "__Host-gameforge_writer";
export const oauthCookieName = "__Host-gameforge_oauth";

export type AuthSession = {
  sub: string;
  email: string;
  name: string;
  groups: string[];
  exp: number;
};

export type WriterGrant = {
  sub: string;
  workshopId: string;
  inviteId: string;
  exp: number;
};

function cookieSecret() {
  const secret = process.env.GAMEFORGE_COOKIE_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("GAMEFORGE_COOKIE_SECRET은 32자 이상이어야 합니다.");
  }
  return secret;
}

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}

export function signCookiePayload(value: object): string {
  const payload = base64url(JSON.stringify(value));
  const signature = createHmac("sha256", cookieSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyCookiePayload<T extends { exp?: number }>(value: string): T | null {
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;
  const expected = createHmac("sha256", cookieSecret()).update(payload).digest();
  let actual: Buffer;
  try {
    actual = Buffer.from(signature, "base64url");
  } catch {
    return null;
  }
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;
  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as T;
    if (parsed.exp && parsed.exp <= Math.floor(Date.now() / 1000)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readCookie(request: Request, name: string): string {
  const cookie = request.headers.get("cookie") ?? "";
  return cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`))
    ?.slice(name.length + 1) ?? "";
}

export function secureCookie(name: string, value: string, maxAge: number) {
  return `${name}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

export function clearCookie(name: string) {
  return `${name}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export function authSession(request: Request): AuthSession | null {
  return verifyCookiePayload<AuthSession>(readCookie(request, authCookieName));
}

export function writerGrant(request: Request): WriterGrant | null {
  const session = authSession(request);
  const grant = verifyCookiePayload<WriterGrant>(readCookie(request, writerCookieName));
  return session && grant?.sub === session.sub ? grant : null;
}
