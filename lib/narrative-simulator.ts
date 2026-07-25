import type {
  NarrativeChoice,
  NarrativeCondition,
  NarrativeEffect,
  NarrativeGraph,
  NarrativeValue,
} from "./narrative-graph";

export type PlaytestStep = {
  beatId: string;
  choiceId?: string;
  variablesBefore: Record<string, NarrativeValue>;
  variablesAfter: Record<string, NarrativeValue>;
};

export type NarrativePlaytestState = {
  currentBeatId: string;
  variables: Record<string, NarrativeValue>;
  history: PlaytestStep[];
  ended: boolean;
  error?: string;
};

function numeric(value: NarrativeValue | undefined): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export function conditionPasses(
  condition: NarrativeCondition,
  variables: Record<string, NarrativeValue>,
): boolean {
  const current = variables[condition.variable];
  if (condition.operator === "equals") return current === condition.value;
  if (condition.operator === "not_equals") return current !== condition.value;
  if (condition.operator === "gte") return numeric(current) >= numeric(condition.value);
  return numeric(current) <= numeric(condition.value);
}

export function availableNarrativeChoices(
  graph: NarrativeGraph,
  state: NarrativePlaytestState,
): NarrativeChoice[] {
  const beat = graph.beats.find((item) => item.id === state.currentBeatId);
  if (!beat || beat.kind === "Ending") return [];
  return beat.choices.filter((choice) =>
    choice.conditions.every((condition) => conditionPasses(condition, state.variables)),
  );
}

function applyEffect(
  variables: Record<string, NarrativeValue>,
  effect: NarrativeEffect,
): Record<string, NarrativeValue> {
  if (effect.operation === "set") return { ...variables, [effect.variable]: effect.value };
  const delta = numeric(effect.value);
  return {
    ...variables,
    [effect.variable]:
      numeric(variables[effect.variable]) + (effect.operation === "increment" ? delta : -delta),
  };
}

export function startNarrativePlaytest(
  graph: NarrativeGraph,
  initialVariables: Record<string, NarrativeValue> = {},
): NarrativePlaytestState {
  const entry = graph.beats.find((beat) => beat.id === graph.entryBeatId);
  if (!entry) {
    return {
      currentBeatId: "",
      variables: { ...initialVariables },
      history: [],
      ended: true,
      error: "시작 장면을 찾을 수 없습니다.",
    };
  }
  return {
    currentBeatId: entry.id,
    variables: { ...initialVariables },
    history: [],
    ended: entry.kind === "Ending",
  };
}

export function chooseNarrativeBranch(
  graph: NarrativeGraph,
  state: NarrativePlaytestState,
  choiceId: string,
): NarrativePlaytestState {
  if (state.ended) return { ...state, error: "이미 Ending에 도착했습니다." };
  if (state.history.length >= 200) {
    return { ...state, ended: true, error: "200단계를 초과해 순환 가능성이 있으므로 플레이테스트를 중단했습니다." };
  }
  const choice = availableNarrativeChoices(graph, state)
    .find((item) => item.id === choiceId);
  if (!choice) return { ...state, error: "현재 조건에서 선택할 수 없는 분기입니다." };
  const target = graph.beats.find((beat) => beat.id === choice.targetId);
  if (!target) return { ...state, error: "선택의 도착 장면이 없습니다." };
  const before = { ...state.variables };
  const after = choice.effects.reduce(applyEffect, before);
  return {
    currentBeatId: target.id,
    variables: after,
    history: [...state.history, {
      beatId: state.currentBeatId,
      choiceId: choice.id,
      variablesBefore: before,
      variablesAfter: after,
    }],
    ended: target.kind === "Ending",
  };
}

export function playtestCoverage(graph: NarrativeGraph, state: NarrativePlaytestState) {
  const visitedBeatIds = new Set([
    ...state.history.map((step) => step.beatId),
    ...(state.currentBeatId ? [state.currentBeatId] : []),
  ]);
  const visitedChoiceIds = new Set(state.history.flatMap((step) => step.choiceId ? [step.choiceId] : []));
  const totalChoices = graph.beats.reduce((sum, beat) => sum + beat.choices.length, 0);
  return {
    visitedBeats: visitedBeatIds.size,
    totalBeats: graph.beats.length,
    visitedChoices: visitedChoiceIds.size,
    totalChoices,
    beatPercent: graph.beats.length ? Math.round((visitedBeatIds.size / graph.beats.length) * 100) : 0,
    choicePercent: totalChoices ? Math.round((visitedChoiceIds.size / totalChoices) * 100) : 0,
  };
}
