#!/usr/bin/env node

import { access, cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { createHash, createPublicKey, randomBytes, verify } from "node:crypto";
import { createServer } from "node:http";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const args = process.argv.slice(2);
const command = args[0] ?? "help";
const runFile = promisify(execFile);
const COMPANION_VERSION = "1.1.0";
const RUNTIME_PACKAGE_VERSION = "1.0.0";
const TRUSTED_BUILD_PUBLIC_KEY =
  process.env.GAMEFORGE_BUILD_PUBLIC_KEY || "__GAMEFORGE_BUILD_PUBLIC_KEY__";
const BEDROCK_NODE_KINDS = [
  "World", "WorldRule", "Character", "Faction", "Location", "Item", "Ability",
  "Resource", "Quest", "StoryBeat", "Choice", "Ending", "Mechanic", "GameLoop",
  "Progression", "Scene", "Prefab", "Asset",
];
const BEDROCK_SYSTEM_PROMPT = `너는 GAME FORGE의 게임 디렉터이자 온톨로지 설계자다.
사용자의 대화를 현재 게임 그래프와 비교해 승인 가능한 변경안을 구조화한다.
이미 존재하는 개념은 update_node로, 새 개념은 add_node로 제안한다.
삭제는 사용자가 명시한 경우만 제안한다. 관계 type은 영문 UPPER_SNAKE_CASE로 쓴다.
storyBeats에는 온톨로지 변화로 실제 영향을 받는 비트만 넣는다.
summary와 rationale은 자연스러운 한국어로 작성하고 질문은 최대 3개다.`;
const BEDROCK_PROPOSAL_SCHEMA = {
  type: "object",
  properties: {
    summary: { type: "string" },
    rationale: { type: "string" },
    operations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          op: {
            type: "string",
            enum: ["add_node", "update_node", "remove_node", "add_edge", "remove_edge"],
          },
          node: {
            type: ["object", "null"],
            properties: {
              id: { type: "string" },
              kind: { type: "string", enum: BEDROCK_NODE_KINDS },
              name: { type: "string" },
              description: { type: "string" },
            },
            required: ["id", "kind", "name", "description"],
          },
          nodeId: { type: ["string", "null"] },
          patch: {
            type: ["object", "null"],
            properties: {
              kind: { type: ["string", "null"], enum: [...BEDROCK_NODE_KINDS, null] },
              name: { type: ["string", "null"] },
              description: { type: ["string", "null"] },
            },
          },
          edge: {
            type: ["object", "null"],
            properties: {
              id: { type: "string" },
              source: { type: "string" },
              target: { type: "string" },
              type: { type: "string" },
              description: { type: ["string", "null"] },
            },
            required: ["id", "source", "target", "type"],
          },
          edgeId: { type: ["string", "null"] },
        },
        required: ["op"],
      },
    },
    storyBeats: {
      type: "array",
      items: {
        type: "object",
        properties: {
          act: { type: "string" },
          title: { type: "string" },
          summary: { type: "string" },
          playerAction: { type: "string" },
          consequence: { type: "string" },
        },
        required: ["act", "title", "summary", "playerAction", "consequence"],
      },
    },
    questions: { type: "array", items: { type: "string" } },
  },
  required: ["summary", "rationale", "operations", "storyBeats", "questions"],
};

function estimatedBedrockCost(inputTokens = 0, outputTokens = 0) {
  const inputRate = Number(process.env.GAMEFORGE_BEDROCK_INPUT_USD_PER_MILLION ?? 3);
  const outputRate = Number(process.env.GAMEFORGE_BEDROCK_OUTPUT_USD_PER_MILLION ?? 15);
  return (inputTokens * inputRate + outputTokens * outputRate) / 1_000_000;
}

async function callParticipantBedrock(config, payload) {
  const runtimeUrl = process.env.GAMEFORGE_BEDROCK_RUNTIME_URL
    ?? `https://bedrock-runtime.${config.region}.amazonaws.com/model/${encodeURIComponent(config.model)}/converse`;
  const response = await fetch(runtimeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.token}`,
    },
    body: JSON.stringify({
      system: [{ text: BEDROCK_SYSTEM_PROMPT }],
      messages: [{
        role: "user",
        content: [{
          text: JSON.stringify({
            conversation: Array.isArray(payload.messages) ? payload.messages.slice(-12) : [],
            currentOntology: payload.graph,
          }),
        }],
      }],
      inferenceConfig: { maxTokens: 6000, temperature: 0.1 },
      toolConfig: {
        tools: [{
          toolSpec: {
            name: "propose_game_ontology_changes",
            description: "승인 가능한 게임 온톨로지와 스토리 변경안을 구조화한다.",
            inputSchema: { json: BEDROCK_PROPOSAL_SCHEMA },
          },
        }],
        toolChoice: { tool: { name: "propose_game_ontology_changes" } },
      },
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Bedrock 호출 실패 (${response.status}): ${detail.slice(0, 240)}`);
  }
  const data = await response.json();
  if (data.stopReason === "max_tokens") {
    throw new Error("Bedrock 변경안이 출력 토큰 한도에서 잘렸습니다.");
  }
  const blocks = data.output?.message?.content ?? [];
  const proposal = blocks.find((block) => block.toolUse)?.toolUse?.input;
  if (!proposal || typeof proposal !== "object") {
    throw new Error("Bedrock이 구조화된 변경안을 반환하지 않았습니다.");
  }
  const usage = {
    inputTokens: Number(data.usage?.inputTokens ?? 0),
    outputTokens: Number(data.usage?.outputTokens ?? 0),
  };
  return {
    provider: "companion-bedrock",
    model: config.model,
    reply: String(proposal.summary ?? "게임 세계 변경안을 준비했습니다.").slice(0, 400),
    proposal,
    usage: { ...usage, estimatedCostUsd: estimatedBedrockCost(usage.inputTokens, usage.outputTokens) },
  };
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function writeLocalIntervention(output, input) {
  const createdAt = new Date().toISOString();
  const id = createHash("sha256")
    .update(`${input.title}:${input.reason}:${createdAt}`)
    .digest("hex")
    .slice(0, 16);
  const directory = path.join(output, ".gameforge/interventions");
  await mkdir(directory, { recursive: true });
  const task = {
    schema: "game-forge/intervention/v1",
    id,
    title: input.title,
    reason: input.reason,
    scopePaths: input.scopePaths,
    options: input.options,
    acceptanceCriteria: input.acceptanceCriteria,
    assignedSurface: "local-agent",
    status: "open",
    createdAt,
  };
  await writeFile(path.join(directory, `${id}.json`), JSON.stringify(task, null, 2));
  return task;
}

async function managedIntegrityReport(output) {
  const statePath = path.join(output, ".gameforge/state.json");
  if (!(await exists(statePath))) {
    return { state: null, conflicts: ["<missing generator state>"] };
  }
  const state = JSON.parse(await readFile(statePath, "utf8"));
  const checksums = state?.checksums && typeof state.checksums === "object"
    ? state.checksums
    : {};
  const conflicts = [];
  for (const [relative, expected] of Object.entries(checksums)) {
    const target = path.join(output, relative);
    if (!(await exists(target))) {
      conflicts.push(`${relative} (missing)`);
      continue;
    }
    const actual = createHash("sha256").update(await readFile(target)).digest("hex");
    if (actual !== expected) conflicts.push(relative);
  }
  return { state, conflicts };
}

async function assertManagedFilesUnchanged(output) {
  const report = await managedIntegrityReport(output);
  if (!report.conflicts.length) return report;
  const task = await writeLocalIntervention(output, {
    title: "Managed 생성물 충돌 해결",
    reason: report.state
      ? `checksum과 다른 Managed 파일 ${report.conflicts.length}개가 발견되었습니다.`
      : "기존 프로젝트에 GAME FORGE checksum 기준선이 없습니다.",
    scopePaths: report.conflicts,
    options: [
      { id: "restore", label: "Git checkpoint로 복구", impact: "승인된 revision 기준으로 Managed 파일을 되돌립니다." },
      { id: "move", label: "변경을 UserOwned로 이동", impact: "사용자 구현을 보존하고 Managed 파일은 재생성합니다." },
      { id: "new-output", label: "새 Unity 폴더에 생성", impact: "기존 프로젝트를 건드리지 않고 새 사본을 만듭니다." },
    ],
    acceptanceCriteria: [
      "Managed checksum 충돌이 0개다.",
      "사용자 작성 코드는 UserOwned 또는 별도 Git branch에 보존됐다.",
      "다시 inspect 했을 때 ready=true다.",
    ],
  });
  throw new Error(
    `MANAGED_CONFLICT [Intervention ${task.id}]: ${report.conflicts.slice(0, 8).join(", ")}`
    + `${report.conflicts.length > 8 ? "…" : ""}. .gameforge/interventions/${task.id}.json을 해결하세요.`,
  );
}

async function inspectProject(output) {
  const resolved = path.resolve(output);
  const integrity = await managedIntegrityReport(resolved);
  let run = null;
  try {
    run = JSON.parse(await readFile(path.join(resolved, ".gameforge/run.json"), "utf8"));
  } catch {
    // Older generated projects may not have a run journal.
  }
  const interventionDirectory = path.join(resolved, ".gameforge/interventions");
  const interventionFiles = await exists(interventionDirectory)
    ? (await readdir(interventionDirectory)).filter((item) => item.endsWith(".json")).sort()
    : [];
  const interventions = [];
  for (const item of interventionFiles) {
    try {
      const task = JSON.parse(await readFile(path.join(interventionDirectory, item), "utf8"));
      if (task.status !== "resolved" && task.status !== "skipped") interventions.push(task);
    } catch {
      interventions.push({ id: item.replace(/\.json$/, ""), status: "invalid" });
    }
  }
  let git = { available: false, head: "", clean: false };
  try {
    const head = await runFile("git", ["rev-parse", "--short", "HEAD"], { cwd: resolved });
    const status = await runFile("git", ["status", "--porcelain"], { cwd: resolved });
    git = { available: true, head: head.stdout.trim(), clean: status.stdout.trim() === "" };
  } catch {
    // A project can still be inspected without Git.
  }
  return {
    schema: "game-forge/project-inspection/v1",
    project: resolved,
    ready: Boolean(integrity.state)
      && integrity.conflicts.length === 0
      && interventions.length === 0
      && (!run || run.status === "completed"),
    buildId: integrity.state?.buildId ?? "",
    ontologyRevisionId: integrity.state?.ontologyRevisionId ?? "",
    managedConflicts: integrity.conflicts,
    openInterventions: interventions,
    lastRun: run,
    git,
  };
}

async function resolveIntervention(project, taskId, optionId) {
  const output = path.resolve(project);
  if (!/^[a-f0-9]{16}$/.test(taskId)) throw new Error("유효한 Intervention ID가 필요합니다.");
  const taskPath = path.join(output, ".gameforge/interventions", `${taskId}.json`);
  const task = JSON.parse(await readFile(taskPath, "utf8"));
  if (task.status !== "open" && task.status !== "in_progress") {
    throw new Error("이미 종료된 Intervention Task입니다.");
  }
  if (!Array.isArray(task.options) || !task.options.some((item) => item.id === optionId)) {
    throw new Error("Intervention Task에 정의된 option을 선택해주세요.");
  }
  const integrity = await managedIntegrityReport(output);
  if (integrity.conflicts.length) {
    throw new Error(`완료 조건 미충족: Managed 충돌 ${integrity.conflicts.length}개가 남아 있습니다.`);
  }
  task.status = "resolved";
  task.selectedOptionId = optionId;
  task.resolvedAt = new Date().toISOString();
  task.verification = {
    managedConflicts: 0,
    buildId: integrity.state?.buildId ?? "",
  };
  await writeFile(taskPath, JSON.stringify(task, null, 2));
  return task;
}

async function restoreManagedCheckpoint(project) {
  const output = path.resolve(project);
  const integrity = await managedIntegrityReport(output);
  if (!integrity.state) throw new Error("복구할 generator state가 없습니다.");
  if (!integrity.conflicts.length) return { restored: [], backup: null };
  const safeConflicts = integrity.conflicts.filter((relative) => (
    typeof relative === "string"
    && !relative.includes(" (missing)")
    && !path.isAbsolute(relative)
    && !relative.split(/[\\/]+/).includes("..")
  ));
  const backup = path.join(
    output,
    ".gameforge/recovery",
    new Date().toISOString().replace(/[:.]/g, "-"),
  );
  for (const relative of safeConflicts) {
    const source = path.join(output, relative);
    if (!(await exists(source))) continue;
    const destination = path.join(backup, relative);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, await readFile(source));
  }
  const tracked = integrity.conflicts
    .map((item) => item.replace(/ \(missing\)$/, ""))
    .filter((relative) => (
      !path.isAbsolute(relative)
      && !relative.split(/[\\/]+/).includes("..")
    ));
  await runFile("git", ["checkout", "HEAD", "--", ...tracked], { cwd: output });
  const verified = await managedIntegrityReport(output);
  if (verified.conflicts.length) {
    throw new Error(`Git 복구 후에도 Managed 충돌 ${verified.conflicts.length}개가 남았습니다.`);
  }
  return { restored: tracked, backup };
}

async function previewGeneration(manifestPath, project) {
  const manifest = JSON.parse(await readFile(path.resolve(manifestPath), "utf8"));
  const output = path.resolve(project);
  const staging = await mkdtemp(path.join(os.tmpdir(), "game-forge-preview-"));
  try {
    const planResult = await generate(manifest, staging, false);
    const planned = JSON.parse(await readFile(path.join(staging, ".gameforge/state.json"), "utf8"));
    const current = await exists(path.join(output, ".gameforge/state.json"))
      ? JSON.parse(await readFile(path.join(output, ".gameforge/state.json"), "utf8"))
      : { checksums: {} };
    const plannedChecksums = planned.checksums ?? {};
    const currentChecksums = current.checksums ?? {};
    const added = Object.keys(plannedChecksums)
      .filter((item) => !currentChecksums[item])
      .sort();
    const changed = Object.keys(plannedChecksums)
      .filter((item) => currentChecksums[item] && currentChecksums[item] !== plannedChecksums[item])
      .sort();
    const removed = Object.keys(currentChecksums)
      .filter((item) => !plannedChecksums[item])
      .sort();
    return {
      schema: "game-forge/generation-preview/v1",
      project: output,
      sourceBuildId: planned.buildId,
      sourceRevisionId: planned.ontologyRevisionId,
      added,
      changed,
      removed,
      generatedScaffolds: {
        scenes: planResult.scenes,
        characterPrefabs: planResult.characterPrefabs,
        stateVariables: planResult.stateVariables,
      },
      requiresApproval: added.length + changed.length + removed.length > 0,
      mutatesProject: false,
    };
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

const recoverableOwnedPaths = [
  "Assets/GameForge/Editor",
  "Assets/GameForge/AI",
  "Assets/GameForge/Runtime",
  "Assets/GameForge/Managed",
  "Assets/GameForge/Generated",
  "Assets/StreamingAssets/game-forge-manifest.json",
  "Packages/com.jinuland.gameforge.runtime",
  "Packages/manifest.json",
  "ProjectSettings/ProjectVersion.txt",
  "README_GAME_FORGE.md",
  "UNITY_AI_WORKFLOW.md",
  ".gameforge/state.json",
  ".gameforge/ownership.json",
];

async function generateWithRecovery(manifest, output, force = false, allowUnestablishedResume = false) {
  const resolved = path.resolve(output);
  const backup = await mkdtemp(path.join(os.tmpdir(), "game-forge-rollback-"));
  const existed = new Set();
  try {
    for (const relative of recoverableOwnedPaths) {
      const source = path.join(resolved, relative);
      if (!(await exists(source))) continue;
      existed.add(relative);
      const destination = path.join(backup, relative);
      await mkdir(path.dirname(destination), { recursive: true });
      await cp(source, destination, { recursive: true, preserveTimestamps: true });
    }
    return await generate(manifest, resolved, force, allowUnestablishedResume);
  } catch (error) {
    for (const relative of recoverableOwnedPaths) {
      const target = path.join(resolved, relative);
      await rm(target, { recursive: true, force: true });
      if (!existed.has(relative)) continue;
      const source = path.join(backup, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await cp(source, target, { recursive: true, preserveTimestamps: true });
    }
    const journalPath = path.join(resolved, ".gameforge/run.json");
    if (await exists(journalPath)) {
      try {
        const journal = JSON.parse(await readFile(journalPath, "utf8"));
        if (journal.status === "running") {
          journal.status = "failed";
          journal.phase = "rolled-back";
          journal.failedAt = new Date().toISOString();
          journal.error = error instanceof Error ? error.message.slice(0, 1000) : "Generation failed";
          await writeFile(journalPath, JSON.stringify(journal, null, 2));
        }
      } catch {
        // Preserve the original generator error.
      }
    }
    throw error;
  } finally {
    await rm(backup, { recursive: true, force: true });
  }
}

async function resumeGeneration(project, manifestPath = "") {
  const output = path.resolve(project);
  let manifest;
  if (manifestPath) {
    manifest = JSON.parse(await readFile(path.resolve(manifestPath), "utf8"));
  } else {
    const pending = JSON.parse(
      await readFile(path.join(output, ".gameforge/pending-build.json"), "utf8"),
    );
    if (!verifyBuildEnvelope(pending)) throw new Error("대기 중인 Build Revision 서명이 유효하지 않습니다.");
    const signed = pending.manifest;
    manifest = {
      ...signed.game,
      buildRevision: {
        buildId: signed.buildId,
        ontologyRevisionId: signed.ontologyRevisionId,
        projectRevision: signed.projectRevision,
        keyId: pending.keyId,
      },
    };
  }
  const result = await generateWithRecovery(manifest, output, true, true);
  await rm(path.join(output, ".gameforge/pending-build.json"), { force: true });
  return result;
}

async function listFilesRecursively(root, relative) {
  const directory = path.join(root, relative);
  if (!(await exists(directory))) return [];
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const child = path.posix.join(relative.split(path.sep).join("/"), entry.name);
    if (entry.isDirectory()) files.push(...await listFilesRecursively(root, child));
    else if (entry.isFile()) files.push(child);
  }
  return files;
}

async function unityInstallations() {
  const candidates =
    process.platform === "darwin"
      ? [
          "/Applications/Unity Hub.app",
          path.join(os.homedir(), "Applications/Unity Hub.app"),
          "/Applications/Unity/Hub/Editor",
        ]
      : process.platform === "win32"
        ? [
            "C:\\Program Files\\Unity Hub\\Unity Hub.exe",
            "C:\\Program Files\\Unity\\Hub\\Editor",
          ]
        : [
            "/opt/unityhub/unityhub",
            path.join(os.homedir(), "Unity/Hub/Editor"),
          ];
  const found = [];
  for (const candidate of candidates) {
    if (await exists(candidate)) found.push(candidate);
  }
  const editorRoot = candidates.find((candidate) => candidate.endsWith("Editor") && found.includes(candidate));
  const editors = editorRoot
    ? (await readdir(editorRoot, { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort()
        .reverse()
    : [];
  return { candidates, found, editors };
}

async function doctor(print = true) {
  const unity = await unityInstallations();
  const report = {
    platform: process.platform,
    architecture: process.arch,
    node: process.version,
    unityHub: unity.found.some((item) => item.toLowerCase().includes("unity hub")),
    unityEditors: unity.editors,
    ready: unity.found.length > 0 && unity.editors.length > 0,
    checkedPaths: unity.candidates,
    nextAction:
      unity.found.length === 0
        ? "Unity Hub를 설치한 뒤 Unity 6 LTS Editor와 WebGL Build Support를 추가하세요."
        : unity.editors.length === 0
          ? "Unity Hub에서 Unity 6 LTS Editor를 설치하세요."
          : "Unity 프로젝트를 생성할 준비가 됐습니다.",
  };
  if (print) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    process.exitCode = report.ready ? 0 : 2;
  }
  return report;
}

function slug(value) {
  return String(value || "game-forge-project")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .slice(0, 60) || "game-forge-project";
}

function csharpString(value) {
  return String(value ?? "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function canonicalize(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => (
    `${JSON.stringify(key)}:${canonicalize(value[key])}`
  )).join(",")}}`;
}

function verifyBuildEnvelope(envelope) {
  if (
    envelope?.algorithm !== "Ed25519"
    || envelope?.manifest?.schema !== "game-forge/build-revision/v1"
    || !envelope.publicKey
    || !envelope.signature
  ) return false;
  if (
    TRUSTED_BUILD_PUBLIC_KEY === "__GAMEFORGE_BUILD_PUBLIC_KEY__"
    || envelope.publicKey !== TRUSTED_BUILD_PUBLIC_KEY
  ) return false;
  const publicKey = createPublicKey({
    key: Buffer.from(envelope.publicKey, "base64"),
    format: "der",
    type: "spki",
  });
  return verify(
    null,
    Buffer.from(canonicalize(envelope.manifest)),
    publicKey,
    Buffer.from(envelope.signature, "base64"),
  );
}

function validatedServiceUrl(value) {
  const service = new URL(value);
  const local = service.hostname === "localhost" || service.hostname === "127.0.0.1";
  if (service.protocol !== "https:" && !(local && service.protocol === "http:")) {
    throw new Error("서비스 URL은 HTTPS여야 합니다.");
  }
  return service;
}

async function postServiceJson(url, payload, timeoutMs) {
  const body = JSON.stringify(payload);
  const contentHash = createHash("sha256").update(body).digest("hex");
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-amz-content-sha256": contentHash,
    },
    body,
    signal: AbortSignal.timeout(timeoutMs),
  });
}

async function pairAndGenerate() {
  const service = validatedServiceUrl(args[1] ?? "");
  const code = String(args[2] ?? "").trim().toUpperCase();
  if (!/^[A-HJ-NP-Z2-9]{8}$/.test(code)) {
    throw new Error("사용법: node gameforge-companion.mjs pair <service-url> <8자리-code> [output-directory]");
  }
  const pairUrl = new URL("/api/companion/pair", service);
  const response = await postServiceJson(pairUrl, { code }, 30_000);
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || `페어링 실패 (${response.status})`);
  if (!verifyBuildEnvelope(payload.envelope)) {
    throw new Error("Build Revision 서명이 유효하지 않습니다. Unity 생성을 중단했습니다.");
  }
  const manifest = payload.envelope.manifest;
  if (Date.parse(manifest.expiresAt) <= Date.now()) {
    throw new Error("Build Revision이 만료되었습니다. 웹에서 새 revision을 발행해주세요.");
  }
  const output = args[3]
    ? path.resolve(args[3])
    : path.resolve("exports", "unity", slug(manifest.game.title));
  await mkdir(path.join(output, ".gameforge"), { recursive: true });
  await writeFile(
    path.join(output, ".gameforge/pending-build.json"),
    JSON.stringify(payload.envelope, null, 2),
  );
  const result = await generateWithRecovery({
    ...manifest.game,
    buildRevision: {
      buildId: manifest.buildId,
      ontologyRevisionId: manifest.ontologyRevisionId,
      projectRevision: manifest.projectRevision,
      keyId: payload.envelope.keyId,
    },
  }, output, false);
  await rm(path.join(output, ".gameforge/pending-build.json"), { force: true });
  const receiptUrl = new URL(String(payload.receiptPath || ""), service);
  if (receiptUrl.origin !== service.origin || receiptUrl.pathname !== "/api/companion/receipt") {
    throw new Error("서버가 유효하지 않은 receipt 경로를 반환했습니다.");
  }
  const receiptResponse = await postServiceJson(receiptUrl, {
      buildId: manifest.buildId,
      receiptToken: payload.receiptToken,
      status: "generated",
      output: result.output,
      companionVersion: COMPANION_VERSION,
    }, 15_000);
  if (!receiptResponse.ok) {
    process.stderr.write("경고: Unity 프로젝트는 생성됐지만 서버 수신 확인에 실패했습니다.\n");
  }
  process.stdout.write(`${JSON.stringify({
    paired: true,
    signatureVerified: true,
    buildId: manifest.buildId,
    ontologyRevisionId: manifest.ontologyRevisionId,
    ...result,
  }, null, 2)}\n`);
}

async function generate(
  manifestOverride = null,
  outputOverride = null,
  forceOverride = false,
  allowUnestablishedResume = false,
) {
  const manifestPath = args[1];
  if (!manifestOverride && !manifestPath) {
    throw new Error("사용법: node companion/gameforge.mjs generate <game.json> [output-directory]");
  }
  const manifest = manifestOverride ?? JSON.parse(await readFile(path.resolve(manifestPath), "utf8"));
  if (!manifest.title || !manifest.ontology) {
    throw new Error("manifest에는 title과 ontology가 필요합니다.");
  }
  const output = path.resolve(outputOverride ?? args[2] ?? path.join("exports", "unity", slug(manifest.title)));
  const unity = await unityInstallations();
  const editorVersion = unity.editors[0] ?? "6000.0.48f1";
  const scenes =
    Array.isArray(manifest.unity?.scenes) && manifest.unity.scenes.length
      ? manifest.unity.scenes.map((item) => String(item)).slice(0, 24)
      : ["Boot", "MemoryHub", "EchoDistrict", "FinalChoice"];
  const force = forceOverride || args.includes("--force");
  const ontologyNodes = Array.isArray(manifest.ontology?.nodes) ? manifest.ontology.nodes : [];
  const characters = ontologyNodes
    .filter((node) => node?.kind === "Character")
    .map((node) => ({
      id: String(node.id ?? slug(node.name)),
      name: String(node.name ?? "Character"),
      description: String(node.description ?? ""),
    }))
    .slice(0, 32);
  const mechanics = ontologyNodes
    .filter((node) => ["Mechanic", "GameLoop", "Progression", "WorldRule"].includes(node?.kind))
    .map((node) => String(node.name ?? ""))
    .filter(Boolean)
    .slice(0, 32);
  const storyBeats = Array.isArray(manifest.story) ? manifest.story.slice(0, 128) : [];
  const stateVariableMap = new Map();
  for (const beat of storyBeats) {
    for (const choice of Array.isArray(beat?.choices) ? beat.choices : []) {
      for (const condition of Array.isArray(choice?.conditions) ? choice.conditions : []) {
        const key = String(condition?.variable ?? "").trim().slice(0, 80);
        if (key && !stateVariableMap.has(key)) stateVariableMap.set(key, condition.value ?? false);
      }
      for (const effect of Array.isArray(choice?.effects) ? choice.effects : []) {
        const key = String(effect?.variable ?? "").trim().slice(0, 80);
        if (key && !stateVariableMap.has(key)) {
          const fallback = effect?.operation === "increment" || effect?.operation === "decrement"
            ? 0
            : effect?.value ?? false;
          stateVariableMap.set(key, fallback);
        }
      }
    }
  }
  const stateVariables = [...stateVariableMap.entries()]
    .map(([name, initialValue]) => ({
      name,
      type: typeof initialValue === "number"
        ? "Number"
        : typeof initialValue === "string" ? "String" : "Boolean",
      initialValue: String(initialValue),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  if (await exists(output)) {
    const items = await readdir(output);
    const projectItems = items.filter((item) => item !== ".gameforge");
    const established = await exists(path.join(output, ".gameforge/state.json"));
    if ((projectItems.length || established) && !force) {
      throw new Error(`출력 폴더가 비어 있지 않습니다: ${output}\n덮어쓰려면 --force를 명시하세요.`);
    }
    if ((projectItems.length || established) && force) {
      if (established) await assertManagedFilesUnchanged(output);
      else if (!allowUnestablishedResume) await assertManagedFilesUnchanged(output);
    }
  }

  const dirs = [
    "Assets/GameForge/Editor",
    "Assets/GameForge/AI",
    "Assets/GameForge/Runtime",
    "Assets/GameForge/Generated",
    "Assets/GameForge/Managed",
    "Assets/GameForge/UserOwned",
    "Assets/StreamingAssets",
    "Packages/com.jinuland.gameforge.runtime/Runtime",
    ".gameforge",
    "Packages",
    "ProjectSettings",
  ];
  await Promise.all(dirs.map((dir) => mkdir(path.join(output, dir), { recursive: true })));
  const runJournal = {
    schema: "game-forge/generator-run/v1",
    runId: randomBytes(10).toString("hex"),
    status: "running",
    phase: "write-managed-sources",
    buildId: manifest.buildRevision?.buildId ?? "local-manifest",
    ontologyRevisionId: manifest.buildRevision?.ontologyRevisionId ?? "",
    startedAt: new Date().toISOString(),
    resumeCommand: `node gameforge-companion.mjs inspect ${JSON.stringify(output)}`,
  };
  await writeFile(
    path.join(output, ".gameforge/run.json"),
    JSON.stringify(runJournal, null, 2),
  );
  await writeFile(
    path.join(output, "ProjectSettings/ProjectVersion.txt"),
    `m_EditorVersion: ${editorVersion}\nm_EditorVersionWithRevision: ${editorVersion}\n`,
  );
  await writeFile(
    path.join(output, "Packages/manifest.json"),
    JSON.stringify(
      {
        dependencies: {
          "com.unity.modules.physics": "1.0.0",
          "com.jinuland.gameforge.runtime": "file:com.jinuland.gameforge.runtime",
        },
      },
      null,
      2,
    ),
  );
  await writeFile(
    path.join(output, "Packages/com.jinuland.gameforge.runtime/package.json"),
    JSON.stringify({
      name: "com.jinuland.gameforge.runtime",
      version: RUNTIME_PACKAGE_VERSION,
      displayName: "GAME FORGE Runtime",
      unity: "6000.0",
      description: "Pinned runtime contract for signed GAME FORGE build revisions.",
    }, null, 2),
  );
  await writeFile(
    path.join(output, "Packages/com.jinuland.gameforge.runtime/Runtime/GameForge.Runtime.asmdef"),
    JSON.stringify({
      name: "GameForge.Runtime",
      rootNamespace: "GameForge.Runtime",
      references: [],
      autoReferenced: true,
    }, null, 2),
  );
  await writeFile(
    path.join(output, "Packages/com.jinuland.gameforge.runtime/Runtime/GameForgeBuildIdentity.cs"),
    `namespace GameForge.Runtime
{
    public static class GameForgeBuildIdentity
    {
        public const string RuntimeVersion = "${RUNTIME_PACKAGE_VERSION}";
        public const string BuildId = "${csharpString(manifest.buildRevision?.buildId ?? "local-manifest")}";
        public const string OntologyRevisionId = "${csharpString(manifest.buildRevision?.ontologyRevisionId ?? "unversioned")}";
    }
}
`,
  );
  const userOwnedReadme = path.join(output, "Assets/GameForge/UserOwned/README.md");
  if (!(await exists(userOwnedReadme))) {
    await writeFile(
      userOwnedReadme,
      `# UserOwned

Files in this directory belong to the maker. GAME FORGE never overwrites or
deletes them during regeneration. Put custom gameplay scripts, hand-authored
assets, and local Unity AI results here, or reference them from Generated assets.
`,
    );
  }
  await writeFile(
    path.join(output, "Assets/GameForge/Managed/README.md"),
    `# Managed

GAME FORGE owns the structure of this directory. Edit through an Intervention
Task; direct changes are detected before a later regeneration.
`,
  );
  await writeFile(
    path.join(output, "Assets/StreamingAssets/game-forge-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Managed/narrative.json"),
    JSON.stringify({
      schema: "game-forge/unity-narrative/v1",
      sourceBuildId: manifest.buildRevision?.buildId ?? "local-manifest",
      sourceRevisionId: manifest.buildRevision?.ontologyRevisionId ?? "",
      entryBeatId: String(storyBeats[0]?.id ?? ""),
      beats: storyBeats,
    }, null, 2),
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Managed/state-variables.json"),
    JSON.stringify({
      schema: "game-forge/unity-state/v1",
      variables: stateVariables,
    }, null, 2),
  );
  const worldRules = ontologyNodes
    .filter((node) => node?.kind === "WorldRule")
    .map((node) => `${String(node.name ?? "")}: ${String(node.description ?? "")}`)
    .filter(Boolean);
  const aiPrompts = {
    schema: "game-forge/unity-ai-handoff/v1",
    title: manifest.title,
    assistant: [
      `이 프로젝트의 GAME FORGE 온톨로지를 읽고 ${scenes.join(", ")} 씬의 플레이 흐름을 점검해줘.`,
      `다음 게임 시스템을 Unity 컴포넌트로 구현할 계획을 세워줘: ${mechanics.join(", ") || "핵심 상호작용"}.`,
      `캐릭터 ${characters.map((item) => item.name).join(", ") || "플레이어"}의 Prefab과 씬 연결 상태를 검사해줘.`,
    ],
    generators: {
      characterConcepts: characters.map((character) => ({
        id: character.id,
        prompt: `${manifest.title}의 ${character.name}. ${character.description} 게임용 일관된 캐릭터 콘셉트 아트, 정면과 측면, 명확한 실루엣.`,
      })),
      environmentTexture: `${manifest.title} 세계의 타일링 가능한 환경 텍스처. 핵심 규칙: ${worldRules.join(" / ") || "온톨로지 세계 규칙 참조"}.`,
      ambience: `${manifest.title}의 탐험 장면용 반복 가능한 배경음. 서사적이고 대사를 방해하지 않으며 ${scenes.join(", ")}의 분위기를 연결한다.`,
    },
  };
  await writeFile(
    path.join(output, "Assets/GameForge/AI/GeneratorPrompts.json"),
    JSON.stringify(aiPrompts, null, 2),
  );
  await writeFile(
    path.join(output, "Assets/GameForge/AI/ONTOLOGY_CONTEXT.md"),
    `# GAME FORGE · Unity AI Context

## Game

${manifest.title}

## Characters

${characters.map((item) => `- **${item.name}** (\`${item.id}\`): ${item.description}`).join("\n") || "- No character concepts yet."}

## Systems

${mechanics.map((item) => `- ${item}`).join("\n") || "- Define the core interaction loop."}

## World rules

${worldRules.map((item) => `- ${item}`).join("\n") || "- Refer to the full manifest."}

## Scenes

${scenes.map((item) => `- ${item}`).join("\n")}

The authoritative source is \`Assets/StreamingAssets/game-forge-manifest.json\`.
Propose changes before modifying generated assets and preserve ontology IDs on
\`GameForgeEntity\` components.
`,
  );
  await writeFile(
    path.join(output, "UNITY_AI_WORKFLOW.md"),
    `# Unity AI handoff

Unity AI requires a Unity account, organization permission, and available Unity
Credits. Those approvals cannot be completed safely by GAME FORGE.

1. Open this project in Unity 6.
2. Select the **AI** button at the top of the Editor and install Unity AI.
3. If prompted, ask the organization owner to enable Assistant and Generators
   in the Unity Dashboard.
4. Give Assistant \`Assets/GameForge/AI/ONTOLOGY_CONTEXT.md\` as project context.
5. Use the reviewed prompts in \`Assets/GameForge/AI/GeneratorPrompts.json\`.
6. Review generated assets, licensing metadata, and credit usage before keeping them.

GAME FORGE never sends the Bedrock key to Unity and never enables model-training
data sharing on the user's behalf.
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameForgeBootstrap.cs"),
    `using System.IO;
using UnityEngine;

namespace GameForge.Runtime
{
    public sealed class GameForgeBootstrap : MonoBehaviour
    {
        public static string ManifestJson { get; private set; } = "{}";

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void LoadManifest()
        {
            var path = Path.Combine(Application.streamingAssetsPath, "game-forge-manifest.json");
            if (File.Exists(path)) ManifestJson = File.ReadAllText(path);
            Debug.Log("[GAME FORGE] Loaded ${csharpString(manifest.title)} ontology manifest.");
        }
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameOntologyAsset.cs"),
    `using UnityEngine;

namespace GameForge.Runtime
{
    [CreateAssetMenu(menuName = "GAME FORGE/Ontology Asset", fileName = "GameOntology")]
    public sealed class GameOntologyAsset : ScriptableObject
    {
        [TextArea(12, 40)] public string manifestJson;
        public string sourceRevision;
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameForgeEntity.cs"),
    `using UnityEngine;

namespace GameForge.Runtime
{
    public sealed class GameForgeEntity : MonoBehaviour
    {
        public string ontologyId;
        public string displayName;
        [TextArea(3, 10)] public string description;
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameForgePlayerController.cs"),
    `using UnityEngine;

namespace GameForge.Runtime
{
    [RequireComponent(typeof(CharacterController))]
    public sealed class GameForgePlayerController : MonoBehaviour
    {
        [SerializeField] private float moveSpeed = 5f;
        [SerializeField] private float turnSpeed = 540f;
        private CharacterController controller;

        private void Awake() => controller = GetComponent<CharacterController>();

        private void Update()
        {
            var input = new Vector3(Input.GetAxisRaw("Horizontal"), 0f, Input.GetAxisRaw("Vertical"));
            if (input.sqrMagnitude > 1f) input.Normalize();
            controller.SimpleMove(input * moveSpeed);
            if (input.sqrMagnitude > 0.01f)
            {
                var target = Quaternion.LookRotation(input);
                transform.rotation = Quaternion.RotateTowards(transform.rotation, target, turnSpeed * Time.deltaTime);
            }
        }
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameSystemSettings.cs"),
    `using UnityEngine;

namespace GameForge.Runtime
{
    [CreateAssetMenu(menuName = "GAME FORGE/Game System Settings", fileName = "GameSystems")]
    public sealed class GameSystemSettings : ScriptableObject
    {
        public string[] mechanics;
        public string[] storyScenes;
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameNarrativeAsset.cs"),
    `using System;
using UnityEngine;

namespace GameForge.Runtime
{
    [Serializable]
    public sealed class GameStateVariableDefinition
    {
        public string name;
        public string valueType;
        public string initialValue;
    }

    [CreateAssetMenu(menuName = "GAME FORGE/Narrative Asset", fileName = "GameNarrative")]
    public sealed class GameNarrativeAsset : ScriptableObject
    {
        public string sourceBuildId;
        public string sourceRevisionId;
        public string entryBeatId;
        [TextArea(12, 40)] public string narrativeJson;
        public GameStateVariableDefinition[] stateVariables;
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Runtime/GameNarrativeState.cs"),
    `using System;
using System.Collections.Generic;
using UnityEngine;

namespace GameForge.Runtime
{
    public sealed class GameNarrativeState : MonoBehaviour
    {
        [SerializeField] private GameNarrativeAsset definition;
        private readonly Dictionary<string, string> values = new();

        public string CurrentBeatId { get; private set; }
        public GameNarrativeAsset Definition => definition;

        private void Awake()
        {
            if (definition == null) return;
            CurrentBeatId = definition.entryBeatId;
            foreach (var item in definition.stateVariables ?? Array.Empty<GameStateVariableDefinition>())
                values[item.name] = item.initialValue;
        }

        public void Initialize(GameNarrativeAsset source)
        {
            definition = source;
            Awake();
        }

        public bool TryGet(string variable, out string value) => values.TryGetValue(variable, out value);
        public void Set(string variable, string value) => values[variable] = value;
        public void MoveTo(string beatId) => CurrentBeatId = beatId;
    }
}
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Editor/GameForgeProjectBuilder.cs"),
    `#if UNITY_EDITOR
using System.IO;
using GameForge.Runtime;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace GameForge.Editor
{
    [InitializeOnLoad]
    public static class GameForgeProjectBuilder
    {
        private const string BuiltKey = "GameForge.ProjectBuilt.${slug(manifest.title)}";

        static GameForgeProjectBuilder()
        {
            EditorApplication.delayCall += BuildOnce;
        }

        [MenuItem("GAME FORGE/Rebuild Generated Scenes")]
        public static void Rebuild() => Build(true);

        [MenuItem("GAME FORGE/Build Playable")]
        public static void BuildPlayable()
        {
            Build(true);
            Directory.CreateDirectory("Builds");
            var options = new BuildPlayerOptions
            {
                scenes = System.Array.ConvertAll(EditorBuildSettings.scenes, item => item.path),
                locationPathName = "Builds/${slug(manifest.title)}.app",
                target = BuildTarget.StandaloneOSX,
                options = BuildOptions.None,
            };
            var report = BuildPipeline.BuildPlayer(options);
            if (report.summary.result != BuildResult.Succeeded)
                throw new BuildFailedException($"GAME FORGE build failed: {report.summary.result}");
            Debug.Log($"[GAME FORGE] Playable built: {options.locationPathName}");
        }

        private static void BuildOnce()
        {
            if (!SessionState.GetBool(BuiltKey, false)) Build(false);
        }

        private static void Build(bool force)
        {
            Directory.CreateDirectory("Assets/GameForge/Generated");
            Directory.CreateDirectory("Assets/GameForge/Generated/Characters");
            var json = File.ReadAllText("Assets/StreamingAssets/game-forge-manifest.json");
            var ontology = AssetDatabase.LoadAssetAtPath<GameOntologyAsset>("Assets/GameForge/Generated/GameOntology.asset");
            if (ontology == null)
            {
                ontology = ScriptableObject.CreateInstance<GameOntologyAsset>();
                AssetDatabase.CreateAsset(ontology, "Assets/GameForge/Generated/GameOntology.asset");
            }
            ontology.manifestJson = json;
            ontology.sourceRevision = "${csharpString(manifest.schema ?? "game-forge/v1")}";
            EditorUtility.SetDirty(ontology);

            var scenes = new[] { ${scenes.map((scene) => `"${csharpString(scene)}"`).join(", ")} };
            var systems = AssetDatabase.LoadAssetAtPath<GameSystemSettings>("Assets/GameForge/Generated/GameSystems.asset");
            if (systems == null)
            {
                systems = ScriptableObject.CreateInstance<GameSystemSettings>();
                AssetDatabase.CreateAsset(systems, "Assets/GameForge/Generated/GameSystems.asset");
            }
            systems.mechanics = new string[] { ${mechanics.map((item) => `"${csharpString(item)}"`).join(", ")} };
            systems.storyScenes = scenes;
            EditorUtility.SetDirty(systems);

            var narrative = AssetDatabase.LoadAssetAtPath<GameNarrativeAsset>("Assets/GameForge/Generated/GameNarrative.asset");
            if (narrative == null)
            {
                narrative = ScriptableObject.CreateInstance<GameNarrativeAsset>();
                AssetDatabase.CreateAsset(narrative, "Assets/GameForge/Generated/GameNarrative.asset");
            }
            narrative.sourceBuildId = "${csharpString(manifest.buildRevision?.buildId ?? "local-manifest")}";
            narrative.sourceRevisionId = "${csharpString(manifest.buildRevision?.ontologyRevisionId ?? "")}";
            narrative.entryBeatId = "${csharpString(storyBeats[0]?.id ?? "")}";
            narrative.narrativeJson = File.ReadAllText("Assets/GameForge/Managed/narrative.json");
            narrative.stateVariables = new GameStateVariableDefinition[]
            {
${stateVariables.map((item) => `                new GameStateVariableDefinition { name = "${csharpString(item.name)}", valueType = "${item.type}", initialValue = "${csharpString(item.initialValue)}" }`).join(",\n")}
            };
            EditorUtility.SetDirty(narrative);

            BuildCharacterPrefabs(force);
            for (var sceneIndex = 0; sceneIndex < scenes.Length; sceneIndex++)
            {
                var sceneName = scenes[sceneIndex];
                var scenePath = $"Assets/GameForge/Generated/{sceneName}.unity";
                if (!force && File.Exists(scenePath)) continue;
                var scene = EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
                var root = new GameObject("GAME FORGE · " + sceneName);
                root.AddComponent<GameForgeBootstrap>();
                root.AddComponent<GameNarrativeState>().Initialize(narrative);
                var ground = GameObject.CreatePrimitive(PrimitiveType.Plane);
                ground.name = "Ground";
                ground.transform.localScale = new Vector3(4f, 1f, 4f);
                if (sceneIndex == 0) AddPlayableCharacter();
                EditorSceneManager.SaveScene(scene, scenePath);
            }
            var buildScenes = new EditorBuildSettingsScene[scenes.Length];
            for (var index = 0; index < scenes.Length; index++)
            {
                buildScenes[index] = new EditorBuildSettingsScene(
                    $"Assets/GameForge/Generated/{scenes[index]}.unity", true);
            }
            EditorBuildSettings.scenes = buildScenes;
            AssetDatabase.SaveAssets();
            SessionState.SetBool(BuiltKey, true);
            Debug.Log("[GAME FORGE] Generated ontology asset and playable scene scaffolds.");
        }

        private static void BuildCharacterPrefabs(bool force)
        {
            string[][] characters =
            {
${characters.map((character) => `                new[] { "${csharpString(character.id)}", "${csharpString(character.name)}", "${csharpString(character.description)}" }`).join(",\n")}
            };
            foreach (var character in characters)
            {
                var prefabPath = $"Assets/GameForge/Generated/Characters/{Sanitize(character[1])}.prefab";
                if (!force && File.Exists(prefabPath)) continue;
                var instance = GameObject.CreatePrimitive(PrimitiveType.Capsule);
                instance.name = character[1];
                var entity = instance.AddComponent<GameForgeEntity>();
                entity.ontologyId = character[0];
                entity.displayName = character[1];
                entity.description = character[2];
                instance.AddComponent<CharacterController>();
                PrefabUtility.SaveAsPrefabAsset(instance, prefabPath);
                Object.DestroyImmediate(instance);
            }
        }

        private static void AddPlayableCharacter()
        {
            var prefabGuids = AssetDatabase.FindAssets("t:Prefab", new[] { "Assets/GameForge/Generated/Characters" });
            GameObject player;
            if (prefabGuids.Length > 0)
            {
                var prefabPath = AssetDatabase.GUIDToAssetPath(prefabGuids[0]);
                var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
                player = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
            }
            else
            {
                player = GameObject.CreatePrimitive(PrimitiveType.Capsule);
                player.AddComponent<CharacterController>();
            }
            player.name = "Player";
            player.transform.position = new Vector3(0f, 1f, 0f);
            player.AddComponent<GameForgePlayerController>();
            var camera = Camera.main;
            if (camera != null)
            {
                camera.transform.position = new Vector3(0f, 7f, -9f);
                camera.transform.LookAt(player.transform);
            }
        }

        private static string Sanitize(string value)
        {
            foreach (var invalid in Path.GetInvalidFileNameChars())
                value = value.Replace(invalid, '_');
            return string.IsNullOrWhiteSpace(value) ? "Character" : value;
        }
    }
}
#endif
`,
  );
  await writeFile(
    path.join(output, "Assets/GameForge/Editor/GameForgeGeneratedValidation.cs"),
    `#if UNITY_EDITOR
using System;
using System.IO;
using GameForge.Runtime;
using UnityEditor;
using UnityEngine;

namespace GameForge.Editor
{
    public static class GameForgeGeneratedValidation
    {
        [MenuItem("GAME FORGE/Validate Generated Project")]
        public static void Run()
        {
            RequireFile("Assets/StreamingAssets/game-forge-manifest.json");
            RequireFile("Assets/GameForge/Managed/narrative.json");
            RequireFile("Assets/GameForge/Managed/state-variables.json");
            RequireAsset<GameOntologyAsset>("Assets/GameForge/Generated/GameOntology.asset");
            RequireAsset<GameNarrativeAsset>("Assets/GameForge/Generated/GameNarrative.asset");
            RequireAsset<GameSystemSettings>("Assets/GameForge/Generated/GameSystems.asset");
            Debug.Log("[GAME FORGE] Generated project validation passed.");
        }

        public static void RunBatch()
        {
            try { Run(); }
            catch (Exception error)
            {
                Debug.LogException(error);
                EditorApplication.Exit(2);
            }
            EditorApplication.Exit(0);
        }

        private static void RequireFile(string target)
        {
            if (!File.Exists(target)) throw new InvalidOperationException("Missing generated file: " + target);
        }

        private static void RequireAsset<T>(string target) where T : UnityEngine.Object
        {
            if (AssetDatabase.LoadAssetAtPath<T>(target) == null)
                throw new InvalidOperationException("Missing generated asset: " + target);
        }
    }
}
#endif
`,
  );
  await writeFile(
    path.join(output, "README_GAME_FORGE.md"),
    `# ${manifest.title}

Generated by GAME FORGE Companion.

1. Open this directory from Unity Hub with Unity 6 LTS.
2. Wait for packages and scripts to compile.
3. Use **GAME FORGE → Rebuild Generated Scenes** when the manifest changes.
4. Open \`Assets/GameForge/Generated/Boot.unity\` and press Play.
5. Use **GAME FORGE → Build Playable** for a macOS app in \`Builds/\`.

The source manifest remains at \`Assets/StreamingAssets/game-forge-manifest.json\`.
Generated files are isolated under \`Assets/GameForge\`.

The baseline intentionally uses only Unity built-in APIs so it can compile across
Unity 6 editor releases. Add Input System, AI Navigation, Cinemachine, or URP from
Unity Package Manager only when that package declares support for your exact editor.
`,
  );

  if (process.env.GAMEFORGE_TEST_FAIL_PHASE === "after-managed") {
    throw new Error("Injected generator failure after managed writes.");
  }

  const ownership = {
    schema: "game-forge/ownership/v1",
    generated: ["Assets/GameForge/Generated/**"],
    managed: [
      "Assets/GameForge/Editor/**",
      "Assets/GameForge/Runtime/**",
      "Assets/GameForge/AI/**",
      "Assets/StreamingAssets/game-forge-manifest.json",
      "Packages/com.jinuland.gameforge.runtime/**",
      "Packages/manifest.json",
      "ProjectSettings/ProjectVersion.txt",
    ],
    userOwned: ["Assets/GameForge/UserOwned/**"],
    rules: {
      generated: "May be recreated from the signed Build Revision.",
      managed: "Regeneration requires an unchanged prior checksum or intervention.",
      userOwned: "Never overwritten or deleted by GAME FORGE.",
    },
  };
  await writeFile(
    path.join(output, ".gameforge/ownership.json"),
    JSON.stringify(ownership, null, 2),
  );
  const trackedFiles = [
    ...await listFilesRecursively(output, "Assets/GameForge/Editor"),
    ...await listFilesRecursively(output, "Assets/GameForge/Runtime"),
    ...await listFilesRecursively(output, "Assets/GameForge/AI"),
    ...await listFilesRecursively(output, "Assets/GameForge/Managed"),
    ...await listFilesRecursively(output, "Packages/com.jinuland.gameforge.runtime"),
    "Assets/StreamingAssets/game-forge-manifest.json",
    "Packages/manifest.json",
    "ProjectSettings/ProjectVersion.txt",
  ].sort((a, b) => a.localeCompare(b));
  const checksums = {};
  for (const relative of trackedFiles) {
    const content = await readFile(path.join(output, relative));
    checksums[relative] = createHash("sha256").update(content).digest("hex");
  }
  const generatorState = {
    schema: "game-forge/generator-state/v1",
    companionVersion: COMPANION_VERSION,
    runtimePackageVersion: RUNTIME_PACKAGE_VERSION,
    buildId: manifest.buildRevision?.buildId ?? "local-manifest",
    ontologyRevisionId: manifest.buildRevision?.ontologyRevisionId ?? "",
    ownership,
    checksums,
  };
  await writeFile(
    path.join(output, ".gameforge/state.json"),
    JSON.stringify(generatorState, null, 2),
  );
  await writeFile(
    path.join(output, ".gitignore"),
    `[Ll]ibrary/
[Tt]emp/
[Oo]bj/
[Bb]uild/
[Bb]uilds/
[Ll]ogs/
[Uu]ser[Ss]ettings/
`,
  );
  runJournal.status = "completed";
  runJournal.phase = "checkpoint";
  runJournal.completedAt = new Date().toISOString();
  await writeFile(
    path.join(output, ".gameforge/run.json"),
    JSON.stringify(runJournal, null, 2),
  );
  let gitCheckpoint = false;
  try {
    if (!(await exists(path.join(output, ".git")))) {
      await runFile("git", ["init", "--quiet"], { cwd: output });
    }
    await runFile("git", [
      "add", "-A", "--", ".",
      ":(exclude)Assets/GameForge/UserOwned/**",
    ], { cwd: output });
    try {
      await runFile("git", [
        "-c", "user.name=GAME FORGE",
        "-c", "user.email=game-forge@localhost",
        "commit", "--quiet", "-m",
        `GAME FORGE checkpoint ${generatorState.buildId}`,
      ], { cwd: output });
    } catch {
      await runFile("git", ["rev-parse", "--verify", "HEAD"], { cwd: output });
    }
    gitCheckpoint = true;
  } catch {
    // Checksums remain the recovery baseline when Git is unavailable.
  }

  const result = {
    generated: true,
    title: manifest.title,
    output,
    editorVersion,
    scenes,
    characterPrefabs: characters.length,
    gameSystems: mechanics.length,
    unityAiHandoff: true,
    runtimePackageVersion: RUNTIME_PACKAGE_VERSION,
    ownership: {
      generated: ownership.generated,
      managed: ownership.managed,
      userOwned: ownership.userOwned,
    },
    stateVariables: stateVariables.length,
    gitCheckpoint,
  };
  if (!manifestOverride) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  return result;
}

function json(response, status, body, origin = "") {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type, X-GameForge-Token",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Private-Network": "true",
    "Cache-Control": "no-store",
    Vary: "Origin",
  });
  response.end(JSON.stringify(body));
}

async function serve() {
  const port = Number(args[1] ?? process.env.GAMEFORGE_COMPANION_PORT ?? 9876);
  const token = process.env.GAMEFORGE_COMPANION_TOKEN || randomBytes(18).toString("base64url");
  const outputRoot = path.resolve(
    process.env.GAMEFORGE_OUTPUT_ROOT ?? path.join(process.cwd(), "exports", "unity"),
  );
  const allowed = new Set([
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://game-forge-workshop.fitwin-dev.chatgpt.site",
    ...(process.env.GAMEFORGE_ALLOWED_ORIGINS ?? "").split(",").map((item) => item.trim()).filter(Boolean),
  ]);
  let bedrockConfig = process.env.AWS_BEARER_TOKEN_BEDROCK
    ? {
        token: process.env.AWS_BEARER_TOKEN_BEDROCK,
        region: process.env.GAMEFORGE_BEDROCK_REGION ?? "us-east-1",
        model: process.env.GAMEFORGE_BEDROCK_MODEL_ID ?? "us.anthropic.claude-sonnet-4-6",
        expiresAt: "",
      }
    : null;
  const bedrockUsage = [];

  async function readBody(request) {
    let body = "";
    for await (const chunk of request) {
      body += chunk;
      if (body.length > 2_000_000) throw new Error("요청이 너무 큽니다.");
    }
    return JSON.parse(body || "{}");
  }

  const server = createServer(async (request, response) => {
    const origin = request.headers.origin ?? "";
    if (origin && !allowed.has(origin)) return json(response, 403, { error: "허용되지 않은 Origin입니다." });
    if (request.method === "OPTIONS") return json(response, 204, {}, origin);
    const localOrigin = origin === "http://localhost:3000" || origin === "http://127.0.0.1:3000" || !origin;
    if (!localOrigin && request.headers["x-gameforge-token"] !== token) {
      return json(response, 401, { error: "Companion token이 필요합니다." }, origin);
    }
    try {
      if (request.method === "GET" && request.url === "/health") {
        return json(response, 200, {
          companion: "GAME FORGE",
          ...(await doctor(false)),
          bedrock: {
            configured: Boolean(bedrockConfig),
            region: bedrockConfig?.region ?? "us-east-1",
            model: bedrockConfig?.model ?? "us.anthropic.claude-sonnet-4-6",
            expiresAt: bedrockConfig?.expiresAt || null,
          },
        }, origin);
      }
      if (request.method === "POST" && request.url === "/bedrock/configure") {
        const payload = await readBody(request);
        const secret = String(payload.apiKey ?? "").trim();
        if (payload.clear === true) {
          bedrockConfig = null;
          return json(response, 200, { configured: false }, origin);
        }
        if (secret.length < 40 || /\s/.test(secret)) {
          throw new Error("유효한 Bedrock API Key를 입력해주세요.");
        }
        const region = String(payload.region ?? "us-east-1").trim();
        if (!/^[a-z]{2}(?:-gov)?-[a-z]+-\d$/.test(region)) {
          throw new Error("유효한 AWS Region을 입력해주세요.");
        }
        const model = String(payload.model ?? "us.anthropic.claude-sonnet-4-6").trim();
        if (!model || model.length > 180) throw new Error("유효한 Bedrock Model ID가 필요합니다.");
        bedrockConfig = {
          token: secret,
          region,
          model,
          expiresAt: String(payload.expiresAt ?? "").trim().slice(0, 40),
        };
        return json(response, 200, {
          configured: true,
          region,
          model,
          expiresAt: bedrockConfig.expiresAt || null,
          storage: "process-memory-only",
        }, origin);
      }
      if (request.method === "POST" && request.url === "/bedrock/chat") {
        if (!bedrockConfig) throw new Error("먼저 참가자 Bedrock API Key를 연결해주세요.");
        if (bedrockConfig.expiresAt && Date.parse(bedrockConfig.expiresAt) <= Date.now()) {
          bedrockConfig = null;
          throw new Error("Bedrock 단기 Key가 만료되었습니다. 새 Key를 발급해주세요.");
        }
        const today = new Date().toISOString().slice(0, 10);
        const recent = bedrockUsage.filter((item) => item.day === today);
        const requestsLimit = Number(process.env.GAMEFORGE_COMPANION_REQUESTS_PER_DAY ?? 100);
        const tokensLimit = Number(process.env.GAMEFORGE_COMPANION_TOKENS_PER_DAY ?? 500_000);
        const costLimit = Number(process.env.GAMEFORGE_COMPANION_COST_USD_PER_DAY ?? 10);
        const usedTokens = recent.reduce((total, item) => total + item.inputTokens + item.outputTokens, 0);
        const usedCost = recent.reduce((total, item) => total + item.estimatedCostUsd, 0);
        if (recent.length >= requestsLimit) throw new Error("오늘의 Companion Bedrock 요청 한도에 도달했습니다.");
        if (usedTokens >= tokensLimit) throw new Error("오늘의 Companion Bedrock 토큰 한도에 도달했습니다.");
        if (usedCost >= costLimit) throw new Error("오늘의 Companion Bedrock 비용 한도에 도달했습니다.");
        const payload = await readBody(request);
        if (!payload.graph || !Array.isArray(payload.messages)) {
          throw new Error("유효한 대화와 게임 온톨로지가 필요합니다.");
        }
        const result = await callParticipantBedrock(bedrockConfig, payload);
        bedrockUsage.push({ day: today, ...result.usage });
        return json(response, 200, {
          ...result,
          budget: {
            requestsPerDay: requestsLimit,
            tokensPerDay: tokensLimit,
            costUsdPerDay: costLimit,
            usedRequests: recent.length + 1,
            usedTokens: usedTokens + result.usage.inputTokens + result.usage.outputTokens,
            usedCostUsd: usedCost + result.usage.estimatedCostUsd,
          },
        }, origin);
      }
      if (request.method === "POST" && request.url === "/generate") {
        const payload = await readBody(request);
        const manifest = payload.manifest;
        if (!manifest?.title || !manifest?.ontology) throw new Error("유효한 game manifest가 필요합니다.");
        const target = path.join(outputRoot, slug(manifest.title));
        const result = await generateWithRecovery(manifest, target, Boolean(payload.force));
        return json(response, 200, result, origin);
      }
      return json(response, 404, { error: "Not found" }, origin);
    } catch (error) {
      return json(response, 400, {
        error: error instanceof Error ? error.message : "Companion 요청에 실패했습니다.",
      }, origin);
    }
  });
  server.listen(port, "127.0.0.1", () => {
    process.stdout.write(`GAME FORGE Companion listening on http://127.0.0.1:${port}\n`);
    process.stdout.write(`Companion token: ${token}\n`);
    process.stdout.write(`Unity output root: ${outputRoot}\n`);
  });
}

if (command === "doctor") {
  await doctor();
} else if (command === "generate") {
  const manifestPath = args[1];
  if (!manifestPath) throw new Error("사용법: node gameforge-companion.mjs generate <game.json> [output-directory]");
  const manifest = JSON.parse(await readFile(path.resolve(manifestPath), "utf8"));
  const output = path.resolve(args[2] ?? path.join("exports", "unity", slug(manifest.title)));
  const result = await generateWithRecovery(manifest, output, args.includes("--force"));
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
} else if (command === "serve") {
  await serve();
} else if (command === "pair") {
  await pairAndGenerate();
} else if (command === "inspect") {
  if (!args[1]) throw new Error("사용법: node gameforge-companion.mjs inspect <unity-project>");
  process.stdout.write(`${JSON.stringify(await inspectProject(args[1]), null, 2)}\n`);
} else if (command === "preview") {
  if (!args[1] || !args[2]) {
    throw new Error("사용법: node gameforge-companion.mjs preview <game.json> <unity-project>");
  }
  process.stdout.write(`${JSON.stringify(await previewGeneration(args[1], args[2]), null, 2)}\n`);
} else if (command === "resolve-intervention") {
  if (!args[1] || !args[2] || !args[3]) {
    throw new Error("사용법: node gameforge-companion.mjs resolve-intervention <unity-project> <task-id> <option-id>");
  }
  process.stdout.write(`${JSON.stringify({
    resolved: true,
    task: await resolveIntervention(args[1], args[2], args[3]),
  }, null, 2)}\n`);
} else if (command === "restore") {
  if (!args[1]) throw new Error("사용법: node gameforge-companion.mjs restore <unity-project>");
  process.stdout.write(`${JSON.stringify(await restoreManagedCheckpoint(args[1]), null, 2)}\n`);
} else if (command === "resume") {
  if (!args[1]) throw new Error("사용법: node gameforge-companion.mjs resume <unity-project> [game.json]");
  process.stdout.write(`${JSON.stringify(await resumeGeneration(args[1], args[2]), null, 2)}\n`);
} else {
  process.stdout.write(`GAME FORGE Companion

Commands:
  doctor                         Detect Unity Hub and installed editors
  generate <game.json> [output]  Generate an isolated Unity 6 project
  pair <url> <code> [output]     Pull a signed revision and generate Unity
  inspect <unity-project>        Verify ownership, checksums, Git, interventions
  preview <game.json> <project>  Show deterministic changes without mutation
  restore <unity-project>        Back up conflicts and restore Managed checkpoint
  resume <project> [game.json]   Resume a rolled-back signed or local generation
  resolve-intervention <project> <task-id> <option-id>
  serve [port]                   Run the authenticated localhost bridge
`);
}
