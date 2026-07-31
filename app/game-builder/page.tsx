"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { genreProfiles } from "@/lib/success-patterns";
import styles from "./builder.module.css";

type StoryAct = { title: string; story: string; playerAction: string; stateChange: string };
type StoryNode = { id: string; kind: string; name: string; description: string };
type StoryEdge = { source: string; target: string; type: string };
type StoryDesign = {
  title: string; logline: string; playerRole: string; world: string; centralConflict: string;
  coreLoop: string[]; acts: StoryAct[]; nodes: StoryNode[]; edges: StoryEdge[]; designRationale: string[];
};
type GameConcept = {
  conceptTitle: string; experiencePromise: string; designPillars: string[];
  gameplay: { perspective: string; sessionFlow: string; coreMechanics: string[]; controls: string[]; progression: string[]; failureAndRecovery: string[] };
  visual: { style: string; camera: string; palette: string[]; characters: string[]; environments: string[]; effects: string[]; characterImagePrompts: string[]; environmentImagePrompts: string[] };
  audio: { musicDirection: string; soundMoments: string[] };
  contentPlan: string[]; risks: string[]; reviewQuestions: string[];
};
type ImplementationGoal = { category: string; title: string; objective: string; tasks: string[]; acceptance: string[]; dependencies: string[] };
type GoalPackage = {
  validation: { score: number; verdict: string; summary: string; strengths: string[]; risks: string[] };
  artDirection: { visualIdentity: string; cameraAndComposition: string; environmentDesign: string[]; characterDesign: string[]; animationPlan: string[]; assetPipeline: string[] };
  imageGenerationPlan: { modelWorkflow: string; characterPrompts: string[]; environmentPrompts: string[]; assetSpecs: string[]; consistencyChecks: string[] };
  balancePlan: { targetMetrics: string[]; simulationCases: string[]; playtestScenarios: string[]; telemetry: string[]; passCriteria: string[] };
  funIterationPlan: { funHypotheses: string[]; firstPlayProtocol: string[]; observationMetrics: string[]; issueLog: string[]; iterationLoop: string[]; playerPerspectives: string[]; stopCriteria: string[] };
  completionContract: { definitionOfDone: string[]; traceability: string[]; sourceAudit: string[]; browserValidation: string[]; fullPlaythrough: string[]; testExecution: string[]; prohibitedChecks: string[]; deploymentGate: string[]; finalReport: string[] };
  gameGoal: string; implementationPrompt: string; goals: ImplementationGoal[];
};

const SAVE_KEY = "gameforge:genre-workshop:v2";
const PROJECTS_KEY = "gameforge:game-projects:v1";
const ACTIVE_PROJECT_KEY = "gameforge:active-project:v1";
const GENERATION_TIMEOUT_MS = 15 * 60 * 1_000;
type SavedProject = { id: string; name: string; genreId: string; idea: string; actCount: number; story: StoryDesign | null; concept: GameConcept | null; feedback: string; goals: GoalPackage | null; updatedAt: string };

function download(name: string, value: unknown) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }));
  const anchor = document.createElement("a");
  anchor.href = url; anchor.download = name; anchor.hidden = true;
  document.body.appendChild(anchor); anchor.click(); anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
}

function downloadText(name: string, value: string) {
  const url = URL.createObjectURL(new Blob([value], { type: "text/markdown;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = url; anchor.download = name; anchor.hidden = true;
  document.body.appendChild(anchor); anchor.click(); anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
}

function validGoalPackage(value: GoalPackage | undefined) {
  return !!value && typeof value.implementationPrompt === "string" && value.implementationPrompt.trim().length > 0;
}

export default function OntologyBuilder() {
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("새 게임");
  const [projects, setProjects] = useState<SavedProject[]>([]);
  const [genreId, setGenreId] = useState("defense");
  const [idea, setIdea] = useState("밤마다 기억을 먹는 괴물에게서 마을과 주민들의 추억을 지키는 게임. 강한 방어시설을 만들려면 누군가의 기억을 희생해야 한다.");
  const [actCount, setActCount] = useState(5);
  const [story, setStory] = useState<StoryDesign | null>(null);
  const [concept, setConcept] = useState<GameConcept | null>(null);
  const [feedback, setFeedback] = useState("");
  const [goals, setGoals] = useState<GoalPackage | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState<"story" | "concept" | "goals" | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [requestStartedAt, setRequestStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  // Generated images keyed by prompt (dataUrl or error), plus per-prompt loading flag.
  const [images, setImages] = useState<Record<string, { url?: string; error?: string; model?: string }>>({});
  const [imageLoading, setImageLoading] = useState<string | null>(null);
  const [imageModel, setImageModel] = useState("stable-core");
  const generationLock = useRef(false);
  const activeController = useRef<AbortController | null>(null);
  const genre = genreProfiles.find((item) => item.id === genreId) ?? genreProfiles[0];
  const graphPositions = story ? Object.fromEntries(story.nodes.map((node, index) => {
    const angle = (Math.PI * 2 * index / Math.max(story.nodes.length, 1)) - Math.PI / 2;
    return [node.id, { x: 450 + Math.cos(angle) * 330, y: 210 + Math.sin(angle) * 150 }];
  })) as Record<string, { x: number; y: number }> : {};

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        // Preserve projects created by earlier local builds without retaining
        // their retired product namespace.
        for (let index = 0; index < localStorage.length; index += 1) {
          const key = localStorage.key(index);
          if (!key) continue;
          const target = key.endsWith(":game-projects:v1") ? PROJECTS_KEY
            : key.endsWith(":active-project:v1") ? ACTIVE_PROJECT_KEY
            : key.endsWith(":genre-workshop:v2") ? SAVE_KEY
            : null;
          if (target && key !== target && !localStorage.getItem(target)) {
            const value = localStorage.getItem(key);
            if (value !== null) localStorage.setItem(target, value);
          }
        }
        let savedProjects = JSON.parse(localStorage.getItem(PROJECTS_KEY) ?? "[]") as SavedProject[];
        const legacy = JSON.parse(localStorage.getItem(SAVE_KEY) ?? "null") as { genreId?: string; idea?: string; actCount?: number; story?: StoryDesign; goals?: GoalPackage } | null;
        if (!savedProjects.length && legacy) {
          const migrated: SavedProject = { id: crypto.randomUUID(), name: legacy.story?.title || "첫 게임", genreId: legacy.genreId || "defense", idea: legacy.idea || "", actCount: legacy.actCount || 5, story: legacy.story || null, concept: null, feedback: "", goals: validGoalPackage(legacy.goals) ? legacy.goals! : null, updatedAt: new Date().toISOString() };
          savedProjects = [migrated];
          localStorage.setItem(PROJECTS_KEY, JSON.stringify(savedProjects));
        }
        const activeId = localStorage.getItem(ACTIVE_PROJECT_KEY);
        const saved = savedProjects.find((item) => item.id === activeId) ?? savedProjects[0];
        setProjects(savedProjects);
        if (saved) { setProjectId(saved.id); setProjectName(saved.name); }
        if (saved?.genreId) setGenreId(saved.genreId);
        if (saved?.idea) setIdea(saved.idea);
        if (saved?.actCount) setActCount(saved.actCount);
        if (saved?.story) setStory(saved.story);
        if (saved?.concept) setConcept(saved.concept);
        if (saved?.feedback) setFeedback(saved.feedback);
        if (validGoalPackage(saved?.goals ?? undefined)) setGoals(saved!.goals!);
        else if (saved?.goals) setStatus("이전에 생성된 Build Goal이 품질 검증에 실패해 폐기됐습니다. 스토리를 다시 확정해주세요.");
      } catch { localStorage.removeItem(SAVE_KEY); }
      setHydrated(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const timer = window.setTimeout(() => {
      const id = projectId || crypto.randomUUID();
      if (!projectId) setProjectId(id);
      const project: SavedProject = { id, name: projectName.trim() || story?.title || "새 게임", genreId, idea, actCount, story, concept, feedback, goals, updatedAt: new Date().toISOString() };
      setProjects((current) => {
        const next = [project, ...current.filter((item) => item.id !== id)].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
        return next;
      });
      localStorage.setItem(ACTIVE_PROJECT_KEY, id);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [projectId, projectName, genreId, idea, actCount, story, concept, feedback, goals, hydrated]);

  useEffect(() => {
    if (!requestStartedAt) return;
    const update = () => setElapsed(Math.max(0, Math.floor((Date.now() - requestStartedAt) / 1000)));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [requestStartedAt]);

  const callBedrock = async (action: "story" | "concept" | "goals") => {
    if (generationLock.current) { setStatus("이미 생성 작업이 진행 중입니다. 완료될 때까지 기다려주세요."); return; }
    generationLock.current = true;
    const controller = new AbortController();
    activeController.current = controller;
    setLoading(action); setElapsed(0); setRequestStartedAt(Date.now());
    setStatus(action === "story" ? "장르 공식을 아이디어에 매핑해 스토리를 만들고 있습니다…" : action === "concept" ? "스토리를 캐릭터·배경·게임 방식이 보이는 기획안으로 만들고 있습니다…" : "확정된 기획안을 코딩 에이전트용 Goal로 변환하고 있습니다…");
    try {
      const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(GENERATION_TIMEOUT_MS)]);
      const response = await fetch("/api/ontology/design", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, genreId, idea, actCount, story, concept, feedback }), signal });
      const data = await response.json() as { result?: StoryDesign | GameConcept | GoalPackage; normalizedStory?: StoryDesign; model?: string; error?: string };
      if (!response.ok || !data.result) throw new Error(data.error ?? "Bedrock 결과를 받지 못했습니다.");
      if (action === "story") {
        const nextStory = data.result as StoryDesign; setStory(nextStory); setConcept(null); setFeedback(""); setGoals(null);
        if (projectName === "새 게임") setProjectName(nextStory.title);
      }
      else if (action === "concept") { setConcept(data.result as GameConcept); setGoals(null); if (data.normalizedStory) setStory(data.normalizedStory); }
      else { setGoals(data.result as GoalPackage); if (data.normalizedStory) setStory(data.normalizedStory); }
      setStatus(`${data.model ?? "Bedrock"} 생성 완료. 자동 저장했습니다.`);
    } catch (error) { setStatus(error instanceof DOMException && error.name === "TimeoutError" ? "Bedrock 응답이 제한 시간을 초과했습니다. 작업을 종료했습니다. 다시 시도해주세요." : error instanceof Error ? error.message : "Bedrock 요청에 실패했습니다."); }
    finally { generationLock.current = false; activeController.current = null; setLoading(null); setRequestStartedAt(null); }
  };

  // Generate a single image from an imageGenerationPlan prompt via the Bedrock key.
  const generateImage = async (prompt: string, kind: "character" | "environment", index: number) => {
    const key = `${kind}:${index}`;
    if (imageLoading) { setStatus("다른 이미지를 생성 중입니다. 완료 후 다시 시도하세요."); return; }
    setImageLoading(key);
    setStatus(`${kind === "character" ? "캐릭터" : "배경"} 이미지를 생성하고 있습니다… (Bedrock)`);
    try {
      const aspectRatio = kind === "character" ? "2:3" : "16:9";
      const response = await fetch("/api/ontology/image", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, model: imageModel, aspectRatio }),
        signal: AbortSignal.timeout(GENERATION_TIMEOUT_MS),
      });
      const data = await response.json() as { image?: string; model?: string; error?: string };
      if (!response.ok || !data.image) throw new Error(data.error ?? "이미지를 받지 못했습니다.");
      setImages((current) => ({ ...current, [key]: { url: data.image, model: data.model } }));
      setStatus(`이미지 생성 완료 (${data.model ?? "Bedrock"}).`);
    } catch (error) {
      const message = error instanceof DOMException && error.name === "TimeoutError"
        ? "이미지 생성이 제한 시간을 초과했습니다." : error instanceof Error ? error.message : "이미지 생성 실패";
      setImages((current) => ({ ...current, [key]: { error: message } }));
      setStatus(message);
    } finally { setImageLoading(null); }
  };

  const save = () => {
    const id = projectId || crypto.randomUUID();
    const project: SavedProject = { id, name: projectName.trim() || story?.title || "새 게임", genreId, idea, actCount, story, concept, feedback, goals, updatedAt: new Date().toISOString() };
    const next = [project, ...projects.filter((item) => item.id !== id)];
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(next)); localStorage.setItem(ACTIVE_PROJECT_KEY, id);
    setProjectId(id); setProjects(next); setStatus(`“${project.name}” 프로젝트를 저장했습니다.`);
  };

  const loadProject = (id: string) => {
    if (generationLock.current) return;
    const project = projects.find((item) => item.id === id); if (!project) return;
    setProjectId(project.id); setProjectName(project.name); setGenreId(project.genreId); setIdea(project.idea); setActCount(project.actCount); setStory(project.story); setConcept(project.concept ?? null); setFeedback(project.feedback ?? ""); setGoals(validGoalPackage(project.goals ?? undefined) ? project.goals : null);
    localStorage.setItem(ACTIVE_PROJECT_KEY, project.id); setStatus(`“${project.name}” 프로젝트를 불러왔습니다.`);
  };

  const newProject = () => {
    if (generationLock.current) return;
    const id = crypto.randomUUID(); setProjectId(id); setProjectName("새 게임"); setGenreId("defense"); setIdea(""); setActCount(5); setStory(null); setConcept(null); setFeedback(""); setGoals(null); setStatus("새 게임 프로젝트를 시작했습니다.");
  };

  return <main className={styles.shell}>
    <header className={styles.header}>
      <Link href="/">← GAME FORGE</Link><h1>GAME FORGE</h1><p>{hydrated ? "자동 저장 ON · " : ""}GENRE → STORY ONTOLOGY → BUILD GOALS</p>
    </header>
    <div className={styles.steps}><b>1 장르</b><i>→</i><b>2 아이디어</b><i>→</i><b>3 스토리 편집</b><i>→</i><b>4 기획안 검토</b><i>→</i><b>5 Goal 생성</b><i>→</i><b>6 게임 구현</b></div>
    <section className={styles.projectBar}>
      <label>게임 이름<input value={projectName} disabled={!!loading} onChange={(event) => setProjectName(event.target.value)} /></label>
      <label>저장된 게임<select value={projectId} disabled={!!loading} onChange={(event) => loadProject(event.target.value)}><option value="">프로젝트 선택</option>{projects.map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}</select></label>
      <button disabled={!!loading} onClick={newProject}>+ 다른 게임 만들기</button>
      <button disabled={!!loading} onClick={save}>현재 게임 저장</button>
      {loading && <button className={styles.cancelButton} onClick={() => activeController.current?.abort()}>현재 생성 취소</button>}
    </section>

    <section className={styles.genreSection}>
      <div className={styles.sectionHead}><span>01</span><div><h2>대표 장르를 선택하세요</h2><p>성공작 분석은 내부 지식으로 사용되고 고객에게는 장르의 플레이 약속만 보입니다.</p></div></div>
      <div className={styles.genreGrid}>{genreProfiles.map((item) => <button key={item.id} disabled={!!loading} className={genreId === item.id ? styles.genreActive : ""} style={{"--genre": item.color} as React.CSSProperties} onClick={() => { setGenreId(item.id); setStory(null); setConcept(null); setGoals(null); }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.genreThumb} src={item.image} alt={`${item.name} 예시`} loading="lazy" />
        <small>{item.name}</small><strong>{item.tagline}</strong><span>{item.playerFantasy}</span>
        <em className={styles.genreExamples}>예: {item.examples.join(" · ")}</em>
      </button>)}</div>
    </section>

    <div className={styles.workGrid}>
      <section className={styles.panel}>
        <div className={styles.sectionHead}><span>02</span><div><h2>아이디어를 이야기하세요</h2><p>{genre.name}의 플레이 구조에 맞춰 확장합니다.</p></div></div>
        <textarea className={styles.idea} value={idea} disabled={!!loading} onChange={(event) => setIdea(event.target.value)} />
        <div className={styles.actChoice}><span>스토리 규모</span>{[3, 5, 7].map((count) => <button key={count} disabled={!!loading} className={actCount === count ? styles.choiceActive : ""} onClick={() => setActCount(count)}>{count === 3 ? "짧게 · 3막" : count === 5 ? "표준 · 5막" : "길게 · 7막"}</button>)}</div>
        <div className={styles.hiddenFormula}><small>이 장르의 재미 설계 기준</small><strong>{genre.playerFantasy}</strong><p>AI가 {genre.name} 장르의 검증된 플레이 구조를 아이디어에 맞게 적용합니다.</p></div>
        <button className={styles.cta} onClick={() => callBedrock("story")} disabled={!!loading}>{loading === "story" ? "스토리 빌드 중…" : story ? "스토리 다시 빌드" : "스토리 빌드"}</button>
        {loading === "story" && <div className={styles.jobStatus}><b>● 실제 Bedrock 응답 대기 중</b><span>경과 {elapsed}초</span><small>최대 출력 64K · 결과를 받을 때까지 이 페이지를 유지해주세요.</small></div>}
        {status && !story && <p className={styles.notice}>{status}</p>}
      </section>

      <section className={`${styles.panel} ${styles.storyPanel}`}>
        <div className={styles.sectionHead}><span>03</span><div><h2>스토리와 온톨로지를 편집하세요</h2><p>마음에 들 때까지 직접 고친 뒤 Goal을 생성합니다.</p></div></div>
        {!story ? <div className={styles.empty}>장르와 아이디어를 정한 뒤<br /><b>스토리 빌드</b>를 누르세요.</div> : <fieldset className={styles.storyEditor} disabled={!!loading}>
          <input className={styles.titleInput} value={story.title} onChange={(event) => setStory({ ...story, title: event.target.value })} />
          <textarea className={styles.storyField} value={story.logline} onChange={(event) => setStory({ ...story, logline: event.target.value })} />
          <div className={styles.twoFields}><label>플레이어 역할<textarea value={story.playerRole} onChange={(event) => setStory({ ...story, playerRole: event.target.value })} /></label><label>중심 갈등<textarea value={story.centralConflict} onChange={(event) => setStory({ ...story, centralConflict: event.target.value })} /></label></div>
          <label className={styles.fullLabel}>세계<textarea value={story.world} onChange={(event) => setStory({ ...story, world: event.target.value })} /></label>
          <div className={styles.editorHead}><h3 className={styles.subhead}>PLAYABLE STORYBOARD · {story.acts.length}막</h3><button onClick={() => setStory({ ...story, acts: [...story.acts, { title: `${story.acts.length + 1}막`, story: "", playerAction: "", stateChange: "" }] })}>+ 막 추가</button></div>
          <div className={styles.acts}>{story.acts.map((act, index) => <article key={index}>
            <button className={styles.remove} aria-label={`${index + 1}막 삭제`} onClick={() => setStory({ ...story, acts: story.acts.filter((_, i) => i !== index) })}>×</button>
            <input value={act.title} onChange={(event) => setStory({ ...story, acts: story.acts.map((item, i) => i === index ? { ...item, title: event.target.value } : item) })} />
            <textarea value={act.story} onChange={(event) => setStory({ ...story, acts: story.acts.map((item, i) => i === index ? { ...item, story: event.target.value } : item) })} />
            <label>PLAYER ACTION<input value={act.playerAction} onChange={(event) => setStory({ ...story, acts: story.acts.map((item, i) => i === index ? { ...item, playerAction: event.target.value } : item) })} /></label>
            <label>STATE CHANGE<input value={act.stateChange} onChange={(event) => setStory({ ...story, acts: story.acts.map((item, i) => i === index ? { ...item, stateChange: event.target.value } : item) })} /></label>
          </article>)}</div>
          <div className={styles.editorHead}><h3 className={styles.subhead}>CORE LOOP</h3><button onClick={() => setStory({ ...story, coreLoop: [...story.coreLoop, "새 플레이 단계"] })}>+ 단계 추가</button></div>
          <div className={styles.listEditor}>{story.coreLoop.map((item, index) => <div key={index}><input value={item} onChange={(event) => setStory({ ...story, coreLoop: story.coreLoop.map((value, i) => i === index ? event.target.value : value) })} /><button aria-label={`루프 ${index + 1} 삭제`} onClick={() => setStory({ ...story, coreLoop: story.coreLoop.filter((_, i) => i !== index) })}>×</button></div>)}</div>
          <div className={styles.editorHead}><h3 className={styles.subhead}>ONTOLOGY NODES</h3><button onClick={() => setStory({ ...story, nodes: [...story.nodes, { id: `node_${Date.now()}`, kind: "Entity", name: "새 요소", description: "" }] })}>+ 노드 추가</button></div>
          <div className={styles.graphView}>
            <div className={styles.graphMeta}><span>{story.nodes.length} NODES</span><span>{story.edges.length} RELATIONS</span><small>노드를 누르면 편집 위치로 이동합니다.</small></div>
            <svg viewBox="0 0 900 420" role="img" aria-label="게임 온톨로지 관계 그래프">
              <defs><marker id="ontology-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs>
              {story.edges.map((edge, index) => {
                const source = graphPositions[edge.source]; const target = graphPositions[edge.target];
                if (!source || !target) return null;
                const midX = (source.x + target.x) / 2; const midY = (source.y + target.y) / 2;
                return <g key={`${edge.source}-${edge.target}-${index}`}><line x1={source.x} y1={source.y} x2={target.x} y2={target.y} markerEnd="url(#ontology-arrow)" /><text x={midX} y={midY - 6}>{edge.type}</text></g>;
              })}
              {story.nodes.map((node) => {
                const position = graphPositions[node.id];
                return <foreignObject key={node.id} x={position.x - 65} y={position.y - 29} width="130" height="58">
                  <button className={selectedNodeId === node.id ? styles.graphNodeActive : ""} onClick={() => { setSelectedNodeId(node.id); document.getElementById(`ontology-node-${node.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }); }}><small>{node.kind}</small><strong>{node.name}</strong></button>
                </foreignObject>;
              })}
            </svg>
          </div>
          <div className={styles.ontologyEditor}>{story.nodes.map((node, index) => <article key={`${node.id}-${index}`}>
            <span id={`ontology-node-${node.id}`} className={styles.nodeAnchor} />
            <button className={styles.remove} aria-label={`${node.name} 노드 삭제`} onClick={() => setStory({ ...story, nodes: story.nodes.filter((_, i) => i !== index), edges: story.edges.filter((edge) => edge.source !== node.id && edge.target !== node.id) })}>×</button>
            <label>ID<input value={node.id} onChange={(event) => { const nextId = event.target.value; setStory({ ...story, nodes: story.nodes.map((item, i) => i === index ? { ...item, id: nextId } : item), edges: story.edges.map((edge) => ({ ...edge, source: edge.source === node.id ? nextId : edge.source, target: edge.target === node.id ? nextId : edge.target })) }); }} /></label>
            <label>종류<input value={node.kind} onChange={(event) => setStory({ ...story, nodes: story.nodes.map((item, i) => i === index ? { ...item, kind: event.target.value } : item) })} /></label>
            <label>이름<input value={node.name} onChange={(event) => setStory({ ...story, nodes: story.nodes.map((item, i) => i === index ? { ...item, name: event.target.value } : item) })} /></label>
            <label>설명<textarea value={node.description} onChange={(event) => setStory({ ...story, nodes: story.nodes.map((item, i) => i === index ? { ...item, description: event.target.value } : item) })} /></label>
          </article>)}</div>
          <div className={styles.editorHead}><h3 className={styles.subhead}>ONTOLOGY RELATIONS</h3><button disabled={story.nodes.length < 2} onClick={() => setStory({ ...story, edges: [...story.edges, { source: story.nodes[0]?.id ?? "", target: story.nodes[1]?.id ?? "", type: "영향" }] })}>+ 관계 추가</button></div>
          <div className={styles.relationEditor}>{story.edges.map((edge, index) => <div key={index}>
            <select value={edge.source} onChange={(event) => setStory({ ...story, edges: story.edges.map((item, i) => i === index ? { ...item, source: event.target.value } : item) })}>{story.nodes.map((node) => <option key={node.id} value={node.id}>{node.name} ({node.id})</option>)}</select>
            <input aria-label={`관계 ${index + 1} 종류`} value={edge.type} onChange={(event) => setStory({ ...story, edges: story.edges.map((item, i) => i === index ? { ...item, type: event.target.value } : item) })} />
            <select value={edge.target} onChange={(event) => setStory({ ...story, edges: story.edges.map((item, i) => i === index ? { ...item, target: event.target.value } : item) })}>{story.nodes.map((node) => <option key={node.id} value={node.id}>{node.name} ({node.id})</option>)}</select>
            <button aria-label={`관계 ${index + 1} 삭제`} onClick={() => setStory({ ...story, edges: story.edges.filter((_, i) => i !== index) })}>×</button>
          </div>)}</div>
          <button className={styles.cta} onClick={() => callBedrock("concept")} disabled={!!loading}>{loading === "concept" ? "게임 기획안 생성 중…" : concept ? "스토리 검증 · 기획안 다시 만들기" : "스토리 검증 · 게임 기획안 만들기"}</button>
          {loading === "concept" && <div className={styles.jobStatus}><b>● 캐릭터·배경·게임 방식 설계 중</b><span>경과 {elapsed}초</span><small>완료되면 아래 기획안에서 직접 검토하고 수정할 수 있습니다.</small></div>}
          {status && <p className={styles.notice}>{status}</p>}
        </fieldset>}
      </section>
    </div>

    <section className={`${styles.panel} ${styles.conceptSection}`}>
      <div className={styles.sectionHead}><span>04</span><div><h2>게임 기획안을 보고 피드백하세요</h2><p>캐릭터·배경·게임 방식·조작·성장 구조를 확정한 뒤에만 Build Goal로 넘어갑니다.</p></div></div>
      {!concept ? <div className={styles.goalEmpty}>스토리를 검증하면 편집 가능한 게임 기획안과 비주얼 바이블이 생성됩니다.</div> : <>
        <div className={styles.conceptHero}>
          <input value={concept.conceptTitle} disabled={!!loading} onChange={(event) => setConcept({ ...concept, conceptTitle: event.target.value })} />
          <textarea value={concept.experiencePromise} disabled={!!loading} onChange={(event) => setConcept({ ...concept, experiencePromise: event.target.value })} />
        </div>
        <div className={styles.conceptGrid}>
          <article><small>GAMEPLAY</small><label>시점·화면<textarea value={concept.gameplay.perspective} onChange={(event) => setConcept({ ...concept, gameplay: { ...concept.gameplay, perspective: event.target.value } })} /></label><label>한 판의 흐름<textarea value={concept.gameplay.sessionFlow} onChange={(event) => setConcept({ ...concept, gameplay: { ...concept.gameplay, sessionFlow: event.target.value } })} /></label><label>핵심 게임 방식<textarea value={concept.gameplay.coreMechanics.join("\n")} onChange={(event) => setConcept({ ...concept, gameplay: { ...concept.gameplay, coreMechanics: event.target.value.split("\n").filter(Boolean) } })} /></label><label>조작<textarea value={concept.gameplay.controls.join("\n")} onChange={(event) => setConcept({ ...concept, gameplay: { ...concept.gameplay, controls: event.target.value.split("\n").filter(Boolean) } })} /></label></article>
          <article><small>CHARACTERS</small><textarea value={concept.visual.characters.join("\n\n")} onChange={(event) => setConcept({ ...concept, visual: { ...concept.visual, characters: event.target.value.split(/\n\s*\n/).filter(Boolean) } })} /><b>IMAGE MODEL PROMPTS</b><textarea value={concept.visual.characterImagePrompts.join("\n\n")} onChange={(event) => setConcept({ ...concept, visual: { ...concept.visual, characterImagePrompts: event.target.value.split(/\n\s*\n/).filter(Boolean) } })} /></article>
          <article><small>ENVIRONMENTS</small><label>스타일<textarea value={concept.visual.style} onChange={(event) => setConcept({ ...concept, visual: { ...concept.visual, style: event.target.value } })} /></label><label>카메라<textarea value={concept.visual.camera} onChange={(event) => setConcept({ ...concept, visual: { ...concept.visual, camera: event.target.value } })} /></label><textarea value={concept.visual.environments.join("\n\n")} onChange={(event) => setConcept({ ...concept, visual: { ...concept.visual, environments: event.target.value.split(/\n\s*\n/).filter(Boolean) } })} /><b>IMAGE MODEL PROMPTS</b><textarea value={concept.visual.environmentImagePrompts.join("\n\n")} onChange={(event) => setConcept({ ...concept, visual: { ...concept.visual, environmentImagePrompts: event.target.value.split(/\n\s*\n/).filter(Boolean) } })} /></article>
          <article><small>PROGRESSION & FAILURE</small><label>성장<textarea value={concept.gameplay.progression.join("\n")} onChange={(event) => setConcept({ ...concept, gameplay: { ...concept.gameplay, progression: event.target.value.split("\n").filter(Boolean) } })} /></label><label>실패·재도전<textarea value={concept.gameplay.failureAndRecovery.join("\n")} onChange={(event) => setConcept({ ...concept, gameplay: { ...concept.gameplay, failureAndRecovery: event.target.value.split("\n").filter(Boolean) } })} /></label><label>콘텐츠 구성<textarea value={concept.contentPlan.join("\n")} onChange={(event) => setConcept({ ...concept, contentPlan: event.target.value.split("\n").filter(Boolean) })} /></label></article>
        </div>
        <div className={styles.reviewBlock}><div><small>REVIEW QUESTIONS</small><ul>{concept.reviewQuestions.map((question) => <li key={question}>{question}</li>)}</ul></div><label>내 피드백<textarea placeholder="예: 캐릭터는 더 코믹하게, 배경은 오락실 내부로, 전투는 버튼 2개로 단순화해줘." value={feedback} disabled={!!loading} onChange={(event) => setFeedback(event.target.value)} /></label></div>
        <div className={styles.conceptActions}><button disabled={!!loading || !feedback.trim()} onClick={() => callBedrock("concept")}>피드백 반영해 기획안 다시 만들기</button><button className={styles.cta} disabled={!!loading} onClick={() => callBedrock("goals")}>{loading === "goals" ? "Goal 생성 중…" : "이 기획안 확정 · Build Goal 생성"}</button></div>
        {loading === "goals" && <div className={styles.jobStatus}><b>● 확정 기획안으로 Build Goal 생성 중</b><span>경과 {elapsed}초</span><small>기획안·밸런스·이미지 제작·재미 반복 검증 계약을 통합합니다.</small></div>}
        {!loading && status && <p className={styles.notice}>{status}</p>}
      </>}
    </section>

    <section className={`${styles.panel} ${styles.goalSection}`}>
      <div className={styles.sectionHead}><span>05</span><div><h2>LLM 실행용 Build Goals</h2><p>확정된 기획안을 Codex나 Claude가 구현할 수 있는 작업·완료 조건으로 변환합니다.</p></div></div>
      {!goals ? <div className={styles.goalEmpty}>편집한 스토리를 확정하면 구현 Goal이 생성됩니다.</div> : <>
        <div className={`${styles.validationBox} ${goals.validation.verdict === "PASS" ? styles.validationPass : styles.validationRisk}`}>
          <div><small>STORY VALIDATION</small><strong>{goals.validation.score}/100 · {goals.validation.verdict}</strong></div>
          <p>{goals.validation.summary}</p>
          <ul>{goals.validation.risks.map((risk) => <li key={risk}>{risk}</li>)}</ul>
        </div>
        <div className={styles.gameGoal}><small>FINAL GAME GOAL</small><strong>{goals.gameGoal}</strong></div>
        <div className={styles.artBible}>
          <article><small>VISUAL IDENTITY</small><p>{goals.artDirection.visualIdentity}</p><b>CAMERA & COMPOSITION</b><p>{goals.artDirection.cameraAndComposition}</p></article>
          <article><small>CHARACTER DESIGN</small><ul>{goals.artDirection.characterDesign.map((item, index) => <li key={index}>{item}</li>)}</ul></article>
          <article><small>ENVIRONMENT DESIGN</small><ul>{goals.artDirection.environmentDesign.map((item, index) => <li key={index}>{item}</li>)}</ul></article>
          <article><small>ANIMATION & ASSET PIPELINE</small><ul>{[...goals.artDirection.animationPlan, ...goals.artDirection.assetPipeline].map((item, index) => <li key={index}>{item}</li>)}</ul></article>
        </div>
        <div className={styles.productionPlans}>
          <article><small>IMAGE MODEL PRODUCTION</small><p>{goals.imageGenerationPlan.modelWorkflow}</p>
            <div className={styles.imageToolbar}>
              <label>이미지 모델
                <select value={imageModel} onChange={(event) => setImageModel(event.target.value)}>
                  <option value="stable-core">Stable Image Core (빠름·기본)</option>
                  <option value="stable-ultra">Stable Image Ultra (고품질)</option>
                  <option value="sd3.5-large">SD 3.5 Large</option>
                </select>
              </label>
              <span className={styles.imageHint}>Bedrock API key(.env.local)로 브라우저에서 바로 생성됩니다.</span>
            </div>
            <b>CHARACTER PROMPTS</b>
            <ol>{goals.imageGenerationPlan.characterPrompts.map((item, index) => {
              const state = images[`character:${index}`];
              const busy = imageLoading === `character:${index}`;
              return (
                <li key={index}>
                  <p className={styles.promptText}>{item}</p>
                  <button type="button" className={styles.imageButton} disabled={Boolean(imageLoading)} onClick={() => generateImage(item, "character", index)}>{busy ? "생성 중…" : state?.url ? "다시 생성" : "이미지 생성"}</button>
                  {state?.url && <div className={styles.imageResult}><img src={state.url} alt={`character ${index + 1}`} /><a href={state.url} download={`character-${index + 1}.png`}>PNG 다운로드</a></div>}
                  {state?.error && <p className={styles.imageError}>{state.error}</p>}
                </li>
              );
            })}</ol>
            <b>ENVIRONMENT PROMPTS</b>
            <ol>{goals.imageGenerationPlan.environmentPrompts.map((item, index) => {
              const state = images[`environment:${index}`];
              const busy = imageLoading === `environment:${index}`;
              return (
                <li key={index}>
                  <p className={styles.promptText}>{item}</p>
                  <button type="button" className={styles.imageButton} disabled={Boolean(imageLoading)} onClick={() => generateImage(item, "environment", index)}>{busy ? "생성 중…" : state?.url ? "다시 생성" : "이미지 생성"}</button>
                  {state?.url && <div className={styles.imageResult}><img src={state.url} alt={`environment ${index + 1}`} /><a href={state.url} download={`environment-${index + 1}.png`}>PNG 다운로드</a></div>}
                  {state?.error && <p className={styles.imageError}>{state.error}</p>}
                </li>
              );
            })}</ol>
          </article>
          <article><small>BALANCE VALIDATION</small>{Object.entries(goals.balancePlan).map(([section, items]) => <div key={section}><b>{section.replace(/[A-Z]/g, (letter) => ` ${letter}`).toUpperCase()}</b><ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul></div>)}</article>
        </div>
        <div className={styles.funIteration}>
          <small>PLAY IT UNTIL IT IS WORTH PLAYING</small>
          <h3>최소 3회: PLAY → OBSERVE → LOG → CHANGE → TEST → REPLAY</h3>
          <div>{Object.entries(goals.funIterationPlan).map(([section, items]) => <article key={section}><b>{section.replace(/[A-Z]/g, (letter) => ` ${letter}`).toUpperCase()}</b><ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul></article>)}</div>
        </div>
        <div className={styles.completionContract}>
          <small>NON-NEGOTIABLE COMPLETION CONTRACT</small>
          <h3>구현했다고 쓰기 전에 실제로 증명해야 합니다.</h3>
          <div>{Object.entries(goals.completionContract).map(([section, items]) => <article key={section}><b>{section.replace(/[A-Z]/g, (letter) => ` ${letter}`).toUpperCase()}</b><ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul></article>)}</div>
        </div>
        <div className={styles.goalCards}>{goals.goals.map((goal, index) => <article key={`${goal.title}-${index}`}><small>{goal.category}</small><h3>{goal.title}</h3><p>{goal.objective}</p><b>TASKS</b><ul>{goal.tasks.map((item) => <li key={item}>{item}</li>)}</ul><b>DONE WHEN</b><ul>{goal.acceptance.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <details className={styles.prompt}><summary>코딩 에이전트 실행 프롬프트</summary><pre>{goals.implementationPrompt}</pre></details>
      </>}
      <div className={styles.bottomActions}>
        <button onClick={save}>프로젝트 저장</button>
        <button onClick={() => download(`${projectName.trim() || "game"}-project.json`, { genre, idea, actCount, story, concept, feedback, goals })}>현재 프로젝트 JSON 내보내기</button>
        <button disabled={!goals} title={!goals ? "Build Goal 생성이 완료된 뒤 사용할 수 있습니다." : undefined} onClick={() => goals && downloadText(`${story?.title || "game"}-build-spec.md`, goals.implementationPrompt)}>
          {goals ? "상세 Build Spec.md 다운로드" : "Build Goal 생성 후 Spec 다운로드 가능"}
        </button>
        <button className={styles.cta} disabled={!goals} title={!goals ? "Build Goal 생성이 완료된 뒤 사용할 수 있습니다." : undefined} onClick={() => goals && navigator.clipboard.writeText(goals.implementationPrompt)}>
          전체 실행 프롬프트 복사
        </button>
      </div>
      {status && <p className={styles.notice}>{status}</p>}
    </section>
  </main>;
}
