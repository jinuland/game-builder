// AWS Quiz app — browser controller for the architecture fill-in + service quiz mode.
// Renders diagrams with real AWS service SVG icons, blank drop-slots, MCQ options,
// and explanations. Uses aws-engine for pure scoring. Standalone (own DOM root).
import * as Q from './aws-engine.js';
import { AWS_SERVICES, AWS_CATEGORIES, ARCH_PUZZLES } from './aws-content.js';

const AWS_ICON_BASE = 'assets/aws/';
const SAVE_KEY = 'aws_quiz_save_v1';

export class AwsQuizApp {
  constructor(root, { seed = 42 } = {}) {
    this.root = root;
    this.seed = seed;
    this.iconCache = {};   // serviceId -> svg text (inlined for crispness)
    this.selectedBlank = null; // current blank key awaiting an option pick
    this._build();
  }

  _build() {
    this.root.innerHTML = '';
    this.root.className = 'aq-root';
    this._showTitle();
  }

  // Load an SVG icon's text (so we can inline + recolor if needed).
  async _loadIcon(id) {
    if (this.iconCache[id] !== undefined) return this.iconCache[id];
    try {
      const res = await fetch(AWS_ICON_BASE + id + '.svg');
      const txt = res.ok ? await res.text() : null;
      this.iconCache[id] = txt;
      return txt;
    } catch { this.iconCache[id] = null; return null; }
  }

  async _preloadIcons() {
    await Promise.all(Object.keys(AWS_SERVICES).map((id) => this._loadIcon(id)));
  }

  _iconEl(id, size = 48) {
    const wrap = document.createElement('span');
    wrap.className = 'aq-icon';
    wrap.style.width = wrap.style.height = size + 'px';
    const svg = this.iconCache[id];
    if (svg) {
      wrap.innerHTML = svg; // trusted: our own bundled AWS icon SVGs
      const el = wrap.querySelector('svg');
      if (el) { el.setAttribute('width', size); el.setAttribute('height', size); }
    } else {
      wrap.textContent = '▢';
    }
    return wrap;
  }

  // ---- scenes --------------------------------------------------------------
  async _showTitle() {
    await this._preloadIcons();
    this.root.innerHTML = '';
    const wrap = document.createElement('div'); wrap.className = 'aq-title';
    const h = document.createElement('h1'); h.textContent = 'AWS 아키텍트 트레이너';
    const sub = document.createElement('p'); sub.className = 'aq-sub';
    sub.textContent = '실제 AWS 서비스 아이콘으로 아키텍처의 빈칸을 채우고, 서비스 역할을 맞히는 SAA 대비 퀴즈';
    wrap.appendChild(h); wrap.appendChild(sub);

    // preview strip of icons
    const strip = document.createElement('div'); strip.className = 'aq-strip';
    ['route53', 'cloudfront', 'elb', 'ec2', 'lambda', 'apigateway', 'rds', 'dynamodb', 's3', 'sqs'].forEach((id) => strip.appendChild(this._iconEl(id, 40)));
    wrap.appendChild(strip);

    const start = this._btn('시작하기', () => this.start(this.seed), true);
    wrap.appendChild(start);
    if (localStorage.getItem(SAVE_KEY)) wrap.appendChild(this._btn('이어하기', () => this.loadSave()));
    wrap.appendChild(this._btn('❓ 어떻게 푸나요', () => this._showHelp()));
    const foot = document.createElement('p'); foot.className = 'aq-foot';
    foot.textContent = 'AWS 아키텍처 아이콘 (aws-icons, MIT). 학습용 비공식 트레이너.';
    wrap.appendChild(foot);
    this.root.appendChild(wrap);
  }

  _showHelp() {
    const ov = this._overlay();
    const box = document.createElement('div'); box.className = 'aq-help-box';
    box.appendChild(this._h2('푸는 방법'));
    const steps = [
      '① 화면 중앙에 아키텍처 다이어그램이 나옵니다. 점선 빈칸이 채워야 할 자리입니다.',
      '② 빈칸을 클릭하면 아래에 4개의 AWS 서비스 보기가 뜹니다.',
      '③ 요청 흐름(위→아래 화살표)과 각 노드 설명을 보고 알맞은 서비스를 고르세요.',
      '④ 모든 빈칸을 채우면 "채점하기"가 활성화됩니다. 정답·오답과 해설을 확인하세요.',
      '⑤ 중간중간 서비스 역할/시나리오 객관식 퀴즈도 나옵니다.',
    ];
    steps.forEach((s) => { const p = document.createElement('p'); p.textContent = s; box.appendChild(p); });
    box.appendChild(this._btn('닫기', () => ov.remove(), true));
    ov.appendChild(box);
  }

  start(seed) {
    this.quiz = Q.createQuiz(seed);
    this._renderStep();
  }

  save() {
    try { localStorage.setItem(SAVE_KEY, Q.serialize(this.quiz)); } catch { /* ignore */ }
  }
  loadSave() {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    this.quiz = Q.deserialize(raw);
    if (this.quiz.over) this._showResult(); else this._renderStep();
  }

  _renderStep() {
    const step = Q.currentStep(this.quiz);
    if (!step) { this._showResult(); return; }
    this.selectedBlank = null;
    if (step.type === 'puzzle') this._renderPuzzle(step.data);
    else this._renderQuiz(step.data);
  }

  // ---- header (progress + score) ------------------------------------------
  _header() {
    const q = this.quiz;
    const bar = document.createElement('div'); bar.className = 'aq-header';
    const prog = document.createElement('div'); prog.className = 'aq-prog';
    prog.textContent = `문제 ${q.index + 1} / ${Q.totalSteps(q)}`;
    const score = document.createElement('div'); score.className = 'aq-score';
    score.textContent = `점수 ${q.score}` + (q.streak > 1 ? `  🔥${q.streak}연속` : '');
    bar.appendChild(prog); bar.appendChild(score);
    return bar;
  }

  // ---- architecture puzzle -------------------------------------------------
  _renderPuzzle(p) {
    this.root.innerHTML = '';
    this.root.appendChild(this._header());

    const layout = document.createElement('div'); layout.className = 'aq-puzzle';
    const info = document.createElement('div'); info.className = 'aq-info';
    const badge = document.createElement('span'); badge.className = 'aq-badge'; badge.textContent = p.level;
    const h = document.createElement('h2'); h.textContent = p.title;
    const brief = document.createElement('p'); brief.className = 'aq-brief'; brief.textContent = p.brief;
    info.appendChild(badge); info.appendChild(h); info.appendChild(brief);

    // diagram
    const diagram = document.createElement('div'); diagram.className = 'aq-diagram';
    this._diagram = diagram;
    // SVG flow layer
    const svgns = 'http://www.w3.org/2000/svg';
    const flow = document.createElementNS(svgns, 'svg');
    flow.setAttribute('class', 'aq-flow');
    flow.setAttribute('viewBox', '0 0 100 100'); flow.setAttribute('preserveAspectRatio', 'none');
    for (const [a, b] of p.flow) {
      const na = p.nodes.find((n) => n.key === a), nb = p.nodes.find((n) => n.key === b);
      const line = document.createElementNS(svgns, 'line');
      line.setAttribute('x1', na.x * 100); line.setAttribute('y1', na.y * 100);
      line.setAttribute('x2', nb.x * 100); line.setAttribute('y2', nb.y * 100);
      line.setAttribute('class', 'aq-edge');
      flow.appendChild(line);
    }
    diagram.appendChild(flow);

    // nodes
    for (const n of p.nodes) {
      const node = document.createElement('div');
      node.className = 'aq-node' + (n.blank ? ' blank' : '') + (n.badge ? ' badge' : '');
      node.style.left = (n.x * 100) + '%';
      node.style.top = (n.y * 100) + '%';
      if (n.blank) {
        node.dataset.key = n.key;
        this._paintBlank(node, p, n);
        node.addEventListener('click', () => this._selectBlank(p, n.key, node));
      } else {
        node.appendChild(this._iconEl(n.service, 46));
        const nm = document.createElement('div'); nm.className = 'aq-node-name'; nm.textContent = AWS_SERVICES[n.service].name.replace('Amazon ', '').replace('AWS ', '');
      }
      const label = document.createElement('div'); label.className = 'aq-node-label'; label.textContent = n.label;
      node.appendChild(label);
      diagram.appendChild(node);
    }

    layout.appendChild(info);
    layout.appendChild(diagram);
    this.root.appendChild(layout);

    // option tray + grade button
    this._tray = document.createElement('div'); this._tray.className = 'aq-tray';
    this.root.appendChild(this._tray);
    this._renderTrayHint(p);

    const actions = document.createElement('div'); actions.className = 'aq-actions';
    this._gradeBtn = this._btn('채점하기', () => this._doGradePuzzle(p), true);
    this._gradeBtn.disabled = !Q.isPuzzleComplete(this.quiz, p);
    actions.appendChild(this._gradeBtn);
    actions.appendChild(this._btn('❓ 방법', () => this._showHelp()));
    this.root.appendChild(actions);
  }

  _paintBlank(node, p, n) {
    node.innerHTML = '';
    const filled = Q.getFill(this.quiz, p.id, n.key);
    if (filled) {
      node.classList.add('filled');
      node.appendChild(this._iconEl(filled, 46));
      const nm = document.createElement('div'); nm.className = 'aq-node-name'; nm.textContent = AWS_SERVICES[filled].name.replace('Amazon ', '').replace('AWS ', '');
      node.appendChild(nm);
    } else {
      node.classList.remove('filled');
      const qm = document.createElement('div'); qm.className = 'aq-blank-q'; qm.textContent = '?';
      node.appendChild(qm);
    }
  }

  _renderTrayHint(p) {
    this._tray.innerHTML = '';
    const hint = document.createElement('div'); hint.className = 'aq-tray-hint';
    hint.textContent = '점선 빈칸을 클릭하면 알맞은 AWS 서비스 보기가 여기에 나타납니다.';
    this._tray.appendChild(hint);
  }

  _selectBlank(p, key, node) {
    this.selectedBlank = key;
    // highlight
    this._diagram.querySelectorAll('.aq-node.blank').forEach((el) => el.classList.remove('sel'));
    node.classList.add('sel');
    // render options
    this._tray.innerHTML = '';
    const nodeInfo = p.nodes.find((n) => n.key === key);
    const title = document.createElement('div'); title.className = 'aq-tray-title';
    title.textContent = `"${nodeInfo.label}" 자리에 알맞은 서비스는?`;
    this._tray.appendChild(title);
    const row = document.createElement('div'); row.className = 'aq-opt-row';
    for (const optId of Q.optionsFor(this.quiz, p, key)) {
      const s = AWS_SERVICES[optId];
      const card = document.createElement('button'); card.className = 'aq-opt';
      card.style.borderColor = AWS_CATEGORIES[s.cat].color;
      card.appendChild(this._iconEl(optId, 40));
      const nm = document.createElement('div'); nm.className = 'aq-opt-name'; nm.textContent = s.name.replace('Amazon ', '').replace('AWS ', '');
      const role = document.createElement('div'); role.className = 'aq-opt-role'; role.textContent = s.role;
      card.appendChild(nm); card.appendChild(role);
      card.addEventListener('click', () => {
        Q.setFill(this.quiz, p.id, key, optId);
        this._paintBlank(node, p, nodeInfo);
        this._gradeBtn.disabled = !Q.isPuzzleComplete(this.quiz, p);
        // move to next unfilled blank automatically for flow
        const next = Q.blankKeys(p).find((k) => Q.getFill(this.quiz, p.id, k) == null);
        if (next) { const nn = this._diagram.querySelector(`.aq-node.blank[data-key="${next}"]`); if (nn) this._selectBlank(p, next, nn); }
        else { this._tray.innerHTML = ''; const done = document.createElement('div'); done.className = 'aq-tray-hint'; done.textContent = '모든 빈칸을 채웠습니다. "채점하기"를 눌러 확인하세요.'; this._tray.appendChild(done); }
      });
      row.appendChild(card);
    }
    this._tray.appendChild(row);
  }

  _doGradePuzzle(p) {
    const res = Q.gradePuzzle(this.quiz, p);
    this.save();
    // paint correctness on nodes
    for (const r of res.results) {
      const node = this._diagram.querySelector(`.aq-node.blank[data-key="${r.key}"]`);
      if (node) node.classList.add(r.ok ? 'correct' : 'wrong');
    }
    // explanation panel
    const ov = this._overlay();
    const box = document.createElement('div'); box.className = 'aq-explain-box';
    const head = document.createElement('h2');
    head.textContent = res.perfect ? '🎉 완벽합니다!' : `${res.correctCount} / ${res.total} 정답`;
    head.className = res.perfect ? 'ok' : 'partial';
    box.appendChild(head);
    for (const r of res.results) {
      const row = document.createElement('div'); row.className = 'aq-ex-row ' + (r.ok ? 'ok' : 'wrong');
      const icon = this._iconEl(r.correct, 34);
      const txt = document.createElement('div');
      const t = document.createElement('div'); t.className = 'aq-ex-t';
      t.textContent = `${r.ok ? '✅' : '❌'} 정답: ${AWS_SERVICES[r.correct].name}` + (r.ok ? '' : ` (선택: ${r.chosen ? AWS_SERVICES[r.chosen].name : '없음'})`);
      const e = document.createElement('div'); e.className = 'aq-ex-e'; e.textContent = r.explain;
      txt.appendChild(t); txt.appendChild(e);
      row.appendChild(icon); row.appendChild(txt);
      box.appendChild(row);
    }
    box.appendChild(this._btn('다음 문제 ▶', () => { ov.remove(); this._next(); }, true));
    ov.appendChild(box);
  }

  // ---- service quiz --------------------------------------------------------
  _renderQuiz(item) {
    this.root.innerHTML = '';
    this.root.appendChild(this._header());
    const wrap = document.createElement('div'); wrap.className = 'aq-quiz';
    if (item.kind === 'role' && item.service) {
      const big = this._iconEl(item.service, 96); big.classList.add('aq-quiz-icon');
      wrap.appendChild(big);
    } else {
      const tag = document.createElement('div'); tag.className = 'aq-badge'; tag.textContent = '시나리오'; wrap.appendChild(tag);
    }
    const h = document.createElement('h2'); h.textContent = item.question; wrap.appendChild(h);
    const row = document.createElement('div'); row.className = 'aq-quiz-opts';
    for (const opt of Q.quizOptions(this.quiz, item)) {
      const b = document.createElement('button'); b.className = 'aq-quiz-opt'; b.textContent = opt.text;
      b.addEventListener('click', () => this._answerQuiz(item, opt.i, row, b));
      row.appendChild(b);
    }
    wrap.appendChild(row);
    this.root.appendChild(wrap);
  }

  _answerQuiz(item, chosenIndex, row, btn) {
    const res = Q.answerQuiz(this.quiz, item, chosenIndex);
    this.save();
    // disable + color
    const buttons = Array.from(row.querySelectorAll('.aq-quiz-opt'));
    buttons.forEach((b) => { b.disabled = true; });
    btn.classList.add(res.ok ? 'correct' : 'wrong');
    if (!res.ok) {
      // highlight the correct one
      const shuffled = Q.quizOptions(this.quiz, item);
      const correctPos = shuffled.findIndex((o) => o.i === item.answer);
      if (buttons[correctPos]) buttons[correctPos].classList.add('correct');
    }
    const ex = document.createElement('div'); ex.className = 'aq-quiz-explain ' + (res.ok ? 'ok' : 'wrong');
    ex.textContent = (res.ok ? '✅ 정답! ' : '❌ 오답. ') + res.explain;
    row.after(ex);
    const next = this._btn('다음 문제 ▶', () => this._next(), true);
    ex.after(next);
  }

  _next() { if (!Q.advance(this.quiz)) this._showResult(); else this._renderStep(); }

  // ---- result --------------------------------------------------------------
  _showResult() {
    localStorage.removeItem(SAVE_KEY);
    this.root.innerHTML = '';
    const q = this.quiz;
    const wrap = document.createElement('div'); wrap.className = 'aq-result aq-grade-' + q.grade;
    const g = document.createElement('div'); g.className = 'aq-grade'; g.textContent = q.grade;
    const t = document.createElement('h2'); t.textContent = Q.GRADE_TITLE[q.grade];
    const s = document.createElement('div'); s.className = 'aq-result-stats';
    s.appendChild(this._stat('점수', `${q.score}/${q.maxScore}`));
    s.appendChild(this._stat('정답', q.correct));
    s.appendChild(this._stat('오답', q.wrong));
    s.appendChild(this._stat('최고 연속', q.bestStreak));
    wrap.appendChild(g); wrap.appendChild(t); wrap.appendChild(s);
    const pct = Math.round((q.ratio || 0) * 100);
    const line = document.createElement('p'); line.className = 'aq-brief'; line.textContent = `정답률 ${pct}% — ${q.correct}문제를 맞혔습니다.`;
    wrap.appendChild(line);
    wrap.appendChild(this._btn('다시 도전', () => this.start((this.seed + 1) % 100000), true));
    wrap.appendChild(this._btn('타이틀로', () => this._showTitle()));
    this.root.appendChild(wrap);
  }

  // ---- helpers -------------------------------------------------------------
  _overlay() { const o = document.createElement('div'); o.className = 'aq-overlay'; this.root.appendChild(o); return o; }
  _btn(label, onClick, primary = false) {
    const b = document.createElement('button'); b.className = 'aq-btn' + (primary ? ' primary' : ''); b.textContent = label;
    b.addEventListener('click', onClick); return b;
  }
  // Screenshot/validation driver. States: title, puzzle, puzzleFilled, graded, quiz, result.
  async __drive(state) {
    await this._preloadIcons();
    if (state === 'title') { this._showTitle(); return; }
    this.start(this.seed);
    // ensure first step is a puzzle
    let guard = 0;
    while (Q.currentStep(this.quiz) && Q.currentStep(this.quiz).type !== 'puzzle' && guard++ < 20) Q.advance(this.quiz);
    const step = Q.currentStep(this.quiz);
    if (state === 'puzzle') { this._renderStep(); return; }
    if (state === 'puzzleFilled' || state === 'graded') {
      const p = step.data;
      for (const k of Q.blankKeys(p)) Q.setFill(this.quiz, p.id, k, p.blanks[k].answer);
      this._renderStep();
      if (state === 'graded') this._doGradePuzzle(p);
      return;
    }
    if (state === 'quiz') {
      // advance to first quiz step
      let g = 0;
      while (Q.currentStep(this.quiz) && Q.currentStep(this.quiz).type !== 'quiz' && g++ < 20) Q.advance(this.quiz);
      this._renderStep();
      return;
    }
    if (state === 'result') {
      // answer everything correctly then show result
      for (const st of this.quiz.sequence) {
        if (st.type === 'puzzle') { for (const k of Q.blankKeys(st.data)) Q.setFill(this.quiz, st.data.id, k, st.data.blanks[k].answer); Q.gradePuzzle(this.quiz, st.data); }
        else Q.answerQuiz(this.quiz, st.data, st.data.answer);
      }
      Q.finalize(this.quiz);
      this._showResult();
      return;
    }
    this._renderStep();
  }

  // Headless self-validation: play the whole quiz correctly, assert grade S, no errors.
  __validate() {
    const report = { checks: [], errors: [] };
    const check = (name, cond, detail = '') => report.checks.push({ name, pass: !!cond, detail });
    try {
      const q = Q.createQuiz(42);
      let steps = 0;
      for (const st of q.sequence) {
        if (st.type === 'puzzle') {
          for (const k of Q.blankKeys(st.data)) Q.setFill(q, st.data.id, k, st.data.blanks[k].answer);
          const r = Q.gradePuzzle(q, st.data);
          check('퍼즐 만점: ' + st.data.id, r.perfect, `${r.correctCount}/${r.total}`);
        } else {
          const r = Q.answerQuiz(q, st.data, st.data.answer);
          check('퀴즈 정답: ' + st.data.id, r.ok);
        }
        steps++;
      }
      Q.finalize(q);
      check('전체 문제 수 > 0', steps > 0, String(steps));
      check('전정답 시 S등급', q.grade === 'S', q.grade);
      check('아이콘 프리로드', Object.values(this.iconCache).every((v) => v && v.includes('<svg')), 'icons');
    } catch (e) { report.errors.push(String(e && e.message || e)); }
    report.pass = report.checks.every((c) => c.pass) && report.errors.length === 0;
    return report;
  }

  _h2(t) { const h = document.createElement('h2'); h.textContent = t; return h; }
  _stat(label, val) {
    const d = document.createElement('div'); d.className = 'aq-stat';
    const v = document.createElement('div'); v.className = 'aq-stat-val'; v.textContent = val;
    const l = document.createElement('div'); l.className = 'aq-stat-label'; l.textContent = label;
    d.appendChild(v); d.appendChild(l); return d;
  }
}
