// AWS quiz engine — pure logic (no DOM). Manages a run through architecture
// puzzles + service quizzes, scoring, streaks, and grade. Deterministic via seed.
import { makeRng } from './rng.js';
import { ARCH_PUZZLES, SERVICE_QUIZ, AWS_SERVICES } from './aws-content.js';

export function createQuiz(seed = 42, { shuffle = true } = {}) {
  const rng = makeRng(seed);
  const puzzles = shuffle ? rng.shuffle(ARCH_PUZZLES) : ARCH_PUZZLES.slice();
  const quizzes = shuffle ? rng.shuffle(SERVICE_QUIZ) : SERVICE_QUIZ.slice();
  // Interleave: alternate puzzle, quiz for variety.
  const sequence = [];
  const maxLen = Math.max(puzzles.length, quizzes.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < puzzles.length) sequence.push({ type: 'puzzle', data: puzzles[i] });
    if (i < quizzes.length) sequence.push({ type: 'quiz', data: quizzes[i] });
  }
  return {
    seed, rng, sequence, index: 0,
    score: 0, maxScore: 0, correct: 0, wrong: 0, streak: 0, bestStreak: 0,
    // per-puzzle blank fill state: { [puzzleId]: { [blankKey]: serviceId|null } }
    fills: {},
    answered: {},   // stepIndex -> { correctCount, total, firstTryPerfect }
    over: false, grade: null,
  };
}

export function currentStep(q) { return q.sequence[q.index] || null; }
export function totalSteps(q) { return q.sequence.length; }

// ---- architecture puzzle scoring ----------------------------------------
export function blankKeys(puzzle) { return Object.keys(puzzle.blanks); }

// Options for a specific blank, shuffled deterministically (per puzzle+blank).
export function optionsFor(q, puzzle, key) {
  const opts = puzzle.blanks[key].options.slice();
  // stable shuffle seeded by string hash so re-render is consistent
  const r = makeRng(hash(q.seed + puzzle.id + key));
  return r.shuffle(opts);
}

function hash(s) { let h = 2166136261; s = String(s); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

// Record a fill for a blank (via setter). Returns whether it is correct.
export function setFill(q, puzzleId, key, serviceId) {
  if (!q.fills[puzzleId]) q.fills[puzzleId] = {};
  q.fills[puzzleId][key] = serviceId;
  const puzzle = ARCH_PUZZLES.find((p) => p.id === puzzleId);
  return puzzle.blanks[key].answer === serviceId;
}

export function getFill(q, puzzleId, key) { return q.fills[puzzleId]?.[key] ?? null; }

export function isPuzzleComplete(q, puzzle) {
  const f = q.fills[puzzle.id] || {};
  return blankKeys(puzzle).every((k) => f[k] != null);
}

// Grade a completed puzzle: +10 per correct blank, streak bonus. Returns detail.
export function gradePuzzle(q, puzzle) {
  const keys = blankKeys(puzzle);
  const f = q.fills[puzzle.id] || {};
  const results = keys.map((k) => ({ key: k, chosen: f[k], correct: puzzle.blanks[k].answer, ok: f[k] === puzzle.blanks[k].answer, explain: puzzle.blanks[k].explain }));
  const correctCount = results.filter((r) => r.ok).length;
  const perfect = correctCount === keys.length;
  const points = correctCount * 10 + (perfect ? 5 : 0);
  q.score += points;
  q.maxScore += keys.length * 10 + 5;
  q.correct += correctCount;
  q.wrong += keys.length - correctCount;
  if (perfect) { q.streak++; q.bestStreak = Math.max(q.bestStreak, q.streak); }
  else q.streak = 0;
  q.answered[q.index] = { correctCount, total: keys.length, perfect };
  return { results, correctCount, total: keys.length, perfect, points };
}

// ---- service quiz scoring ------------------------------------------------
export function quizOptions(q, item) {
  // Return options with their original indices, shuffled deterministically.
  const r = makeRng(hash(q.seed + item.id));
  const indexed = item.options.map((text, i) => ({ text, i }));
  return r.shuffle(indexed);
}

export function answerQuiz(q, item, chosenIndex) {
  const ok = chosenIndex === item.answer;
  q.score += ok ? 10 : 0;
  q.maxScore += 10;
  if (ok) { q.correct++; q.streak++; q.bestStreak = Math.max(q.bestStreak, q.streak); }
  else { q.wrong++; q.streak = 0; }
  q.answered[q.index] = { correctCount: ok ? 1 : 0, total: 1, perfect: ok };
  return { ok, correctIndex: item.answer, explain: item.explain };
}

// ---- progression ---------------------------------------------------------
export function advance(q) {
  q.index++;
  if (q.index >= q.sequence.length) { finalize(q); return false; }
  return true;
}

export function finalize(q) {
  q.over = true;
  const ratio = q.maxScore ? q.score / q.maxScore : 0;
  q.grade = ratio >= 0.92 ? 'S' : ratio >= 0.8 ? 'A' : ratio >= 0.65 ? 'B' : ratio >= 0.5 ? 'C' : 'F';
  q.ratio = ratio;
  return q.grade;
}

export const GRADE_TITLE = {
  S: '클라우드 아키텍트',
  A: '숙련 설계자',
  B: '성장하는 설계자',
  C: '견습 설계자',
  F: '재도전 필요',
};

// ---- save / load ---------------------------------------------------------
export function serialize(q) {
  return JSON.stringify({
    seed: q.seed, index: q.index, score: q.score, maxScore: q.maxScore,
    correct: q.correct, wrong: q.wrong, streak: q.streak, bestStreak: q.bestStreak,
    fills: q.fills, answered: q.answered, over: q.over, grade: q.grade,
  });
}
export function deserialize(json) {
  const d = typeof json === 'string' ? JSON.parse(json) : json;
  const q = createQuiz(d.seed);
  Object.assign(q, d);
  q.rng = makeRng(d.seed);
  return q;
}
