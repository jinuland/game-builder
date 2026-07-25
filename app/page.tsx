"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createWorld, describeTile, runAction, stepAgents, type GameState, type WorldAction } from "@/lib/web-game";

const SAVE_KEY = "worldloom:save:v1";

function Stat({ label, value, max }: { label: string; value: number; max: number }) {
  return <div className="stat"><span>{label}</span><div className="meter"><i style={{ width: `${Math.max(0, Math.min(100, value / max * 100))}%` }} /></div><strong>{value}</strong></div>;
}

function WorldCanvas({ game, dispatch }: { game: GameState; dispatch: (action: WorldAction) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    context.imageSmoothingEnabled = false;
    const size = 42;
    const visibleX = Math.ceil(width / size) + 2;
    const visibleY = Math.ceil(height / size) + 2;
    const startX = Math.floor(game.player.x - visibleX / 2);
    const startY = Math.floor(game.player.y - visibleY / 2);
    const palette = { moss: ["#162f2a", "#1c3b32"], meadow: ["#244637", "#2b503e"], water: ["#15384c", "#19445a"], ruins: ["#3b3a35", "#45443c"], ember: ["#4b3028", "#57352a"] } as const;
    context.fillStyle = "#081411";
    context.fillRect(0, 0, width, height);
    for (let sy = 0; sy < visibleY; sy += 1) for (let sx = 0; sx < visibleX; sx += 1) {
      const x = startX + sx;
      const y = startY + sy;
      const tile = game.tiles[y]?.[x];
      if (!tile) continue;
      const px = sx * size;
      const py = sy * size;
      const colors = palette[tile.kind];
      context.fillStyle = colors[(x + y) & 1];
      context.fillRect(px, py, size + 1, size + 1);
      context.strokeStyle = "rgba(255,255,255,.035)";
      context.strokeRect(px + .5, py + .5, size, size);
      if (tile.kind === "water") {
        context.strokeStyle = "rgba(101,208,225,.23)";
        context.beginPath(); context.moveTo(px + 9, py + 19); context.quadraticCurveTo(px + 21, py + 14, px + 34, py + 19); context.stroke();
      }
      if (tile.resource && !game.collected.includes(`${x}:${y}`)) {
        context.fillStyle = tile.resource === "memory" ? "#e8d693" : "#67d6a2";
        context.beginPath(); context.arc(px + 21, py + 21, tile.resource === "memory" ? 5 : 4, 0, Math.PI * 2); context.fill();
        context.shadowColor = context.fillStyle; context.shadowBlur = 12; context.fill(); context.shadowBlur = 0;
      }
    }
    const drawActor = (x: number, y: number, color: string, label: string, human = false) => {
      const px = (x - startX) * size + size / 2;
      const py = (y - startY) * size + size / 2;
      context.fillStyle = "rgba(3,10,8,.55)"; context.beginPath(); context.ellipse(px, py + 10, 13, 6, 0, 0, Math.PI * 2); context.fill();
      context.fillStyle = color; context.beginPath();
      if (human) { context.moveTo(px, py - 14); context.lineTo(px + 11, py + 10); context.lineTo(px, py + 16); context.lineTo(px - 11, py + 10); }
      else context.roundRect(px - 10, py - 11, 20, 24, 6);
      context.closePath(); context.fill();
      context.font = "600 10px ui-monospace, monospace"; context.textAlign = "center"; context.fillStyle = "rgba(238,247,239,.86)"; context.fillText(label, px, py - 20);
    };
    game.agents.forEach((agent) => drawActor(agent.x, agent.y, agent.color, agent.name));
    game.monsters.forEach((monster) => { if (monster.hp > 0) drawActor(monster.x, monster.y, "#b75a48", monster.name); });
    drawActor(game.player.x, game.player.y, "#f0c85c", game.player.name, true);
    const vignette = context.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * .65);
    vignette.addColorStop(0, "transparent"); vignette.addColorStop(1, "rgba(2,8,7,.72)");
    context.fillStyle = vignette; context.fillRect(0, 0, width, height);
  }, [game]);
  return <canvas ref={canvasRef} className="world" aria-label="플레이 가능한 세계 지도" tabIndex={0} onClick={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = Math.floor((event.clientX - rect.left - rect.width / 2) / 42);
    const dy = Math.floor((event.clientY - rect.top - rect.height / 2) / 42);
    dispatch(Math.abs(dx) > Math.abs(dy) ? { type: "move", dx: Math.sign(dx), dy: 0 } : { type: "move", dx: 0, dy: Math.sign(dy) });
  }} />;
}

export default function Home() {
  const [game, setGame] = useState<GameState>(() => createWorld(4931));
  const [started, setStarted] = useState(false);
  const [panel, setPanel] = useState<"journal" | "people" | "protocol">("journal");
  useEffect(() => {
    const saved = window.localStorage.getItem(SAVE_KEY);
    if (!saved) return;
    try { setGame(JSON.parse(saved) as GameState); } catch { window.localStorage.removeItem(SAVE_KEY); }
  }, []);
  useEffect(() => {
    if (!started) return;
    const id = window.setInterval(() => setGame((current) => stepAgents(current)), 900);
    return () => window.clearInterval(id);
  }, [started]);
  useEffect(() => { if (started) window.localStorage.setItem(SAVE_KEY, JSON.stringify(game)); }, [game, started]);
  const dispatch = useCallback((action: WorldAction) => setGame((current) => runAction(current, "player", action)), []);
  useEffect(() => {
    if (!started) return;
    const onKey = (event: KeyboardEvent) => {
      const actions: Record<string, WorldAction> = {
        ArrowUp: { type: "move", dx: 0, dy: -1 }, w: { type: "move", dx: 0, dy: -1 },
        ArrowDown: { type: "move", dx: 0, dy: 1 }, s: { type: "move", dx: 0, dy: 1 },
        ArrowLeft: { type: "move", dx: -1, dy: 0 }, a: { type: "move", dx: -1, dy: 0 },
        ArrowRight: { type: "move", dx: 1, dy: 0 }, d: { type: "move", dx: 1, dy: 0 },
        e: { type: "interact" }, " ": { type: "interact" },
      };
      const action = actions[event.key];
      if (action) { event.preventDefault(); dispatch(action); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dispatch, started]);

  if (!started) return <main className="landing">
    <nav><span className="brandMark">W</span><b>WORLDLOOM</b><small>WEB WORLD WORKSHOP</small></nav>
    <section className="hero">
      <p className="eyebrow">A WORLD WHERE EVERY MIND PLAYS BY THE SAME RULES</p>
      <h1>세계는 기다리지 않는다.<br /><em>당신이 들어오면, 반응한다.</em></h1>
      <p className="lede">설치도 엔진도 없습니다. 사람과 AI 주민이 같은 행동 프로토콜로 살아가는 브라우저 세계를 지금 시작하세요.</p>
      <div className="heroActions"><button className="primary" onClick={() => setStarted(true)}>세계에 입장하기 <span>→</span></button><button onClick={() => { window.localStorage.removeItem(SAVE_KEY); setGame(createWorld(Date.now())); setStarted(true); }}>새 시드로 시작</button></div>
      <div className="featureStrip"><span><i>01</i> BROWSER NATIVE</span><span><i>02</i> SHARED ACTIONS</span><span><i>03</i> LIVING AGENTS</span><span><i>04</i> LOCAL SAVE</span></div>
    </section>
    <aside className="worldPreview"><div className="orbit orbitOne" /><div className="orbit orbitTwo" /><div className="previewCore"><span>49,31</span><b>안개 정원</b><small>WORLD SEED ONLINE</small></div><div className="signal signalOne">AI 주민 3</div><div className="signal signalTwo">기억 파편 12</div><div className="signal signalThree">미확인 생명체</div></aside>
    <footer>Original web game prototype · inspired by open-world agent parity</footer>
  </main>;

  const currentTile = game.tiles[game.player.y]?.[game.player.x];
  return <main className="gameShell">
    <header className="topbar"><div className="wordmark"><span className="brandMark">W</span><b>WORLDLOOM</b></div><div className="location"><small>현재 구역</small><strong>{describeTile(currentTile)}</strong><code>{game.player.x.toString().padStart(2, "0")} : {game.player.y.toString().padStart(2, "0")}</code></div><div className="online"><i /> WORLD TICK {game.tick}</div><button className="quiet" onClick={() => setStarted(false)}>나가기</button></header>
    <section className="playArea"><WorldCanvas game={game} dispatch={dispatch} /><div className="hud">
      <div className="playerCard"><div className="avatar">旅</div><div><small>WANDERER</small><strong>{game.player.name}</strong></div><Stat label="HP" value={game.player.hp} max={12} /><Stat label="기력" value={game.player.energy} max={10} /></div>
      <div className="objective"><small>ACTIVE THREAD</small><strong>잃어버린 기억의 조각</strong><p>안개 정원을 탐색해 기억 파편을 모으세요.</p><div className="questProgress"><i style={{ width: `${Math.min(100, game.memory / 3 * 100)}%` }} /></div><span>{Math.min(game.memory, 3)} / 3</span></div>
      <div className="controls"><span><kbd>WASD</kbd> 이동</span><span><kbd>E</kbd> 상호작용</span><span><kbd>CLICK</kbd> 이동</span></div>
    </div></section>
    <aside className="sidePanel"><div className="tabs">{(["journal", "people", "protocol"] as const).map((item) => <button key={item} className={panel === item ? "active" : ""} onClick={() => setPanel(item)}>{item === "journal" ? "기록" : item === "people" ? "주민" : "규칙"}</button>)}</div>
      {panel === "journal" && <div className="log"><h2>세계 기록</h2>{game.log.slice(-8).reverse().map((entry, index) => <p key={`${entry}-${index}`}><time>{String(game.tick - index).padStart(3, "0")}</time>{entry}</p>)}</div>}
      {panel === "people" && <div className="people"><h2>같은 세계의 주민</h2>{game.agents.map((agent) => <article key={agent.id}><i style={{ background: agent.color }} /><div><strong>{agent.name}</strong><small>{agent.intent}</small></div><span>{Math.abs(agent.x - game.player.x) + Math.abs(agent.y - game.player.y)}m</span></article>)}</div>}
      {panel === "protocol" && <div className="protocol"><h2>공통 행동 규칙</h2><p>플레이어와 AI 주민은 아래와 같은 명령만 사용합니다. 숨겨진 관리자 행동은 없습니다.</p><code>move(dx, dy)</code><code>interact()</code><code>rest()</code><small>각 행동은 동일한 충돌·거리·비용 검사를 거쳐 세계 상태를 바꿉니다.</small></div>}
      <div className="inventory"><h3>소지품</h3><span>◇ 기억 파편 <b>{game.memory}</b></span><span>✦ 이끼 약초 <b>{game.herbs}</b></span></div>
    </aside>
    <div className="mobileActions"><button onClick={() => dispatch({ type: "move", dx: 0, dy: -1 })}>↑</button><button onClick={() => dispatch({ type: "move", dx: -1, dy: 0 })}>←</button><button className="interact" onClick={() => dispatch({ type: "interact" })}>E</button><button onClick={() => dispatch({ type: "move", dx: 1, dy: 0 })}>→</button><button onClick={() => dispatch({ type: "move", dx: 0, dy: 1 })}>↓</button></div>
  </main>;
}
