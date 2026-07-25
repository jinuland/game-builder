import { acknowledgeBuildReceipt } from "@/lib/aws-store";

function noStore(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as {
      buildId?: string;
      receiptToken?: string;
      status?: string;
      output?: string;
      companionVersion?: string;
    };
    const buildId = String(payload.buildId ?? "").slice(0, 80);
    const accepted = await acknowledgeBuildReceipt({
      buildId,
      receiptToken: String(payload.receiptToken ?? ""),
      detail: {
        status: String(payload.status ?? "received").slice(0, 40),
        output: String(payload.output ?? "").slice(0, 500),
        companionVersion: String(payload.companionVersion ?? "").slice(0, 40),
      },
    });
    if (!accepted) return noStore({ error: "유효하지 않은 receipt입니다." }, { status: 401 });
    return noStore({ accepted: true, buildId });
  } catch (error) {
    return noStore({
      error: error instanceof Error ? error.message : "수신 확인을 저장하지 못했습니다.",
    }, { status: 400 });
  }
}
