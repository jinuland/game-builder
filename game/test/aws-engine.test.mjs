// Unit tests for AWS quiz engine. Run: node --test game/test/aws-engine.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createQuiz, currentStep, totalSteps, blankKeys, optionsFor, setFill, getFill,
  isPuzzleComplete, gradePuzzle, quizOptions, answerQuiz, advance, finalize,
  serialize, deserialize,
} from '../src/aws-engine.js';
import { ARCH_PUZZLES, SERVICE_QUIZ, AWS_SERVICES } from '../src/aws-content.js';

test('AWS-01 every puzzle blank has a valid answer within its options', () => {
  for (const p of ARCH_PUZZLES) {
    for (const k of Object.keys(p.blanks)) {
      const b = p.blanks[k];
      assert.ok(b.options.includes(b.answer), `${p.id}.${k} answer in options`);
      assert.ok(AWS_SERVICES[b.answer], `${p.id}.${k} answer is a real service`);
      assert.equal(b.options.length, 4, `${p.id}.${k} has 4 options`);
      assert.ok(b.explain && b.explain.length > 10, `${p.id}.${k} has explanation`);
    }
  }
});

test('AWS-02 every non-blank node references a real service', () => {
  for (const p of ARCH_PUZZLES) {
    for (const n of p.nodes) {
      if (n.blank) continue;
      assert.ok(AWS_SERVICES[n.service], `${p.id}.${n.key} -> ${n.service} exists`);
    }
  }
});

test('AWS-03 every quiz item answer index is valid', () => {
  for (const q of SERVICE_QUIZ) {
    assert.ok(q.answer >= 0 && q.answer < q.options.length, `${q.id} answer index valid`);
    assert.ok(q.explain, `${q.id} has explain`);
  }
});

test('AWS-04 sequence interleaves puzzles and quizzes', () => {
  const q = createQuiz(42);
  assert.equal(totalSteps(q), ARCH_PUZZLES.length + SERVICE_QUIZ.length);
  assert.ok(currentStep(q));
});

test('AWS-05 setFill marks correct/incorrect and getFill reads back', () => {
  const q = createQuiz(1);
  const p = ARCH_PUZZLES.find((x) => x.id === 'web3tier');
  const key = 'db';
  assert.equal(setFill(q, p.id, key, 'rds'), true, 'rds is correct for db');
  assert.equal(getFill(q, p.id, key), 'rds');
  assert.equal(setFill(q, p.id, key, 's3'), false, 's3 wrong for db');
});

test('AWS-06 optionsFor returns 4 options containing the answer, deterministic', () => {
  const q = createQuiz(42);
  const p = ARCH_PUZZLES.find((x) => x.id === 'web3tier');
  const a = optionsFor(q, p, 'db');
  const b = optionsFor(q, p, 'db');
  assert.deepEqual(a, b, 'deterministic');
  assert.equal(a.length, 4);
  assert.ok(a.includes('rds'));
});

test('AWS-07 gradePuzzle scores 10/blank + 5 perfect bonus, updates streak', () => {
  const q = createQuiz(1);
  const p = ARCH_PUZZLES.find((x) => x.id === 'serverlessapi'); // 3 blanks
  setFill(q, p.id, 'api', 'apigateway');
  setFill(q, p.id, 'fn', 'lambda');
  setFill(q, p.id, 'db', 'dynamodb');
  assert.equal(isPuzzleComplete(q, p), true);
  const res = gradePuzzle(q, p);
  assert.equal(res.correctCount, 3);
  assert.equal(res.perfect, true);
  assert.equal(res.points, 35, '3*10 + 5 bonus');
  assert.equal(q.score, 35);
  assert.equal(q.streak, 1);
});

test('AWS-08 gradePuzzle partial: no perfect bonus, streak resets', () => {
  const q = createQuiz(1);
  q.streak = 3;
  const p = ARCH_PUZZLES.find((x) => x.id === 'serverlessapi');
  setFill(q, p.id, 'api', 'apigateway');
  setFill(q, p.id, 'fn', 'ec2');       // wrong
  setFill(q, p.id, 'db', 'dynamodb');
  const res = gradePuzzle(q, p);
  assert.equal(res.correctCount, 2);
  assert.equal(res.perfect, false);
  assert.equal(res.points, 20);
  assert.equal(q.streak, 0, 'streak reset on imperfect');
});

test('AWS-09 answerQuiz scores correct and gives explanation', () => {
  const q = createQuiz(1);
  const item = SERVICE_QUIZ.find((x) => x.id === 'q_s3');
  const r = answerQuiz(q, item, item.answer);
  assert.equal(r.ok, true);
  assert.equal(q.score, 10);
  const r2 = answerQuiz(q, item, (item.answer + 1) % item.options.length);
  assert.equal(r2.ok, false);
  assert.equal(q.correct, 1);
  assert.equal(q.wrong, 1);
});

test('AWS-10 advance walks to end then finalizes with a grade', () => {
  const q = createQuiz(42);
  const n = totalSteps(q);
  for (let i = 0; i < n - 1; i++) assert.equal(advance(q), true);
  assert.equal(advance(q), false, 'last advance ends');
  assert.ok(['S', 'A', 'B', 'C', 'F'].includes(q.grade));
  assert.equal(q.over, true);
});

test('AWS-11 grade thresholds: all-correct => S', () => {
  const q = createQuiz(42);
  // answer everything correctly
  for (const step of q.sequence) {
    if (step.type === 'puzzle') {
      const p = step.data;
      for (const k of blankKeys(p)) setFill(q, p.id, k, p.blanks[k].answer);
      gradePuzzle(q, p);
    } else {
      answerQuiz(q, step.data, step.data.answer);
    }
  }
  finalize(q);
  assert.equal(q.grade, 'S', `ratio ${q.ratio}`);
});

test('AWS-12 grade F when all wrong', () => {
  const q = createQuiz(42);
  for (const step of q.sequence) {
    if (step.type === 'puzzle') {
      const p = step.data;
      for (const k of blankKeys(p)) {
        const wrong = p.blanks[k].options.find((o) => o !== p.blanks[k].answer);
        setFill(q, p.id, k, wrong);
      }
      gradePuzzle(q, p);
    } else {
      const it = step.data;
      answerQuiz(q, it, (it.answer + 1) % it.options.length);
    }
  }
  finalize(q);
  assert.equal(q.grade, 'F');
});

test('AWS-13 serialize/deserialize roundtrip', () => {
  const q = createQuiz(7);
  const p = ARCH_PUZZLES[0];
  setFill(q, p.id, blankKeys(p)[0], p.blanks[blankKeys(p)[0]].answer);
  gradePuzzle(q, p);
  advance(q);
  const q2 = deserialize(serialize(q));
  assert.equal(q2.index, q.index);
  assert.equal(q2.score, q.score);
  assert.deepEqual(q2.fills, q.fills);
});

test('AWS-14 deterministic sequence for same seed', () => {
  const a = createQuiz(42).sequence.map((s) => s.type + ':' + s.data.id);
  const b = createQuiz(42).sequence.map((s) => s.type + ':' + s.data.id);
  assert.deepEqual(a, b);
});
