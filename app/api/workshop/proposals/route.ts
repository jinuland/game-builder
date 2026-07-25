import { getProposal, resolveProposal } from "@/lib/aws-store";
import { requestActor } from "@/lib/request-auth";

export async function POST(request: Request) {
  const actor = requestActor(request);
  if (!actor.authenticated) return Response.json({ error: "로그인이 필요합니다." }, { status: 401 });
  if (!actor.writer) return Response.json({ error: "writer 권한이 필요합니다." }, { status: 403 });
  const body = await request.json() as { proposalId?: string; action?: string };
  const proposalId = String(body.proposalId || "").slice(0, 80);
  if (!proposalId || body.action !== "reject") {
    return Response.json({ error: "유효한 proposalId와 reject 작업이 필요합니다." }, { status: 400 });
  }
  const proposal = await getProposal(actor.sub, proposalId);
  if (!proposal || proposal.status !== "pending") {
    return Response.json({ error: "폐기할 수 있는 pending 제안을 찾지 못했습니다." }, { status: 409 });
  }
  await resolveProposal({ ownerSub: actor.sub, proposalId, status: "rejected" });
  return Response.json({ proposalId, status: "rejected" });
}
