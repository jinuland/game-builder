#!/usr/bin/env node
// GAME FORGE 이미지 MCP 서버
// ---------------------------------------------------------------------------
// Build Goal(실행 명세)을 실행하는 코딩 에이전트에게 "이미지 제작" 도구를 준다.
// Amazon Bedrock의 이미지 모델을 하나의 generate_image 툴로 감싸고,
// 결과 PNG를 프로젝트 폴더에 저장한 뒤 경로를 돌려준다.
//
// 인증: 앱과 동일하게 AWS_BEARER_TOKEN_BEDROCK(또는 AWS_PROFILE)을 사용한다.
// 토큰을 .mcp.json에 복붙하지 않도록, 서버는 node --env-file-if-exists=.env.local
// 로 실행되어 앱과 같은 .env.local을 그대로 공유한다. (유저는 토큰 1회 입력)
//
// 리전: 이미지 생성 모델(Stability 계열)은 us-west-2에서 활성이라, 텍스트용
// GAMEFORGE_BEDROCK_REGION과 별개로 GAMEFORGE_IMAGE_REGION(기본 us-west-2)을 쓴다.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REGION =
  process.env.GAMEFORGE_IMAGE_REGION ?? process.env.AWS_REGION ?? "us-west-2";

// 이 계정/리전(us-west-2)에서 실제 호출이 검증된 모델만 노출한다.
// family는 요청/응답 포맷을 결정한다:
//   stability-generate: 텍스트→이미지 생성 ({ prompt, aspect_ratio, ... } → { images:[b64] })
//   stability-edit:      입력 이미지 편집   ({ image, ... } → { images:[b64] })
const MODELS = {
  // --- 생성(text→image) ---
  "stable-core": {
    id: "stability.stable-image-core-v1:1",
    family: "stability-generate",
    label: "Stable Image Core — 빠르고 저렴 (기본값)",
  },
  "stable-ultra": {
    id: "stability.stable-image-ultra-v1:1",
    family: "stability-generate",
    label: "Stable Image Ultra — 최고 품질",
  },
  "sd3.5-large": {
    id: "stability.sd3-5-large-v1:0",
    family: "stability-generate",
    label: "SD3.5 Large — SD 계열, 커스텀 스타일에 강함",
  },
  // --- 편집(image→image, 입력 이미지 필요) ---
  // 편집 모델은 on-demand 미지원 → us. inference profile ID로만 호출된다.
  "remove-background": {
    id: "us.stability.stable-image-remove-background-v1:0",
    family: "stability-edit",
    label: "배경 제거 (투명 PNG)",
  },
  upscale: {
    id: "us.stability.stable-fast-upscale-v1:0",
    family: "stability-edit",
    label: "빠른 4배 업스케일",
  },
  "upscale-creative": {
    id: "us.stability.stable-creative-upscale-v1:0",
    family: "stability-edit",
    label: "크리에이티브 업스케일 (디테일 보강)",
  },
  outpaint: {
    id: "us.stability.stable-outpaint-v1:0",
    family: "stability-edit-outpaint",
    label: "아웃페인트 (캔버스 확장)",
  },
};

const GENERATE_ALIASES = Object.entries(MODELS)
  .filter(([, m]) => m.family === "stability-generate")
  .map(([alias]) => alias);

const DEFAULT_MODEL = process.env.GAMEFORGE_IMAGE_MODEL ?? "stable-core";

// modelId 문자열(별칭 또는 전체 Bedrock id)을 표 항목으로 해석한다.
function resolveModel(input) {
  const key = (input ?? DEFAULT_MODEL).trim();
  if (MODELS[key]) return MODELS[key];
  const byId = Object.values(MODELS).find((m) => m.id === key);
  if (byId) return byId;
  const names = Object.keys(MODELS).join(", ");
  throw new Error(`알 수 없는 모델 "${key}". 사용 가능: ${names}`);
}

// width/height를 Stability가 받는 aspect_ratio 문자열로 근사한다.
function pickAspectRatio(width, height) {
  const ratios = {
    "1:1": 1,
    "16:9": 16 / 9,
    "9:16": 9 / 16,
    "3:2": 3 / 2,
    "2:3": 2 / 3,
    "4:5": 4 / 5,
    "5:4": 5 / 4,
    "21:9": 21 / 9,
    "9:21": 9 / 21,
  };
  const target = width / height;
  let best = "1:1";
  let bestDelta = Infinity;
  for (const [name, value] of Object.entries(ratios)) {
    const delta = Math.abs(value - target);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = name;
    }
  }
  return best;
}

// 응답 payload에서 base64 PNG를 꺼낸다. Stability는 { images:[b64] } 포맷.
function extractBase64(payload) {
  if (Array.isArray(payload.images) && payload.images[0]) return payload.images[0];
  const artifact = payload.artifacts?.[0]?.base64;
  if (artifact) return artifact;
  throw new Error(payload.error ?? payload.message ?? "모델이 이미지를 반환하지 않았습니다.");
}

// 저장 경로를 레포 내부로 제한한다(디렉터리 탈출 방지).
function resolveOutputPath(outputPath) {
  const target = isAbsolute(outputPath)
    ? resolve(outputPath)
    : resolve(REPO_ROOT, outputPath);
  const rootWithSep = REPO_ROOT.endsWith("/") ? REPO_ROOT : `${REPO_ROOT}/`;
  if (target !== REPO_ROOT && !target.startsWith(rootWithSep)) {
    throw new Error("outputPath는 프로젝트 폴더 안이어야 합니다.");
  }
  return target;
}

function relPath(target) {
  return target.startsWith(REPO_ROOT + "/") ? target.slice(REPO_ROOT.length + 1) : target;
}

// 입력 이미지(경로 또는 base64)를 base64 문자열로 읽는다.
async function readInputImage(input) {
  if (!input) throw new Error("이 모델은 image(입력 이미지 경로 또는 base64)가 필요합니다.");
  if (/^[A-Za-z0-9+/=\s]+$/.test(input) && input.length > 256 && !input.includes("/")) {
    return input.replace(/\s/g, "");
  }
  const { readFile } = await import("node:fs/promises");
  const target = resolveOutputPath(input);
  const bytes = await readFile(target);
  return bytes.toString("base64");
}

const client = new BedrockRuntimeClient({ region: REGION });

const server = new McpServer(
  { name: "bedrock-image", version: "0.1.0" },
  {
    instructions:
      "Amazon Bedrock(Stability)으로 게임 에셋/목업 이미지를 생성·편집한다. " +
      `generate_image로 새 이미지를 만들고(${GENERATE_ALIASES.join(", ")}), ` +
      "edit_image로 기존 이미지를 배경제거/업스케일/아웃페인트한다. " +
      "결과는 프로젝트 폴더에 PNG로 저장된다. list_image_models로 목록을 본다.",
  },
);

server.registerTool(
  "list_image_models",
  {
    title: "이미지 모델 목록",
    description:
      "이 서버가 지원하는 Bedrock 이미지 모델 별칭과 설명을 반환한다. " +
      "유저가 '어떤 모델 쓸 수 있어?'라고 물으면 이걸 호출한다.",
    inputSchema: {},
  },
  async () => {
    const rows = Object.entries(MODELS).map(([alias, m]) => ({
      alias,
      modelId: m.id,
      kind: m.family.startsWith("stability-edit") ? "edit" : "generate",
      description: m.label,
      isDefault: alias === DEFAULT_MODEL,
    }));
    return {
      content: [
        {
          type: "text",
          text: `region=${REGION}, 기본 생성 모델=${DEFAULT_MODEL}\n` + JSON.stringify(rows, null, 2),
        },
      ],
      structuredContent: { region: REGION, defaultModel: DEFAULT_MODEL, models: rows },
    };
  },
);

server.registerTool(
  "generate_image",
  {
    title: "이미지 생성",
    description:
      "프롬프트로 새 게임 에셋/목업 이미지를 생성해 프로젝트 폴더에 PNG로 저장한다. " +
      `model 별칭: ${GENERATE_ALIASES.join(", ")}(기본 ${DEFAULT_MODEL}). ` +
      "outputPath는 프로젝트 폴더 기준 상대 경로 권장(예: public/generated/goblin.png).",
    inputSchema: {
      prompt: z.string().min(1).describe("이미지 설명(영문 권장, 스타일·구도 포함)"),
      outputPath: z
        .string()
        .min(1)
        .describe("저장 경로. 프로젝트 폴더 내부. 예: public/generated/hero.png"),
      model: z
        .string()
        .optional()
        .describe(`생성 모델 별칭. 미지정 시 ${DEFAULT_MODEL}`),
      negativePrompt: z.string().optional().describe("피하고 싶은 요소"),
      width: z.number().int().min(256).max(2048).optional().describe("픽셀 너비(기본 1024)"),
      height: z.number().int().min(256).max(2048).optional().describe("픽셀 높이(기본 1024)"),
      seed: z.number().int().min(0).optional().describe("재현용 시드"),
    },
  },
  async (args) => {
    try {
      const model = resolveModel(args.model);
      if (model.family !== "stability-generate") {
        throw new Error(`${args.model}은(는) 편집 모델입니다. edit_image를 사용하세요.`);
      }
      const width = args.width ?? 1024;
      const height = args.height ?? 1024;
      const body = {
        prompt: args.prompt,
        ...(args.negativePrompt ? { negative_prompt: args.negativePrompt } : {}),
        aspect_ratio: pickAspectRatio(width, height),
        output_format: "png",
        ...(args.seed != null ? { seed: args.seed } : {}),
      };

      const response = await client.send(
        new InvokeModelCommand({
          modelId: model.id,
          contentType: "application/json",
          accept: "application/json",
          body: JSON.stringify(body),
        }),
      );
      const payload = JSON.parse(new TextDecoder().decode(response.body));
      const bytes = Buffer.from(extractBase64(payload), "base64");

      const target = resolveOutputPath(args.outputPath);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, bytes);
      const rel = relPath(target);

      return {
        content: [
          {
            type: "text",
            text: `이미지 생성 완료: ${rel} (${bytes.length.toLocaleString()} bytes, ${model.id})`,
          },
        ],
        structuredContent: {
          path: rel,
          absolutePath: target,
          bytes: bytes.length,
          modelId: model.id,
          aspectRatio: body.aspect_ratio,
        },
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { isError: true, content: [{ type: "text", text: `이미지 생성 실패: ${message}` }] };
    }
  },
);

server.registerTool(
  "edit_image",
  {
    title: "이미지 편집",
    description:
      "기존 이미지를 편집한다. model 별칭: remove-background, upscale, upscale-creative, outpaint. " +
      "image는 프로젝트 폴더 내 경로 또는 base64. 결과를 outputPath에 PNG로 저장한다.",
    inputSchema: {
      model: z
        .enum(["remove-background", "upscale", "upscale-creative", "outpaint"])
        .describe("편집 모델 별칭"),
      image: z.string().min(1).describe("입력 이미지: 프로젝트 폴더 내 경로 또는 base64"),
      outputPath: z.string().min(1).describe("저장 경로. 프로젝트 폴더 내부."),
      prompt: z.string().optional().describe("outpaint 등에서 채울 내용 설명(선택)"),
      left: z.number().int().min(0).optional().describe("outpaint: 왼쪽 확장 픽셀"),
      right: z.number().int().min(0).optional().describe("outpaint: 오른쪽 확장 픽셀"),
      up: z.number().int().min(0).optional().describe("outpaint: 위쪽 확장 픽셀"),
      down: z.number().int().min(0).optional().describe("outpaint: 아래쪽 확장 픽셀"),
    },
  },
  async (args) => {
    try {
      const model = resolveModel(args.model);
      if (!model.family.startsWith("stability-edit")) {
        throw new Error(`${args.model}은(는) 생성 모델입니다. generate_image를 사용하세요.`);
      }
      const imageB64 = await readInputImage(args.image);
      const body = { image: imageB64, output_format: "png" };
      if (model.family === "stability-edit-outpaint") {
        body.left = args.left ?? 0;
        body.right = args.right ?? 0;
        body.up = args.up ?? 0;
        body.down = args.down ?? 0;
        if (args.prompt) body.prompt = args.prompt;
      }

      const response = await client.send(
        new InvokeModelCommand({
          modelId: model.id,
          contentType: "application/json",
          accept: "application/json",
          body: JSON.stringify(body),
        }),
      );
      const payload = JSON.parse(new TextDecoder().decode(response.body));
      const bytes = Buffer.from(extractBase64(payload), "base64");

      const target = resolveOutputPath(args.outputPath);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, bytes);
      const rel = relPath(target);

      return {
        content: [
          {
            type: "text",
            text: `이미지 편집 완료: ${rel} (${bytes.length.toLocaleString()} bytes, ${model.id})`,
          },
        ],
        structuredContent: { path: rel, absolutePath: target, bytes: bytes.length, modelId: model.id },
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { isError: true, content: [{ type: "text", text: `이미지 편집 실패: ${message}` }] };
    }
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
