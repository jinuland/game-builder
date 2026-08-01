// Snow Royale browser app — Canvas top-down 2.5D renderer, input (WASD+mouse+keys,
// touch), HUD, parachute drop, minimap, scenes (title/drop/play/result). Drives
// the pure engine. Human is players[0]; NPCs run in engine.step.
import * as E from './engine.js';
import { AudioEngine } from './audio.js';
import { CONFIG as C, SKINS, actForSurvivors } from './config.js';

const ASSET = 'assets/';
const CHAR_FILES = { jack: 'char_jack.webp', white: 'char_white.webp', bear: 'char_bear.webp', bot: 'char_bot.webp' };
const BG_FILES = { plains: 'bg_plains.webp', village: 'bg_village.webp', lake: 'bg_lake.webp', lobby: 'bg_lobby.webp' };
const SAVE_KEY = 'snow_royale_save_v1';

export class SnowApp {
  constructor(root, { seed = null, timeScale = 1, autoStart = true } = {}) {
    this.root = root;
    this.seed = seed;
    this.timeScale = timeScale;
    this.audio = new AudioEngine();
    this.images = {};
    this.scene = 'title';
    this.keys = {};
    this.mouse = { x: 0, y: 0, down: false, downAt: 0 };
    this.dropTarget = null;
    this.challengeUnlocked = false;
    this._build();
    if (autoStart) this._loadAssets().then(() => this._showTitle());
  }

  _build() {
    this.root.innerHTML = '';
    this.root.className = 'sr-root';
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'sr-canvas';
    this.root.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.overlay = document.createElement('div');
    this.overlay.className = 'sr-overlay';
    this.root.appendChild(this.overlay);
    this.hud = document.createElement('div');
    this.hud.className = 'sr-hud';
    this.hud.style.display = 'none';
    this.root.appendChild(this.hud);
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._bindInput();
    this._loop();
  }

  _resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = this.root.clientWidth || 960, h = this.root.clientHeight || 600;
    this.canvas.width = w * dpr; this.canvas.height = h * dpr;
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.vw = w; this.vh = h;
  }

  async _loadAssets() {
    const load = (key, file) => new Promise((res) => {
      const img = new Image();
      img.onload = () => { this.images[key] = img; res(true); };
      img.onerror = () => { this.images[key] = null; res(false); };
      img.src = ASSET + file;
    });
    const jobs = [];
    for (const [k, f] of Object.entries(CHAR_FILES)) jobs.push(load(k, f));
    for (const [k, f] of Object.entries(BG_FILES)) jobs.push(load('bg_' + k, f));
    await Promise.all(jobs);
    this.assetsLoaded = true;
  }

  // ---- scenes --------------------------------------------------------------
  _showTitle() {
    this.scene = 'title'; this.hud.style.display = 'none';
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '스노우 로얄';
    const sub = document.createElement('p'); sub.className = 'sr-sub'; sub.textContent = 'Snow Royale — 3초의 침묵이 설원의 왕을 결정한다';
    c.appendChild(h); c.appendChild(sub);
    const diffRow = document.createElement('div'); diffRow.className = 'sr-diffrow';
    this._difficulty = this._difficulty || 'normal';
    for (const [k, label] of [['easy', '쉬움'], ['normal', '보통'], ['hard', '어려움']]) {
      const b = document.createElement('button'); b.className = 'sr-diff' + (this._difficulty === k ? ' on' : ''); b.textContent = label;
      b.addEventListener('click', () => { this._difficulty = k; this._showTitle(); });
      diffRow.appendChild(b);
    }
    c.appendChild(diffRow);
    const start = this._btn('낙하 시작', () => this.newGame(), true); c.appendChild(start);
    c.appendChild(this._btn('❓ 조작법', () => this._showHelp()));
    const mute = this._btn(this.audio.muted ? '🔇 사운드' : '🔊 사운드', () => { this.audio.setMuted(!this.audio.muted); mute.textContent = this.audio.muted ? '🔇 사운드' : '🔊 사운드'; });
    c.appendChild(mute);
    const foot = document.createElement('p'); foot.className = 'sr-foot'; foot.textContent = '솔로 20인(당신 + NPC 19) · 목표: 최후의 1인 · 이동 WASD · 마우스 조준/투척(홀드) · E 제작 · Q 설벽 · F 미끼 · C 엄폐 · M 미니맵';
    c.appendChild(foot);
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  _showHelp() {
    const ov = document.createElement('div'); ov.className = 'sr-modal';
    const box = document.createElement('div'); box.className = 'sr-modal-box';
    const h = document.createElement('h2'); h.textContent = '조작법';
    box.appendChild(h);
    const lines = [
      '이동: W A S D — 눈더미로 이동하고 눈보라 구역 안으로 피신',
      '조준: 마우스 이동 — 캐릭터가 커서 방향을 바라봄',
      '투척: 마우스 왼쪽 버튼 홀드 → 놓기 — 오래 누를수록 멀리(눈뭉치 1개 소비)',
      'E 제작: 눈더미 근처에서 3초 정지 → 눈뭉치 +10 (도중 이동/피격 시 취소)',
      'Q 설벽: 눈뭉치 4개 소비, 전방에 엄폐물 생성',
      'F 미끼: 눈뭉치 5개 소비, 눈사람으로 적 시선 유인',
      'C 엄폐: 근처 엄폐물에 붙어 피해 절반',
      'M 미니맵 · Space(결과 화면) 재도전',
    ];
    lines.forEach((t) => { const p = document.createElement('p'); p.textContent = t; box.appendChild(p); });
    box.appendChild(this._btn('닫기', () => ov.remove(), true));
    ov.appendChild(box); this.root.appendChild(ov);
  }

  newGame(seed = this.seed) {
    this.audio.init(); this.audio.resume();
    const s = seed != null ? seed : (Math.floor(performance.now()) % 100000) + 1;
    this.game = E.createGame(s, { total: C.match.total, difficulty: this._difficulty || 'normal' });
    this.human = E.humanPlayer(this.game);
    this.scene = 'drop';
    this.dropT = 0; this.dropAlt = 1; this.dropTarget = { x: this.game.zone.cx + (this.game.rng.range(-300, 300)), y: this.game.zone.cy + this.game.rng.range(-300, 300) };
    this.overlay.style.display = 'none'; this.overlay.innerHTML = '';
    this.hud.style.display = 'block';
    this._lastSurvivors = C.match.total;
    this._toast('낙하 지점을 클릭해 조준하세요 — 자동 착지까지 남은 시간이 흐릅니다');
  }

  _enterPlay() {
    this.scene = 'play';
    // land human near chosen target
    if (this.dropTarget) { this.human.x = this.dropTarget.x; this.human.y = this.dropTarget.y; }
    this.audio.landing();
  }

  _showResult() {
    this.scene = 'result'; this.hud.style.display = 'none';
    const r = E.result(this.game);
    if (r.won) { this.audio.fanfare(); this.challengeUnlocked = true; } else this.audio.gameover();
    this.audio.stopAll();
    const c = document.createElement('div'); c.className = 'sr-result ' + (r.won ? 'sr-win' : 'sr-lose');
    const big = document.createElement('div'); big.className = 'sr-place';
    big.textContent = r.won ? '🏆' : `#${r.place}`;
    const h = document.createElement('h2'); h.textContent = r.won ? '설원의 왕!' : '탈락';
    const stat = document.createElement('div'); stat.className = 'sr-rstats';
    stat.appendChild(this._stat('순위', `${r.place}/${r.total}`));
    stat.appendChild(this._stat('처치', r.kills));
    stat.appendChild(this._stat('생존', `${Math.floor(r.survivedSec / 60)}:${String(Math.floor(r.survivedSec % 60)).padStart(2, '0')}`));
    c.appendChild(big); c.appendChild(h); c.appendChild(stat);
    // cause of elimination readability
    const cause = document.createElement('p'); cause.className = 'sr-sub';
    cause.textContent = r.won ? '마지막까지 맞지 않았습니다.' : (this._humanLastCause || '눈뭉치에 맞아 탈락했습니다.');
    c.appendChild(cause);
    const retry = this._btn('다시 도전 (Space)', () => this.newGame(), true); c.appendChild(retry);
    c.appendChild(this._btn('타이틀로', () => this._showTitle()));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
    try { localStorage.setItem(SAVE_KEY, JSON.stringify({ lastPlace: r.place, won: r.won })); } catch { /* ignore */ }
  }

  // ---- input ---------------------------------------------------------------
  _bindInput() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;
      if (e.key === ' ' && this.scene === 'result') { e.preventDefault(); this.newGame(); }
      if ((e.key === 'e' || e.key === 'E') && this.scene === 'play') this._tryCraft();
      if ((e.key === 'q' || e.key === 'Q') && this.scene === 'play') this._act('wall');
      if ((e.key === 'f' || e.key === 'F') && this.scene === 'play') this._act('decoy');
      if (e.key === 'm' || e.key === 'M') this._showMinimap = !this._showMinimap;
    });
    window.addEventListener('keyup', (e) => { this.keys[e.key.toLowerCase()] = false; });
    const rect = () => this.canvas.getBoundingClientRect();
    this.canvas.addEventListener('mousemove', (e) => { const r = rect(); this.mouse.x = e.clientX - r.left; this.mouse.y = e.clientY - r.top; });
    this.canvas.addEventListener('mousedown', (e) => {
      this.audio.resume();
      if (this.scene === 'drop') { const w = this._screenToWorld(e.offsetX ?? this.mouse.x, e.offsetY ?? this.mouse.y); this.dropTarget = w; return; }
      if (this.scene === 'play') { this.mouse.down = true; this.mouse.downAt = performance.now(); }
    });
    this.canvas.addEventListener('mouseup', () => {
      if (this.scene === 'play' && this.mouse.down) { this._throw(performance.now() - this.mouse.downAt); this.mouse.down = false; }
    });
    // touch (basic): tap to move toward, long-press to throw toward
    this.canvas.addEventListener('touchstart', (e) => { this.audio.resume(); this.mouse.down = true; this.mouse.downAt = performance.now(); const t = e.touches[0]; const r = rect(); this.mouse.x = t.clientX - r.left; this.mouse.y = t.clientY - r.top; e.preventDefault(); }, { passive: false });
    this.canvas.addEventListener('touchend', (e) => { if (this.scene === 'play' && this.mouse.down) { this._throw(performance.now() - this.mouse.downAt); this.mouse.down = false; } e.preventDefault(); }, { passive: false });
  }

  _screenToWorld(sx, sy) {
    const cam = this._camera();
    return { x: cam.x + (sx - this.vw / 2) / cam.zoom, y: cam.y + (sy - this.vh / 2) / cam.zoom };
  }
  _camera() {
    const zoom = this.scene === 'drop' ? 0.4 : 1.3;
    const cx = this.human ? this.human.x : this.game.zone.cx;
    const cy = this.human ? this.human.y : this.game.zone.cy;
    return { x: this.scene === 'drop' ? this.game.zone.cx : cx, y: this.scene === 'drop' ? this.game.zone.cy : cy, zoom };
  }

  _aimAngle() {
    const cam = this._camera();
    const wx = cam.x + (this.mouse.x - this.vw / 2) / cam.zoom;
    const wy = cam.y + (this.mouse.y - this.vh / 2) / cam.zoom;
    return Math.atan2(wy - this.human.y, wx - this.human.x);
  }

  _tryCraft() {
    if (!this.human.alive || this.human.crafting) return;
    if (E.startCraft(this.game, this.human)) this.audio.craftStart();
    else this._toast('근처에 눈더미가 없습니다');
  }
  _throw(heldMs) {
    if (!this.human.alive || this.human.crafting) return;
    if (this.human.snowballs <= 0) { this._toast('눈뭉치가 없습니다 — E로 제작하세요'); return; }
    const charge = E.chargeFromMs(heldMs);
    E.throwSnowball(this.game, this.human, this._aimAngle(), charge);
    this.audio.throw();
  }
  _act(kind) {
    if (!this.human.alive || this.human.crafting) return;
    this.human.aim = this._aimAngle();
    if (kind === 'wall') { if (E.buildWall(this.game, this.human)) this.audio.wall(); else this._toast(`설벽: 눈뭉치 ${C.wall.cost}개 필요 (최대 ${C.wall.maxPerPlayer}개)`); }
    if (kind === 'decoy') { if (E.placeDecoy(this.game, this.human)) this.audio.decoy(); else this._toast(`미끼: 눈뭉치 ${C.decoy.cost}개 필요 (최대 ${C.decoy.maxPerPlayer}개)`); }
  }

  // ---- update --------------------------------------------------------------
  _update(dt) {
    if (!this.game) return;
    if (this.scene === 'drop') {
      this.dropT += dt; this.dropAlt = Math.max(0, 1 - this.dropT / 20);
      if (this.dropT >= 20) this._enterPlay();
      return;
    }
    if (this.scene !== 'play') return;
    const g = this.game, h = this.human;
    // human movement + aim
    if (h.alive && !h.crafting) {
      let mvx = 0, mvy = 0;
      if (this.keys['w']) mvy -= 1; if (this.keys['s']) mvy += 1;
      if (this.keys['a']) mvx -= 1; if (this.keys['d']) mvx += 1;
      h.cover = !!this.keys['c'];
      if (mvx || mvy) E.movePlayer(g, h, mvx, mvy, dt);
      h.aim = this._aimAngle();
    }
    const beforeHp = h.hp, beforeCraft = h.crafting;
    const beforeAlive = h.alive;
    // craft heartbeat ticks
    if (h.crafting) { this._craftBeat = (this._craftBeat || 0) + dt; if (this._craftBeat > 0.5) { this._craftBeat = 0; this.audio.craftTick(); } }
    E.step(g, dt);
    // audio reactions
    if (beforeCraft && !h.crafting && h.alive) { if (h.snowballs > beforeHp) {} } // handled below
    if (h.hp < beforeHp) this.audio.hit();
    if (beforeAlive && !h.alive) this._humanLastCause = '눈뭉치에 맞아 탈락했습니다.';
    // survivor-based intensity + zone warn
    const surv = E.aliveCount(g);
    if (surv !== this._lastSurvivors) { this.audio.setIntensity(surv); this._lastSurvivors = surv; }
    if (g.zone.shrinks !== this._lastShrinks) { this._lastShrinks = g.zone.shrinks; if (this.scene === 'play') { this.audio.zoneWarn(); this._toast('눈보라 구역이 좁아집니다!'); } }
    // craft done sound
    if (beforeCraft && !h.crafting) { if (h.craftTimer <= 0) this.audio.craftDone(); }
    if (g.over) this._showResult();
  }

  // ---- render --------------------------------------------------------------
  _loop() {
    let last = performance.now();
    const frame = (now) => {
      let dt = (now - last) / 1000; last = now;
      dt = Math.min(0.05, dt) * this.timeScale;
      if (this.game && (this.scene === 'play' || this.scene === 'drop')) this._update(dt);
      if (this.game) { this._render(); this._renderHud(); }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  _bgKeyForPos(x, y) {
    // 4 quadrant zones -> background flavor
    const half = C.map.size / 2;
    if (x < half && y < half) return 'bg_village';
    if (x >= half && y < half) return 'bg_plains';
    if (x < half && y >= half) return 'bg_lake';
    return 'bg_plains';
  }

  _render() {
    const ctx = this.ctx, g = this.game; const cam = this._camera();
    ctx.clearRect(0, 0, this.vw, this.vh);
    // background
    const bg = this.images[this.scene === 'drop' ? 'bg_lobby' : this._bgKeyForPos(this.human?.x || cam.x, this.human?.y || cam.y)];
    if (bg && bg.complete) { ctx.globalAlpha = 0.9; ctx.drawImage(bg, 0, 0, this.vw, this.vh); ctx.globalAlpha = 1; }
    else { ctx.fillStyle = '#dce8f0'; ctx.fillRect(0, 0, this.vw, this.vh); }
    // snow tint
    ctx.fillStyle = 'rgba(168,216,234,0.25)'; ctx.fillRect(0, 0, this.vw, this.vh);

    const toScreen = (wx, wy) => ({ x: this.vw / 2 + (wx - cam.x) * cam.zoom, y: this.vh / 2 + (wy - cam.y) * cam.zoom });

    // zone circle
    const zc = toScreen(g.zone.cx, g.zone.cy);
    ctx.save();
    ctx.beginPath(); ctx.arc(zc.x, zc.y, g.zone.radius * cam.zoom, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 3; ctx.stroke();
    // darken outside zone
    ctx.fillStyle = 'rgba(60,90,140,0.28)';
    ctx.rect(0, 0, this.vw, this.vh); ctx.arc(zc.x, zc.y, g.zone.radius * cam.zoom, 0, Math.PI * 2, true); ctx.fill('evenodd');
    ctx.restore();

    // piles
    for (const pile of g.piles) {
      const s = toScreen(pile.x, pile.y);
      if (s.x < -20 || s.x > this.vw + 20 || s.y < -20 || s.y > this.vh + 20) continue;
      const onCd = pile.cooldownUntil > g.t;
      ctx.fillStyle = onCd ? 'rgba(150,160,180,0.6)' : '#f5f5f5';
      ctx.strokeStyle = '#A8D8EA'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(s.x, s.y, 10 * cam.zoom, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    // walls
    for (const w of g.walls) {
      const s = toScreen(w.x, w.y); const half = C.wall.len / 2 * cam.zoom;
      ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(w.angle);
      ctx.fillStyle = '#eaf4fb'; ctx.strokeStyle = '#7fb0d0'; ctx.lineWidth = 2;
      ctx.fillRect(-half, -5 * cam.zoom, half * 2, 10 * cam.zoom); ctx.strokeRect(-half, -5 * cam.zoom, half * 2, 10 * cam.zoom);
      ctx.restore();
    }
    // decoys
    for (const d of g.decoys) {
      const s = toScreen(d.x, d.y);
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s.x, s.y, 9 * cam.zoom, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#FF6B35'; ctx.beginPath(); ctx.arc(s.x + 2, s.y, 2, 0, Math.PI * 2); ctx.fill();
    }
    // players
    for (const p of g.players) {
      if (!p.alive) continue;
      const s = toScreen(p.x, p.y);
      if (s.x < -40 || s.x > this.vw + 40 || s.y < -40 || s.y > this.vh + 40) continue;
      this._drawPlayer(ctx, p, s, cam);
    }
    // snowballs
    for (const sb of g.snowballs) {
      const s = toScreen(sb.x, sb.y);
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#A8D8EA'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(s.x, s.y, 4 * cam.zoom, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }

    // drop marker
    if (this.scene === 'drop' && this.dropTarget) {
      const s = toScreen(this.dropTarget.x, this.dropTarget.y);
      ctx.strokeStyle = '#FF6B35'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(s.x, s.y, 18, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s.x - 24, s.y); ctx.lineTo(s.x + 24, s.y); ctx.moveTo(s.x, s.y - 24); ctx.lineTo(s.x, s.y + 24); ctx.stroke();
    }

    // aim/charge indicator
    if (this.scene === 'play' && this.human.alive && this.mouse.down) {
      const hs = toScreen(this.human.x, this.human.y);
      const charge = E.chargeFromMs(performance.now() - this.mouse.downAt);
      const range = E.rangeForCharge(charge) * cam.zoom;
      ctx.strokeStyle = `rgba(255,107,53,${0.4 + charge * 0.5})`; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
      ctx.beginPath(); ctx.moveTo(hs.x, hs.y); ctx.lineTo(hs.x + Math.cos(this.human.aim) * range, hs.y + Math.sin(this.human.aim) * range); ctx.stroke();
      ctx.setLineDash([]);
    }
    // craft countdown ring on human
    if (this.scene === 'play' && this.human.crafting) {
      const hs = toScreen(this.human.x, this.human.y);
      const frac = 1 - this.human.craftTimer / C.craft.seconds;
      const col = frac < 0.5 ? '#f5f5f5' : frac < 0.85 ? '#FF6B35' : '#DC143C';
      ctx.strokeStyle = col; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(hs.x, hs.y, 26, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2); ctx.stroke();
    }
  }

  _drawPlayer(ctx, p, s, cam) {
    const sk = SKINS[p.skin] || SKINS.jack;
    const img = this.images[sk.asset];
    const size = 34 * cam.zoom;
    const isHuman = p.id === this.game._humanId;
    // shadow
    ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.beginPath(); ctx.ellipse(s.x, s.y + size * 0.45, size * 0.35, size * 0.14, 0, 0, Math.PI * 2); ctx.fill();
    if (img && img.complete) {
      if (p.isNpc) ctx.globalAlpha = 0.92;
      ctx.drawImage(img, s.x - size / 2, s.y - size, size, size * 1.5);
      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = sk.color; ctx.beginPath(); ctx.arc(s.x, s.y, size * 0.4, 0, Math.PI * 2); ctx.fill();
    }
    // aim direction pip
    ctx.strokeStyle = isHuman ? '#FF6B35' : 'rgba(255,255,255,0.5)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + Math.cos(p.aim) * size * 0.6, s.y + Math.sin(p.aim) * size * 0.6); ctx.stroke();
    // hp bar
    const bw = size * 0.9;
    ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(s.x - bw / 2, s.y - size - 8, bw, 4);
    ctx.fillStyle = isHuman ? '#7FFFD4' : (p.hp > 50 ? '#A8D8EA' : '#DC143C');
    ctx.fillRect(s.x - bw / 2, s.y - size - 8, bw * (p.hp / C.player.maxHp), 4);
    // name for human + nearby
    if (isHuman) { ctx.fillStyle = '#FF6B35'; ctx.font = 'bold 11px system-ui'; ctx.textAlign = 'center'; ctx.fillText('YOU', s.x, s.y - size - 12); }
  }

  // ---- HUD -----------------------------------------------------------------
  _renderHud() {
    if (this.scene !== 'play' && this.scene !== 'drop') { this.hud.style.display = 'none'; return; }
    this.hud.style.display = 'block';
    const g = this.game, h = this.human;
    const surv = E.aliveCount(g);
    const act = actForSurvivors(surv);
    const nextShrink = Math.max(0, Math.ceil(g.zone.nextShrink - g.t));
    const mm = this._showMinimap ? this._minimapHtml() : '';
    // build via DOM (no innerHTML injection of dynamic user data; static template)
    this.hud.textContent = '';
    const top = el('div', 'sr-hud-top');
    top.appendChild(el('div', 'sr-hud-surv', `생존 ${surv}/${C.match.total}`));
    top.appendChild(el('div', 'sr-hud-act', act.title));
    top.appendChild(el('div', 'sr-hud-zone', `구역 축소 ${nextShrink}s`));
    this.hud.appendChild(top);

    const bl = el('div', 'sr-hud-bl');
    // hp bar
    const hpWrap = el('div', 'sr-hp');
    const hpFill = el('div', 'sr-hp-fill'); hpFill.style.width = Math.max(0, h.hp) + '%';
    hpFill.style.background = h.hp > 50 ? '#7FFFD4' : h.hp > 25 ? '#FF6B35' : '#DC143C';
    hpWrap.appendChild(hpFill); hpWrap.appendChild(el('span', 'sr-hp-txt', `HP ${Math.max(0, Math.round(h.hp))}`));
    bl.appendChild(hpWrap);
    bl.appendChild(el('div', 'sr-ammo', `❄ 눈뭉치 ${h.snowballs}`));
    bl.appendChild(el('div', 'sr-tac', `설벽 ${h.walls}/${C.wall.maxPerPlayer} · 미끼 ${h.decoys}/${C.decoy.maxPerPlayer}`));
    if (this.scene === 'drop') bl.appendChild(el('div', 'sr-drop', `낙하 중… 착지 ${Math.max(0, Math.ceil(20 - this.dropT))}s`));
    this.hud.appendChild(bl);

    if (this._showMinimap) this.hud.appendChild(this._minimapEl());

    if (this._toastText && performance.now() < this._toastUntil) {
      this.hud.appendChild(el('div', 'sr-toast', this._toastText));
    }
  }

  _minimapEl() {
    const g = this.game; const box = el('div', 'sr-minimap');
    const cv = document.createElement('canvas'); cv.width = 160; cv.height = 160; box.appendChild(cv);
    const x = cv.getContext('2d'); const sc = 160 / C.map.size;
    x.fillStyle = 'rgba(13,27,42,0.85)'; x.fillRect(0, 0, 160, 160);
    // zone
    x.strokeStyle = '#fff'; x.lineWidth = 1; x.beginPath(); x.arc(g.zone.cx * sc, g.zone.cy * sc, g.zone.radius * sc, 0, Math.PI * 2); x.stroke();
    // piles within 30m (300u) of human
    for (const pile of g.piles) { if (Math.hypot(pile.x - this.human.x, pile.y - this.human.y) < 300 && pile.cooldownUntil <= g.t) { x.fillStyle = '#A8D8EA'; x.fillRect(pile.x * sc - 1, pile.y * sc - 1, 3, 3); } }
    // players
    for (const p of g.players) { if (!p.alive) continue; x.fillStyle = p.id === g._humanId ? '#FF6B35' : (p.isNpc ? '#9E9E9E' : '#fff'); x.beginPath(); x.arc(p.x * sc, p.y * sc, p.id === g._humanId ? 3 : 2, 0, Math.PI * 2); x.fill(); }
    return box;
  }

  // ---- helpers -------------------------------------------------------------
  _toast(t, ms = 2600) { this._toastText = t; this._toastUntil = performance.now() + ms; }
  _btn(label, onClick, primary) { const b = document.createElement('button'); b.className = 'sr-btn' + (primary ? ' primary' : ''); b.textContent = label; b.addEventListener('click', () => { this.audio.resume(); onClick(); }); return b; }
  _stat(label, val) { const d = el('div', 'sr-stat'); d.appendChild(el('div', 'sr-stat-v', String(val))); d.appendChild(el('div', 'sr-stat-l', label)); return d; }

  // ---- validation/screenshot driver ---------------------------------------
  async __drive(state) {
    if (!this.assetsLoaded) await this._loadAssets();
    if (state === 'title') { this._showTitle(); return; }
    this.newGame(42);
    if (state === 'drop') return;
    if (state === 'play') { this._enterPlay(); this.human.snowballs = 10; return; }
    if (state === 'result' || state === 'win') {
      this._enterPlay();
      // fast-forward: force everyone but human dead for a win, or human dead for lose
      if (state === 'win') { for (const p of this.game.players) if (p.id !== this.game._humanId) E.setHp(this.game, p, 0); }
      else { const h = this.human; for (const p of this.game.players) if (p.id !== h.id) { /* keep */ } E.setHp(this.game, h, 0); }
      this._showResult(); return;
    }
  }
  __validate() {
    const rep = { checks: [], errors: [] };
    const chk = (n, c, d = '') => rep.checks.push({ name: n, pass: !!c, detail: d });
    try {
      const g = E.createGame(42, { total: 20, difficulty: 'normal' });
      chk('20인 생성(플레이어1+NPC19)', g.players.length === 20 && g.players.filter((p) => p.isNpc).length === 19);
      chk('NPC [봇] 접두사', g.players.filter((p) => p.isNpc).every((p) => p.name.startsWith('[봇]')));
      const h = E.humanPlayer(g); g.piles.push({ id: 1, x: h.x, y: h.y, cooldownUntil: 0 });
      E.startCraft(g, h); E.step(g, 3.01); chk('3초 제작 +10', h.snowballs === 10, String(h.snowballs));
      const sb = E.throwSnowball(g, h, 0, 1); chk('투척 생성', !!sb);
      chk('에셋 로드', Object.values(this.images).some((v) => v));
      // run to completion
      let guard = 0; while (!g.over && guard++ < 12000) { const hh = E.humanPlayer(g); if (hh.alive) { if (!hh.npc) hh.npc = { state: 'PATROL', reactTimer: 0 }; const w = hh.isNpc; hh.isNpc = true; E.npcThink(g, hh, 0.1); hh.isNpc = w; } E.step(g, 0.1); }
      chk('매치 완주(승자 1인)', g.over && E.aliveCount(g) === 1, `t=${g.t.toFixed(0)}s`);
    } catch (e) { rep.errors.push(String(e && e.message || e)); }
    rep.pass = rep.checks.every((c) => c.pass) && rep.errors.length === 0;
    return rep;
  }
}

function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
