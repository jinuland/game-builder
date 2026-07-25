import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { buildSigningPublicKey } from "@/lib/build-revision";

export async function GET() {
  const template = await readFile(
    join(process.cwd(), "public", "gameforge-companion.mjs"),
    "utf8",
  );
  const { publicKey, keyId } = buildSigningPublicKey();
  const companionSource = template.replace("__GAMEFORGE_BUILD_PUBLIC_KEY__", publicKey);
  return new Response(companionSource, {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
      "Content-Disposition": 'attachment; filename="gameforge-companion.mjs"',
      "Cache-Control": "public, max-age=300",
      "X-Content-Type-Options": "nosniff",
      "X-GameForge-Build-Key-Id": keyId,
    },
  });
}
