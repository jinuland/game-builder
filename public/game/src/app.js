// GameApp — browser controller. Wires engine <-> renderer <-> audio <-> DOM UI.
// Handles input (mouse/touch/keyboard), scene flow, save/load, telemetry.
import * as E from './engine.js';
import { GridRenderer } from './render.js';
import { AudioEngine } from './audio.js';
import {
  MODULES, PATTERN_CARDS, REQUIREMENT_CARDS, INCIDENTS, ACTS, ROADMAP_PATHS,
  CONSTRAINTS, PALETTE, FAMILIES,
} from './content.js';

const SAVE_KEY = 'architect_zero_save_v1';
const ASSET_BASE = 'assets/';
const CHAR_FILES = { archi: 'char_archi.webp', kang: 'char_kang.webp', yoo: 'char_yoo.webp', incbot: 'char_incbot.webp' };
const BG_BY_ACT = { 1: 'bg_serverroom', 2: 'bg_serverroom', 3: 'bg_serverroom', 4: 'bg_roadmap', 5: 'bg_audit' };
const CHAR_NAMES = { archi: '아키', kang: '강 디렉터', yoo: '클라이언트 유 대리', incbot: '인시던트 봇' };

export class GameApp {
  constructor(root, { seed = 42, timeScale = 1 } = {}) {
    this.root = root;
    this.seed = seed;
    this.timeScale = timeScale;
    this.audio = new AudioEngine();
    this.images = {};
    this.selectedModule = null;
    this.selectedRot = 0;
    this.dragging = null;      // {moduleId, rot} while dragging from palette
    this.pointer = { x: 0, y: 0, active: false };
    this.relocating = null;    // placementId being relocated
    this.scene = 'title';      // title | briefing | play | draft | roadmap | actend | audit | ending
    this.challengeMode = false;
    this.challengeUnlocked = localStorage.getItem('az_challenge_unlocked') === '1';
    this._build();
  }

  // ---- DOM scaffolding -----------------------------------------------------
  _build() {
    this.root.innerHTML = '';
    this.root.className = 'az-root';
    const canvas = document.createElement('canvas');
    canvas.className = 'az-canvas';
    this.canvas = canvas;

    this.leftPanel = this._panel('az-left');
    this.centerWrap = document.createElement('div');
    this.centerWrap.className = 'az-center';
    this.centerWrap.appendChild(canvas);
    this.overlay = document.createElement('div');
    this.overlay.className = 'az-overlay';
    this.centerWrap.appendChild(this.overlay);
    this.rightPanel = this._panel('az-right');

    this.root.appendChild(this.leftPanel);
    this.root.appendChild(this.centerWrap);
    this.root.appendChild(this.rightPanel);

    this.renderer = new GridRenderer(canvas);
    this._resize();
    window.addEventListener('resize', () => this._resize());

    this._bindInput();
    this._showTitle();
    this._loop();
  }

  _panel(cls) { const d = document.createElement('div'); d.className = `az-panel ${cls}`; return d; }

  _resize() {
    const rect = this.centerWrap.getBoundingClientRect();
    const dpr = this.renderer.dpr;
    const w = Math.max(320, rect.width || 800);
    const h = Math.max(320, rect.height || 600);
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.renderer.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // ---- asset loading -------------------------------------------------------
  async loadAssets() {
    const load = (key, file) => new Promise((res) => {
      const img = new Image();
      img.onload = () => { this.images[key] = img; res(true); };
      img.onerror = () => { this.images[key] = null; res(false); };
      img.src = ASSET_BASE + file;
    });
    const jobs = [];
    for (const [k, f] of Object.entries(CHAR_FILES)) jobs.push(load(k, f));
    for (const b of ['bg_serverroom', 'bg_crisis', 'bg_roadmap', 'bg_audit']) jobs.push(load(b, b + '.webp'));
    await Promise.all(jobs);
  }

  // ---- game lifecycle ------------------------------------------------------
  newGame(seed = this.seed, challenge = false) {
    this.game = E.createGame(seed);
    this.challengeMode = challenge;
    this.audio.init(); this.audio.resume();
    if (challenge) { this.game.actIndex = 0; }
    E.startAct(this.game);
    this._markActStart();
    this._enterBriefing();
  }

  _markActStart() {
    const act = E.currentAct(this.game);
    this._actStartTime = performance.now();
    this._updateBackground();
  }

  _updateBackground(crisis = false) {
    const act = E.currentAct(this.game);
    let key = BG_BY_ACT[act.n];
    if (crisis && this.game.incidents.length) key = 'bg_crisis';
    this.renderer.setBackground(this.images[key] || null);
  }

  save() {
    try {
      const data = { version: 1, save: E.serialize(this.game), scene: this.scene, challenge: this.challengeMode };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
      return true;
    } catch { return false; }
  }
  hasSave() { return !!localStorage.getItem(SAVE_KEY); }
  loadSave() {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    this.game = E.deserialize(data.save);
    this.challengeMode = !!data.challenge;
    this.audio.init(); this.audio.resume();
    E.startAct(this.game); // resume at first turn of saved act (per spec)
    this._markActStart();
    this._enterBriefing();
    return true;
  }

  // ---- scenes --------------------------------------------------------------
  _showTitle() {
    this.scene = 'title';
    this.leftPanel.innerHTML = '';
    this.rightPanel.innerHTML = '';
    this.renderer.setBackground(this.images.bg_serverroom || null);
    const cont = document.createElement('div');
    cont.className = 'az-title';
    cont.innerHTML = '';
    const h = document.createElement('h1'); h.textContent = '아키텍트 제로';
    const sub = document.createElement('p'); sub.className = 'az-sub'; sub.textContent = '설계자의 계단 — 그리드 배치 × 패턴 덱빌딩 퍼즐';
    const startBtn = this._btn('새 게임', () => this.newGame(this.seed));
    startBtn.classList.add('az-primary');
    cont.appendChild(h); cont.appendChild(sub); cont.appendChild(startBtn);
    if (this.hasSave()) cont.appendChild(this._btn('이어하기', () => this.loadSave()));
    if (this.challengeUnlocked) cont.appendChild(this._btn('챌린지 모드', () => this.newGame((this._chSeed = (Date.now() % 100000) + 1), true)));
    const mute = this._btn('🔊 사운드', () => { const m = !this.audio.muted; this.audio.setMuted(m); mute.textContent = m ? '🔇 사운드' : '🔊 사운드'; });
    cont.appendChild(mute);
    const help = document.createElement('p'); help.className = 'az-help';
    help.textContent = '조작: 좌측 모듈 클릭→그리드 클릭 배치 · R 회전 · Ctrl+Z 취소 · Space 턴 종료';
    cont.appendChild(help);
    this.overlay.innerHTML = ''; this.overlay.appendChild(cont);
    this.overlay.style.display = 'flex';
  }

  _enterBriefing() {
    const act = E.currentAct(this.game);
    this.scene = 'briefing';
    const cont = document.createElement('div');
    cont.className = 'az-briefing';
    const charKey = act.character;
    const img = this.images[charKey];
    const portrait = document.createElement('div');
    portrait.className = 'az-portrait';
    if (img) { const im = new Image(); im.src = img.src; im.className = 'az-portrait-img'; portrait.appendChild(im); }
    const speaker = document.createElement('div'); speaker.className = 'az-speaker'; speaker.textContent = CHAR_NAMES[charKey] || '';
    portrait.appendChild(speaker);
    const box = document.createElement('div'); box.className = 'az-briefing-box';
    const title = document.createElement('h2'); title.textContent = act.title;
    const text = document.createElement('p'); text.textContent = act.briefing;
    const go = this._btn('설계 시작', () => this._enterPlayWithSteps());
    go.classList.add('az-primary');
    box.appendChild(title); box.appendChild(text); box.appendChild(go);
    cont.appendChild(portrait); cont.appendChild(box);
    this.overlay.innerHTML = ''; this.overlay.appendChild(cont);
    this.overlay.style.display = 'flex';
    this._updateBackground();
    this.audio.playTrack(act.boss ? 'audit' : 'calm');
  }

  _enterPlay() {
    const act = E.currentAct(this.game);
    this.scene = 'play';
    this.overlay.style.display = 'none';
    this.overlay.innerHTML = '';
    // maybe show client Yoo dropping requirement (act has requirements always)
    this._renderPanels();
    this._updateBackground();
    if (act.boss) this._setupBoss();
    // onboarding hint on the very first turn of act 1 (no tutorial wall, just a nudge)
    if (act.n === 1 && this.game.turn === 1 && !this._onboarded) {
      this._onboarded = true;
      this._toast('왼쪽에서 모듈을 고르고 그리드 칸을 클릭해 배치하세요. 요구사항 모듈을 놓으면 시너지를 얻습니다.', 4500);
    }
  }

  _setupBoss() {
    // ensure constraints exist (if player skipped roadmap somehow)
    if (!this.game.bossConstraints.length) this.game.bossConstraints = ROADMAP_PATHS.fast.constraints.slice();
  }

  // pattern draft between acts (acts that allow patterns, shown at act start after briefing? we show at act end -> next act). We trigger draft at start of play for acts 2+.
  _enterDraft() {
    this.scene = 'draft';
    const offers = E.offerPatterns(this.game);
    this._pendingOffers = offers;
    const cont = document.createElement('div'); cont.className = 'az-draft';
    const img = this.images.kang;
    if (img) { const im = new Image(); im.src = img.src; im.className = 'az-draft-portrait'; cont.appendChild(im); }
    const h = document.createElement('h2'); h.textContent = '패턴 드래프트 — 3장 중 1장 선택'; cont.appendChild(h);
    const p = document.createElement('p'); p.className = 'az-sub'; p.textContent = '일관된 아키텍처 방향이 시너지를 키운다. 같은 계열 3장이면 기술 부채 발생이 절반으로 줄어든다.'; cont.appendChild(p);
    const row = document.createElement('div'); row.className = 'az-card-row';
    for (const cid of offers) row.appendChild(this._patternCardEl(cid, true));
    cont.appendChild(row);
    this.overlay.innerHTML = ''; this.overlay.appendChild(cont);
    this.overlay.style.display = 'flex';
  }

  _pickPattern(cid) {
    E.pickPattern(this.game, cid);
    this.audio.cardAdd();
    this.audio.synergyCombo();
    this._enterPlay();
  }

  _enterRoadmap() {
    this.scene = 'roadmap';
    const cont = document.createElement('div'); cont.className = 'az-roadmap';
    const h = document.createElement('h2'); h.textContent = '로드맵 분기 — 다음 스프린트 경로를 선택하라'; cont.appendChild(h);
    const row = document.createElement('div'); row.className = 'az-card-row';
    let tone = 0;
    for (const [pid, path] of Object.entries(ROADMAP_PATHS)) {
      const el = document.createElement('div'); el.className = 'az-path-card';
      const myTone = tone++;
      el.innerHTML = '';
      const icon = document.createElement('div'); icon.className = 'az-path-icon'; icon.textContent = path.icon;
      const nm = document.createElement('h3'); nm.textContent = path.name;
      const tip = document.createElement('p'); tip.textContent = path.tip;
      const preview = document.createElement('div'); preview.className = 'az-path-preview';
      preview.textContent = '예상 보스 제약: ' + path.constraints.map((c) => CONSTRAINTS[c].name).join(' · ');
      const btn = this._btn('이 경로 선택', () => this._chooseRoadmap(pid));
      el.appendChild(icon); el.appendChild(nm); el.appendChild(tip); el.appendChild(preview); el.appendChild(btn);
      el.addEventListener('mouseenter', () => this.audio.roadmap(myTone));
      row.appendChild(el);
    }
    cont.appendChild(row);
    this.overlay.innerHTML = ''; this.overlay.appendChild(cont);
    this.overlay.style.display = 'flex';
  }

  _chooseRoadmap(pid) {
    E.chooseRoadmap(this.game, pid);
    this.audio.roadmap(0);
    this._toast(`${ROADMAP_PATHS[pid].name} 경로 선택. 기술 부채 ${ROADMAP_PATHS[pid].debt >= 0 ? '+' : ''}${ROADMAP_PATHS[pid].debt}`);
    // roadmap acts also allow patterns -> chain into draft
    if (this._pendingDraft) { this._pendingDraft = false; this._enterDraft(); return; }
    this.overlay.style.display = 'none';
    this.scene = 'play';
    this._enterPlay();
  }

  // ---- turn / act flow -----------------------------------------------------
  endTurn() {
    if (this.scene !== 'play') return;
    const predict = E.predictTurnEndDebt(this.game);
    const res = E.endTurn(this.game);
    // handle events -> effects/audio
    this._applyEvents(res.events);
    if (this.game.techDebt > E.DEBT_WARN) this.audio.debtWarn();
    this.save();
    if (res.actEnded) {
      this._onActEnd();
    } else {
      // incident spawn feedback
      if (res.events.some((e) => e.t === 'incident')) {
        this.renderer.triggerShake(5, 300);
        this.audio.incident();
        this._updateBackground(true);
        this.audio.playTrack('tension');
      }
      this._renderPanels();
    }
  }

  _applyEvents(events) {
    for (const e of events) {
      if (e.t === 'crash') { this.audio.crash(); this.renderer.triggerShake(8, 500); this._toast('시스템 크래시! 모듈 강제 제거, 기술 부채 60으로 리셋'); }
      if (e.t === 'incident') {
        const p = this.game.placements.find((x) => x.id === e.placementId);
        if (p) for (const [c, r] of p.cells) this.renderer.addEffect({ type: 'crack', c, r, dur: 500 });
      }
      if (e.t === 'chain') this._toast('연쇄 장애! 인접 모듈이 추가로 다운됨');
      if (e.t === 'incidentTimeout') this._toast('장애 미해결 — 기술 부채 +20');
      if (e.t === 'projectWarning') this._toast('프로젝트 경고! 최종 감사 등급 상한이 A로 제한됨');
    }
  }

  _onActEnd() {
    const act = E.currentAct(this.game);
    if (act.boss) { this._enterAudit(); return; }
    this.scene = 'actend';
    const cont = document.createElement('div'); cont.className = 'az-actend';
    const h = document.createElement('h2'); h.textContent = `${act.title} 완료`;
    const stats = document.createElement('div'); stats.className = 'az-actend-stats';
    stats.appendChild(this._stat('시너지 점수', this.game.synergy));
    stats.appendChild(this._stat('기술 부채', this.game.techDebt));
    stats.appendChild(this._stat('배치 모듈', this.game.placements.length));
    const next = this._btn('다음 막으로', () => this._advance());
    next.classList.add('az-primary');
    cont.appendChild(h); cont.appendChild(stats); cont.appendChild(next);
    this.overlay.innerHTML = ''; this.overlay.appendChild(cont);
    this.overlay.style.display = 'flex';
  }

  _advance() {
    const prevAct = E.currentAct(this.game);
    if (!E.nextAct(this.game)) { this._enterAudit(); return; }
    this._markActStart();
    const act = E.currentAct(this.game);
    this._enterBriefing();
    // schedule draft/roadmap after briefing via _enterPlay override
    this._pendingDraft = act.patterns;
    this._pendingRoadmap = !!act.roadmap;
  }

  // Override play entry to inject draft/roadmap steps
  _enterPlayWithSteps() {
    if (this._pendingRoadmap) { this._pendingRoadmap = false; this._enterRoadmap(); return; }
    if (this._pendingDraft) { this._pendingDraft = false; this._enterDraft(); return; }
    this._enterPlay();
  }

  _enterAudit() {
    this.scene = 'audit';
    const ending = E.finalizeAudit(this.game);
    this._updateBackground();
    this.renderer.setBackground(this.images.bg_audit || null);
    if (ending.grade === 'S') {
      this.audio.fanfare();
      // sparkle burst
      for (let i = 0; i < 40; i++) {
        this.renderer.addEffect({ type: 'sparkle', c: Math.random() * this.game.grid.cols, r: this.game.grid.rows - 1, dx: (Math.random() - 0.5) * 30, dur: 1500 });
      }
    } else if (ending.grade === 'F') { this.audio.crash(); this.renderer.triggerShake(8, 500); }
    else this.audio.synergyCombo();

    if (ending.grade !== 'F' && !this.challengeUnlocked) {
      this.challengeUnlocked = true; localStorage.setItem('az_challenge_unlocked', '1');
    }
    this._showEnding(ending);
  }

  _showEnding(ending) {
    this.scene = 'ending';
    const cont = document.createElement('div'); cont.className = 'az-ending az-grade-' + ending.grade;
    const gEl = document.createElement('div'); gEl.className = 'az-grade'; gEl.textContent = ending.grade;
    const h = document.createElement('h2'); h.textContent = ending.title;
    const p = document.createElement('p'); p.textContent = ending.text;
    const cons = document.createElement('div'); cons.className = 'az-constraints';
    for (const c of ending.constraints) {
      const row = document.createElement('div');
      row.className = 'az-con ' + (c.met ? 'met' : 'unmet');
      row.textContent = `${c.met ? '✅' : '❌'} ${c.name}`;
      cons.appendChild(row);
    }
    const stats = document.createElement('div'); stats.className = 'az-actend-stats';
    stats.appendChild(this._stat('최종 시너지', this.game.synergy));
    stats.appendChild(this._stat('기술 부채', this.game.techDebt));
    stats.appendChild(this._stat('충족 제약', `${ending.metCount}/${ending.total}`));
    cont.appendChild(gEl); cont.appendChild(h); cont.appendChild(p); cont.appendChild(cons); cont.appendChild(stats);

    if (ending.grade === 'F') {
      const retry = this._btn('막 4 재검토 (기술 부채 50% 유지)', () => {
        E.restartFromAct4(this.game); this._markActStart(); localStorage.removeItem(SAVE_KEY);
        this._enterBriefing(); this._pendingRoadmap = true;
      });
      retry.classList.add('az-primary');
      cont.appendChild(retry);
    } else {
      cont.appendChild(this._btn('타이틀로', () => { localStorage.removeItem(SAVE_KEY); this._showTitle(); }));
      if (this.challengeUnlocked) cont.appendChild(this._btn('챌린지 모드', () => this.newGame((Date.now() % 100000) + 1, true)));
    }
    this.overlay.innerHTML = ''; this.overlay.appendChild(cont);
    this.overlay.style.display = 'flex';
    this.audio.stopAll();
  }

  // ---- panels (UI) ---------------------------------------------------------
  _renderPanels() {
    this._renderLeft();
    this._renderRight();
  }

  _renderLeft() {
    const act = E.currentAct(this.game);
    const g = this.game;
    this.leftPanel.innerHTML = '';
    // active requirement
    const reqBox = document.createElement('div'); reqBox.className = 'az-section';
    reqBox.appendChild(this._h3('요구사항 카드'));
    if (g.activeReq) {
      const req = REQUIREMENT_CARDS[g.activeReq];
      const need = MODULES[req.need];
      const card = document.createElement('div'); card.className = 'az-req-card';
      const met = E.requirementMet(g);
      card.innerHTML = '';
      const nm = document.createElement('div'); nm.className = 'az-card-name'; nm.textContent = req.name;
      const tip = document.createElement('div'); tip.className = 'az-card-tip'; tip.textContent = req.tip;
      const needEl = document.createElement('div'); needEl.className = 'az-card-need';
      needEl.textContent = `필요 모듈: ${need.name} ${met ? '✅ 충족' : '⚠ 미충족'}`;
      needEl.style.color = met ? PALETTE.cyan : PALETTE.warnYellow;
      const rw = document.createElement('div'); rw.className = 'az-card-tip'; rw.textContent = `보상 시너지 +${req.reward}`;
      card.appendChild(nm); card.appendChild(tip); card.appendChild(needEl); card.appendChild(rw);
      reqBox.appendChild(card);
    }
    this.leftPanel.appendChild(reqBox);

    // module palette
    const palBox = document.createElement('div'); palBox.className = 'az-section';
    palBox.appendChild(this._h3('모듈 팔레트'));
    const grid = document.createElement('div'); grid.className = 'az-palette';
    for (const mod of Object.values(MODULES)) {
      if (mod.unlockAct > act.n) continue;
      const b = document.createElement('button');
      b.className = 'az-mod-btn' + (this.selectedModule === mod.id ? ' sel' : '');
      b.style.borderColor = mod.color;
      b.title = mod.tip;
      const shape = mod.cells.length;
      b.innerHTML = '';
      const gl = document.createElement('span'); gl.className = 'az-mod-glyph'; gl.textContent = mod.glyph; gl.style.color = mod.color;
      const nm = document.createElement('span'); nm.className = 'az-mod-name'; nm.textContent = mod.short;
      const sz = document.createElement('span'); sz.className = 'az-mod-size'; sz.textContent = `${shape}칸${mod.rotatable ? ' ↻' : ''}`;
      b.appendChild(gl); b.appendChild(nm); b.appendChild(sz);
      b.addEventListener('click', () => this._selectModule(mod.id));
      grid.appendChild(b);
    }
    palBox.appendChild(grid);
    this.leftPanel.appendChild(palBox);

    // deck
    if (g.deck.length) {
      const deckBox = document.createElement('div'); deckBox.className = 'az-section';
      deckBox.appendChild(this._h3(`패턴 덱 (${g.deck.length})`));
      const list = document.createElement('div'); list.className = 'az-deck';
      const counts = {};
      g.deck.forEach((c) => counts[c] = (counts[c] || 0) + 1);
      for (const [cid, n] of Object.entries(counts)) {
        const card = PATTERN_CARDS[cid];
        const chip = document.createElement('div'); chip.className = 'az-deck-chip';
        chip.style.borderColor = FAMILIES[card.family].color;
        chip.textContent = card.name + (n > 1 ? ` ×${n}` : '');
        chip.title = card.text;
        if (card.refactor) {
          chip.classList.add('usable');
          chip.addEventListener('click', () => { if (E.useRefactor(g, cid)) { this._toast(`리팩터링: 기술 부채 -${card.refactor}`); this.audio.recover(); this._renderPanels(); } });
        }
        list.appendChild(chip);
      }
      deckBox.appendChild(list);
      // active family philosophy
      const fams = E.activeFamilies(g);
      if (fams.length) {
        const ph = document.createElement('div'); ph.className = 'az-philosophy';
        ph.textContent = '⚙ 아키텍처 철학: ' + fams.map((f) => FAMILIES[f].name).join(', ') + ' (부채 발생 절반)';
        deckBox.appendChild(ph);
      }
      this.leftPanel.appendChild(deckBox);
    }
  }

  _renderRight() {
    const g = this.game; const act = E.currentAct(this.game);
    this.rightPanel.innerHTML = '';
    // tech debt thermometer
    const debtBox = document.createElement('div'); debtBox.className = 'az-section';
    debtBox.appendChild(this._h3('기술 부채'));
    const therm = document.createElement('div'); therm.className = 'az-therm';
    const fill = document.createElement('div'); fill.className = 'az-therm-fill';
    fill.style.height = g.techDebt + '%';
    fill.style.background = this._debtColor(g.techDebt);
    therm.appendChild(fill);
    const val = document.createElement('div'); val.className = 'az-therm-val'; val.textContent = g.techDebt;
    const wrap = document.createElement('div'); wrap.className = 'az-therm-wrap';
    wrap.appendChild(therm); wrap.appendChild(val);
    debtBox.appendChild(wrap);
    if (g.techDebt > E.DEBT_WARN) {
      const warn = document.createElement('div'); warn.className = 'az-warn'; warn.textContent = '⚠ 부채 이자 +3/턴';
      debtBox.appendChild(warn);
    }
    this.rightPanel.appendChild(debtBox);

    // synergy
    const synBox = document.createElement('div'); synBox.className = 'az-section';
    synBox.appendChild(this._h3('시너지 점수'));
    const syn = document.createElement('div'); syn.className = 'az-synergy'; syn.textContent = g.synergy;
    synBox.appendChild(syn);
    this.rightPanel.appendChild(synBox);

    // act progress / roadmap minimap
    const mapBox = document.createElement('div'); mapBox.className = 'az-section';
    mapBox.appendChild(this._h3('로드맵'));
    const mini = document.createElement('div'); mini.className = 'az-minimap';
    for (const a of ACTS) {
      const dot = document.createElement('div');
      dot.className = 'az-map-dot' + (a.n === act.n ? ' cur' : (a.n < act.n ? ' done' : ''));
      dot.textContent = a.n;
      dot.title = a.title;
      mini.appendChild(dot);
    }
    mapBox.appendChild(mini);
    const turnInfo = document.createElement('div'); turnInfo.className = 'az-turninfo';
    turnInfo.textContent = `막 ${act.n} · 턴 ${g.turn}/${act.turns}`;
    mapBox.appendChild(turnInfo);
    if (g.roadmap) {
      const rp = document.createElement('div'); rp.className = 'az-turninfo';
      rp.textContent = '경로: ' + ROADMAP_PATHS[g.roadmap].name;
      mapBox.appendChild(rp);
    }
    this.rightPanel.appendChild(mapBox);

    // boss constraints (act 5)
    if (act.boss && g.bossConstraints.length) {
      const bc = document.createElement('div'); bc.className = 'az-section';
      bc.appendChild(this._h3('감사 제약'));
      const cons = E.evaluateConstraints(g);
      for (const c of cons) {
        const row = document.createElement('div'); row.className = 'az-con ' + (c.met ? 'met' : 'unmet');
        row.textContent = `${c.met ? '✅' : '⬜'} ${c.name}`;
        row.title = CONSTRAINTS[c.id].tip;
        bc.appendChild(row);
      }
      this.rightPanel.appendChild(bc);
    }

    // incidents
    if (g.incidents.length) {
      const incBox = document.createElement('div'); incBox.className = 'az-section az-incident';
      incBox.appendChild(this._h3('⚠ 활성 장애'));
      for (const inc of g.incidents) {
        const row = document.createElement('div'); row.className = 'az-inc-row';
        row.textContent = `${INCIDENTS[inc.incidentId].name} — ${inc.turnsLeft}턴 내 복구`;
        incBox.appendChild(row);
      }
      const hint = document.createElement('div'); hint.className = 'az-card-tip';
      hint.textContent = '다운된 슬롯(빨간 X)을 클릭 → 빈 칸 클릭으로 재배치';
      incBox.appendChild(hint);
      this.rightPanel.appendChild(incBox);
    }

    // end turn button
    const endBtn = this._btn(`턴 종료 (Space)`, () => this._confirmEndTurn());
    endBtn.classList.add('az-primary', 'az-endturn');
    this.rightPanel.appendChild(endBtn);
    const undoBtn = this._btn('취소 (Ctrl+Z)', () => this._undo());
    this.rightPanel.appendChild(undoBtn);
  }

  _confirmEndTurn() {
    const predict = E.predictTurnEndDebt(this.game);
    const sign = predict >= 0 ? '+' : '';
    this._toast(`턴 종료 — 예상 기술 부채 ${sign}${predict}`, 1200);
    this.endTurn();
  }

  // ---- input ---------------------------------------------------------------
  _selectModule(id) {
    this.selectedModule = id;
    this.selectedRot = 0;
    this.relocating = null;
    this._renderLeft();
  }

  _bindInput() {
    const c = this.canvas;
    const getXY = (ev) => {
      const rect = c.getBoundingClientRect();
      const t = ev.touches ? ev.touches[0] : ev;
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };
    const onMove = (ev) => {
      if (this.scene !== 'play') return;
      const { x, y } = getXY(ev);
      this.pointer = { x, y, active: true };
      this._updateHover(x, y);
    };
    const onDown = (ev) => {
      if (this.scene !== 'play') return;
      this.audio.resume();
      const { x, y } = getXY(ev);
      this._onClick(x, y);
      ev.preventDefault();
    };
    c.addEventListener('mousemove', onMove);
    c.addEventListener('mousedown', onDown);
    c.addEventListener('mouseleave', () => { this.renderer.hover = null; this.pointer.active = false; });
    c.addEventListener('touchstart', onDown, { passive: false });
    c.addEventListener('touchmove', (ev) => { onMove(ev); ev.preventDefault(); }, { passive: false });

    window.addEventListener('keydown', (ev) => {
      if (ev.key === 'r' || ev.key === 'R') { this._rotate(); }
      else if (ev.key === ' ') { if (this.scene === 'play') { ev.preventDefault(); this._confirmEndTurn(); } }
      else if ((ev.ctrlKey || ev.metaKey) && (ev.key === 'z' || ev.key === 'Z')) { ev.preventDefault(); this._undo(); }
      else if (ev.key === 'Escape') { this.renderer.hover = null; this.selectedModule = null; this.relocating = null; this._renderLeft(); }
    });

    // shake gesture (mobile) -> undo, via devicemotion
    if (window.DeviceMotionEvent) {
      let last = 0;
      window.addEventListener('devicemotion', (ev) => {
        const a = ev.accelerationIncludingGravity; if (!a) return;
        const mag = Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);
        const now = performance.now();
        if (mag > 40 && now - last > 1000) { last = now; this._undo(); }
      });
    }
  }

  _rotate() {
    if (this.scene !== 'play') return;
    if (this.selectedModule && MODULES[this.selectedModule].rotatable) {
      this.selectedRot = (this.selectedRot + 1) % 4;
      if (this.pointer.active) this._updateHover(this.pointer.x, this.pointer.y);
      this.audio.place();
    }
  }

  _updateHover(x, y) {
    const g = this.game;
    if (!g || !g.grid) return;
    const cell = this.renderer.cellAt(g, x, y);
    if (!cell || !this.selectedModule) { this.renderer.hover = null; return; }
    const chk = E.canPlace(g, this.selectedModule, cell.c, cell.r, this.selectedRot);
    this.renderer.hover = { cells: chk.cells, ok: chk.ok };
  }

  _onClick(x, y) {
    const g = this.game;
    const cell = this.renderer.cellAt(g, x, y);
    if (!cell) return;

    // relocating a downed module
    if (this.relocating != null) {
      const res = E.relocateModule(g, this.relocating, cell.c, cell.r, this.selectedRot);
      if (res.ok) {
        this.audio.recover();
        this.renderer.addEffect({ type: 'flash', c: cell.c, r: cell.r, dur: 400 });
        this._updateBackground();
        if (!g.incidents.length) this.audio.playTrack(E.currentAct(g).boss ? 'audit' : 'calm');
        if (res.crisisBonus) this._toast(`위기 극복! 시너지 +${res.crisisBonus}`);
        this.relocating = null;
        this._renderPanels();
      } else {
        this._toast('그 위치에는 재배치할 수 없습니다');
      }
      return;
    }

    // clicking a downed module selects it for relocation
    const pid = g.grid.cells[E.idx(g, cell.c, cell.r)];
    if (pid != null) {
      const p = g.placements.find((x2) => x2.id === pid);
      if (p && p.down) {
        // failover option if available
        const hasFO = g.deck.some((cid) => PATTERN_CARDS[cid]?.failover);
        if (hasFO) {
          const res = E.useFailover(g, pid);
          if (res.ok) { this.audio.recover(); this.renderer.addEffect({ type: 'flash', c: cell.c, r: cell.r, dur: 400 }); if (res.crisisBonus) this._toast(`위기 극복! 시너지 +${res.crisisBonus}`); this._updateBackground(); this._renderPanels(); return; }
        }
        this.relocating = pid; this.selectedModule = p.moduleId; this.selectedRot = 0;
        this._toast('재배치할 빈 칸을 클릭하세요');
        return;
      }
    }

    // place selected module
    if (this.selectedModule) {
      const placement = E.placeModule(g, this.selectedModule, cell.c, cell.r, this.selectedRot);
      if (placement) {
        this.audio.place();
        for (const [c, r] of placement.cells) this.renderer.addEffect({ type: 'ripple', c, r, dur: 400 });
        // synergy combo detection
        const before = g._prevSynergy || 0;
        if (g.synergy > before + 10) { this.audio.synergyCombo(); for (const [c, r] of placement.cells) this.renderer.addEffect({ type: 'pulse', c, r, dur: 600 }); }
        g._prevSynergy = g.synergy;
        this._renderPanels();
      } else {
        this._toast('배치 불가: 겹치거나 범위를 벗어남');
      }
    }
  }

  _undo() {
    if (this.scene !== 'play') return;
    if (E.undo(this.game)) { this.audio.place(); this._renderPanels(); this._toast('마지막 배치 취소'); }
  }

  // ---- helpers -------------------------------------------------------------
  _patternCardEl(cid, selectable) {
    const card = PATTERN_CARDS[cid];
    const el = document.createElement('div'); el.className = 'az-pattern-card';
    el.style.borderColor = FAMILIES[card.family].color;
    const fam = document.createElement('div'); fam.className = 'az-pc-fam'; fam.textContent = FAMILIES[card.family].name; fam.style.color = FAMILIES[card.family].color;
    const nm = document.createElement('h3'); nm.textContent = card.name;
    const txt = document.createElement('p'); txt.textContent = card.text;
    const syn = document.createElement('div'); syn.className = 'az-pc-syn'; syn.textContent = card.synergy ? `시너지 +${card.synergy}` : '';
    el.appendChild(fam); el.appendChild(nm); el.appendChild(txt); el.appendChild(syn);
    if (selectable) { el.classList.add('sel'); el.addEventListener('click', () => this._pickPattern(cid)); }
    return el;
  }

  _btn(label, onClick) {
    const b = document.createElement('button'); b.className = 'az-btn'; b.textContent = label;
    b.addEventListener('click', () => { this.audio.resume(); onClick(); });
    return b;
  }
  // Drive the game to a named state for screenshot evidence (browser validation).
  // States: briefing, play1, play1full, draft, incident, roadmap, boss, endingS.
  __driveTo(state) {
    const place = (mid) => {
      const g = this.game; let best = null, ba = -1;
      for (let r = 0; r < g.grid.rows; r++) for (let c = 0; c < g.grid.cols; c++) {
        const chk = E.canPlace(g, mid, c, r, 0); if (!chk.ok) continue;
        let adj = 0; for (const [cc, rr] of chk.cells) for (const [dc, dr] of [[1,0],[-1,0],[0,1],[0,-1]]) { const ni=(rr+dr)*g.grid.cols+(cc+dc); if (g.grid.cells[ni]!=null) adj++; }
        if (adj > ba) { ba = adj; best = { c, r }; }
      }
      if (best) return E.placeModule(g, mid, best.c, best.r, 0);
      return null;
    };
    this.newGame(42);
    if (state === 'briefing') return;
    this._enterPlayWithSteps();
    if (state === 'play1') return;
    if (state === 'play1full') {
      place('api_gateway'); place('cache'); place('database'); this._renderPanels(); return;
    }
    // advance to act 2 draft
    if (state === 'draft') {
      place('api_gateway'); place('cache'); this.endTurn(); this.endTurn(); this.endTurn();
      return; // actend -> click needed; instead force advance
    }
    if (state === 'boss' || state === 'endingS' || state === 'incident' || state === 'roadmap') {
      // fast-forward engine to target act, then sync scene
      const target = state === 'incident' ? 2 : (state === 'roadmap' ? 3 : 4);
      while (this.game.actIndex < target) {
        const act = E.currentAct(this.game);
        if (act.patterns) { const o = E.offerPatterns(this.game); const m = o.find((x)=>x.startsWith('p_micro'))||o[0]; if (m) E.pickPattern(this.game, m); }
        if (act.roadmap) E.chooseRoadmap(this.game, 'innovation');
        for (let t=0;t<act.turns;t++){ const need=REQUIREMENT_CARDS[this.game.activeReq]?.need; if(need) place(need); place('cache'); E.endTurn(this.game); }
        E.nextAct(this.game); this._markActStart();
      }
      if (state === 'roadmap') { this._enterRoadmap(); return; }
      if (state === 'incident') { E.maybeSpawnIncident(this.game); this.scene='play'; this.overlay.style.display='none'; this._updateBackground(true); this._renderPanels(); return; }
      if (state === 'boss') {
        E.chooseRoadmap(this.game, 'innovation');
        this.scene='play'; this.overlay.style.display='none'; this._enterPlay(); this._renderPanels(); return;
      }
      if (state === 'endingS') {
        E.chooseRoadmap(this.game, 'innovation');
        place('autoscaler'); place('cache'); place('api_gateway');
        E.setSynergy(this.game, 88); E.setTechDebt(this.game, 12);
        this._enterAudit(); return;
      }
    }
  }

  // Map requirement card id -> needed module id (used by validation harness).
  __reqNeedMap() {
    const m = {};
    for (const [id, r] of Object.entries(REQUIREMENT_CARDS)) m[id] = r.need;
    return m;
  }
  _h3(t) { const h = document.createElement('h3'); h.className = 'az-h3'; h.textContent = t; return h; }
  _stat(label, val) {
    const d = document.createElement('div'); d.className = 'az-stat';
    const v = document.createElement('div'); v.className = 'az-stat-val'; v.textContent = val;
    const l = document.createElement('div'); l.className = 'az-stat-label'; l.textContent = label;
    d.appendChild(v); d.appendChild(l); return d;
  }
  _debtColor(d) {
    if (d <= 30) return 'linear-gradient(0deg,#0088cc,#00e5ff)';
    if (d <= 55) return 'linear-gradient(0deg,#ffcc00,#ffe066)';
    if (d <= 75) return 'linear-gradient(0deg,#ff8800,#ffaa00)';
    return 'linear-gradient(0deg,#cc2200,#ff4422)';
  }
  _toast(msg, ms = 2000) {
    let t = this.root.querySelector('.az-toast');
    if (!t) { t = document.createElement('div'); t.className = 'az-toast'; this.root.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(this._toastT);
    this._toastT = setTimeout(() => t.classList.remove('show'), ms);
  }

  // ---- main loop -----------------------------------------------------------
  _loop() {
    const frame = (now) => {
      if (this.game && this.game.grid) this.renderer.draw(this.game, now);
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
}
