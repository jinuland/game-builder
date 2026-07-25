import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { execFile, spawn } from "node:child_process";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import test from "node:test";

test("server-renders the GAME FORGE workshop", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(page, /GAME FORGE/);
  assert.match(page, /게임 세계 지도/);
  assert.match(page, /StoryForge/);
  assert.match(page, /Unity로 내보내기/);
  assert.match(page, /PARTICIPANT BEDROCK/);
  assert.match(page, /UNITY AI · PARTICIPANT SETUP/);
  assert.match(page, /companion-bedrock/);
  assert.match(page, /\/api\/companion\/download/);
  assert.match(page, /gameforge:workshop:v1/);
  assert.match(page, /5-DAY PARTICIPANT CODE/);
  assert.match(page, /\/api\/auth\/login/);
  assert.match(page, /window\.localStorage\.setItem/);
  assert.match(page, /x-amz-content-sha256/);
  assert.match(page, /window\.crypto\.subtle\.digest/);
  assert.doesNotMatch(page, /localStorage\.setItem\([^)]*participantBedrockKey/);
  assert.match(page, /pendingProposal/);
  assert.match(page, /proposalBaseRevisionId/);
  assert.match(page, /영향 분석/);
  assert.match(layout, /Game Forge/);
  assert.doesNotMatch(page + layout, /Your site is taking shape|codex-preview/);
});

test("demo model returns a validated approval proposal", async () => {
  const { sanitizeProposal, applyProposal } = await import("../lib/game-ontology.ts");
  const proposal = sanitizeProposal({
    baseRevisionId: "revision-1",
    summary: "주인공이 기억을 잃을수록 강해지는 규칙",
    rationale: "플레이와 서사를 연결한다.",
    operations: [{
      op: "add_node",
      node: {
        id: "memory-power",
        kind: "WorldRule",
        name: "기억의 대가",
        description: "기억을 잃을수록 강해진다.",
      },
    }],
    storyBeats: [],
    questions: [],
    evidenceNodeIds: ["node-1"],
    impactSummary: "스토리 규칙에 영향을 줍니다.",
  });
  assert.equal(proposal.operations[0].op, "add_node");
  assert.equal(proposal.operations[0].node.kind, "WorldRule");
  const graph = applyProposal(
    { version: 1, title: "Test Game", nodes: [], edges: [] },
    proposal,
  );
  assert.equal(graph.nodes[0].id, "memory-power");
  assert.ok(proposal.summary.includes("기억"));
  assert.equal(proposal.baseRevisionId, "revision-1");
});

test("Bedrock context retrieval is bounded and proposal evidence is revision anchored", async () => {
  const [route, adapter] = await Promise.all([
    readFile(new URL("../app/api/workshop/chat/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/model-adapter.ts", import.meta.url), "utf8"),
  ]);
  assert.match(route, /retrieveContextForPrompt/);
  assert.match(route, /allowedEvidence/);
  assert.match(route, /baseRevisionId = context\.revisionId/);
  assert.match(adapter, /input\.context/);
  assert.match(adapter, /evidenceNodeIds/);
});

test("Game Ontology v2 migrates deterministically and validates three connected layers", async () => {
  const {
    migrateOntologyV1,
    validateOntologyV2,
    createChildRevision,
  } = await import("../lib/ontology-v2.ts");
  const legacy = {
    version: 1,
    title: "Memory City",
    nodes: [
      { id: "echo", kind: "Character", name: "에코", description: "동료" },
      { id: "archive", kind: "Scene", name: "기록실", description: "Unity 장면" },
    ],
    edges: [
      { id: "echo-appears", source: "echo", target: "archive", type: "APPEARS_IN" },
    ],
  };
  const options = {
    actorId: "user-1",
    createdAt: "2026-07-24T00:00:00.000Z",
    story: [
      { id: "intro", act: "ACT 1", title: "첫 만남", body: "에코를 만난다." },
      { id: "betrayal", act: "ACT 2", title: "배신", body: "진실을 선택한다." },
    ],
  };
  const first = migrateOntologyV1(legacy, options);
  const second = migrateOntologyV1(legacy, options);
  assert.equal(first.schema, "game-forge/ontology/v2");
  assert.deepEqual(first, second);
  assert.equal(first.nodes.find((node) => node.stableKey === "echo").layer, "domain");
  assert.equal(first.nodes.find((node) => node.stableKey === "archive").layer, "implementation");
  assert.equal(first.nodes.filter((node) => node.kind === "StoryBeat").length, 2);
  assert.equal(first.edges.filter((edge) => edge.type === "BRANCHES_TO").length, 1);
  assert.deepEqual(validateOntologyV2(first).filter((issue) => issue.severity === "error"), []);
  const child = createChildRevision(first, {
    actorId: "user-1",
    source: "manual",
    message: "Approve narrative",
  });
  assert.equal(child.revision.parentRevisionId, first.revision.id);
  assert.equal(child.revision.number, 2);
});

test("Game Ontology v2 rejects dangling edges and layer mismatches", async () => {
  const { migrateOntologyV1, validateOntologyV2 } = await import("../lib/ontology-v2.ts");
  const graph = migrateOntologyV1(
    {
      version: 1,
      title: "Invalid",
      nodes: [{ id: "echo", kind: "Character", name: "Echo", description: "" }],
      edges: [],
    },
    { actorId: "user-1", createdAt: "2026-07-24T00:00:00.000Z" },
  );
  graph.nodes[0].layer = "narrative";
  graph.edges.push({
    id: "59c148a0-6ba8-42d7-9a58-a90cae4a941f",
    stableKey: "missing-target",
    source: graph.nodes[0].id,
    target: "8a3c738b-c480-45f7-b2e4-b1d42a01f453",
    type: "KNOWS",
    description: "",
    properties: {},
    provenance: graph.nodes[0].provenance,
    status: "approved",
  });
  const codes = validateOntologyV2(graph).map((issue) => issue.code);
  assert.ok(codes.includes("KIND_LAYER_MISMATCH"));
  assert.ok(codes.includes("DANGLING_EDGE_TARGET"));
});

test("Narrative Studio detects unreachable scenes, fake branches, cycles, and rule conflicts", async () => {
  const {
    mergeProposedStoryBeats,
    narrativeFromBeats,
    normalizeNarrativeBeats,
    validateNarrativeGraph,
    compareNarrativeBranches,
  } = await import("../lib/narrative-graph.ts");
  const beats = normalizeNarrativeBeats([
    {
      id: "intro",
      title: "입구",
      choices: [
        {
          id: "trust",
          label: "에코를 믿는다",
          targetId: "loop",
          effects: [{ variable: "trust", operation: "set", value: true }],
        },
        {
          id: "doubt",
          label: "에코를 의심한다",
          targetId: "loop",
          effects: [
            { variable: "trust", operation: "set", value: false },
            { variable: "trust", operation: "set", value: "unknown" },
          ],
        },
      ],
    },
    {
      id: "loop",
      title: "되풀이",
      questId: "memory-quest",
      choices: [{ id: "again", label: "다시", targetId: "intro" }],
    },
    { id: "orphan", title: "숨겨진 장면", choices: [] },
  ]);
  const graph = narrativeFromBeats(beats, "intro");
  const codes = validateNarrativeGraph(graph).map((issue) => issue.code);
  assert.ok(codes.includes("UNREACHABLE_BEAT"));
  assert.ok(codes.includes("FAKE_BRANCH"));
  assert.ok(codes.includes("UNBOUNDED_CYCLE"));
  assert.ok(codes.includes("CONFLICTING_EFFECT"));
  const comparison = compareNarrativeBranches(graph, "trust", "doubt");
  assert.equal(comparison.sameTarget, true);
  assert.equal(comparison.differences[0].variable, "trust");

  const { migrateOntologyV1 } = await import("../lib/ontology-v2.ts");
  const ontology = migrateOntologyV1(
    { version: 1, title: "Branch Test", nodes: [], edges: [] },
    { actorId: "user-1", createdAt: "2026-07-24T00:00:00.000Z", story: beats },
  );
  assert.equal(ontology.nodes.filter((node) => node.kind === "Choice").length, 3);
  assert.equal(ontology.edges.filter((edge) => edge.type === "OFFERS_CHOICE").length, 3);
  assert.equal(ontology.edges.filter((edge) => edge.type === "BRANCHES_TO").length, 3);
  assert.equal(ontology.nodes.filter((node) => node.kind === "Quest").length, 1);
  assert.equal(ontology.edges.filter((edge) => edge.type === "CONTAINS_BEAT").length, 1);

  const existingEnding = normalizeNarrativeBeats([
    { id: "ending-a", kind: "Ending", title: "첫 결말", choices: [] },
    { id: "ending-b", kind: "Ending", title: "둘째 결말", choices: [] },
  ]);
  const ontologyOnlyMerge = mergeProposedStoryBeats(existingEnding, [], "proposal");
  assert.equal(ontologyOnlyMerge[0].kind, "Ending");
  assert.deepEqual(ontologyOnlyMerge[0].choices, []);
  assert.notEqual(ontologyOnlyMerge, existingEnding);
});

test("text playtest evaluates conditions, applies effects, and measures branch coverage", async () => {
  const { narrativeFromBeats, normalizeNarrativeBeats } = await import("../lib/narrative-graph.ts");
  const {
    availableNarrativeChoices,
    chooseNarrativeBranch,
    playtestCoverage,
    startNarrativePlaytest,
  } = await import("../lib/narrative-simulator.ts");
  const graph = narrativeFromBeats(normalizeNarrativeBeats([
    {
      id: "start",
      title: "선택",
      choices: [
        {
          id: "locked",
          label: "잠긴 길",
          targetId: "bad",
          conditions: [{ variable: "key", operator: "equals", value: true }],
        },
        {
          id: "open",
          label: "열린 길",
          targetId: "good",
          effects: [{ variable: "trust", operation: "increment", value: 2 }],
        },
      ],
    },
    { id: "bad", kind: "Ending", title: "닫힌 결말", choices: [] },
    { id: "good", kind: "Ending", title: "열린 결말", choices: [] },
  ]), "start");
  let state = startNarrativePlaytest(graph);
  assert.deepEqual(availableNarrativeChoices(graph, state).map((choice) => choice.id), ["open"]);
  state = chooseNarrativeBranch(graph, state, "open");
  assert.equal(state.ended, true);
  assert.equal(state.variables.trust, 2);
  assert.equal(playtestCoverage(graph, state).visitedBeats, 2);
  assert.match(chooseNarrativeBranch(graph, state, "locked").error, /Ending/);
});

test("playtest feedback is revision-bound, server-replayed, audited, and available to Bedrock", async () => {
  const [route, store, chat, adapter] = await Promise.all([
    readFile(new URL("../app/api/workshop/playtests/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/aws-store.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/workshop/chat/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/model-adapter.ts", import.meta.url), "utf8"),
  ]);
  assert.match(route, /actor\.writer/);
  assert.match(route, /ontologyRevisionId !==/);
  assert.match(route, /chooseNarrativeBranch/);
  assert.match(route, /PLAYTEST_NOT_ENDED/);
  assert.match(route, /playtest\.completed/);
  assert.match(store, /PLAYTEST#\$\{input\.projectId\}/);
  assert.match(chat, /listPlaytestRuns/);
  assert.match(adapter, /playtestEvidence/);
});

test("Storyline Guard allows asset work but blocks local changes to approved story semantics", async () => {
  const { migrateOntologyV1 } = await import("../lib/ontology-v2.ts");
  const { evaluateLocalChangeAgainstStoryline } = await import("../lib/storyline-guard.ts");
  const graph = migrateOntologyV1(
    {
      version: 1,
      title: "Guarded Story",
      nodes: [
        { id: "echo", kind: "Character", name: "Echo", description: "" },
        { id: "scene", kind: "Scene", name: "Archive", description: "" },
      ],
      edges: [{ id: "binding", source: "echo", target: "scene", type: "APPEARS_IN" }],
    },
    { actorId: "user-1", createdAt: "2026-07-24T00:00:00.000Z" },
  );
  const scene = graph.nodes.find((node) => node.stableKey === "scene");
  const echo = graph.nodes.find((node) => node.stableKey === "echo");
  const allowed = evaluateLocalChangeAgainstStoryline(graph, {
    id: "asset-job",
    baseRevisionId: graph.revision.id,
    summary: "Create a placeholder texture",
    operations: [{ action: "create_asset", implementationNodeId: scene.id, path: "Assets/Generated/Archive.png" }],
  });
  assert.equal(allowed.decision, "allow");
  const blocked = evaluateLocalChangeAgainstStoryline(graph, {
    id: "rewrite-job",
    baseRevisionId: graph.revision.id,
    summary: "Turn Echo into the villain",
    operations: [{ action: "update_node", nodeId: echo.id, fields: ["description"] }],
  });
  assert.equal(blocked.decision, "block");
  assert.ok(blocked.violations.some((violation) => violation.code === "APPROVED_STORY_MUTATION"));
  assert.match(blocked.notification, /적용하지 않았습니다/);
});

test("Graph retrieval returns a revision-scoped bounded impact subgraph", async () => {
  const { migrateOntologyV1 } = await import("../lib/ontology-v2.ts");
  const { retrieveLocalSubgraph, impactSubgraph } = await import("../lib/graph-projection.ts");
  const graph = migrateOntologyV1(
    {
      version: 1,
      title: "Impact Graph",
      nodes: [
        { id: "echo", kind: "Character", name: "Echo", description: "" },
        { id: "rule", kind: "WorldRule", name: "Memory Cost", description: "" },
        { id: "scene", kind: "Scene", name: "Archive", description: "" },
        { id: "unrelated", kind: "Item", name: "Coin", description: "" },
      ],
      edges: [
        { id: "echo-rule", source: "echo", target: "rule", type: "CHANGES_STATE" },
        { id: "echo-scene", source: "echo", target: "scene", type: "APPEARS_IN" },
      ],
    },
    { actorId: "user-1", createdAt: "2026-07-24T00:00:00.000Z" },
  );
  const local = retrieveLocalSubgraph(graph, { seedStableKeys: ["echo"], depth: 1 });
  assert.equal(local.revisionId, graph.revision.id);
  assert.deepEqual(
    new Set(local.nodes.map((node) => node.stableKey)),
    new Set(["echo", "rule", "scene"]),
  );
  assert.ok(!local.nodes.some((node) => node.stableKey === "unrelated"));
  const impact = impactSubgraph(graph, [local.seedNodeIds[0]], 1);
  assert.equal(impact.nodes.length, 3);
});

test("model policy enforces minute, daily token, and daily cost budgets", async () => {
  const { checkModelBudget, estimateCostUsd, estimateInputTokens } = await import(
    "../lib/model-policy.ts"
  );
  const now = new Date("2026-07-23T05:00:00.000Z");
  const limits = {
    requestsPerMinute: 2,
    requestsPerDay: 3,
    tokensPerDay: 1_000,
    costUsdPerDay: 1,
  };
  const recent = [
    {
      createdAt: "2026-07-23T04:59:50.000Z",
      inputTokens: 100,
      outputTokens: 50,
      estimatedCostUsd: 0.1,
    },
    {
      createdAt: "2026-07-23T04:59:40.000Z",
      inputTokens: 100,
      outputTokens: 50,
      estimatedCostUsd: 0.1,
    },
  ];
  assert.match(checkModelBudget(recent, limits, 100, now).reason, /분당/);
  assert.match(
    checkModelBudget(
      [{ ...recent[0], createdAt: "2026-07-23T03:00:00.000Z", inputTokens: 950 }],
      limits,
      100,
      now,
    ).reason,
    /토큰/,
  );
  assert.match(
    checkModelBudget(
      [{ ...recent[0], createdAt: "2026-07-23T03:00:00.000Z", estimatedCostUsd: 1 }],
      limits,
      100,
      now,
    ).reason,
    /비용/,
  );
  assert.ok(estimateInputTokens([{ content: "게임 규칙" }], { nodes: [] }) > 0);
  assert.equal(estimateCostUsd("local", 1_000_000, 1_000_000), 0);
  assert.equal(estimateCostUsd("bedrock", 1_000_000, 1_000_000), 18);
});

test("model writes require a signed five-day writer grant and remain audited", async () => {
  const [route, auth, access] = await Promise.all([
    readFile(new URL("../app/api/workshop/chat/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/auth-session.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/workshop/access/route.ts", import.meta.url), "utf8"),
  ]);
  assert.match(route, /!actor\.writer && !actor\.local/);
  assert.match(route, /WRITER_REQUIRED/);
  assert.match(route, /model\.invoked/);
  assert.match(route, /model\.denied/);
  assert.match(route, /model\.failed/);
  assert.match(route, /status: 413/);
  assert.match(route, /savePendingProposal/);
  assert.match(route, /baseGraph: payload\.graph/);
  assert.match(auth, /__Host-gameforge_session/);
  assert.match(auth, /__Host-gameforge_writer/);
  assert.match(auth, /timingSafeEqual/);
  assert.match(access, /redeemWorkshopInvite/);
  assert.match(access, /Set-Cookie/);
});

test("proposal approval and rejection are server-authoritative and revision checked", async () => {
  const [sessions, proposals, store] = await Promise.all([
    readFile(new URL("../app/api/workshop/sessions/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/api/workshop/proposals/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/aws-store.ts", import.meta.url), "utf8"),
  ]);
  assert.match(sessions, /PROPOSAL_NOT_PENDING/);
  assert.match(sessions, /PROPOSAL_REVISION_MISMATCH/);
  assert.match(sessions, /STALE_PROPOSAL/);
  assert.match(sessions, /pendingProposal\.baseGraph/);
  assert.match(sessions, /resolveProposal/);
  assert.match(proposals, /body\.action !== "reject"/);
  assert.match(store, /ConditionExpression: "#status = :pending"/);
});

test("Cognito organizers are administrators and writers without participant codes", async () => {
  const auth = await readFile(
    new URL("../lib/request-auth.ts", import.meta.url),
    "utf8",
  );
  assert.match(auth, /session\.groups\.includes\("organizer"\)/);
  assert.match(auth, /writer: organizer \|\| Boolean\(grant\)/);
});

test("Cognito participants are operator-invited and self-registration stays closed", async () => {
  const [identity, invitation] = await Promise.all([
    readFile(new URL("../infra/identity-data.yml", import.meta.url), "utf8"),
    readFile(new URL("../scripts/invite-user.sh", import.meta.url), "utf8"),
  ]);
  assert.match(identity, /AllowAdminCreateUserOnly: true/);
  assert.match(invitation, /admin-create-user/);
  assert.match(invitation, /desired-delivery-mediums EMAIL/);
});

test("StoryForge export preflights credentials, backs up, and restores on failure", async () => {
  const route = await readFile(
    new URL("../app/api/integrations/storyforge/route.ts", import.meta.url),
    "utf8",
  );
  const preflight = route.indexOf("/api/models");
  const backup = route.indexOf("/api/projects/save");
  const mutation = route.indexOf("/api/storyline");
  const restore = route.indexOf("/load");
  assert.ok(preflight >= 0 && preflight < backup);
  assert.ok(backup < mutation);
  assert.ok(restore > mutation);
  assert.match(route, /requiresCredential: true/);
  assert.match(route, /기존 StoryForge 프로젝트는 자동 복원/);
});

test("AWS Cognito, DynamoDB, Lambda, and Bedrock infrastructure are present", async () => {
  const [layout, identity, application, docker] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../infra/identity-data.yml", import.meta.url), "utf8"),
    readFile(new URL("../infra/app.yml", import.meta.url), "utf8"),
    readFile(new URL("../Dockerfile.aws", import.meta.url), "utf8"),
  ]);
  assert.match(layout, /Game Forge/);
  assert.match(identity, /AWS::Cognito::UserPool/);
  assert.match(
    identity,
    /AdminCreateUserConfig:\s+AllowAdminCreateUserOnly: true/,
  );
  assert.match(identity, /MinimumLength: 8/);
  assert.match(identity, /RequireSymbols: true/);
  assert.match(identity, /AWS::DynamoDB::Table/);
  assert.match(identity, /OntologySnapshotBucket/);
  assert.match(identity, /VersioningConfiguration/);
  assert.match(identity, /BlockPublicPolicy: true/);
  assert.match(identity, /TimeToLiveSpecification/);
  assert.match(application, /AWS::Lambda::Function/);
  assert.match(application, /bedrock:InvokeModel/);
  assert.match(application, /BedrockRegion:[\s\S]*Default: us-east-1/);
  assert.match(application, /GAMEFORGE_ONTOLOGY_SNAPSHOT_BUCKET/);
  assert.match(application, /GAMEFORGE_GRAPH_WORKER_ARN/);
  assert.match(application, /lambda:InvokeFunction/);
  assert.match(application, /AWS::CloudFront::OriginAccessControl/);
  assert.match(application, /AuthType: AWS_IAM/);
  assert.match(application, /Principal: cloudfront\.amazonaws\.com/);
  assert.doesNotMatch(application, /Principal: ["']?\*["']?/);
  assert.match(docker, /aws-lambda-adapter/);
});

test("DynamoDB sessions are account-scoped and writes require workshop access", async () => {
  const route = await readFile(
    new URL("../app/api/workshop/sessions/route.ts", import.meta.url),
    "utf8",
  );
  assert.match(route, /listWorkshops\(actor\.sub\)/);
  assert.match(route, /storage: "aws-dynamodb"/);
  assert.match(route, /if \(!actor\.writer\)/);
  assert.match(route, /WRITER_REQUIRED/);
  assert.match(route, /ownerSub: actor\.sub/);
  assert.match(route, /migrateOntologyV1/);
  assert.match(route, /createChildRevision/);
  assert.match(route, /ONTOLOGY_VALIDATION_FAILED/);
  assert.match(route, /ontologyV2/);
  assert.match(route, /applyProposal/);
  assert.match(route, /pendingProposal\.baseGraph/);
  assert.match(route, /putOntologySnapshot/);
  assert.match(route, /queueOntologyProjection/);
});

test("private Neptune graph worker has a cost gate and no public connectivity", async () => {
  const [template, deploy, handler] = await Promise.all([
    readFile(new URL("../infra/graph-worker.yml", import.meta.url), "utf8"),
    readFile(new URL("../scripts/deploy-graph-worker.sh", import.meta.url), "utf8"),
    readFile(new URL("../graph-worker/handler.ts", import.meta.url), "utf8"),
  ]);
  assert.match(template, /AWS::NeptuneGraph::Graph/);
  assert.match(template, /AWS::NeptuneGraph::PrivateGraphEndpoint/);
  assert.match(template, /PublicConnectivity: false/);
  assert.match(template, /ProvisionedMemory:[\s\S]*Default: 16/);
  assert.match(deploy, /GAMEFORGE_CONFIRM_NEPTUNE_COST/);
  assert.match(handler, /expectedRevisionId/);
  assert.match(handler, /validateOntologyV2/);
});

test("public Companion download serves the reviewed loopback bridge", async () => {
  const route = await readFile(
    new URL("../app/api/companion/download/route.ts", import.meta.url),
    "utf8",
  );
  assert.match(route, /public", "gameforge-companion\.mjs"/);
  assert.match(route, /attachment; filename="gameforge-companion\.mjs"/);
  const companion = await readFile(
    new URL("../companion/gameforge.mjs", import.meta.url),
    "utf8",
  );
  assert.match(companion, /server\.listen\(port, "127\.0\.0\.1"/);
  assert.match(companion, /process-memory-only/);
  assert.match(companion, /Access-Control-Allow-Private-Network/);
});

test("Unity companion generates an isolated Unity 6 project", async () => {
  const temporary = await mkdtemp(join(tmpdir(), "game-forge-test-"));
  const output = join(temporary, "UnityProject");
  const secondOutput = join(temporary, "UnityProjectSecond");
  const run = promisify(execFile);
  try {
    await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "generate",
      fileURLToPath(new URL("../examples/project-mnemosyne.game.json", import.meta.url)),
      output,
    ]);
    const [version, manifest, builder, entity, controller, systems, narrativeAsset, narrativeState, validator, narrativeJson, stateJson, packages, aiContext, aiPrompts, runtimePackage, ownership, generatorState] = await Promise.all([
      readFile(join(output, "ProjectSettings/ProjectVersion.txt"), "utf8"),
      readFile(join(output, "Assets/StreamingAssets/game-forge-manifest.json"), "utf8"),
      readFile(join(output, "Assets/GameForge/Editor/GameForgeProjectBuilder.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Runtime/GameForgeEntity.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Runtime/GameForgePlayerController.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Runtime/GameSystemSettings.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Runtime/GameNarrativeAsset.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Runtime/GameNarrativeState.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Editor/GameForgeGeneratedValidation.cs"), "utf8"),
      readFile(join(output, "Assets/GameForge/Managed/narrative.json"), "utf8"),
      readFile(join(output, "Assets/GameForge/Managed/state-variables.json"), "utf8"),
      readFile(join(output, "Packages/manifest.json"), "utf8"),
      readFile(join(output, "Assets/GameForge/AI/ONTOLOGY_CONTEXT.md"), "utf8"),
      readFile(join(output, "Assets/GameForge/AI/GeneratorPrompts.json"), "utf8"),
      readFile(join(output, "Packages/com.jinuland.gameforge.runtime/package.json"), "utf8"),
      readFile(join(output, ".gameforge/ownership.json"), "utf8"),
      readFile(join(output, ".gameforge/state.json"), "utf8"),
    ]);
    assert.match(version, /m_EditorVersion: 6000\./);
    assert.equal(JSON.parse(manifest).title, "Project Mnemosyne");
    assert.match(builder, /Rebuild Generated Scenes/);
    assert.match(builder, /MemoryHub/);
    assert.match(builder, /PrefabUtility\.SaveAsPrefabAsset/);
    assert.match(builder, /BuildPlayable/);
    assert.match(builder, /기억 수선사/);
    assert.match(entity, /ontologyId/);
    assert.match(controller, /CharacterController/);
    assert.match(systems, /mechanics/);
    assert.match(narrativeAsset, /GameStateVariableDefinition/);
    assert.match(narrativeState, /CurrentBeatId/);
    assert.match(validator, /Validate Generated Project/);
    assert.equal(JSON.parse(narrativeJson).entryBeatId, "beat-missing-name");
    assert.deepEqual(
      JSON.parse(stateJson).variables.map((item) => item.name),
      ["clueCount", "echoTrust"],
    );
    assert.equal(JSON.parse(packages).dependencies["com.unity.modules.physics"], "1.0.0");
    assert.match(aiContext, /Unity AI Context/);
    assert.equal(JSON.parse(aiPrompts).schema, "game-forge/unity-ai-handoff/v1");
    assert.equal(JSON.parse(runtimePackage).version, "1.0.0");
    assert.deepEqual(JSON.parse(ownership).userOwned, ["Assets/GameForge/UserOwned/**"]);
    assert.equal(JSON.parse(generatorState).schema, "game-forge/generator-state/v1");
    assert.ok(Object.keys(JSON.parse(generatorState).checksums).length >= 10);
    const checkpoint = await run("git", ["-C", output, "log", "-1", "--pretty=%s"]);
    assert.match(checkpoint.stdout, /GAME FORGE checkpoint/);
    await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "generate",
      fileURLToPath(new URL("../examples/project-mnemosyne.game.json", import.meta.url)),
      secondOutput,
    ]);
    const secondState = await readFile(join(secondOutput, ".gameforge/state.json"), "utf8");
    assert.equal(secondState, generatorState);
    const preview = await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "preview",
      fileURLToPath(new URL("../examples/project-mnemosyne.game.json", import.meta.url)),
      output,
    ]);
    const previewPayload = JSON.parse(preview.stdout);
    assert.equal(previewPayload.mutatesProject, false);
    assert.equal(previewPayload.requiresApproval, false);
    assert.deepEqual(previewPayload.changed, []);

    await assert.rejects(
      run(
        process.execPath,
        [
          fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
          "generate",
          fileURLToPath(new URL("../examples/project-mnemosyne.game.json", import.meta.url)),
          output,
          "--force",
        ],
        { env: { ...process.env, GAMEFORGE_TEST_FAIL_PHASE: "after-managed" } },
      ),
      /Injected generator failure/,
    );
    assert.equal(
      await readFile(join(output, ".gameforge/state.json"), "utf8"),
      generatorState,
    );
    const failedInspection = await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "inspect",
      output,
    ]);
    assert.equal(JSON.parse(failedInspection.stdout).lastRun.status, "failed");
    assert.equal(JSON.parse(failedInspection.stdout).ready, false);
    await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "resume",
      output,
      fileURLToPath(new URL("../examples/project-mnemosyne.game.json", import.meta.url)),
    ]);
    const resumedInspection = await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "inspect",
      output,
    ]);
    assert.equal(JSON.parse(resumedInspection.stdout).lastRun.status, "completed");
    assert.equal(JSON.parse(resumedInspection.stdout).ready, true);

    const managedFile = join(output, "Assets/GameForge/Runtime/GameForgeEntity.cs");
    await writeFile(managedFile, `${entity}\n// participant edit\n`);
    await assert.rejects(
      run(process.execPath, [
        fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
        "generate",
        fileURLToPath(new URL("../examples/project-mnemosyne.game.json", import.meta.url)),
        output,
        "--force",
      ]),
      /MANAGED_CONFLICT/,
    );
    const inspection = await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "inspect",
      output,
    ]);
    const inspectionPayload = JSON.parse(inspection.stdout);
    assert.equal(inspectionPayload.ready, false);
    assert.equal(inspectionPayload.managedConflicts.length, 1);
    assert.equal(inspectionPayload.openInterventions.length, 1);
    const restored = await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "restore",
      output,
    ]);
    assert.deepEqual(JSON.parse(restored.stdout).restored, [
      "Assets/GameForge/Runtime/GameForgeEntity.cs",
    ]);
    await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "resolve-intervention",
      output,
      inspectionPayload.openInterventions[0].id,
      "restore",
    ]);
    const verified = await run(process.execPath, [
      fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
      "inspect",
      output,
    ]);
    assert.equal(JSON.parse(verified.stdout).ready, true);
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});

test("Build Revision is Ed25519 signed and rejects manifest tampering", async () => {
  process.env.GAMEFORGE_BUILD_SIGNING_SECRET = "test-only-build-signing-secret-1234567890";
  const {
    createBuildManifest,
    signBuildRevision,
    verifySignedBuildRevision,
  } = await import("../lib/build-revision.ts");
  const workshop = {
    id: "project-1",
    ownerSub: "user-1",
    ownerEmail: "maker@example.com",
    title: "Signed Memory",
    provider: "demo",
    revision: 7,
    createdAt: "2026-07-24T00:00:00.000Z",
    updatedAt: "2026-07-24T00:00:00.000Z",
    graph: { version: 1, title: "Signed Memory", nodes: [], edges: [] },
    ontologyV2: { revision: { id: "ontology-revision-7" } },
    ontologySnapshot: {
      bucket: "private-snapshots",
      key: "projects/user-1/project-1/revisions/ontology-revision-7.json",
      checksumSha256: "abc123",
      revisionId: "ontology-revision-7",
    },
    story: [],
    messages: [],
  };
  const manifest = createBuildManifest(workshop, "build-1", new Date("2026-07-24T00:00:00.000Z"));
  const envelope = signBuildRevision(manifest);
  assert.equal(envelope.algorithm, "Ed25519");
  assert.equal(envelope.manifest.ontologyRevisionId, "ontology-revision-7");
  assert.equal(verifySignedBuildRevision(envelope), true);
  const tampered = structuredClone(envelope);
  tampered.manifest.game.title = "Tampered";
  assert.equal(verifySignedBuildRevision(tampered), false);
});

test("Companion pairs once, verifies the signed revision, generates, and acknowledges", async () => {
  process.env.GAMEFORGE_BUILD_SIGNING_SECRET = "test-only-build-signing-secret-1234567890";
  const { buildSigningPublicKey, signBuildRevision } = await import("../lib/build-revision.ts");
  const temporary = await mkdtemp(join(tmpdir(), "game-forge-pair-"));
  const output = join(temporary, "UnityProject");
  const port = 20876 + Math.floor(Math.random() * 500);
  let receipt = null;
  const now = new Date();
  const game = JSON.parse(
    await readFile(new URL("../examples/project-mnemosyne.game.json", import.meta.url), "utf8"),
  );
  const envelope = signBuildRevision({
    schema: "game-forge/build-revision/v1",
    buildId: "build-pair-test",
    projectId: "project-pair-test",
    projectRevision: 3,
    ontologyRevisionId: "ontology-pair-test",
    ontologySnapshot: {
      bucket: "private",
      key: "revision.json",
      checksumSha256: "abc",
      revisionId: "ontology-pair-test",
    },
    createdAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + 60_000).toISOString(),
    game,
  });
  const server = createServer(async (request, response) => {
    if (request.url === "/api/companion/pair") {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify({
        envelope,
        receiptToken: "receipt-token",
        receiptPath: "/api/companion/receipt",
      }));
      return;
    }
    if (request.url === "/api/companion/receipt") {
      let body = "";
      for await (const chunk of request) body += chunk;
      receipt = JSON.parse(body);
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify({ accepted: true }));
      return;
    }
    response.writeHead(404).end();
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", resolve);
  });
  const run = promisify(execFile);
  try {
    const result = await run(
      process.execPath,
      [
        fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)),
        "pair",
        `http://127.0.0.1:${port}`,
        "ABCD2345",
        output,
      ],
      { env: { ...process.env, GAMEFORGE_BUILD_PUBLIC_KEY: buildSigningPublicKey().publicKey } },
    );
    const status = JSON.parse(result.stdout);
    assert.equal(status.signatureVerified, true);
    assert.equal(status.buildId, "build-pair-test");
    assert.equal(status.ontologyRevisionId, "ontology-pair-test");
    assert.equal(receipt.buildId, "build-pair-test");
    assert.equal(receipt.receiptToken, "receipt-token");
    assert.equal(receipt.status, "generated");
  } finally {
    await new Promise((resolve) => server.close(resolve));
    await rm(temporary, { recursive: true, force: true });
  }
});

test("localhost companion bridge diagnoses and generates without modifying other projects", async () => {
  const temporary = await mkdtemp(join(tmpdir(), "game-forge-bridge-"));
  const port = 19876 + Math.floor(Math.random() * 500);
  const mockPort = port + 1000;
  let receivedAuthorization = "";
  const mockBedrock = createServer(async (request, response) => {
    receivedAuthorization = String(request.headers.authorization ?? "");
    for await (const chunk of request) {
      // Drain the request before returning the deterministic Bedrock response.
      void chunk;
    }
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({
      output: {
        message: {
          content: [{
            toolUse: {
              input: {
                summary: "참가자 Bedrock 변경안",
                rationale: "로컬 Companion 경계를 검증한다.",
                operations: [{
                  op: "add_node",
                  node: {
                    id: "participant-rule",
                    kind: "WorldRule",
                    name: "참가자 규칙",
                    description: "각 참가자의 Key로 생성된다.",
                  },
                }],
                storyBeats: [{
                  act: "ACT 1",
                  title: "로컬 연결",
                  summary: "Companion이 Bedrock을 호출한다.",
                  playerAction: "Key를 연결한다.",
                  consequence: "공개 서버에 Key가 남지 않는다.",
                }],
                questions: [],
              },
            },
          }],
        },
      },
      usage: { inputTokens: 120, outputTokens: 80 },
      stopReason: "tool_use",
    }));
  });
  await new Promise((resolve, reject) => {
    mockBedrock.once("error", reject);
    mockBedrock.listen(mockPort, "127.0.0.1", resolve);
  });
  const child = spawn(
    process.execPath,
    [fileURLToPath(new URL("../companion/gameforge.mjs", import.meta.url)), "serve", String(port)],
    {
      cwd: fileURLToPath(new URL("../", import.meta.url)),
      env: {
        ...process.env,
        GAMEFORGE_OUTPUT_ROOT: temporary,
        GAMEFORGE_BEDROCK_RUNTIME_URL: `http://127.0.0.1:${mockPort}/converse`,
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  try {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Companion start timeout")), 5000);
      child.stdout.on("data", (chunk) => {
        if (String(chunk).includes("listening")) {
          clearTimeout(timeout);
          resolve();
        }
      });
      child.once("error", reject);
      child.once("exit", (code) => {
        if (code !== null) reject(new Error(`Companion exited with ${code}`));
      });
    });
    const health = await fetch(`http://127.0.0.1:${port}/health`);
    assert.equal(health.status, 200);
    const healthPayload = await health.json();
    assert.equal(healthPayload.companion, "GAME FORGE");
    assert.equal(healthPayload.bedrock.configured, false);

    const participantKey = `ABSK${"participant-only-secret".repeat(3)}`;
    const configured = await fetch(`http://127.0.0.1:${port}/bedrock/configure`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        apiKey: participantKey,
        region: "us-east-1",
        model: "us.anthropic.claude-sonnet-4-6",
      }),
    });
    assert.equal(configured.status, 200);
    const configuredPayload = await configured.json();
    assert.equal(configuredPayload.configured, true);
    assert.equal(configuredPayload.storage, "process-memory-only");
    assert.doesNotMatch(JSON.stringify(configuredPayload), new RegExp(participantKey));

    const configuredHealth = await fetch(`http://127.0.0.1:${port}/health`);
    const configuredHealthPayload = await configuredHealth.json();
    assert.equal(configuredHealthPayload.bedrock.configured, true);
    assert.doesNotMatch(JSON.stringify(configuredHealthPayload), new RegExp(participantKey));

    const participantChat = await fetch(`http://127.0.0.1:${port}/bedrock/chat`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: "세계 규칙을 추가해줘." }],
        graph: { version: 1, title: "Test", nodes: [], edges: [] },
      }),
    });
    assert.equal(participantChat.status, 200);
    const participantChatPayload = await participantChat.json();
    assert.equal(participantChatPayload.provider, "companion-bedrock");
    assert.equal(participantChatPayload.proposal.operations[0].node.id, "participant-rule");
    assert.equal(participantChatPayload.usage.inputTokens, 120);
    assert.equal(participantChatPayload.budget.usedRequests, 1);
    assert.equal(receivedAuthorization, `Bearer ${participantKey}`);

    const manifest = JSON.parse(
      await readFile(new URL("../examples/project-mnemosyne.game.json", import.meta.url), "utf8"),
    );
    const generated = await fetch(`http://127.0.0.1:${port}/generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ manifest }),
    });
    assert.equal(generated.status, 200);
    const generatedPayload = await generated.json();
    assert.equal(generatedPayload.characterPrefabs, 2);
    assert.equal(generatedPayload.gameSystems, 2);
    assert.equal(generatedPayload.scenes.length, 4);
    assert.equal(generatedPayload.unityAiHandoff, true);
    assert.ok(generatedPayload.output.startsWith(temporary));
  } finally {
    child.kill("SIGTERM");
    await new Promise((resolve) => mockBedrock.close(resolve));
    await rm(temporary, { recursive: true, force: true });
  }
});
