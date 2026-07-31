// Unit tests for story-mode engine. Run: node --test game/test/story-engine.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createStory, chapter, totalQuestions, view, currentQuestion, beginChapter,
  answerMcq, mcqOptions, puzzleBlankKeys, puzzleOptions, setPuzzleFill, getPuzzleFill,
  isPuzzleComplete, gradePuzzle, next, finalize, qid, domainSummary, answeredCount,
  serialize, deserialize,
} from '../src/story-engine.js';
import { STORY } from '../src/story-content.js';
import { AWS_SERVICES } from '../src/aws-content.js';

test('ST-01 4 chapters with mentors and questions', () => {
  assert.equal(STORY.chapters.length, 4);
  for (const c of STORY.chapters) {
    assert.ok(STORY, c.mentor);
    assert.ok(c.questions.length >= 3, `${c.id} has questions`);
    assert.ok(c.scene.length >= 1, `${c.id} has scene`);
  }
});

test('ST-02 every advanced service referenced exists in catalog', () => {
  for (const c of STORY.chapters) {
    for (const q of c.questions) {
      if (q.type === 'puzzle') {
        for (const n of q.nodes) if (!n.blank) assert.ok(AWS_SERVICES[n.service], `${c.id} node ${n.service}`);
        for (const k of Object.keys(q.blanks)) {
          const b = q.blanks[k];
          assert.ok(AWS_SERVICES[b.answer], `${c.id}.${k} answer ${b.answer} exists`);
          assert.ok(b.options.includes(b.answer), 'answer in options');
          assert.ok(b.explain.length > 10, 'has explain');
        }
      } else {
        assert.ok(q.answer >= 0 && q.answer < q.options.length, 'mcq answer valid');
        assert.ok(q.explain.length > 10, 'mcq explain');
      }
    }
  }
});

test('ST-03 starts on scene, beginChapter moves to first question', () => {
  const s = createStory(42);
  assert.equal(view(s), 'scene');
  beginChapter(s);
  assert.equal(view(s), 'question');
  assert.ok(currentQuestion(s));
});

test('ST-04 answerMcq scores correct and records domain', () => {
  const s = createStory(1);
  beginChapter(s);
  const ch = chapter(s);
  const q = ch.questions.find((x) => x.type === 'mcq');
  // position s at that question
  s.questionIndex = ch.questions.indexOf(q);
  const r = answerMcq(s, q, qid(s), q.answer);
  assert.equal(r.ok, true);
  assert.equal(s.score, 10);
  assert.equal(s.domainScores[ch.id].correct, 1);
});

test('ST-05 wrong mcq gives 0 and explanation', () => {
  const s = createStory(1);
  beginChapter(s);
  const ch = chapter(s);
  const q = ch.questions.find((x) => x.type === 'mcq');
  s.questionIndex = ch.questions.indexOf(q);
  const r = answerMcq(s, q, qid(s), (q.answer + 1) % q.options.length);
  assert.equal(r.ok, false);
  assert.equal(s.score, 0);
  assert.ok(r.explain);
});

test('ST-06 puzzle fill + grade scores proportionally', () => {
  const s = createStory(1);
  // find a chapter with a puzzle
  let target = null;
  for (let ci = 0; ci < STORY.chapters.length; ci++) {
    const p = STORY.chapters[ci].questions.find((x) => x.type === 'puzzle');
    if (p) { s.chapterIndex = ci; s.questionIndex = STORY.chapters[ci].questions.indexOf(p); target = p; break; }
  }
  assert.ok(target, 'found a puzzle');
  const id = qid(s);
  for (const k of puzzleBlankKeys(target)) setPuzzleFill(s, id, k, target.blanks[k].answer);
  assert.equal(isPuzzleComplete(s, target, id), true);
  const res = gradePuzzle(s, target, id);
  assert.equal(res.perfect, true);
  assert.equal(res.correctCount, res.total);
  assert.equal(s.score, 10);
});

test('ST-07 puzzleOptions deterministic and contains answer', () => {
  const s = createStory(42);
  const p = STORY.chapters.find((c) => c.questions.some((q) => q.type === 'puzzle')).questions.find((q) => q.type === 'puzzle');
  const key = puzzleBlankKeys(p)[0];
  const a = puzzleOptions(s, p, 'x', key);
  const b = puzzleOptions(s, p, 'x', key);
  assert.deepEqual(a, b);
  assert.ok(a.includes(p.blanks[key].answer));
});

test('ST-08 next walks scene->questions->next chapter scene', () => {
  const s = createStory(42);
  beginChapter(s); // ch0 q0
  const ch0 = chapter(s);
  for (let i = 0; i < ch0.questions.length - 1; i++) next(s);
  // still in ch0 last question
  assert.equal(s.chapterIndex, 0);
  next(s); // -> ch1 scene
  assert.equal(s.chapterIndex, 1);
  assert.equal(view(s), 'scene');
});

test('ST-09 full correct run passes all domains and grades S', () => {
  const s = createStory(42);
  playAll(s, true);
  finalize(s);
  assert.equal(s.grade, 'S', `ratio ${s.ratio}`);
  assert.equal(s.passed, true);
  const ds = domainSummary(s);
  assert.ok(ds.every((d) => d.pass), 'all domains pass');
});

test('ST-10 all-wrong run fails certification', () => {
  const s = createStory(42);
  playAll(s, false);
  finalize(s);
  assert.equal(s.passed, false);
  assert.equal(s.grade, 'F');
});

test('ST-11 total question count matches content', () => {
  const s = createStory(1);
  const expected = STORY.chapters.reduce((n, c) => n + c.questions.length, 0);
  assert.equal(totalQuestions(), expected);
  assert.ok(expected >= 12, 'at least 12 questions');
});

test('ST-12 serialize/deserialize roundtrip', () => {
  const s = createStory(9);
  beginChapter(s);
  const ch = chapter(s);
  const q = ch.questions[0];
  if (q.type === 'mcq') answerMcq(s, q, qid(s), q.answer);
  const s2 = deserialize(serialize(s));
  assert.equal(s2.score, s.score);
  assert.equal(s2.chapterIndex, s.chapterIndex);
});

// helper: play the whole story either fully correct or fully wrong
function playAll(s, correct) {
  let guard = 0;
  while (!s.over && guard++ < 200) {
    if (view(s) === 'scene') { beginChapter(s); continue; }
    const q = currentQuestion(s);
    if (!q) { next(s); continue; }
    const id = qid(s);
    if (q.type === 'puzzle') {
      for (const k of puzzleBlankKeys(q)) {
        const ans = correct ? q.blanks[k].answer : q.blanks[k].options.find((o) => o !== q.blanks[k].answer);
        setPuzzleFill(s, id, k, ans);
      }
      gradePuzzle(s, q, id);
    } else {
      answerMcq(s, q, id, correct ? q.answer : (q.answer + 1) % q.options.length);
    }
    next(s);
  }
}
