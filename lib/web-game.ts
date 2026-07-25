export type TileKind = "moss" | "meadow" | "water" | "ruins" | "ember";
export type Tile = { kind: TileKind; resource?: "memory" | "herb"; blocked: boolean };
export type Actor = { id: string; name: string; x: number; y: number; hp: number; energy: number; color: string; intent: string };
export type WorldAction = { type: "move"; dx: number; dy: number } | { type: "interact" } | { type: "rest" };
export type GameState = { seed: number; tick: number; tiles: Tile[][]; player: Actor; agents: Actor[]; monsters: Actor[]; collected: string[]; memory: number; herbs: number; log: string[] };

function random(seed: number) {
  let value = seed >>> 0;
  return () => { value += 0x6d2b79f5; let t = value; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

export function createWorld(seed: number): GameState {
  const rand = random(seed);
  const tiles = Array.from({ length: 32 }, (_, y) => Array.from({ length: 32 }, (_, x): Tile => {
    const wave = Math.sin(x * .43) + Math.cos(y * .38) + (rand() - .5) * 1.8;
    const kind: TileKind = wave < -1.05 ? "water" : wave > 1.35 ? "ruins" : rand() > .93 ? "ember" : rand() > .48 ? "meadow" : "moss";
    const resource = kind !== "water" && rand() > .9 ? (rand() > .55 ? "memory" : "herb") : undefined;
    return { kind, resource, blocked: kind === "water" };
  }));
  for (let y = 14; y <= 18; y += 1) for (let x = 14; x <= 18; x += 1) tiles[y][x].blocked = false;
  return {
    seed, tick: 0, tiles,
    player: { id: "player", name: "기억을 걷는 자", x: 16, y: 16, hp: 12, energy: 10, color: "#f0c85c", intent: "탐험" },
    agents: [
      { id: "ai-maru", name: "마루", x: 13, y: 15, hp: 10, energy: 10, color: "#67d6a2", intent: "약초를 찾는 중" },
      { id: "ai-noa", name: "노아", x: 19, y: 17, hp: 10, energy: 10, color: "#7fc3e5", intent: "폐허를 기록하는 중" },
      { id: "ai-ori", name: "오리", x: 17, y: 20, hp: 10, energy: 10, color: "#c797df", intent: "당신을 찾는 중" },
    ],
    monsters: [
      { id: "mist-1", name: "안개짐승", x: 11, y: 13, hp: 4, energy: 10, color: "#b75a48", intent: "배회" },
      { id: "mist-2", name: "그림자", x: 22, y: 20, hp: 5, energy: 10, color: "#b75a48", intent: "배회" },
    ],
    collected: [], memory: 0, herbs: 0, log: ["세계가 깨어났습니다.", "세 명의 AI 주민이 같은 규칙으로 움직입니다."],
  };
}

export function describeTile(tile?: Tile) {
  if (!tile) return "세계의 가장자리";
  return ({ moss: "안개 이끼숲", meadow: "바람 초원", water: "고요한 수로", ruins: "잊힌 폐허", ember: "불씨 터" } as const)[tile.kind];
}
function appendLog(state: GameState, message: string): GameState { return { ...state, log: [...state.log.slice(-24), message] }; }

export function runAction(state: GameState, actorId: string, action: WorldAction): GameState {
  const isPlayer = actorId === "player";
  const actors = isPlayer ? [state.player] : state.agents;
  const index = actors.findIndex((actor) => actor.id === actorId);
  if (index < 0) return state;
  const actor = actors[index];
  let nextActor = { ...actor };
  let next = state;
  if (action.type === "rest") nextActor.energy = Math.min(10, nextActor.energy + 3);
  else if (action.type === "move") {
    if (actor.energy <= 0) return isPlayer ? appendLog(state, "기력이 없습니다. E로 잠시 쉬세요.") : state;
    const x = Math.max(0, Math.min(31, actor.x + Math.sign(action.dx)));
    const y = Math.max(0, Math.min(31, actor.y + Math.sign(action.dy)));
    if (state.tiles[y][x].blocked) return isPlayer ? appendLog(state, "깊은 물이 길을 막습니다.") : state;
    nextActor = { ...nextActor, x, y, energy: Math.max(0, actor.energy - 1) };
    const monsterIndex = state.monsters.findIndex((monster) => monster.hp > 0 && monster.x === x && monster.y === y);
    if (monsterIndex >= 0) {
      const monsters = [...state.monsters];
      const monster = { ...monsters[monsterIndex], hp: monsters[monsterIndex].hp - 2 };
      monsters[monsterIndex] = monster; nextActor.hp = Math.max(1, nextActor.hp - 1); next = { ...next, monsters };
      if (isPlayer) next = appendLog(next, monster.hp <= 0 ? `${monster.name}을 물리쳤습니다.` : `${monster.name}과 맞붙었습니다.`);
    }
  } else {
    const key = `${actor.x}:${actor.y}`;
    const tile = state.tiles[actor.y][actor.x];
    if (actor.energy <= 0) nextActor.energy = Math.min(10, nextActor.energy + 3);
    else if (tile.resource && !state.collected.includes(key)) {
      next = { ...next, collected: [...state.collected, key], memory: state.memory + (isPlayer && tile.resource === "memory" ? 1 : 0), herbs: state.herbs + (isPlayer && tile.resource === "herb" ? 1 : 0) };
      if (isPlayer) next = appendLog(next, tile.resource === "memory" ? "빛나는 기억 파편을 회수했습니다." : "이끼 약초를 채집했습니다.");
    } else {
      const near = state.agents.find((agent) => agent.id !== actorId && Math.abs(agent.x - actor.x) + Math.abs(agent.y - actor.y) <= 1);
      if (isPlayer && near) next = appendLog(next, `${near.name}: “이 세계에서는 우리 모두 같은 규칙을 따라요.”`);
      else if (isPlayer) next = appendLog(next, `${describeTile(tile)}의 기척을 살폈습니다.`);
    }
  }
  if (isPlayer) return { ...next, player: nextActor, tick: state.tick + 1 };
  const agents = [...next.agents]; agents[index] = nextActor; return { ...next, agents };
}

function agentAction(state: GameState, actor: Actor): WorldAction {
  if (actor.energy < 2) return { type: "rest" };
  const tile = state.tiles[actor.y][actor.x];
  if (tile.resource && !state.collected.includes(`${actor.x}:${actor.y}`)) return { type: "interact" };
  if (actor.id === "ai-ori" && Math.abs(state.player.x - actor.x) + Math.abs(state.player.y - actor.y) > 2) {
    const dx = Math.abs(state.player.x - actor.x) > Math.abs(state.player.y - actor.y) ? Math.sign(state.player.x - actor.x) : 0;
    return { type: "move", dx, dy: dx === 0 ? Math.sign(state.player.y - actor.y) : 0 };
  }
  return ([{ type: "move", dx: 1, dy: 0 }, { type: "move", dx: 0, dy: 1 }, { type: "move", dx: -1, dy: 0 }, { type: "move", dx: 0, dy: -1 }] as WorldAction[])[(state.tick + actor.id.charCodeAt(3)) % 4];
}
export function stepAgents(state: GameState): GameState {
  let next = { ...state, tick: state.tick + 1 };
  for (const agent of state.agents) next = runAction(next, agent.id, agentAction(next, agent));
  return next;
}
