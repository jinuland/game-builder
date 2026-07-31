// Story-mode engine — pure logic. Walks chapters (scene → questions), scores
// answers, tracks per-domain mastery, and decides certification pass at the end.
import { makeRng } from './rng.js';
import { STORY, storyQuestionCount, mergeAdvanced } from './story-content.js';
import { AWS_SERVICES } from './aws-content.js';

mergeAdvanced(); // ensure advanced services are in the shared catalog

export function createStory(seed = 42) {
  const rng = makeRng(seed);
  return {
    seed, rng,
    chapterIndex: 0,
    questionIndex: -1,   // -1 = show scene first
    score: 0, maxScore: 0, correct: 0, wrong: 0,
    domainScores: {},    // chapterId -> {correct, total}
    fills: {},           // puzzleKey -> {blankKey: serviceId}
    answered: {},        // "ch.q" -> {ok}
    over: false, passed: false, grade: null,
  };
}

export function chapter(s) { return STORY.chapters[s.chapterIndex] || null; }
export function totalQuestions() { return storyQuestionCount(); }

export function answeredCount(s) {
  let n = 0;
  for (let i = 0; i < s.chapterIndex; i++) n += STORY.chapters[i].questions.length;
  n += Math.max(0, s.questionIndex);
  return n;
}

// Current view: 'scene' (chapter intro) or 'question'.
export function view(s) {
  if (s.over) return 'result';
  return s.questionIndex < 0 ? 'scene' : 'question';
}

export function currentQuestion(s) {
  const ch = chapter(s);
  if (!ch || s.questionIndex < 0) return null;
  return ch.questions[s.questionIndex] || null;
}

// Advance from scene to first question.
export function beginChapter(s) {
  if (s.questionIndex < 0) s.questionIndex = 0;
  return currentQuestion(s);
}

// ---- MCQ scoring ---------------------------------------------------------
export function mcqOptions(s, q, qid) {
  const r = makeRng(hash(s.seed + qid));
  return r.shuffle(q.options.map((text, i) => ({ text, i })));
}

function hash(x) { let h = 2166136261; x = String(x); for (let i = 0; i < x.length; i++) { h ^= x.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

export function answerMcq(s, q, qid, chosenIndex) {
  const ok = chosenIndex === q.answer;
  applyResult(s, qid, ok, 10);
  return { ok, correctIndex: q.answer, explain: q.explain };
}

// ---- puzzle scoring ------------------------------------------------------
export function puzzleBlankKeys(q) { return Object.keys(q.blanks); }

export function puzzleOptions(s, q, qid, key) {
  const r = makeRng(hash(s.seed + qid + key));
  return r.shuffle(q.blanks[key].options.slice());
}

export function setPuzzleFill(s, qid, key, serviceId) {
  if (!s.fills[qid]) s.fills[qid] = {};
  s.fills[qid][key] = serviceId;
}
export function getPuzzleFill(s, qid, key) { return s.fills[qid]?.[key] ?? null; }

export function isPuzzleComplete(s, q, qid) {
  const f = s.fills[qid] || {};
  return puzzleBlankKeys(q).every((k) => f[k] != null);
}

export function gradePuzzle(s, q, qid) {
  const keys = puzzleBlankKeys(q);
  const f = s.fills[qid] || {};
  const results = keys.map((k) => ({ key: k, chosen: f[k], correct: q.blanks[k].answer, ok: f[k] === q.blanks[k].answer, explain: q.blanks[k].explain }));
  const correctCount = results.filter((r) => r.ok).length;
  const perfect = correctCount === keys.length;
  // scoring: treat a puzzle as worth 10 (all-or-mostly). +10 if perfect, else proportional
  const pts = Math.round((correctCount / keys.length) * 10);
  applyResultRaw(s, qid, perfect, pts, 10, correctCount, keys.length);
  return { results, correctCount, total: keys.length, perfect };
}

function applyResult(s, qid, ok, weight) {
  applyResultRaw(s, qid, ok, ok ? weight : 0, weight, ok ? 1 : 0, 1);
}
function applyResultRaw(s, qid, ok, pts, weight, corr, tot) {
  s.score += pts; s.maxScore += weight;
  s.correct += corr; s.wrong += (tot - corr);
  s.answered[qid] = { ok, pts };
  const ch = chapter(s);
  if (ch) {
    if (!s.domainScores[ch.id]) s.domainScores[ch.id] = { correct: 0, total: 0 };
    s.domainScores[ch.id].correct += corr;
    s.domainScores[ch.id].total += tot;
  }
}

export function qid(s) { return `${s.chapterIndex}.${s.questionIndex}`; }

// ---- progression ---------------------------------------------------------
// Move to next question; when a chapter's questions are exhausted, go to next
// chapter's scene. When all chapters done, finalize.
export function next(s) {
  const ch = chapter(s);
  if (!ch) { finalize(s); return; }
  if (s.questionIndex + 1 < ch.questions.length) {
    s.questionIndex++;
  } else {
    if (s.chapterIndex + 1 < STORY.chapters.length) {
      s.chapterIndex++;
      s.questionIndex = -1; // show next chapter scene
    } else {
      finalize(s);
    }
  }
}

export function finalize(s) {
  s.over = true;
  const ratio = s.maxScore ? s.score / s.maxScore : 0;
  s.ratio = ratio;
  s.grade = ratio >= 0.92 ? 'S' : ratio >= 0.8 ? 'A' : ratio >= 0.65 ? 'B' : ratio >= 0.5 ? 'C' : 'F';
  // certification requires passing every domain (>=60% each) AND overall >=65%
  const domainsPass = STORY.chapters.every((c) => {
    const d = s.domainScores[c.id];
    return d && d.total > 0 && (d.correct / d.total) >= 0.6;
  });
  s.passed = domainsPass && ratio >= 0.65;
  return s;
}

export function domainSummary(s) {
  return STORY.chapters.map((c) => {
    const d = s.domainScores[c.id] || { correct: 0, total: c.questions.length };
    return { id: c.id, title: c.title, mentor: c.mentor, correct: d.correct, total: d.total, pass: d.total > 0 && d.correct / d.total >= 0.6 };
  });
}

// ---- save / load ---------------------------------------------------------
export function serialize(s) {
  return JSON.stringify({
    seed: s.seed, chapterIndex: s.chapterIndex, questionIndex: s.questionIndex,
    score: s.score, maxScore: s.maxScore, correct: s.correct, wrong: s.wrong,
    domainScores: s.domainScores, fills: s.fills, answered: s.answered,
    over: s.over, passed: s.passed, grade: s.grade,
  });
}
export function deserialize(json) {
  const d = typeof json === 'string' ? JSON.parse(json) : json;
  const s = createStory(d.seed);
  Object.assign(s, d);
  s.rng = makeRng(d.seed);
  return s;
}
