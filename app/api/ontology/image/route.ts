// Image generation route — turns a workshop imageGenerationPlan prompt into an
// actual PNG using Amazon Bedrock (Stability). Reuses the same Bedrock API key
// (AWS_BEARER_TOKEN_BEDROCK) the workshop already uses for text. Stability image
// models live in us-west-2, so we use GAMEFORGE_IMAGE_REGION (default us-west-2),
// independent of the text model region. Returns { image: dataUrl, model, aspectRatio }.

const IMAGE_TIMEOUT_MS = 5 * 60 * 1_000;

// Only models verified callable on this account/region are exposed.
const MODELS: Record<string, { id: string; label: string }> = {
  "stable-core": { id: "stability.stable-image-core-v1:1", label: "Stable Image Core — 빠르고 저렴 (기본값)" },
  "stable-ultra": { id: "stability.stable-image-ultra-v1:1", label: "Stable Image Ultra — 최고 품질" },
  "sd3.5-large": { id: "stability.sd3-5-large-v1:0", label: "Stable Diffusion 3.5 Large" },
};
const DEFAULT_MODEL = "stable-core";

const ASPECTS: Record<string, number> = {
  "1:1": 1, "16:9": 16 / 9, "9:16": 9 / 16, "3:2": 3 / 2, "2:3": 2 / 3,
  "4:5": 4 / 5, "5:4": 5 / 4, "21:9": 21 / 9, "9:21": 9 / 21,
};

function pickAspectRatio(width: number, height: number): string {
  const target = width / height;
  let best = "1:1";
  let bestDelta = Infinity;
  for (const [name, value] of Object.entries(ASPECTS)) {
    const delta = Math.abs(value - target);
    if (delta < bestDelta) { bestDelta = delta; best = name; }
  }
  return best;
}

function extractBase64(payload: { images?: string[]; artifacts?: Array<{ base64?: string }>; error?: string; message?: string }): string {
  if (Array.isArray(payload.images) && payload.images[0]) return payload.images[0];
  const artifact = payload.artifacts?.[0]?.base64;
  if (artifact) return artifact;
  throw new Error(payload.error ?? payload.message ?? "모델이 이미지를 반환하지 않았습니다.");
}

type ImageRequest = {
  prompt?: string;
  negativePrompt?: string;
  model?: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
  seed?: number;
};

async function generateImage(body: ImageRequest, signal?: AbortSignal) {
  const prompt = (body.prompt ?? "").trim();
  if (prompt.length < 4) throw new Error("이미지 프롬프트가 비어 있거나 너무 짧습니다.");
  if (prompt.length > 4000) throw new Error("프롬프트가 너무 깁니다 (최대 4000자).");

  const token = process.env.AWS_BEARER_TOKEN_BEDROCK;
  if (!token) throw new Error("AWS_BEARER_TOKEN_BEDROCK이 설정되지 않았습니다. .env.local에 Bedrock API key를 입력하세요.");

  const region = process.env.GAMEFORGE_IMAGE_REGION ?? "us-west-2";
  const modelKey = body.model && MODELS[body.model] ? body.model : DEFAULT_MODEL;
  const model = MODELS[modelKey];

  const aspect = body.aspectRatio && ASPECTS[body.aspectRatio]
    ? body.aspectRatio
    : pickAspectRatio(body.width ?? 1024, body.height ?? 1024);

  const requestBody: Record<string, unknown> = {
    prompt,
    aspect_ratio: aspect,
    output_format: "png",
  };
  if (body.negativePrompt && body.negativePrompt.trim()) requestBody.negative_prompt = body.negativePrompt.trim();
  if (typeof body.seed === "number" && Number.isFinite(body.seed)) requestBody.seed = body.seed;

  const httpResponse = await fetch(
    `https://bedrock-runtime.${region}.amazonaws.com/model/${encodeURIComponent(model.id)}/invoke`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(requestBody),
      signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(IMAGE_TIMEOUT_MS)]) : AbortSignal.timeout(IMAGE_TIMEOUT_MS),
    },
  );

  const payload = await httpResponse.json() as { images?: string[]; artifacts?: Array<{ base64?: string }>; error?: string; message?: string };
  if (!httpResponse.ok) throw new Error(payload.message ?? payload.error ?? `Bedrock 이미지 요청 실패 (${httpResponse.status})`);

  const base64 = extractBase64(payload);
  return {
    image: `data:image/png;base64,${base64}`,
    model: model.id,
    modelKey,
    aspectRatio: aspect,
    bytes: Math.floor((base64.length * 3) / 4),
  };
}

export async function GET() {
  // list available image models for the UI
  return Response.json({
    models: Object.entries(MODELS).map(([key, m]) => ({ key, id: m.id, label: m.label })),
    default: DEFAULT_MODEL,
    region: process.env.GAMEFORGE_IMAGE_REGION ?? "us-west-2",
    configured: Boolean(process.env.AWS_BEARER_TOKEN_BEDROCK),
  });
}

export async function POST(request: Request) {
  try {
    const result = await generateImage(await request.json() as ImageRequest, request.signal);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "이미지 생성 실패" }, { status: 500 });
  }
}
