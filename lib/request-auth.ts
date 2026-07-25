import { authSession, writerGrant } from "@/lib/auth-session";

export type RequestActor = {
  sub: string;
  email: string;
  name: string;
  groups: string[];
  authenticated: boolean;
  writer: boolean;
  workshopId: string;
  local: boolean;
};

export function requestActor(request: Request): RequestActor {
  const url = new URL(request.url);
  const localHost = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
  const local =
    localHost &&
    (process.env.NODE_ENV !== "production" ||
      process.env.GAMEFORGE_ALLOW_LOCAL_WORKSHOP === "true");
  const session = authSession(request);
  const grant = writerGrant(request);
  if (session) {
    const organizer = session.groups.includes("organizer");
    return {
      sub: session.sub,
      email: session.email,
      name: session.name,
      groups: session.groups,
      authenticated: true,
      writer: organizer || Boolean(grant),
      workshopId: organizer ? "organizer" : (grant?.workshopId ?? ""),
      local: false,
    };
  }
  const rawEmail = request.headers.get("oai-authenticated-user-email")?.trim().toLowerCase() ?? "";
  const email =
    rawEmail.length <= 254 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(rawEmail)
      ? rawEmail
      : "";
  const encodedName = request.headers.get("oai-authenticated-user-full-name");
  const nameEncoding = request.headers.get("oai-authenticated-user-full-name-encoding");
  let name = email || "Local workshop";
  if (encodedName && nameEncoding === "percent-encoded-utf-8") {
    try {
      name = decodeURIComponent(encodedName);
    } catch {
      name = email || "Local workshop";
    }
  }
  return {
    sub: local ? "local-workshop" : email,
    email: email || (local ? "local@gameforge.dev" : ""),
    name,
    groups: [],
    authenticated: Boolean(email),
    writer: local,
    workshopId: local ? "local" : "",
    local,
  };
}
