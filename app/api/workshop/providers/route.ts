import { requestActor } from "@/lib/request-auth";

export async function GET(request: Request) {
  const actor = requestActor(request);
  const privateModelsAllowed = actor.writer || actor.local;
  return Response.json({
    providers: [
      {
        id: "storyforge",
        label: "StoryForge Key · Bedrock",
        configured: privateModelsAllowed && Boolean(process.env.GAMEFORGE_BEDROCK_MODEL_ID),
        recommended: true,
      },
      {
        id: "bedrock",
        label: "Amazon Bedrock · Direct",
        configured: privateModelsAllowed && Boolean(process.env.GAMEFORGE_BEDROCK_MODEL_ID),
      },
      {
        id: "local",
        label: "Local LLM · Ollama/LM Studio",
        configured: privateModelsAllowed && actor.local && Boolean(process.env.LOCAL_LLM_BASE_URL),
      },
      { id: "demo", label: "Safe Demo", configured: true },
    ],
  });
}
