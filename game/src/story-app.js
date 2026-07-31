// Story-mode app — narrative-driven advanced AWS trainer. Chapter scenes with
// mentor characters + scenario, then story-framed questions (MCQ + architecture
// puzzles), ending with a downloadable certificate. Uses story-engine (pure).
import * as S from './story-engine.js';
import { STORY, MENTORS, mergeAdvanced } from './story-content.js';
import { AWS_SERVICES, AWS_CATEGORIES } from './aws-content.js';

mergeAdvanced();
const ICON_BASE = 'assets/aws/';
const CHAR_BASE = 'assets/';
const SAVE_KEY = 'story_save_v1';

export class StoryApp {
  constructor(root, { seed = 42, autoStart = true } = {}) {
    this.root = root;
    this.seed = seed;
    this.iconCache = {};
    this.charCache = {};
    this.selectedBlank = null;
    this.root.className = 'st-root';
    // Skip auto-title when a driver (__drive) will take over, to avoid a race
    // where the async title render overwrites the driven state.
    if (autoStart) this._showTitle();
  }

  async _loadIcon(id) {
    if (this.iconCache[id] !== undefined) return this.iconCache[id];
    try { const r = await fetch(ICON_BASE + id + '.svg'); this.iconCache[id] = r.ok ? await r.text() : null; }
    catch { this.iconCache[id] = null; }
    return this.iconCache[id];
  }
  async _preload() {
    // preload all services that appear in the story
    const ids = new Set();
    for (const c of STORY.chapters) for (const q of c.questions) {
      if (q.type === 'puzzle') { for (const n of q.nodes) if (!n.blank) ids.add(n.service); for (const k of Object.keys(q.blanks)) q.blanks[k].options.forEach((o) => ids.add(o)); }
    }
    await Promise.all([...ids].map((id) => this._loadIcon(id)));
    // preload mentor portraits
    await Promise.all(Object.values(MENTORS).map((m) => new Promise((res) => {
      const img = new Image(); img.onload = () => { this.charCache[m.id] = img; res(); }; img.onerror = () => { this.charCache[m.id] = null; res(); }; img.src = CHAR_BASE + m.icon;
    })));
  }

  _icon(id, size = 46) {
    const w = document.createElement('span'); w.className = 'st-icon'; w.style.width = w.style.height = size + 'px';
    const svg = this.iconCache[id];
    if (svg) { w.innerHTML = svg; const el = w.querySelector('svg'); if (el) { el.setAttribute('width', size); el.setAttribute('height', size); } }
    else { w.textContent = '▢'; }
    return w;
  }
  _svcName(id) { return AWS_SERVICES[id] ? AWS_SERVICES[id].name.replace('Amazon ', '').replace('AWS ', '') : id; }

  // ---- title ---------------------------------------------------------------
  async _showTitle() {
    await this._preload();
    this.root.innerHTML = '';
    const w = document.createElement('div'); w.className = 'st-title';
    const h = document.createElement('h1'); h.textContent = 'AWS 스페셜리스트 사가';
    const sub = document.createElement('p'); sub.className = 'st-sub'; sub.textContent = STORY.intro.title + ' — 스토리로 배우는 심화 AWS (컨테이너·AI·데이터·보안)';
    w.appendChild(h); w.appendChild(sub);
    // mentor lineup
    const line = document.createElement('div'); line.className = 'st-mentors';
    for (const m of Object.values(MENTORS)) {
      const c = document.createElement('div'); c.className = 'st-mentor-card';
      const img = this.charCache[m.id];
      if (img) { const im = new Image(); im.src = img.src; im.className = 'st-mentor-img'; c.appendChild(im); }
      const nm = document.createElement('div'); nm.className = 'st-mentor-name'; nm.textContent = m.name; nm.style.color = m.color;
      const tl = document.createElement('div'); tl.className = 'st-mentor-title'; tl.textContent = m.title;
      c.appendChild(nm); c.appendChild(tl); line.appendChild(c);
    }
    w.appendChild(line);
    w.appendChild(this._btn('사가 시작', () => this.start(this.seed), true));
    if (localStorage.getItem(SAVE_KEY)) w.appendChild(this._btn('이어하기', () => this.loadSave()));
    const foot = document.createElement('p'); foot.className = 'st-foot'; foot.textContent = '심화 자격증(SAP·전문분야) 수준 · 완주 시 수료증 발급 · AWS 아이콘(aws-icons, MIT)';
    w.appendChild(foot);
    this.root.appendChild(w);
  }

  start(seed) { this.story = S.createStory(seed); this._render(); }
  save() { try { localStorage.setItem(SAVE_KEY, S.serialize(this.story)); } catch {} }
  loadSave() { const r = localStorage.getItem(SAVE_KEY); if (!r) return; this.story = S.deserialize(r); this._render(); }

  _render() {
    const v = S.view(this.story);
    if (v === 'scene') this._renderScene();
    else if (v === 'question') this._renderQuestion();
    else this._renderResult();
  }

  _header() {
    const s = this.story;
    const bar = document.createElement('div'); bar.className = 'st-header';
    const ch = S.chapter(s);
    const left = document.createElement('div'); left.className = 'st-hprog';
    left.textContent = `${ch ? ch.title : ''}`;
    const right = document.createElement('div'); right.className = 'st-hscore';
    right.textContent = `진행 ${S.answeredCount(s)}/${S.totalQuestions()} · 점수 ${s.score}`;
    bar.appendChild(left); bar.appendChild(right);
    return bar;
  }

  // ---- scene cutscene ------------------------------------------------------
  _renderScene() {
    const s = this.story; const ch = S.chapter(s); const m = MENTORS[ch.mentor];
    this.root.innerHTML = '';
    const wrap = document.createElement('div'); wrap.className = 'st-scene';
    const portrait = document.createElement('div'); portrait.className = 'st-scene-portrait';
    const img = this.charCache[m.id];
    if (img) { const im = new Image(); im.src = img.src; im.className = 'st-scene-img'; portrait.appendChild(im); }
    const nm = document.createElement('div'); nm.className = 'st-scene-name'; nm.style.color = m.color; nm.textContent = `${m.name} · ${m.title}`;
    portrait.appendChild(nm);
    const box = document.createElement('div'); box.className = 'st-scene-box';
    const badge = document.createElement('span'); badge.className = 'st-badge'; badge.textContent = ch.badge; badge.style.borderColor = m.color; badge.style.color = m.color;
    const title = document.createElement('h2'); title.textContent = ch.title;
    box.appendChild(badge); box.appendChild(title);
    for (const li of ch.scene) { const p = document.createElement('p'); p.className = 'st-scene-line'; p.textContent = li; box.appendChild(p); }
    const go = this._btn('상황 진입 ▶', () => { S.beginChapter(s); this.save(); this._render(); }, true);
    box.appendChild(go);
    wrap.appendChild(portrait); wrap.appendChild(box);
    this.root.appendChild(wrap);
  }

  // ---- question ------------------------------------------------------------
  _renderQuestion() {
    const q = S.currentQuestion(this.story);
    if (!q) { S.next(this.story); this._render(); return; }
    if (q.type === 'puzzle') this._renderPuzzle(q);
    else this._renderMcq(q);
  }

  _renderMcq(q) {
    const s = this.story; const ch = S.chapter(s); const m = MENTORS[ch.mentor];
    this.root.innerHTML = '';
    this.root.appendChild(this._header());
    const wrap = document.createElement('div'); wrap.className = 'st-quiz';
    // small mentor tag
    const tag = document.createElement('div'); tag.className = 'st-qtag';
    const img = this.charCache[m.id]; if (img) { const im = new Image(); im.src = img.src; im.className = 'st-qtag-img'; tag.appendChild(im); }
    const kind = document.createElement('span'); kind.className = 'st-badge'; kind.textContent = q.kind === 'scenario' ? '시나리오' : '지식'; kind.style.borderColor = m.color; kind.style.color = m.color;
    tag.appendChild(kind); wrap.appendChild(tag);
    const h = document.createElement('h2'); h.textContent = q.question; wrap.appendChild(h);
    const row = document.createElement('div'); row.className = 'st-opts';
    for (const opt of S.mcqOptions(s, q, S.qid(s))) {
      const b = document.createElement('button'); b.className = 'st-opt'; b.textContent = opt.text;
      b.addEventListener('click', () => this._answerMcq(q, opt.i, row, b));
      row.appendChild(b);
    }
    wrap.appendChild(row);
    this.root.appendChild(wrap);
  }

  _answerMcq(q, chosen, row, btn) {
    const s = this.story;
    const res = S.answerMcq(s, q, S.qid(s), chosen);
    this.save();
    const btns = Array.from(row.querySelectorAll('.st-opt'));
    btns.forEach((b) => b.disabled = true);
    btn.classList.add(res.ok ? 'correct' : 'wrong');
    if (!res.ok) {
      const shuffled = S.mcqOptions(s, q, S.qid(s));
      const pos = shuffled.findIndex((o) => o.i === q.answer);
      if (btns[pos]) btns[pos].classList.add('correct');
    }
    const ex = document.createElement('div'); ex.className = 'st-explain ' + (res.ok ? 'ok' : 'wrong');
    ex.textContent = (res.ok ? '✅ 정답! ' : '❌ 오답. ') + res.explain;
    row.after(ex);
    const nx = this._btn('다음 ▶', () => { S.next(s); this.save(); this._render(); }, true);
    ex.after(nx);
  }

  _renderPuzzle(q) {
    const s = this.story; const ch = S.chapter(s); const m = MENTORS[ch.mentor];
    this.root.innerHTML = '';
    this.root.appendChild(this._header());
    const layout = document.createElement('div'); layout.className = 'st-puzzle';
    const info = document.createElement('div'); info.className = 'st-pinfo';
    const badge = document.createElement('span'); badge.className = 'st-badge'; badge.textContent = ch.badge; badge.style.borderColor = m.color; badge.style.color = m.color;
    const h = document.createElement('h2'); h.textContent = q.title;
    const brief = document.createElement('p'); brief.className = 'st-brief'; brief.textContent = q.brief;
    info.appendChild(badge); info.appendChild(h); info.appendChild(brief);

    const diagram = document.createElement('div'); diagram.className = 'st-diagram'; this._diagram = diagram;
    const svgns = 'http://www.w3.org/2000/svg';
    const flow = document.createElementNS(svgns, 'svg'); flow.setAttribute('class', 'st-flow'); flow.setAttribute('viewBox', '0 0 100 100'); flow.setAttribute('preserveAspectRatio', 'none');
    for (const [a, b] of q.flow) {
      const na = q.nodes.find((n) => n.key === a), nb = q.nodes.find((n) => n.key === b);
      const ln = document.createElementNS(svgns, 'line'); ln.setAttribute('x1', na.x * 100); ln.setAttribute('y1', na.y * 100); ln.setAttribute('x2', nb.x * 100); ln.setAttribute('y2', nb.y * 100); ln.setAttribute('class', 'st-edge'); flow.appendChild(ln);
    }
    diagram.appendChild(flow);
    for (const n of q.nodes) {
      const node = document.createElement('div'); node.className = 'st-node' + (n.blank ? ' blank' : '');
      node.style.left = (n.x * 100) + '%'; node.style.top = (n.y * 100) + '%';
      if (n.blank) { node.dataset.key = n.key; this._paintBlank(node, q, n); node.addEventListener('click', () => this._selectBlank(q, n.key, node)); }
      else { node.appendChild(this._icon(n.service, 44)); }
      const lab = document.createElement('div'); lab.className = 'st-node-label'; lab.textContent = n.label; node.appendChild(lab);
      diagram.appendChild(node);
    }
    layout.appendChild(info); layout.appendChild(diagram);
    this.root.appendChild(layout);
    this._tray = document.createElement('div'); this._tray.className = 'st-tray'; this.root.appendChild(this._tray);
    this._trayHint();
    const actions = document.createElement('div'); actions.className = 'st-actions';
    this._gradeBtn = this._btn('제출하기', () => this._gradePuzzle(q), true);
    this._gradeBtn.disabled = !S.isPuzzleComplete(s, q, S.qid(s));
    actions.appendChild(this._gradeBtn);
    this.root.appendChild(actions);
  }

  _trayHint() { this._tray.innerHTML = ''; const h = document.createElement('div'); h.className = 'st-tray-hint'; h.textContent = '점선 빈칸을 클릭해 알맞은 AWS 서비스를 배치하세요.'; this._tray.appendChild(h); }

  _paintBlank(node, q, n) {
    const filled = S.getPuzzleFill(this.story, S.qid(this.story), n.key);
    node.innerHTML = '';
    if (filled) { node.classList.add('filled'); node.appendChild(this._icon(filled, 44)); }
    else { node.classList.remove('filled'); const qm = document.createElement('div'); qm.className = 'st-blank-q'; qm.textContent = '?'; node.appendChild(qm); }
    const lab = document.createElement('div'); lab.className = 'st-node-label'; lab.textContent = n.label; node.appendChild(lab);
  }

  _selectBlank(q, key, node) {
    const s = this.story;
    this._diagram.querySelectorAll('.st-node.blank').forEach((el) => el.classList.remove('sel'));
    node.classList.add('sel');
    this._tray.innerHTML = '';
    const n = q.nodes.find((x) => x.key === key);
    const t = document.createElement('div'); t.className = 'st-tray-title'; t.textContent = `"${n.label}" 자리에 알맞은 서비스는?`; this._tray.appendChild(t);
    const row = document.createElement('div'); row.className = 'st-opt-row';
    for (const optId of S.puzzleOptions(s, q, S.qid(s), key)) {
      const svc = AWS_SERVICES[optId];
      const card = document.createElement('button'); card.className = 'st-svc-opt';
      const cat = AWS_CATEGORIES[svc.cat]; card.style.borderColor = cat ? cat.color : '#888';
      card.appendChild(this._icon(optId, 38));
      const nm = document.createElement('div'); nm.className = 'st-svc-name'; nm.textContent = this._svcName(optId);
      const role = document.createElement('div'); role.className = 'st-svc-role'; role.textContent = svc.role;
      card.appendChild(nm); card.appendChild(role);
      card.addEventListener('click', () => {
        S.setPuzzleFill(s, S.qid(s), key, optId);
        this._paintBlank(node, q, n);
        this._gradeBtn.disabled = !S.isPuzzleComplete(s, q, S.qid(s));
        const nextK = S.puzzleBlankKeys(q).find((k) => S.getPuzzleFill(s, S.qid(s), k) == null);
        if (nextK) { const nn = this._diagram.querySelector(`.st-node.blank[data-key="${nextK}"]`); if (nn) this._selectBlank(q, nextK, nn); }
        else { this._trayHint(); this._tray.querySelector('.st-tray-hint').textContent = '모든 빈칸을 채웠습니다. "제출하기"를 누르세요.'; }
      });
      row.appendChild(card);
    }
    this._tray.appendChild(row);
  }

  _gradePuzzle(q) {
    const s = this.story;
    const res = S.gradePuzzle(s, q, S.qid(s)); this.save();
    for (const r of res.results) { const nd = this._diagram.querySelector(`.st-node.blank[data-key="${r.key}"]`); if (nd) nd.classList.add(r.ok ? 'correct' : 'wrong'); }
    const ov = document.createElement('div'); ov.className = 'st-overlay';
    const box = document.createElement('div'); box.className = 'st-explain-box';
    const head = document.createElement('h2'); head.className = res.perfect ? 'ok' : 'partial'; head.textContent = res.perfect ? '🎉 완벽합니다!' : `${res.correctCount}/${res.total} 정답`;
    box.appendChild(head);
    for (const r of res.results) {
      const rr = document.createElement('div'); rr.className = 'st-ex-row ' + (r.ok ? 'ok' : 'wrong');
      rr.appendChild(this._icon(r.correct, 32));
      const tx = document.createElement('div');
      const t = document.createElement('div'); t.className = 'st-ex-t'; t.textContent = `${r.ok ? '✅' : '❌'} 정답: ${this._svcName(r.correct)}` + (r.ok ? '' : ` (선택: ${r.chosen ? this._svcName(r.chosen) : '없음'})`);
      const e = document.createElement('div'); e.className = 'st-ex-e'; e.textContent = r.explain;
      tx.appendChild(t); tx.appendChild(e); rr.appendChild(tx); box.appendChild(rr);
    }
    box.appendChild(this._btn('다음 ▶', () => { ov.remove(); S.next(s); this.save(); this._render(); }, true));
    ov.appendChild(box); this.root.appendChild(ov);
  }

  // ---- result + certificate ------------------------------------------------
  _renderResult() {
    localStorage.removeItem(SAVE_KEY);
    const s = this.story;
    this.root.innerHTML = '';
    const w = document.createElement('div'); w.className = 'st-result';
    const g = document.createElement('div'); g.className = 'st-grade st-grade-' + s.grade; g.textContent = s.grade;
    const t = document.createElement('h2'); t.textContent = s.passed ? '인증 합격!' : '인증 미달 — 재도전 필요';
    w.appendChild(g); w.appendChild(t);
    // domain summary
    const dom = document.createElement('div'); dom.className = 'st-domains';
    for (const d of S.domainSummary(s)) {
      const m = MENTORS[d.mentor];
      const row = document.createElement('div'); row.className = 'st-dom ' + (d.pass ? 'pass' : 'fail');
      row.textContent = `${d.pass ? '✅' : '❌'} ${d.title.replace(/^챕터 \d+ — /, '')} — ${d.correct}/${d.total}`;
      row.style.borderColor = m.color;
      dom.appendChild(row);
    }
    w.appendChild(dom);
    const pct = Math.round((s.ratio || 0) * 100);
    const line = document.createElement('p'); line.className = 'st-brief'; line.textContent = `종합 정답 점수 ${s.score}/${s.maxScore} (${pct}%)`;
    w.appendChild(line);
    if (s.passed) {
      const issue = this._btn('🎓 수료증 발급', () => this._showCertificate(), true);
      w.appendChild(issue);
    } else {
      const rp = document.createElement('p'); rp.className = 'st-foot'; rp.textContent = '모든 분야에서 60% 이상 + 종합 65% 이상이면 인증이 발급됩니다.';
      w.appendChild(rp);
    }
    w.appendChild(this._btn('다시 도전', () => this.start((this.seed + 1) % 100000)));
    w.appendChild(this._btn('타이틀로', () => this._showTitle()));
    this.root.appendChild(w);
  }

  // Generate a certificate on a canvas and offer download + on-screen view.
  _showCertificate() {
    const s = this.story; const cert = STORY.cert;
    const ov = document.createElement('div'); ov.className = 'st-overlay';
    const box = document.createElement('div'); box.className = 'st-cert-box';
    const canvas = this._drawCertificate(s, cert);
    canvas.className = 'st-cert-canvas';
    box.appendChild(canvas);
    const btns = document.createElement('div'); btns.className = 'st-actions';
    const dl = this._btn('⬇ PNG 다운로드', () => {
      const a = document.createElement('a'); a.download = 'aws-cloud-pro-certificate.png'; a.href = canvas.toDataURL('image/png'); a.click();
    }, true);
    btns.appendChild(dl);
    btns.appendChild(this._btn('닫기', () => ov.remove()));
    box.appendChild(btns);
    ov.appendChild(box); this.root.appendChild(ov);
  }

  _drawCertificate(s, cert) {
    const W = 1000, H = 700, dpr = 2;
    const canvas = document.createElement('canvas');
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = '100%'; canvas.style.maxWidth = W + 'px';
    const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
    // background
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#0d1117'); grad.addColorStop(1, '#16202e');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
    // border
    ctx.strokeStyle = '#ed7100'; ctx.lineWidth = 6; ctx.strokeRect(24, 24, W - 48, H - 48);
    ctx.strokeStyle = '#4dd0e1'; ctx.lineWidth = 2; ctx.strokeRect(36, 36, W - 72, H - 72);
    ctx.textAlign = 'center';
    // org
    ctx.fillStyle = '#8b98a8'; ctx.font = '600 20px system-ui, sans-serif';
    ctx.fillText(cert.org, W / 2, 110);
    // title
    ctx.fillStyle = '#ed7100'; ctx.font = '800 40px system-ui, sans-serif';
    ctx.fillText('CERTIFICATE OF COMPLETION', W / 2, 170);
    ctx.fillStyle = '#e6edf3'; ctx.font = '600 24px system-ui, sans-serif';
    ctx.fillText(cert.title, W / 2, 210);
    // recipient
    ctx.fillStyle = '#8b98a8'; ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('이 수료증은 다음 과정을 성공적으로 완료했음을 증명합니다', W / 2, 270);
    ctx.fillStyle = '#4dd0e1'; ctx.font = '800 44px system-ui, sans-serif';
    ctx.fillText('아키 (Archi)', W / 2, 330);
    // grade + score
    ctx.fillStyle = '#ffb020'; ctx.font = '800 30px system-ui, sans-serif';
    ctx.fillText(`등급 ${s.grade}  ·  ${Math.round((s.ratio || 0) * 100)}%`, W / 2, 385);
    // domains row
    const doms = S.domainSummary(s);
    const dw = (W - 160) / doms.length;
    doms.forEach((d, i) => {
      const x = 80 + dw * i + dw / 2;
      ctx.fillStyle = MENTORS[d.mentor].color;
      ctx.beginPath(); ctx.arc(x, 450, 26, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '700 20px system-ui, sans-serif';
      ctx.fillText('✓', x, 458);
      ctx.fillStyle = '#e6edf3'; ctx.font = '600 14px system-ui, sans-serif';
      ctx.fillText(cert.domains[i], x, 500);
      ctx.fillStyle = '#8b98a8'; ctx.font = '12px system-ui, sans-serif';
      ctx.fillText(`${d.correct}/${d.total}`, x, 518);
    });
    // seal
    ctx.strokeStyle = '#ed7100'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(W / 2, 590, 40, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#ed7100'; ctx.font = '800 26px system-ui, sans-serif'; ctx.fillText('AWS', W / 2, 588);
    ctx.fillStyle = '#8b98a8'; ctx.font = '10px system-ui, sans-serif'; ctx.fillText('CLOUD PRO', W / 2, 604);
    // id (deterministic from seed+score, no Date)
    const id = 'NTA-' + (this.seed) + '-' + s.score + '-' + s.correct;
    ctx.fillStyle = '#8b98a8'; ctx.font = '13px monospace';
    ctx.fillText('Certificate ID: ' + id, W / 2, 660);
    return canvas;
  }

  // ---- helpers -------------------------------------------------------------
  _btn(label, onClick, primary = false) { const b = document.createElement('button'); b.className = 'st-btn' + (primary ? ' primary' : ''); b.textContent = label; b.addEventListener('click', onClick); return b; }

  // Screenshot/validation driver.
  async __drive(state) {
    await this._preload();
    if (state === 'title') return this._showTitle();
    this.start(this.seed);
    if (state === 'scene') return this._render();
    if (state === 'mcq') { S.beginChapter(this.story); this._render(); return; }
    if (state === 'puzzle') {
      // jump to first puzzle
      let guard = 0;
      while (guard++ < 100) {
        if (S.view(this.story) === 'scene') { S.beginChapter(this.story); continue; }
        const q = S.currentQuestion(this.story);
        if (q && q.type === 'puzzle') break;
        S.next(this.story);
        if (this.story.over) break;
      }
      this._render(); return;
    }
    if (state === 'result' || state === 'cert') {
      // play all correct
      let guard = 0;
      while (!this.story.over && guard++ < 200) {
        if (S.view(this.story) === 'scene') { S.beginChapter(this.story); continue; }
        const q = S.currentQuestion(this.story);
        if (!q) { S.next(this.story); continue; }
        if (q.type === 'puzzle') { for (const k of S.puzzleBlankKeys(q)) S.setPuzzleFill(this.story, S.qid(this.story), k, q.blanks[k].answer); S.gradePuzzle(this.story, q, S.qid(this.story)); }
        else S.answerMcq(this.story, q, S.qid(this.story), q.answer);
        S.next(this.story);
      }
      this._render();
      if (state === 'cert') this._showCertificate();
      return;
    }
    this._render();
  }

  __validate() {
    const rep = { checks: [], errors: [] };
    const chk = (n, c, d = '') => rep.checks.push({ name: n, pass: !!c, detail: d });
    try {
      const s = S.createStory(42);
      let steps = 0, guard = 0;
      while (!s.over && guard++ < 300) {
        if (S.view(s) === 'scene') { S.beginChapter(s); continue; }
        const q = S.currentQuestion(s);
        if (!q) { S.next(s); continue; }
        if (q.type === 'puzzle') { for (const k of S.puzzleBlankKeys(q)) S.setPuzzleFill(s, S.qid(s), k, q.blanks[k].answer); const r = S.gradePuzzle(s, q, S.qid(s)); chk('퍼즐 만점', r.perfect); }
        else { const r = S.answerMcq(s, q, S.qid(s), q.answer); chk('MCQ 정답', r.ok); }
        steps++; S.next(s);
      }
      chk('문항 수 ≥ 12', steps >= 12, String(steps));
      chk('전정답 시 인증 합격', s.passed, 'grade ' + s.grade);
      chk('아이콘 로드', Object.values(this.iconCache).some((v) => v && v.includes('<svg')));
      chk('멘토 포트레이트 로드', Object.values(this.charCache).some((v) => v));
    } catch (e) { rep.errors.push(String(e && e.message || e)); }
    rep.pass = rep.checks.every((c) => c.pass) && rep.errors.length === 0;
    return rep;
  }
}
