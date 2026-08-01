// Snow Royale browser app — TRUE FIRST-PERSON renderer (서든어택/배틀그라운드 스타일).
// Pointer-lock mouse-look, perspective ground-plane projection with billboarded
// sprites, fog, crosshair + charge meter, first-person view model. The engine
// stays the same 2D simulation; this layer projects it into an FPS camera.
import * as E from './engine.js';
import { AudioEngine } from './audio.js';
import { CONFIG as C, SKINS, actForSurvivors } from './config.js';

const ASSET = 'assets/';
const CHAR_FILES = { jack: 'char_jack.webp', white: 'char_white.webp', bear: 'char_bear.webp', bot: 'char_bot.webp' };
const BG_FILES = { plains: 'bg_plains.webp', village: 'bg_village.webp', lake: 'bg_lake.webp', lobby: 'bg_lobby.webp' };
const SAVE_KEY = 'snow_royale_save_v1';

// world scale: 1200u map ≈ 100m → eye height ~1.7m ≈ 20u, character ~2m ≈ 26u
const EYE = 20;
const CHAR_H = 30;
const FOG_START = 260, FOG_END = 620;

export class SnowApp {
  constructor(root, { seed = null, timeScale = 1, autoStart = true } = {}) {
    this.root = root;
    this.seed = seed;
    this.timeScale = timeScale;
    this.audio = new AudioEngine();
    this.images = {};
    this.scene = 'title';
    this.keys = {};
    this.mouse = { down: false, downAt: 0 };
    this.yaw = 0; this.pitch = 0;
    this.locked = false;
    this.bobT = 0;
    this.hitMarkerUntil = 0;
    this.damageFlashUntil = 0;
    this.killFeed = [];
    this.dropTarget = null;
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
    this.focal = (w / 2); // 90° horizontal FOV
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
    if (document.pointerLockElement) document.exitPointerLock();
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '스노우 로얄';
    const sub = document.createElement('p'); sub.className = 'sr-sub'; sub.textContent = 'Snow Royale — 1인칭 눈싸움 배틀로얄 · 3초의 침묵이 설원의 왕을 결정한다';
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
    const foot = document.createElement('p'); foot.className = 'sr-foot';
    foot.textContent = '1인칭 FPS · 화면 클릭=조준 잠금(ESC 해제) · WASD 이동 · 마우스 시점 · 좌클릭 홀드→놓기 투척 · E 제작 · Q 설벽 · F 미끼 · C 엄폐 · M 지도';
    c.appendChild(foot);
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  _showHelp() {
    const ov = document.createElement('div'); ov.className = 'sr-modal';
    const box = document.createElement('div'); box.className = 'sr-modal-box';
    const h = document.createElement('h2'); h.textContent = '조작법 (FPS)';
    box.appendChild(h);
    const lines = [
      '🖱 화면 클릭 — 마우스 조준 잠금 시작 (ESC로 해제)',
      '마우스 이동 — 시점 회전(마우스룩), 화면 중앙 십자선으로 조준',
      'W A S D — 보는 방향 기준 전진/좌/후진/우 이동',
      '좌클릭 홀드 → 놓기 — 눈뭉치 투척 (오래 누를수록 멀리, 십자선 아래 차지 게이지)',
      'E — 눈더미 근처에서 3초 제작 (+10, 도중 이동/피격 시 취소, 완전 무방비!)',
      'Q — 설벽 건설 (눈뭉치 4개) · F — 눈사람 미끼 (5개) · C — 엄폐(피해 절반)',
      'M — 전장 지도 · Tab 유지 없음 · 피격 시 화면 가장자리 빨간 플래시',
      '적을 맞히면 십자선에 히트마커(✕)가 번쩍입니다',
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
    this.dropT = 0;
    this.dropTarget = { x: this.game.zone.cx + this.game.rng.range(-300, 300), y: this.game.zone.cy + this.game.rng.range(-300, 300) };
    this.yaw = 0; this.pitch = 0;
    this.killFeed = [];
    this.overlay.style.display = 'none'; this.overlay.innerHTML = '';
    this.hud.style.display = 'block';
    this._lastSurvivors = C.match.total;
    this._toast('낙하 지점을 클릭해 조준하세요 — 착지 후 화면을 클릭하면 FPS 조준이 잠깁니다');
  }

  _enterPlay() {
    this.scene = 'play';
    if (this.dropTarget) { this.human.x = this.dropTarget.x; this.human.y = this.dropTarget.y; }
    // face zone center on landing
    this.yaw = Math.atan2(this.game.zone.cy - this.human.y, this.game.zone.cx - this.human.x);
    this.audio.landing();
    this._toast('화면을 클릭해 조준을 잠그세요 (ESC로 해제)');
  }

  _showResult() {
    this.scene = 'result'; this.hud.style.display = 'none';
    if (document.pointerLockElement) document.exitPointerLock();
    const r = E.result(this.game);
    if (r.won) this.audio.fanfare(); else this.audio.gameover();
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
    const cause = document.createElement('p'); cause.className = 'sr-sub';
    cause.textContent = r.won ? '마지막까지 맞지 않았습니다.' : (this._humanLastCause || '눈뭉치에 맞아 탈락했습니다.');
    c.appendChild(cause);
    const retry = this._btn('다시 도전 (Space)', () => this.newGame(), true); c.appendChild(retry);
    c.appendChild(this._btn('타이틀로', () => this._showTitle()));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
    try { localStorage.setItem(SAVE_KEY, JSON.stringify({ lastPlace: r.place, won: r.won })); } catch { /* ignore */ }
  }

  // ---- input (pointer lock FPS) ---------------------------------------------
  _bindInput() {
    // Use e.code (physical key) — e.key breaks under Korean/other IME because
    // KeyW arrives as 'ㅈ'. e.code is layout/IME independent.
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space' && this.scene === 'result') { e.preventDefault(); this.newGame(); }
      if (this.scene === 'play') {
        if (e.code === 'KeyE') this._tryCraft();
        if (e.code === 'KeyQ') this._act('wall');
        if (e.code === 'KeyF') this._act('decoy');
        if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(e.code)) e.preventDefault();
      }
      if (e.code === 'KeyM') this._showMinimap = !this._showMinimap;
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    window.addEventListener('blur', () => { this.keys = {}; this.mouse.down = false; });

    // pointer lock lifecycle
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (!this.locked && this.scene === 'play') this._toast('조준 잠금 해제됨 — 화면을 클릭해 다시 잠그세요');
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.locked || this.scene !== 'play') return;
      const sens = 0.0026;
      this.yaw += e.movementX * sens;
      this.pitch = Math.max(-0.6, Math.min(0.5, this.pitch + e.movementY * sens * 0.8));
    });

    const rect = () => this.canvas.getBoundingClientRect();
    this.canvas.addEventListener('mousedown', (e) => {
      this.audio.resume();
      if (this.scene === 'drop') {
        const r = rect();
        const w = this._dropScreenToWorld(e.clientX - r.left, e.clientY - r.top);
        if (w) this.dropTarget = w;
        return;
      }
      if (this.scene === 'play') {
        if (!this.locked) {
          const p = this.canvas.requestPointerLock && this.canvas.requestPointerLock({ unadjustedMovement: true });
          if (p && p.catch) p.catch(() => this.canvas.requestPointerLock());
          return; // first click locks; next clicks throw
        }
        this.mouse.down = true; this.mouse.downAt = performance.now();
      }
    });
    this.canvas.addEventListener('mouseup', () => {
      if (this.scene === 'play' && this.locked && this.mouse.down) {
        this._throw(performance.now() - this.mouse.downAt);
        this.mouse.down = false;
      }
    });
    // touch fallback: hold to charge & throw toward screen center
    this.canvas.addEventListener('touchstart', (e) => { this.audio.resume(); if (this.scene === 'play') { this.mouse.down = true; this.mouse.downAt = performance.now(); } e.preventDefault(); }, { passive: false });
    this.canvas.addEventListener('touchend', (e) => { if (this.scene === 'play' && this.mouse.down) { this._throw(performance.now() - this.mouse.downAt); this.mouse.down = false; } e.preventDefault(); }, { passive: false });
  }

  _dropScreenToWorld(sx, sy) {
    // drop phase uses top-down map view
    const zoom = Math.min(this.vw, this.vh) / (C.map.size * 1.05);
    const ox = this.vw / 2 - this.game.zone.cx * zoom, oy = this.vh / 2 - this.game.zone.cy * zoom;
    return { x: (sx - ox) / zoom, y: (sy - oy) / zoom };
  }

  _tryCraft() {
    if (!this.human.alive || this.human.crafting) return;
    if (E.startCraft(this.game, this.human)) this.audio.craftStart();
    else this._toast('근처에 눈더미가 없습니다 — 지도(M)에서 흰 점을 찾으세요');
  }
  _throw(heldMs) {
    if (!this.human.alive || this.human.crafting) return;
    if (this.human.snowballs <= 0) { this._toast('눈뭉치 없음 — 눈더미에서 E로 제작하세요'); return; }
    const charge = E.chargeFromMs(heldMs);
    E.throwSnowball(this.game, this.human, this.yaw, charge);
    this.audio.throw();
    this.viewKick = 1; // view model throw animation
  }
  _act(kind) {
    if (!this.human.alive || this.human.crafting) return;
    this.human.aim = this.yaw;
    if (kind === 'wall') { if (E.buildWall(this.game, this.human)) this.audio.wall(); else this._toast(`설벽: 눈뭉치 ${C.wall.cost}개 필요 (최대 ${C.wall.maxPerPlayer})`); }
    if (kind === 'decoy') { if (E.placeDecoy(this.game, this.human)) this.audio.decoy(); else this._toast(`미끼: 눈뭉치 ${C.decoy.cost}개 필요 (최대 ${C.decoy.maxPerPlayer})`); }
  }

  // ---- update --------------------------------------------------------------
  _update(dt) {
    if (!this.game) return;
    if (this.scene === 'drop') {
      this.dropT += dt;
      if (this.dropT >= 8) this._enterPlay(); // shorter drop for pace
      return;
    }
    if (this.scene !== 'play') return;
    const g = this.game, h = this.human;
    h.aim = this.yaw;
    // view-relative WASD
    if (h.alive && !h.crafting) {
      let f = 0, r = 0;
      if (this.keys['KeyW'] || this.keys['ArrowUp']) f += 1;
      if (this.keys['KeyS'] || this.keys['ArrowDown']) f -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) r += 1;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) r -= 1;
      h.cover = !!this.keys['KeyC'];
      if (f || r) {
        const cos = Math.cos(this.yaw), sin = Math.sin(this.yaw);
        const mvx = cos * f + (-sin) * r * -1; // right = (−sin? see note) — derive: right vector = (−sinθ, cosθ)... careful below
        // forward = (cosθ, sinθ); right = (cos(θ+π/2), sin(θ+π/2)) = (−sinθ, cosθ)
        const mx = cos * f + (-sin) * r;
        const my = sin * f + (cos) * r;
        E.movePlayer(g, h, mx, my, dt);
        this.bobT += dt * 9;
      }
    }
    const beforeHp = h.hp, beforeCraft = h.crafting, beforeAlive = h.alive;
    const killsBefore = g.kills[h.id] || 0;
    const hitsBefore = g.stats.hits;
    if (h.crafting) { this._craftBeat = (this._craftBeat || 0) + dt; if (this._craftBeat > 0.5) { this._craftBeat = 0; this.audio.craftTick(); } }
    E.step(g, dt);
    // feedback
    if (h.hp < beforeHp) { this.audio.hit(); this.damageFlashUntil = performance.now() + 250; }
    if ((g.kills[h.id] || 0) > killsBefore) { this.hitMarkerUntil = performance.now() + 400; }
    else if (g.stats.hits > hitsBefore) {
      // any hit this tick; if one of our snowballs vanished into a player near our aim, flash marker (approx)
      this.hitMarkerUntil = Math.max(this.hitMarkerUntil, performance.now() + 220);
    }
    if (beforeAlive && !h.alive) this._humanLastCause = '눈뭉치에 맞아 탈락했습니다.';
    // kill feed
    for (const e of g.events.splice(0).filter((ev) => ev.type === 'kill' || ev.type === 'eliminate')) {
      if (e.type === 'kill') {
        const by = g.players.find((p) => p.id === e.by), v = g.players.find((p) => p.id === e.victim);
        if (by && v) this.killFeed.push({ text: `${by.name} ❄→ ${v.name}`, until: performance.now() + 4200 });
      }
    }
    if (this.killFeed.length > 5) this.killFeed = this.killFeed.slice(-5);
    const surv = E.aliveCount(g);
    if (surv !== this._lastSurvivors) { this.audio.setIntensity(surv); this._lastSurvivors = surv; }
    if (g.zone.shrinks !== this._lastShrinks) { this._lastShrinks = g.zone.shrinks; this.audio.zoneWarn(); this._toast('⚠ 눈보라 구역이 좁아집니다!'); }
    if (beforeCraft && !h.crafting && h.craftTimer <= 0 && h.alive) this.audio.craftDone();
    if (this.viewKick > 0) this.viewKick = Math.max(0, this.viewKick - dt * 4);
    if (g.over) this._showResult();
  }

  // ---- FPS render ------------------------------------------------------------
  _loop() {
    let last = performance.now();
    const frame = (now) => {
      let dt = (now - last) / 1000; last = now;
      dt = Math.min(0.05, dt) * this.timeScale;
      if (this.game && (this.scene === 'play' || this.scene === 'drop')) this._update(dt);
      if (this.game) {
        if (this.scene === 'drop') this._renderDrop();
        else this._renderFps(now);
        this._renderHud();
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  // top-down map for the parachute phase (aim your landing)
  _renderDrop() {
    const ctx = this.ctx, g = this.game;
    const zoom = Math.min(this.vw, this.vh) / (C.map.size * 1.05);
    const ox = this.vw / 2 - g.zone.cx * zoom, oy = this.vh / 2 - g.zone.cy * zoom;
    const bg = this.images.bg_lobby;
    ctx.clearRect(0, 0, this.vw, this.vh);
    if (bg) { ctx.drawImage(bg, 0, 0, this.vw, this.vh); ctx.fillStyle = 'rgba(20,35,60,0.35)'; ctx.fillRect(0, 0, this.vw, this.vh); }
    else { ctx.fillStyle = '#22344f'; ctx.fillRect(0, 0, this.vw, this.vh); }
    // map frame
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.strokeRect(ox, oy, C.map.size * zoom, C.map.size * zoom);
    // zone
    ctx.beginPath(); ctx.arc(g.zone.cx * zoom + ox, g.zone.cy * zoom + oy, g.zone.radius * zoom, 0, Math.PI * 2);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    // piles
    for (const p of g.piles) { ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.beginPath(); ctx.arc(p.x * zoom + ox, p.y * zoom + oy, 3, 0, Math.PI * 2); ctx.fill(); }
    // others dropping
    for (const p of this.game.players) { if (p.isNpc) { ctx.fillStyle = 'rgba(158,158,158,0.9)'; ctx.beginPath(); ctx.arc(p.x * zoom + ox, p.y * zoom + oy, 2.5, 0, Math.PI * 2); ctx.fill(); } }
    // target
    if (this.dropTarget) {
      const tx = this.dropTarget.x * zoom + ox, ty = this.dropTarget.y * zoom + oy;
      ctx.strokeStyle = '#FF6B35'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(tx, ty, 16, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tx - 22, ty); ctx.lineTo(tx + 22, ty); ctx.moveTo(tx, ty - 22); ctx.lineTo(tx, ty + 22); ctx.stroke();
    }
  }

  _project(wx, wy, z = 0) {
    const h = this.human;
    const dx = wx - h.x, dy = wy - h.y;
    const cos = Math.cos(this.yaw), sin = Math.sin(this.yaw);
    const camf = dx * cos + dy * sin;          // forward depth
    const camr = -dx * sin + dy * cos;         // right offset
    if (camf < 4) return null;
    const sx = this.vw / 2 + (camr / camf) * this.focal;
    const horizon = this._horizonY();
    const sy = horizon + ((EYE - z) / camf) * this.focal;
    return { sx, sy, depth: camf, scale: this.focal / camf };
  }
  _horizonY() {
    const bob = Math.sin(this.bobT) * 3;
    return this.vh * 0.5 + this.pitch * this.vh * 0.7 + bob;
  }
  _fog(depth) { return Math.max(0, Math.min(1, (depth - FOG_START) / (FOG_END - FOG_START))); }

  _renderFps(now) {
    const ctx = this.ctx, g = this.game, h = this.human;
    const horizon = this._horizonY();

    // --- sky: panorama strip from bg image shifted by yaw (wraps) ---
    ctx.clearRect(0, 0, this.vw, this.vh);
    const pano = this.images.bg_plains;
    if (pano) {
      const pw = this.vw * 2.6; // stretch image over 360°/FOV span feel
      let off = (-(this.yaw / (Math.PI * 2)) * pw) % pw; if (off > 0) off -= pw;
      const skyH = Math.max(80, horizon);
      for (let x = off; x < this.vw; x += pw) ctx.drawImage(pano, x, horizon - skyH, pw, skyH);
      ctx.fillStyle = 'rgba(150,185,215,0.25)'; ctx.fillRect(0, 0, this.vw, Math.max(0, horizon));
    } else {
      const sky = ctx.createLinearGradient(0, 0, 0, horizon);
      sky.addColorStop(0, '#9dbede'); sky.addColorStop(1, '#e8f2f8');
      ctx.fillStyle = sky; ctx.fillRect(0, 0, this.vw, Math.max(0, horizon));
    }

    // --- ground: perspective snow gradient ---
    const grd = ctx.createLinearGradient(0, horizon, 0, this.vh);
    grd.addColorStop(0, '#cfe0ec'); grd.addColorStop(0.25, '#e9f2f7'); grd.addColorStop(1, '#fbfdff');
    ctx.fillStyle = grd; ctx.fillRect(0, Math.max(0, horizon), this.vw, this.vh - horizon);

    // ground speckle grid → strong motion/parallax cue
    ctx.fillStyle = 'rgba(140,170,195,0.5)';
    const GRID = 60;
    const gx0 = Math.floor((h.x - 700) / GRID) * GRID, gx1 = h.x + 700;
    const gy0 = Math.floor((h.y - 700) / GRID) * GRID, gy1 = h.y + 700;
    for (let wx = gx0; wx <= gx1; wx += GRID) {
      for (let wy = gy0; wy <= gy1; wy += GRID) {
        const p = this._project(wx, wy);
        if (!p || p.sy < horizon || p.sy > this.vh) continue;
        const r = Math.max(0.6, 2.6 * p.scale * 0.02);
        const a = 0.55 * (1 - this._fog(p.depth));
        if (a <= 0.02) continue;
        ctx.globalAlpha = a;
        ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // --- blizzard zone wall (translucent vertical wall on the circle) ---
    this._renderZoneWall(ctx, horizon);

    // --- collect & depth-sort billboards ---
    const items = [];
    for (const pile of g.piles) {
      const p = this._project(pile.x, pile.y);
      if (p) items.push({ ...p, kind: 'pile', ref: pile });
    }
    for (const w of g.walls) { const p = this._project(w.x, w.y); if (p) items.push({ ...p, kind: 'wall', ref: w }); }
    for (const d of g.decoys) { const p = this._project(d.x, d.y); if (p) items.push({ ...p, kind: 'decoy', ref: d }); }
    for (const pl of g.players) {
      if (!pl.alive || pl.id === h.id) continue;
      const p = this._project(pl.x, pl.y);
      if (p) items.push({ ...p, kind: 'player', ref: pl });
    }
    for (const sb of g.snowballs) {
      const t = sb.range > 0 ? sb.traveled / sb.range : 0;
      const apex = Math.min(70, sb.range * 0.18);
      const z = Math.max(0, 4 * apex * t * (1 - t)) + 14;
      const p = this._project(sb.x, sb.y, z);
      if (p) items.push({ ...p, kind: 'snowball', ref: sb });
    }
    items.sort((a, b) => b.depth - a.depth);
    for (const it of items) this._drawBillboard(ctx, it, now);

    // --- snow particles drifting (screen-space ambience) ---
    this._renderSnowfall(ctx, now);

    // --- outside-zone tint ---
    const distC = Math.hypot(h.x - g.zone.cx, h.y - g.zone.cy);
    if (distC > g.zone.radius) {
      ctx.fillStyle = 'rgba(90,140,200,0.28)'; ctx.fillRect(0, 0, this.vw, this.vh);
    }

    // --- damage flash (red vignette) ---
    if (now < this.damageFlashUntil) {
      const gEdge = ctx.createRadialGradient(this.vw / 2, this.vh / 2, this.vh * 0.35, this.vw / 2, this.vh / 2, this.vh * 0.75);
      gEdge.addColorStop(0, 'rgba(220,20,60,0)'); gEdge.addColorStop(1, 'rgba(220,20,60,0.5)');
      ctx.fillStyle = gEdge; ctx.fillRect(0, 0, this.vw, this.vh);
    }

    // --- first-person view model (mitten + snowball) ---
    this._renderViewModel(ctx, now);

    // --- crosshair + charge + hit marker ---
    this._renderCrosshair(ctx, now);

    // pointer-lock prompt
    if (!this.locked && this.human.alive) {
      ctx.fillStyle = 'rgba(13,27,42,0.75)';
      const bw = 420, bh = 54;
      ctx.fillRect(this.vw / 2 - bw / 2, this.vh * 0.62, bw, bh);
      ctx.strokeStyle = '#FF6B35'; ctx.strokeRect(this.vw / 2 - bw / 2, this.vh * 0.62, bw, bh);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 16px system-ui'; ctx.textAlign = 'center';
      ctx.fillText('🖱 화면을 클릭해 조준 잠금 (마우스로 시점 회전)', this.vw / 2, this.vh * 0.62 + 33);
    }
  }

  _renderZoneWall(ctx, horizon) {
    const g = this.game, h = this.human;
    const samples = 90;
    let prev = null;
    for (let i = 0; i <= samples; i++) {
      const a = (i / samples) * Math.PI * 2;
      const wx = g.zone.cx + Math.cos(a) * g.zone.radius;
      const wy = g.zone.cy + Math.sin(a) * g.zone.radius;
      const base = this._project(wx, wy, 0);
      const top = this._project(wx, wy, 90);
      if (base && top && prev && prev.base) {
        const fog = this._fog(base.depth);
        if (fog < 0.98) {
          ctx.fillStyle = `rgba(210,235,255,${0.34 * (1 - fog)})`;
          ctx.beginPath();
          ctx.moveTo(prev.base.sx, prev.base.sy); ctx.lineTo(base.sx, base.sy);
          ctx.lineTo(top.sx, top.sy); ctx.lineTo(prev.top.sx, prev.top.sy);
          ctx.closePath(); ctx.fill();
        }
      }
      prev = base && top ? { base, top } : null;
    }
  }

  _drawBillboard(ctx, it, now) {
    const fog = this._fog(it.depth);
    if (fog >= 0.99) return;
    const alpha = 1 - fog * 0.9;
    ctx.globalAlpha = alpha;
    if (it.kind === 'player') {
      const pl = it.ref;
      const sk = SKINS[pl.skin] || SKINS.bot;
      const img = this.images[pl.skin] || this.images.bot;
      const hpx = (CHAR_H / it.depth) * this.focal;
      const wpx = hpx * 0.62;
      // shadow
      ctx.fillStyle = `rgba(60,80,110,${0.25 * alpha})`;
      ctx.beginPath(); ctx.ellipse(it.sx, it.sy, wpx * 0.45, wpx * 0.14, 0, 0, Math.PI * 2); ctx.fill();
      if (img) ctx.drawImage(img, it.sx - wpx / 2, it.sy - hpx, wpx, hpx);
      else { ctx.fillStyle = sk.color; ctx.fillRect(it.sx - wpx / 2, it.sy - hpx, wpx, hpx); }
      // name + hp bar (near only)
      if (it.depth < 320) {
        const bw = Math.max(30, wpx * 0.9);
        ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(it.sx - bw / 2, it.sy - hpx - 12, bw, 5);
        ctx.fillStyle = pl.hp > 50 ? '#7FFFD4' : '#DC143C';
        ctx.fillRect(it.sx - bw / 2, it.sy - hpx - 12, bw * (pl.hp / C.player.maxHp), 5);
        ctx.fillStyle = pl.isNpc ? '#cfd6dd' : '#fff';
        ctx.font = `bold ${Math.max(10, Math.min(14, hpx * 0.09))}px system-ui`; ctx.textAlign = 'center';
        ctx.fillText(pl.name, it.sx, it.sy - hpx - 17);
      }
    } else if (it.kind === 'pile') {
      const pile = it.ref;
      const onCd = pile.cooldownUntil > this.game.t;
      const hpx = (14 / it.depth) * this.focal;
      const wpx = hpx * 2.1;
      ctx.fillStyle = onCd ? `rgba(190,200,215,${alpha})` : `rgba(250,252,255,${alpha})`;
      ctx.strokeStyle = `rgba(150,185,210,${alpha})`;
      ctx.beginPath(); ctx.ellipse(it.sx, it.sy - hpx * 0.3, wpx / 2, hpx * 0.62, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      // E prompt when near & available
      if (!onCd && it.depth < C.craft.interactRange + 22) {
        ctx.fillStyle = '#FF6B35'; ctx.font = 'bold 15px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('E — 눈뭉치 제작 (3초 무방비)', it.sx, it.sy - hpx - 10);
      }
    } else if (it.kind === 'wall') {
      const hpx = (26 / it.depth) * this.focal;
      const wpx = (C.wall.len / it.depth) * this.focal;
      ctx.fillStyle = `rgba(240,248,255,${alpha})`;
      ctx.strokeStyle = `rgba(140,175,205,${alpha})`;
      ctx.fillRect(it.sx - wpx / 2, it.sy - hpx, wpx, hpx);
      ctx.strokeRect(it.sx - wpx / 2, it.sy - hpx, wpx, hpx);
      // durability pips
      for (let i = 0; i < it.ref.hp; i++) { ctx.fillStyle = `rgba(255,107,53,${alpha})`; ctx.fillRect(it.sx - wpx / 2 + 3 + i * 7, it.sy - hpx + 3, 5, 3); }
    } else if (it.kind === 'decoy') {
      const hpx = (22 / it.depth) * this.focal;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath(); ctx.arc(it.sx, it.sy - hpx * 0.25, hpx * 0.28, 0, Math.PI * 2); ctx.fill(); // body
      ctx.beginPath(); ctx.arc(it.sx, it.sy - hpx * 0.62, hpx * 0.2, 0, Math.PI * 2); ctx.fill(); // head
      ctx.fillStyle = `rgba(255,107,53,${alpha})`;
      ctx.beginPath(); ctx.arc(it.sx + hpx * 0.06, it.sy - hpx * 0.62, hpx * 0.045, 0, Math.PI * 2); ctx.fill(); // carrot
    } else if (it.kind === 'snowball') {
      if (it.depth < 16) { ctx.globalAlpha = 1; return; } // too close = just left the hand
      const r = Math.min(22, Math.max(3.5, (9 / it.depth) * this.focal));
      const sb = it.ref;
      // motion trail: project a point slightly behind along its path
      const bx = sb.x - sb.dirX * 26, by = sb.y - sb.dirY * 26;
      const t = sb.range > 0 ? sb.traveled / sb.range : 0;
      const apex = Math.min(70, sb.range * 0.18);
      const zNow = Math.max(0, 4 * apex * t * (1 - t)) + 14;
      const back = this._project(bx, by, zNow);
      if (back) {
        const grad = ctx.createLinearGradient(back.sx, back.sy, it.sx, it.sy);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, `rgba(255,255,255,${0.75 * alpha})`);
        ctx.strokeStyle = grad; ctx.lineWidth = Math.max(2, r * 0.8); ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(back.sx, back.sy); ctx.lineTo(it.sx, it.sy); ctx.stroke();
        ctx.lineCap = 'butt';
      }
      // dark outline ring so it reads against white snow
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.strokeStyle = `rgba(50,80,120,${0.9 * alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(it.sx, it.sy, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      // ground shadow for depth reading
      const ground = this._project(sb.x, sb.y, 0);
      if (ground) {
        ctx.fillStyle = `rgba(60,80,110,${0.3 * alpha})`;
        ctx.beginPath(); ctx.ellipse(ground.sx, ground.sy, r * 0.9, r * 0.35, 0, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  _renderSnowfall(ctx, now) {
    // cheap screen-space snow: deterministic pseudo particles from time
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    const n = 40;
    for (let i = 0; i < n; i++) {
      const seed = i * 127.3;
      const x = ((seed * 7919 + now * (0.02 + (i % 5) * 0.012)) % this.vw + this.vw) % this.vw;
      const y = ((seed * 104729 + now * (0.05 + (i % 7) * 0.014)) % this.vh + this.vh) % this.vh;
      const r = 1 + (i % 3) * 0.7;
      ctx.globalAlpha = 0.25 + (i % 4) * 0.12;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  _renderViewModel(ctx, now) {
    const h = this.human;
    if (!h.alive) return;
    const cx = this.vw / 2, base = this.vh;
    const bob = Math.sin(this.bobT) * 5;
    const kick = (this.viewKick || 0);
    const charge = this.mouse.down ? E.chargeFromMs(performance.now() - this.mouse.downAt) : 0;
    const pull = charge * 26 + kick * -34; // pull back while charging, kick forward on throw
    const hx = cx + this.vw * 0.21, hy = base - 64 + bob + pull * 0.6;
    // arm (navy sleeve)
    ctx.fillStyle = '#1B2A4A';
    ctx.beginPath();
    ctx.moveTo(hx + 90, base + 10);
    ctx.quadraticCurveTo(hx + 40, hy + 40, hx, hy + 8);
    ctx.lineTo(hx + 34, hy - 14);
    ctx.quadraticCurveTo(hx + 90, hy + 20, hx + 130, base + 10);
    ctx.closePath(); ctx.fill();
    // orange cuff
    ctx.fillStyle = '#FF6B35'; ctx.beginPath(); ctx.ellipse(hx + 16, hy + 2, 20, 12, -0.5, 0, Math.PI * 2); ctx.fill();
    // mitten
    ctx.fillStyle = '#2c3e63';
    ctx.beginPath(); ctx.ellipse(hx, hy - 6, 24, 19, -0.35, 0, Math.PI * 2); ctx.fill();
    // snowball in hand (if ammo)
    if (h.snowballs > 0 && !h.crafting) {
      ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#bcd7e8';
      ctx.beginPath(); ctx.arc(hx - 6, hy - 18, 15 + charge * 3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    // crafting: both mittens pressing snow at screen bottom center
    if (h.crafting) {
      const t = 1 - h.craftTimer / C.craft.seconds;
      const squeeze = Math.sin(now / 90) * 6;
      ctx.fillStyle = '#2c3e63';
      ctx.beginPath(); ctx.ellipse(cx - 46 + squeeze, base - 58, 26, 20, 0.4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 46 - squeeze, base - 58, 26, 20, -0.4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#bcd7e8';
      ctx.beginPath(); ctx.arc(cx, base - 66, 17 + t * 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
  }

  _renderCrosshair(ctx, now) {
    const cx = this.vw / 2, cy = this.vh / 2;
    const h = this.human;
    ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 2;
    const gap = 5 + (this.mouse.down ? E.chargeFromMs(performance.now() - this.mouse.downAt) * 8 : 0);
    const len = 8;
    ctx.beginPath();
    ctx.moveTo(cx - gap - len, cy); ctx.lineTo(cx - gap, cy);
    ctx.moveTo(cx + gap, cy); ctx.lineTo(cx + gap + len, cy);
    ctx.moveTo(cx, cy - gap - len); ctx.lineTo(cx, cy - gap);
    ctx.moveTo(cx, cy + gap); ctx.lineTo(cx, cy + gap + len);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(cx - 1, cy - 1, 2, 2);
    // charge meter under crosshair
    if (this.mouse.down && h.alive && !h.crafting) {
      const charge = E.chargeFromMs(performance.now() - this.mouse.downAt);
      const bw = 90;
      ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(cx - bw / 2, cy + 26, bw, 7);
      ctx.fillStyle = charge > 0.85 ? '#DC143C' : '#FF6B35';
      ctx.fillRect(cx - bw / 2, cy + 26, bw * charge, 7);
      ctx.fillStyle = '#fff'; ctx.font = '11px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(`${Math.round(E.rangeForCharge(charge) / 10)}m`, cx, cy + 47);
    }
    // craft countdown ring around crosshair
    if (h.crafting) {
      const frac = 1 - h.craftTimer / C.craft.seconds;
      const col = frac < 0.5 ? '#ffffff' : frac < 0.85 ? '#FF6B35' : '#DC143C';
      ctx.strokeStyle = col; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.arc(cx, cy, 34, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2); ctx.stroke();
      ctx.fillStyle = col; ctx.font = 'bold 20px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(String(Math.ceil(h.craftTimer)), cx, cy + 7);
      ctx.font = 'bold 13px system-ui';
      ctx.fillText('제작 중 — 무방비!', cx, cy + 62);
    }
    // hit marker
    if (now < this.hitMarkerUntil) {
      ctx.strokeStyle = 'rgba(255,80,60,0.95)'; ctx.lineWidth = 3;
      const o = 7, l = 8;
      ctx.beginPath();
      ctx.moveTo(cx - o - l, cy - o - l); ctx.lineTo(cx - o, cy - o);
      ctx.moveTo(cx + o, cy - o); ctx.lineTo(cx + o + l, cy - o - l);
      ctx.moveTo(cx - o - l, cy + o + l); ctx.lineTo(cx - o, cy + o);
      ctx.moveTo(cx + o, cy + o); ctx.lineTo(cx + o + l, cy + o + l);
      ctx.stroke();
    }
  }

  // ---- HUD (DOM) -------------------------------------------------------------
  _renderHud() {
    if (this.scene !== 'play' && this.scene !== 'drop') { this.hud.style.display = 'none'; return; }
    this.hud.style.display = 'block';
    const g = this.game, h = this.human;
    const surv = E.aliveCount(g);
    const act = actForSurvivors(surv);
    const nextShrink = Math.max(0, Math.ceil(g.zone.nextShrink - g.t));
    this.hud.textContent = '';
    const top = el('div', 'sr-hud-top');
    top.appendChild(el('div', 'sr-hud-surv', `생존 ${surv}`));
    top.appendChild(el('div', 'sr-hud-act', act.title));
    top.appendChild(el('div', 'sr-hud-zone', `⛈ ${nextShrink}s`));
    this.hud.appendChild(top);

    // bottom-left: HP
    const bl = el('div', 'sr-hud-bl');
    const hpWrap = el('div', 'sr-hp');
    const hpFill = el('div', 'sr-hp-fill'); hpFill.style.width = Math.max(0, h.hp) + '%';
    hpFill.style.background = h.hp > 50 ? '#7FFFD4' : h.hp > 25 ? '#FF6B35' : '#DC143C';
    hpWrap.appendChild(hpFill); hpWrap.appendChild(el('span', 'sr-hp-txt', `${Math.max(0, Math.round(h.hp))}`));
    bl.appendChild(hpWrap);
    if (this.scene === 'drop') bl.appendChild(el('div', 'sr-drop', `낙하 중 — 착지 ${Math.max(0, Math.ceil(8 - this.dropT))}s (클릭=낙하 지점)`));
    this.hud.appendChild(bl);

    // bottom-right: ammo + tactical (FPS style)
    const br = el('div', 'sr-hud-br');
    br.appendChild(el('div', 'sr-ammo-big', `${h.snowballs}`));
    br.appendChild(el('div', 'sr-ammo-cap', '❄ SNOWBALLS'));
    br.appendChild(el('div', 'sr-tac', `Q 설벽 ${h.walls}/${C.wall.maxPerPlayer} · F 미끼 ${h.decoys}/${C.decoy.maxPerPlayer}`));
    this.hud.appendChild(br);

    // kill feed (top-right)
    const feedNow = performance.now();
    this.killFeed = this.killFeed.filter((k) => k.until > feedNow);
    if (this.killFeed.length) {
      const feed = el('div', 'sr-killfeed');
      for (const k of this.killFeed) feed.appendChild(el('div', 'sr-kf-row', k.text));
      this.hud.appendChild(feed);
    }

    if (this._showMinimap && this.scene === 'play') this.hud.appendChild(this._minimapEl());

    if (this._toastText && performance.now() < this._toastUntil) {
      this.hud.appendChild(el('div', 'sr-toast', this._toastText));
    }
  }

  _minimapEl() {
    const g = this.game; const box = el('div', 'sr-minimap');
    const cv = document.createElement('canvas'); cv.width = 170; cv.height = 170; box.appendChild(cv);
    const x = cv.getContext('2d'); const sc = 170 / C.map.size;
    x.fillStyle = 'rgba(13,27,42,0.88)'; x.fillRect(0, 0, 170, 170);
    x.strokeStyle = '#fff'; x.lineWidth = 1;
    x.beginPath(); x.arc(g.zone.cx * sc, g.zone.cy * sc, g.zone.radius * sc, 0, Math.PI * 2); x.stroke();
    for (const pile of g.piles) { if (pile.cooldownUntil <= g.t) { x.fillStyle = '#A8D8EA'; x.fillRect(pile.x * sc - 1, pile.y * sc - 1, 3, 3); } }
    for (const p of g.players) {
      if (!p.alive) continue;
      x.fillStyle = p.id === g._humanId ? '#FF6B35' : '#9E9E9E';
      x.beginPath(); x.arc(p.x * sc, p.y * sc, p.id === g._humanId ? 3.4 : 2, 0, Math.PI * 2); x.fill();
    }
    // view cone for human
    const h = this.human;
    x.strokeStyle = 'rgba(255,107,53,0.8)';
    x.beginPath(); x.moveTo(h.x * sc, h.y * sc);
    x.lineTo(h.x * sc + Math.cos(this.yaw) * 14, h.y * sc + Math.sin(this.yaw) * 14); x.stroke();
    return box;
  }

  // ---- helpers -------------------------------------------------------------
  _toast(t, ms = 3200) { this._toastText = t; this._toastUntil = performance.now() + ms; }
  _btn(label, onClick, primary) { const b = document.createElement('button'); b.className = 'sr-btn' + (primary ? ' primary' : ''); b.textContent = label; b.addEventListener('click', () => { this.audio.resume(); onClick(); }); return b; }
  _stat(label, val) { const d = el('div', 'sr-stat'); d.appendChild(el('div', 'sr-stat-v', String(val))); d.appendChild(el('div', 'sr-stat-l', label)); return d; }

  // ---- validation/screenshot driver ---------------------------------------
  async __drive(state) {
    if (!this.assetsLoaded) await this._loadAssets();
    if (state === 'title') { this._showTitle(); return; }
    this.newGame(42);
    if (state === 'drop') return;
    if (state === 'play' || state === 'fps') {
      this._enterPlay(); this.human.snowballs = 10;
      // stage a scene: put some NPCs & a pile in front of camera for the screenshot
      const h = this.human;
      this.yaw = 0;
      const near = this.game.players.filter((p) => p.isNpc).slice(0, 4);
      const dists = [90, 170, 300, 460];
      near.forEach((p, i) => { p.x = h.x + dists[i]; p.y = h.y + (i - 1.5) * 60; });
      this.game.piles.push({ id: 90001, x: h.x + 46, y: h.y + 14, cooldownUntil: 0 });
      return;
    }
    if (state === 'craft') {
      this._enterPlay();
      const h = this.human;
      this.game.piles.push({ id: 90002, x: h.x, y: h.y, cooldownUntil: 0 });
      E.startCraft(this.game, h);
      return;
    }
    if (state === 'result' || state === 'win') {
      this._enterPlay();
      if (state === 'win') { for (const p of this.game.players) if (p.id !== this.game._humanId) E.setHp(this.game, p, 0); }
      else E.setHp(this.game, this.human, 0);
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
      // FPS projection sanity: a point straight ahead projects to screen center X
      this.game = g; this.human = h; this.yaw = 0;
      const p = this._project(h.x + 100, h.y);
      chk('FPS 투영(전방→화면 중앙)', p && Math.abs(p.sx - this.vw / 2) < 1, p ? `sx=${p.sx.toFixed(1)}` : 'null');
      const pr = this._project(h.x + 100, h.y + 50);
      chk('FPS 투영(우측→화면 우측)', pr && pr.sx > this.vw / 2, pr ? `sx=${pr.sx.toFixed(1)}` : 'null');
      const far = this._project(h.x + 400, h.y), nearp = this._project(h.x + 60, h.y);
      chk('원근 스케일(가까울수록 큼)', far && nearp && nearp.scale > far.scale);
      let guard = 0; while (!g.over && guard++ < 12000) { const hh = E.humanPlayer(g); if (hh.alive) { if (!hh.npc) hh.npc = { state: 'PATROL', reactTimer: 0 }; const w = hh.isNpc; hh.isNpc = true; E.npcThink(g, hh, 0.1); hh.isNpc = w; } E.step(g, 0.1); }
      chk('매치 완주(승자 1인)', g.over && E.aliveCount(g) === 1, `t=${g.t.toFixed(0)}s`);
    } catch (e) { rep.errors.push(String(e && e.message || e)); }
    rep.pass = rep.checks.every((c) => c.pass) && rep.errors.length === 0;
    return rep;
  }
}

function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
