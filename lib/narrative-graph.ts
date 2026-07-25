export const narrativeSchema = "game-forge/narrative/v1" as const;

export type NarrativeValue = string | number | boolean;
export type NarrativeBeatKind = "StoryBeat" | "Ending";
export type ConditionOperator = "equals" | "not_equals" | "gte" | "lte";
export type EffectOperation = "set" | "increment" | "decrement";

export type NarrativeCondition = {
  variable: string;
  operator: ConditionOperator;
  value: NarrativeValue;
};

export type NarrativeEffect = {
  variable: string;
  operation: EffectOperation;
  value: NarrativeValue;
};

export type NarrativeChoice = {
  id: string;
  label: string;
  targetId: string;
  conditions: NarrativeCondition[];
  effects: NarrativeEffect[];
};

export type NarrativeBeat = {
  id: string;
  kind: NarrativeBeatKind;
  act: string;
  title: string;
  body: string;
  tone: string;
  questId?: string;
  choices: NarrativeChoice[];
};

export type NarrativeQuest = {
  id: string;
  title: string;
  description: string;
};

export type NarrativeGraph = {
  schema: typeof narrativeSchema;
  entryBeatId: string;
  beats: NarrativeBeat[];
  quests: NarrativeQuest[];
};

export type NarrativeIssueCode =
  | "MISSING_ENTRY"
  | "DANGLING_CHOICE"
  | "UNREACHABLE_BEAT"
  | "FAKE_BRANCH"
  | "UNBOUNDED_CYCLE"
  | "EMPTY_BRANCH"
  | "CONFLICTING_EFFECT"
  | "ENDING_HAS_CHOICES";

export type NarrativeIssue = {
  code: NarrativeIssueCode;
  severity: "error" | "warning";
  message: string;
  beatId?: string;
  choiceId?: string;
};

function text(value: unknown, fallback = "", max = 500): string {
  return String(value ?? fallback).trim().slice(0, max);
}

function value(value: unknown): NarrativeValue {
  if (typeof value === "boolean" || typeof value === "number") return value;
  return text(value, "", 120);
}

function normalizeChoice(candidate: unknown, beatId: string, index: number): NarrativeChoice | null {
  if (!candidate || typeof candidate !== "object") return null;
  const raw = candidate as Record<string, unknown>;
  const label = text(raw.label, "", 120);
  const targetId = text(raw.targetId, "", 100);
  if (!label && !targetId) return null;
  const conditions = (Array.isArray(raw.conditions) ? raw.conditions : []).flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const condition = item as Record<string, unknown>;
    const variable = text(condition.variable, "", 80);
    const operator = ["equals", "not_equals", "gte", "lte"].includes(String(condition.operator))
      ? condition.operator as ConditionOperator
      : "equals";
    return variable ? [{ variable, operator, value: value(condition.value) }] : [];
  }).slice(0, 8);
  const effects = (Array.isArray(raw.effects) ? raw.effects : []).flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const effect = item as Record<string, unknown>;
    const variable = text(effect.variable, "", 80);
    const operation = ["set", "increment", "decrement"].includes(String(effect.operation))
      ? effect.operation as EffectOperation
      : "set";
    return variable ? [{ variable, operation, value: value(effect.value) }] : [];
  }).slice(0, 8);
  return {
    id: text(raw.id, `${beatId}-choice-${index + 1}`, 100),
    label: label || "이 선택을 한다",
    targetId,
    conditions,
    effects,
  };
}

export function normalizeNarrativeBeats(input: unknown): NarrativeBeat[] {
  if (!Array.isArray(input)) return [];
  return input.flatMap((candidate, index) => {
    if (!candidate || typeof candidate !== "object") return [];
    const raw = candidate as Record<string, unknown>;
    const title = text(raw.title, "", 120);
    if (!title) return [];
    const id = text(raw.id, `beat-${index + 1}`, 100);
    const kind: NarrativeBeatKind = raw.kind === "Ending" ? "Ending" : "StoryBeat";
    return [{
      id,
      kind,
      act: text(raw.act, `ACT ${index + 1}`, 40),
      title,
      body: text(raw.body ?? raw.summary, "이 장면에서 벌어지는 사건을 작성하세요.", 2_000),
      tone: text(raw.tone ?? raw.consequence, "변화", 120),
      ...(text(raw.questId, "", 100) ? { questId: text(raw.questId, "", 100) } : {}),
      choices: (Array.isArray(raw.choices) ? raw.choices : [])
        .map((choice, choiceIndex) => normalizeChoice(choice, id, choiceIndex))
        .filter((choice): choice is NarrativeChoice => Boolean(choice)),
    }];
  }).slice(0, 128);
}

export function narrativeFromBeats(
  beats: NarrativeBeat[],
  entryBeatId = beats[0]?.id ?? "",
  quests: NarrativeQuest[] = [],
): NarrativeGraph {
  return { schema: narrativeSchema, entryBeatId, beats, quests };
}

export function mergeProposedStoryBeats(
  current: NarrativeBeat[],
  proposed: Array<{
    act: string;
    title: string;
    summary: string;
    playerAction: string;
    consequence: string;
  }>,
  idPrefix: string,
): NarrativeBeat[] {
  if (proposed.length === 0) return current.map((beat) => ({
    ...beat,
    choices: beat.choices.map((choice) => ({
      ...choice,
      conditions: choice.conditions.map((condition) => ({ ...condition })),
      effects: choice.effects.map((effect) => ({ ...effect })),
    })),
  }));
  const beats: NarrativeBeat[] = proposed.map((beat, index) => ({
    id: `${idPrefix}-${index + 1}`,
    kind: index === proposed.length - 1 ? "Ending" : "StoryBeat",
    act: beat.act,
    title: beat.title,
    body: beat.summary,
    tone: beat.consequence || "변화",
    choices: [],
  }));
  beats.slice(0, -1).forEach((beat, index) => {
    beat.choices = [{
      id: `${beat.id}-continue`,
      label: proposed[index]?.playerAction || "다음 장면으로",
      targetId: beats[index + 1].id,
      conditions: [],
      effects: [],
    }];
  });
  return beats;
}

function reachableBeatIds(graph: NarrativeGraph): Set<string> {
  const byId = new Map(graph.beats.map((beat) => [beat.id, beat]));
  const visited = new Set<string>();
  const queue = graph.entryBeatId ? [graph.entryBeatId] : [];
  while (queue.length) {
    const id = queue.shift()!;
    if (visited.has(id) || !byId.has(id)) continue;
    visited.add(id);
    for (const choice of byId.get(id)!.choices) queue.push(choice.targetId);
  }
  return visited;
}

function cycleIssues(graph: NarrativeGraph): NarrativeIssue[] {
  const byId = new Map(graph.beats.map((beat) => [beat.id, beat]));
  const visited = new Set<string>();
  const active = new Set<string>();
  const issues: NarrativeIssue[] = [];
  function walk(id: string) {
    if (active.has(id)) {
      issues.push({
        code: "UNBOUNDED_CYCLE",
        severity: "warning",
        beatId: id,
        message: `“${byId.get(id)?.title ?? id}”로 되돌아오는 순환이 있습니다. 종료 조건을 확인하세요.`,
      });
      return;
    }
    if (visited.has(id)) return;
    visited.add(id);
    active.add(id);
    for (const choice of byId.get(id)?.choices ?? []) {
      if (byId.has(choice.targetId)) walk(choice.targetId);
    }
    active.delete(id);
  }
  if (graph.entryBeatId) walk(graph.entryBeatId);
  return issues;
}

export function validateNarrativeGraph(graph: NarrativeGraph): NarrativeIssue[] {
  const issues: NarrativeIssue[] = [];
  const byId = new Map(graph.beats.map((beat) => [beat.id, beat]));
  if (!graph.entryBeatId || !byId.has(graph.entryBeatId)) {
    issues.push({
      code: "MISSING_ENTRY",
      severity: "error",
      message: "시작 StoryBeat가 없거나 삭제되었습니다.",
    });
  }
  for (const beat of graph.beats) {
    if (beat.kind === "Ending" && beat.choices.length) {
      issues.push({
        code: "ENDING_HAS_CHOICES",
        severity: "error",
        beatId: beat.id,
        message: `Ending “${beat.title}”에는 다음 선택을 둘 수 없습니다.`,
      });
    }
    if (beat.kind !== "Ending" && beat.choices.length === 0) {
      issues.push({
        code: "EMPTY_BRANCH",
        severity: "warning",
        beatId: beat.id,
        message: `“${beat.title}”에서 이어지는 선택이나 Ending이 없습니다.`,
      });
    }
    const targetCounts = new Map<string, number>();
    for (const choice of beat.choices) {
      if (!choice.targetId || !byId.has(choice.targetId)) {
        issues.push({
          code: "DANGLING_CHOICE",
          severity: "error",
          beatId: beat.id,
          choiceId: choice.id,
          message: `“${choice.label}”의 도착 장면이 없습니다.`,
        });
      }
      targetCounts.set(choice.targetId, (targetCounts.get(choice.targetId) ?? 0) + 1);
      const setValues = new Map<string, NarrativeValue>();
      for (const effect of choice.effects.filter((item) => item.operation === "set")) {
        if (setValues.has(effect.variable) && setValues.get(effect.variable) !== effect.value) {
          issues.push({
            code: "CONFLICTING_EFFECT",
            severity: "error",
            beatId: beat.id,
            choiceId: choice.id,
            message: `“${choice.label}”가 ${effect.variable} 값을 서로 다르게 설정합니다.`,
          });
        }
        setValues.set(effect.variable, effect.value);
      }
    }
    for (const [targetId, count] of targetCounts) {
      if (targetId && count > 1) {
        issues.push({
          code: "FAKE_BRANCH",
          severity: "warning",
          beatId: beat.id,
          message: `“${beat.title}”의 ${count}개 선택이 같은 장면으로 합쳐집니다. 결과 차이를 확인하세요.`,
        });
      }
    }
  }
  const reachable = reachableBeatIds(graph);
  for (const beat of graph.beats) {
    if (!reachable.has(beat.id)) {
      issues.push({
        code: "UNREACHABLE_BEAT",
        severity: "error",
        beatId: beat.id,
        message: `“${beat.title}”에 도달할 수 있는 경로가 없습니다.`,
      });
    }
  }
  return [...issues, ...cycleIssues(graph)];
}

export function compareNarrativeBranches(
  graph: NarrativeGraph,
  leftChoiceId: string,
  rightChoiceId: string,
) {
  const choices = graph.beats.flatMap((beat) => beat.choices);
  const left = choices.find((choice) => choice.id === leftChoiceId);
  const right = choices.find((choice) => choice.id === rightChoiceId);
  if (!left || !right) return null;
  const effectMap = (choice: NarrativeChoice) =>
    new Map(choice.effects.map((effect) => [effect.variable, `${effect.operation}:${String(effect.value)}`]));
  const leftEffects = effectMap(left);
  const rightEffects = effectMap(right);
  const variables = [...new Set([...leftEffects.keys(), ...rightEffects.keys()])].sort();
  return {
    left,
    right,
    sameTarget: left.targetId === right.targetId,
    differences: variables.flatMap((variable) =>
      leftEffects.get(variable) === rightEffects.get(variable)
        ? []
        : [{ variable, left: leftEffects.get(variable) ?? "변화 없음", right: rightEffects.get(variable) ?? "변화 없음" }],
    ),
  };
}
