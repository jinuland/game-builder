// Snow Royale — TRUE 3D renderer (Three.js, MIT). First-person WebGL:
// low-poly procedural characters (built from primitives — no external model
// downloads, fully open-source), 3D snow terrain with rocks/trees/cabins,
// a glowing cylindrical storm wall for the shrinking zone, corpses that fall
// over and stay, glowing snowballs with trails. Engine logic is unchanged.
import * as THREE from 'three';
import * as E from './engine.js';
import { AudioEngine } from './audio.js';
import { CONFIG as C, SKINS, CLASSES, actForSurvivors } from './config.js';

const SAVE_KEY = 'snow_royale_save_v1';
const EYE = 17;               // camera eye height (world units; 1200u map)
const CHAR_SCALE = 11;        // base character size

// skin palettes for low-poly figures (jacket, pants, head, accent)
const PALETTES = {
  jack: { jacket: 0x1b2a4a, pants: 0x2c3550, head: 0xe8b89a, accent: 0xff6b35 },
  white: { jacket: 0xe8eef4, pants: 0xd7e2ec, head: 0xf0c6a8, accent: 0xa8d8ea },
  bear: { jacket: 0x5b4326, pants: 0x3e3020, head: 0xd9a97f, accent: 0xd4a017 },
  bot: { jacket: 0x8b8f96, pants: 0x74777d, head: 0xa7abb2, accent: 0x5f636a },
};

export class SnowApp {
  constructor(root, { seed = null, timeScale = 1, autoStart = true } = {}) {
    this.root = root;
    this.seed = seed;
    this.timeScale = timeScale;
    this.audio = new AudioEngine();
    this.scene3 = null;
    this.sceneName = 'title';
    this.keys = {};
    this.mouse = { down: false, downAt: 0 };
    this.yaw = 0; this.pitch = 0;
    this.locked = false;
    this.bobT = 0;
    this.hitMarkerUntil = 0;
    this.damageFlashUntil = 0;
    this.killFeed = [];
    this.dropTarget = null;
    this.actors = new Map();     // playerId -> THREE.Group
    this.corpseSet = new Set();  // corpse ids already spawned
    this.sbMeshes = new Map();   // snowball id -> mesh
    this.wallMeshes = new Map();
    this.decoyMeshes = new Map();
    this._build();
    if (autoStart) this._showTitle();
  }

  // alias for older callers
  get scene() { return this.sceneName; }
  set scene(v) { this.sceneName = v; }

  _build() {
    this.root.innerHTML = '';
    this.root.className = 'sr-root';
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.canvas = this.renderer.domElement;
    this.canvas.className = 'sr-canvas';
    this.root.appendChild(this.canvas);

    // 2D overlay canvas for crosshair/viewmodel/FX
    this.fx = document.createElement('canvas');
    this.fx.className = 'sr-fx';
    this.root.appendChild(this.fx);
    this.fxCtx = this.fx.getContext('2d');

    this.overlay = document.createElement('div');
    this.overlay.className = 'sr-overlay';
    this.root.appendChild(this.overlay);
    this.hud = document.createElement('div');
    this.hud.className = 'sr-hud';
    this.hud.style.display = 'none';
    this.root.appendChild(this.hud);

    this.camera = new THREE.PerspectiveCamera(80, 1, 0.5, 3000);
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._bindInput();
    this.assetsLoaded = true; // procedural — nothing to fetch
    this._loop();
  }

  async _loadAssets() { this.assetsLoaded = true; return true; }

  _resize() {
    const w = this.root.clientWidth || 960, h = this.root.clientHeight || 600;
    this.vw = w; this.vh = h;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.fx.width = w * dpr; this.fx.height = h * dpr;
    this.fx.style.width = w + 'px'; this.fx.style.height = h + 'px';
    this.fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // ---- 3D world construction ------------------------------------------------
  _buildWorld() {
    const g = this.game;
    const s = new THREE.Scene();
    this.scene3 = s;
    s.background = new THREE.Color(0xbfd8ea);
    s.fog = new THREE.Fog(0xd7e8f4, 220, 900);

    // lights: cold ambient + warm low sun (white ground bounce so snow reads white)
    s.add(new THREE.HemisphereLight(0xdfeaf4, 0xffffff, 1.0));
    const sun = new THREE.DirectionalLight(0xfff3e0, 1.0);
    sun.position.set(-400, 500, 250);
    s.add(sun);

    // terrain: big plane with gentle procedural bumps + vertex snow shading
    const seg = 96;
    const geo = new THREE.PlaneGeometry(C.map.size * 2.2, C.map.size * 2.2, seg, seg);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const rng = E.CONFIG ? Math.sin : Math.sin;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const h = Math.sin(x * 0.008) * Math.cos(z * 0.006) * 6 + Math.sin(x * 0.02 + z * 0.017) * 2.2;
      pos.setY(i, h - 0.5);
    }
    geo.computeVertexNormals();
    const snowMat = new THREE.MeshStandardMaterial({ color: 0xf7fafc, roughness: 0.95, metalness: 0 });
    const ground = new THREE.Mesh(geo, snowMat);
    ground.position.set(C.map.size / 2, 0, C.map.size / 2);
    s.add(ground);

    // distant mountain ring (low-poly cones)
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const r = C.map.size * 1.15;
      const h = 180 + (i % 4) * 70;
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(120 + (i % 3) * 60, h, 5),
        new THREE.MeshStandardMaterial({ color: 0xcdd9e4, roughness: 1, flatShading: true }),
      );
      cone.position.set(C.map.size / 2 + Math.cos(a) * r, h / 2 - 24, C.map.size / 2 + Math.sin(a) * r);
      s.add(cone);
    }

    // obstacles from engine: rocks / trees / cabins
    for (const o of g.obstacles) {
      let mesh;
      if (o.kind === 'rock') {
        mesh = new THREE.Mesh(
          new THREE.DodecahedronGeometry(o.r, 0),
          new THREE.MeshStandardMaterial({ color: 0x9aa7b4, roughness: 1, flatShading: true }),
        );
        mesh.position.set(o.x, o.r * 0.45, o.y);
        mesh.rotation.set(o.yaw, o.yaw * 1.7, 0);
        // snow cap
        const cap = new THREE.Mesh(
          new THREE.DodecahedronGeometry(o.r * 0.82, 0),
          new THREE.MeshStandardMaterial({ color: 0xf4f8fb, roughness: 1, flatShading: true }),
        );
        cap.position.set(o.x, o.r * 0.75, o.y);
        s.add(cap);
      } else if (o.kind === 'tree') {
        mesh = new THREE.Group();
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(o.r * 0.18, o.r * 0.24, o.r * 1.2, 6),
          new THREE.MeshStandardMaterial({ color: 0x6d4c33, roughness: 1 }),
        );
        trunk.position.y = o.r * 0.6;
        mesh.add(trunk);
        for (let t = 0; t < 3; t++) {
          const tier = new THREE.Mesh(
            new THREE.ConeGeometry(o.r * (1.5 - t * 0.35), o.r * 1.35, 7),
            new THREE.MeshStandardMaterial({ color: t === 0 ? 0x2f5d43 : 0x3c7254, roughness: 1, flatShading: true }),
          );
          tier.position.y = o.r * (1.1 + t * 0.8);
          mesh.add(tier);
          const snowTier = new THREE.Mesh(
            new THREE.ConeGeometry(o.r * (1.5 - t * 0.35) * 0.7, o.r * 0.4, 7),
            new THREE.MeshStandardMaterial({ color: 0xf4f8fb, roughness: 1, flatShading: true }),
          );
          snowTier.position.y = o.r * (1.55 + t * 0.8);
          mesh.add(snowTier);
        }
        mesh.position.set(o.x, 0, o.y);
      } else { // cabin
        mesh = new THREE.Group();
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(o.r * 1.8, o.r * 0.9, o.r * 1.3),
          new THREE.MeshStandardMaterial({ color: 0x7a5a3a, roughness: 1 }),
        );
        body.position.y = o.r * 0.45;
        mesh.add(body);
        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(o.r * 1.45, o.r * 0.8, 4),
          new THREE.MeshStandardMaterial({ color: 0xf4f8fb, roughness: 1, flatShading: true }),
        );
        roof.position.y = o.r * 1.3;
        roof.rotation.y = Math.PI / 4;
        mesh.add(roof);
        // warm window
        const win = new THREE.Mesh(
          new THREE.PlaneGeometry(o.r * 0.3, o.r * 0.3),
          new THREE.MeshBasicMaterial({ color: 0xffc266 }),
        );
        win.position.set(0, o.r * 0.5, o.r * 0.66);
        mesh.add(win);
        mesh.rotation.y = o.yaw;
        mesh.position.set(o.x, 0, o.y);
      }
      s.add(mesh);
    }

    // snow piles: soft white mounds with sparkle
    this.pileMeshes = new Map();
    for (const pile of g.piles) {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(10, 10, 7, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, emissive: 0x8fc9e8, emissiveIntensity: 0.12 }),
      );
      m.position.set(pile.x, 0, pile.y);
      m.scale.y = 0.62;
      s.add(m);
      this.pileMeshes.set(pile.id, m);
    }

    // zone storm wall: translucent cylinder, additive so it glows but never
    // paints the whole view when seen from inside
    const zoneGeo = new THREE.CylinderGeometry(1, 1, 260, 96, 1, true);
    this.zoneMat = new THREE.MeshBasicMaterial({
      color: 0x59b8e8, transparent: true, opacity: 0.16, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.zoneWall = new THREE.Mesh(zoneGeo, this.zoneMat);
    this.zoneWall.position.set(g.zone.cx, 130, g.zone.cy);
    s.add(this.zoneWall);
    // vertical light beams along the edge for readability
    this.zoneBeams = new THREE.Group();
    const beamMat = new THREE.MeshBasicMaterial({ color: 0x9fe0ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
    for (let i = 0; i < 36; i++) {
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 220, 5), beamMat);
      beam.userData.angle = (i / 36) * Math.PI * 2;
      beam.position.y = 110;
      this.zoneBeams.add(beam);
    }
    this.zoneBeams.position.set(g.zone.cx, 0, g.zone.cy);
    s.add(this.zoneBeams);
    // zone edge ring on the ground (bright line, always visible).
    // NOTE: geometry is rebuilt on radius change — scaling a torus would also
    // scale its tube thickness and flood the scene.
    this.zoneRing = new THREE.Mesh(
      new THREE.TorusGeometry(g.zone.radius, 2.2, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x33ccff }),
    );
    this.zoneRing.rotation.x = Math.PI / 2;
    this.zoneRing.position.set(g.zone.cx, 1.2, g.zone.cy);
    this._zoneRingR = g.zone.radius;
    s.add(this.zoneRing);

    // pickups: heal packs (white box + red cross) and shields (blue glowing disc)
    this.pickupMeshes = new Map();
    for (const it of g.pickups) {
      const grp = new THREE.Group();
      if (it.kind === 'heal') {
        const box = new THREE.Mesh(new THREE.BoxGeometry(10, 7, 10), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }));
        box.position.y = 5; grp.add(box);
        const crossMat = new THREE.MeshBasicMaterial({ color: 0xe03131 });
        const c1 = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.8, 1.8), crossMat); c1.position.y = 9.2; grp.add(c1);
        const c2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 6.4), crossMat); c2.position.y = 9.2; grp.add(c2);
      } else if (it.kind === 'shield') {
        const disc = new THREE.Mesh(
          new THREE.CylinderGeometry(7, 7, 2.4, 18),
          new THREE.MeshStandardMaterial({ color: 0x4d9fff, emissive: 0x2266cc, emissiveIntensity: 0.7, roughness: 0.3 }),
        );
        disc.position.y = 6; disc.rotation.x = 0.35; grp.add(disc);
      } else { // pill: two-tone capsule, glowing so it reads as "power-up"
        const capMatA = new THREE.MeshStandardMaterial({ color: 0xffd43b, emissive: 0xcc9900, emissiveIntensity: 0.7, roughness: 0.35 });
        const capMatB = new THREE.MeshStandardMaterial({ color: 0xff4d6d, emissive: 0xaa1133, emissiveIntensity: 0.7, roughness: 0.35 });
        const half1 = new THREE.Mesh(new THREE.CapsuleGeometry(4.6, 5, 6, 12), capMatA);
        half1.rotation.z = Math.PI / 2; half1.position.set(-2.6, 9, 0); grp.add(half1);
        const half2 = new THREE.Mesh(new THREE.CapsuleGeometry(4.6, 5, 6, 12), capMatB);
        half2.rotation.z = Math.PI / 2; half2.position.set(2.6, 9, 0); grp.add(half2);
      }
      // vertical light beacon so items are findable from a distance
      const beaconColor = it.kind === 'heal' ? 0xff6b6b : it.kind === 'shield' ? 0x4d9fff : 0xffd43b;
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.5, 52, 6),
        new THREE.MeshBasicMaterial({ color: beaconColor, transparent: true, opacity: 0.34, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      beam.position.y = 26; grp.add(beam);
      grp.position.set(it.x, 0, it.y);
      s.add(grp);
      this.pickupMeshes.set(it.id, grp);
    }

    // enemy HP bars: billboard sprites above each actor
    this.hpSprites = new Map();

    // snowfall particles
    const flakes = 900;
    const fGeo = new THREE.BufferGeometry();
    const fPos = new Float32Array(flakes * 3);
    for (let i = 0; i < flakes; i++) {
      fPos[i * 3] = Math.random() * C.map.size;
      fPos[i * 3 + 1] = Math.random() * 160;
      fPos[i * 3 + 2] = Math.random() * C.map.size;
    }
    fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
    this.snowPts = new THREE.Points(fGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, transparent: true, opacity: 0.85 }));
    s.add(this.snowPts);

    // actors
    this.actors.clear(); this.corpseSet.clear(); this.sbMeshes.clear(); this.wallMeshes.clear(); this.decoyMeshes.clear();
    for (const p of g.players) {
      if (p.id === g._humanId) continue;
      const fig = this._makeFigure(p.skin, p.isNpc);
      fig.position.set(p.x, 0, p.y);
      s.add(fig);
      this.actors.set(p.id, fig);
    }
  }

  // floating HP bar sprite for an enemy (canvas texture, camera-facing)
  _hpSprite(p) {
    let s = this.hpSprites && this.hpSprites.get(p.id);
    if (!s && this.hpSprites) {
      const cv = document.createElement('canvas'); cv.width = 96; cv.height = 26;
      const tex = new THREE.CanvasTexture(cv);
      const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true });
      s = new THREE.Sprite(mat);
      s.scale.set(26, 7, 1);
      s.userData = { cv, tex, lastHp: -1, lastShield: -1 };
      this.scene3.add(s);
      this.hpSprites.set(p.id, s);
      this._paintHpSprite(s, p);
    }
    return s;
  }
  _paintHpSprite(s, p) {
    const { cv, tex } = s.userData;
    const x = cv.getContext('2d');
    x.clearRect(0, 0, cv.width, cv.height);
    // name
    x.font = 'bold 10px system-ui'; x.textAlign = 'center';
    x.fillStyle = p.isNpc ? '#d7dde3' : '#ffffff';
    x.fillText(p.name.slice(0, 14), cv.width / 2, 9);
    // bar
    const bw = 84, bh = 7, bx = (cv.width - bw) / 2, by = 13;
    x.fillStyle = 'rgba(0,0,0,0.65)'; x.fillRect(bx, by, bw, bh);
    const frac = Math.max(0, p.hp / (p.maxHp || 100));
    x.fillStyle = frac > 0.5 ? '#7FFFD4' : frac > 0.25 ? '#FF6B35' : '#DC143C';
    x.fillRect(bx + 1, by + 1, (bw - 2) * frac, bh - 2);
    // shield pips
    if (p.shieldHits > 0) {
      x.fillStyle = '#4d9fff';
      for (let i = 0; i < Math.min(6, p.shieldHits); i++) x.fillRect(bx + i * 7, by + bh + 2, 5, 3);
    }
    tex.needsUpdate = true;
    s.userData.lastHp = p.hp; s.userData.lastShield = p.shieldHits;
  }

  // low-poly humanoid from primitives (open-source procedural, no downloads)
  _makeFigure(skin, isNpc) {
    const pal = PALETTES[skin] || PALETTES.bot;
    const gp = new THREE.Group();
    const S = CHAR_SCALE;
    const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, flatShading: true });
    // legs
    const legGeo = new THREE.BoxGeometry(S * 0.28, S * 0.8, S * 0.3);
    const legL = new THREE.Mesh(legGeo, mat(pal.pants)); legL.position.set(-S * 0.18, S * 0.4, 0); gp.add(legL);
    const legR = new THREE.Mesh(legGeo, mat(pal.pants)); legR.position.set(S * 0.18, S * 0.4, 0); gp.add(legR);
    // torso (puffy jacket)
    const torso = new THREE.Mesh(new THREE.BoxGeometry(S * 0.85, S * 0.9, S * 0.5), mat(pal.jacket));
    torso.position.y = S * 1.25; gp.add(torso);
    // accent stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(S * 0.87, S * 0.14, S * 0.52), mat(pal.accent));
    stripe.position.y = S * 1.12; gp.add(stripe);
    // arms
    const armGeo = new THREE.BoxGeometry(S * 0.22, S * 0.75, S * 0.24);
    const armL = new THREE.Mesh(armGeo, mat(pal.jacket)); armL.position.set(-S * 0.58, S * 1.25, 0); gp.add(armL);
    const armR = new THREE.Mesh(armGeo, mat(pal.jacket)); armR.position.set(S * 0.58, S * 1.25, 0); gp.add(armR);
    // head + hood
    const head = new THREE.Mesh(new THREE.BoxGeometry(S * 0.44, S * 0.42, S * 0.42), mat(pal.head));
    head.position.y = S * 1.95; gp.add(head);
    const hood = new THREE.Mesh(new THREE.BoxGeometry(S * 0.54, S * 0.24, S * 0.5), mat(pal.jacket));
    hood.position.y = S * 2.18; gp.add(hood);
    if (isNpc) {
      // grey visor band to mark bots
      const visor = new THREE.Mesh(new THREE.BoxGeometry(S * 0.46, S * 0.1, S * 0.05), mat(0x3d4148));
      visor.position.set(0, S * 1.98, S * 0.22); gp.add(visor);
    }
    gp.userData = { armR, armL, legL, legR, S };
    return gp;
  }

  // ---- scenes (DOM overlays reused) -----------------------------------------
  _showTitle() {
    this.sceneName = 'title'; this.hud.style.display = 'none';
    if (document.pointerLockElement) document.exitPointerLock();
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '스노우 로얄';
    const sub = document.createElement('p'); sub.className = 'sr-sub'; sub.textContent = 'Snow Royale — 3D 1인칭 눈싸움 배틀로얄';
    c.appendChild(h); c.appendChild(sub);
    const diffRow = document.createElement('div'); diffRow.className = 'sr-diffrow';
    this._difficulty = this._difficulty || 'normal';
    for (const [k, label] of [['easy', '쉬움'], ['normal', '보통'], ['hard', '어려움']]) {
      const b = document.createElement('button'); b.className = 'sr-diff' + (this._difficulty === k ? ' on' : ''); b.textContent = label;
      b.addEventListener('click', () => { this._difficulty = k; this._showTitle(); });
      diffRow.appendChild(b);
    }
    c.appendChild(diffRow);
    // match size (total players) selection
    this._total = this._total || C.match.total;
    const sizeRow = document.createElement('div'); sizeRow.className = 'sr-diffrow';
    for (const n of C.match.totalOptions) {
      const b = document.createElement('button'); b.className = 'sr-diff' + (this._total === n ? ' on' : ''); b.textContent = `${n}인`;
      b.addEventListener('click', () => { this._total = n; this._showTitle(); });
      sizeRow.appendChild(b);
    }
    c.appendChild(sizeRow);
    // class (character trait) selection
    this._classId = this._classId || 'jack';
    const clsHead = document.createElement('p'); clsHead.className = 'sr-sub'; clsHead.textContent = '캐릭터 특성 선택';
    c.appendChild(clsHead);
    const clsRow = document.createElement('div'); clsRow.className = 'sr-classrow';
    for (const cls of Object.values(CLASSES)) {
      const b = document.createElement('button');
      b.className = 'sr-class' + (this._classId === cls.id ? ' on' : '');
      const nm = document.createElement('b'); nm.textContent = cls.name;
      const ds = document.createElement('span'); ds.textContent = cls.desc;
      b.appendChild(nm); b.appendChild(ds);
      b.addEventListener('click', () => { this._classId = cls.id; this._showTitle(); });
      clsRow.appendChild(b);
    }
    c.appendChild(clsRow);
    // Y-axis invert option (default OFF = standard FPS: mouse up → look up)
    this.invertY = this.invertY ?? false;
    const inv = this._btn(this.invertY ? '↕ 마우스 상하 반전: 켜짐' : '↕ 마우스 상하 반전: 꺼짐', () => { this.invertY = !this.invertY; this._showTitle(); });
    c.appendChild(inv);
    const start = this._btn('낙하 시작', () => this.newGame(), true); c.appendChild(start);
    c.appendChild(this._btn('❓ 조작법', () => this._showHelp()));
    const mute = this._btn(this.audio.muted ? '🔇 사운드' : '🔊 사운드', () => { this.audio.setMuted(!this.audio.muted); mute.textContent = this.audio.muted ? '🔇 사운드' : '🔊 사운드'; });
    c.appendChild(mute);
    const foot = document.createElement('p'); foot.className = 'sr-foot';
    foot.textContent = 'Three.js 3D · 화면 클릭=조준 잠금(ESC 해제) · WASD 이동 · Space 점프 · 마우스 시점 · 좌클릭 홀드 투척 · E 제작 · Q 설벽 · F 미끼 · C 엄폐 · M 지도';
    c.appendChild(foot);
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  _showHelp() {
    const ov = document.createElement('div'); ov.className = 'sr-modal';
    const box = document.createElement('div'); box.className = 'sr-modal-box';
    const h = document.createElement('h2'); h.textContent = '조작법 (3D FPS)';
    box.appendChild(h);
    const lines = [
      '🖱 화면 클릭 — 마우스 조준 잠금 (ESC로 해제)',
      '마우스 — 시점 회전 (위로 밀면 위를 봄 · 타이틀에서 반전 가능)',
      'W A S D — 보는 방향 기준 이동 · Space — 점프(공중에서 눈뭉치 회피) · C — 엄폐(피해 절반)',
      '🛡 방패 아이템 — 들고 있는 동안 피격 완전 방어, 내구도 4회 소진 시 파괴',
      '💊 알약 — 랜덤 버프 20초: 이동/공격/제작 증가, 낮은 확률로 눈 기관총(75발 연사)',
      '좌클릭 홀드 → 놓기 — 눈뭉치 투척 (오래 누를수록 멀리)',
      'E — 눈더미(반짝이는 흰 둔덕) 앞에서 3초 제작 +10 (무방비!)',
      'Q — 설벽 건설 (4개) · F — 눈사람 미끼 (5개) · M — 지도',
      '파란 빛 기둥 벽 = 눈보라 구역 경계. 벽 밖에 있으면 체력이 닳습니다',
      '쓰러진 플레이어는 그 자리에 남습니다',
    ];
    lines.forEach((t) => { const p = document.createElement('p'); p.textContent = t; box.appendChild(p); });
    box.appendChild(this._btn('닫기', () => ov.remove(), true));
    ov.appendChild(box); this.root.appendChild(ov);
  }

  newGame(seed = this.seed) {
    this.audio.init(); this.audio.resume();
    const s = seed != null ? seed : (Math.floor(performance.now()) % 100000) + 1;
    this.game = E.createGame(s, { total: this._total || C.match.total, difficulty: this._difficulty || 'normal', classId: this._classId || 'jack' });
    this.human = E.humanPlayer(this.game);
    this._buildWorld();
    this.sceneName = 'drop';
    this.dropT = 0;
    this.dropTarget = { x: this.game.zone.cx + this.game.rng.range(-300, 300), y: this.game.zone.cy + this.game.rng.range(-300, 300) };
    // everyone drops together: stagger each NPC's fall over the 8s drop window
    this.dropPlan = new Map();
    for (const p of this.game.players) {
      if (p.id === this.game._humanId) continue;
      this.dropPlan.set(p.id, { delay: this.game.rng.range(0, 2.5), fallSec: this.game.rng.range(3.2, 4.6), sway: this.game.rng.range(0, Math.PI * 2) });
    }
    this.yaw = 0; this.pitch = -0.15;
    this.killFeed = [];
    this.overlay.style.display = 'none'; this.overlay.innerHTML = '';
    this.hud.style.display = 'block';
    this._lastSurvivors = C.match.total;
    this._toast('지도를 클릭해 낙하 지점을 고르세요');
  }

  _enterPlay() {
    this.sceneName = 'play';
    if (this.dropTarget) { this.human.x = this.dropTarget.x; this.human.y = this.dropTarget.y; }
    // keep facing the way the drop camera was gliding — no jarring snap
    this.yaw = this._dropLandYaw != null ? this._dropLandYaw : Math.atan2(this.game.zone.cy - this.human.y, this.game.zone.cx - this.human.x);
    this.pitch = 0;
    this.audio.landing();
    this._toast('화면을 클릭해 조준을 잠그세요 (ESC 해제)');
  }

  _showResult() {
    this.sceneName = 'result'; this.hud.style.display = 'none';
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

  // ---- input -----------------------------------------------------------------
  _bindInput() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space' && this.sceneName === 'result') { e.preventDefault(); this.newGame(); }
      if (this.sceneName === 'play') {
        if (e.code === 'KeyE') this._tryCraft();
        if (e.code === 'KeyQ') this._act('wall');
        if (e.code === 'KeyF') this._act('decoy');
        if (e.code === 'Space' && E.jump(this.game, this.human)) this.audio.throw();
        if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(e.code)) e.preventDefault();
      }
      if (e.code === 'KeyM') this._showMinimap = !this._showMinimap;
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    window.addEventListener('blur', () => { this.keys = {}; this.mouse.down = false; });

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (!this.locked && this.sceneName === 'play') this._toast('조준 잠금 해제 — 화면을 클릭해 다시 잠그세요');
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.locked || this.sceneName !== 'play') return;
      const sens = 0.0024;
      this.yaw += e.movementX * sens;
      // STANDARD FPS: mouse up (movementY<0) → look up (pitch up). invertY flips.
      const dir = this.invertY ? -1 : 1;
      this.pitch = Math.max(-0.85, Math.min(0.85, this.pitch - e.movementY * sens * dir));
    });

    const rect = () => this.canvas.getBoundingClientRect();
    this.canvas.addEventListener('mousedown', (e) => {
      this.audio.resume();
      if (this.sceneName === 'drop') {
        const r = rect();
        const w = this._dropScreenToWorld(e.clientX - r.left, e.clientY - r.top);
        if (w) this.dropTarget = w;
        return;
      }
      if (this.sceneName === 'play') {
        if (!this.locked) {
          const p = this.canvas.requestPointerLock && this.canvas.requestPointerLock({ unadjustedMovement: true });
          if (p && p.catch) p.catch(() => this.canvas.requestPointerLock());
          return;
        }
        this.mouse.down = true; this.mouse.downAt = performance.now();
      }
    });
    this.canvas.addEventListener('mouseup', () => {
      if (this.sceneName === 'play' && this.locked && this.mouse.down) {
        const h = this.human, g = this.game;
        // while the machine gun is active the button sprays instead of charging
        if (!(h && h.mg && g && h.mg.until > g.t && h.mg.ammo > 0)) this._throw(performance.now() - this.mouse.downAt);
        this.mouse.down = false;
      }
    });
    this.canvas.addEventListener('touchstart', (e) => { this.audio.resume(); if (this.sceneName === 'play') { this.mouse.down = true; this.mouse.downAt = performance.now(); } e.preventDefault(); }, { passive: false });
    this.canvas.addEventListener('touchend', (e) => { if (this.sceneName === 'play' && this.mouse.down) { this._throw(performance.now() - this.mouse.downAt); this.mouse.down = false; } e.preventDefault(); }, { passive: false });
  }

  _dropScreenToWorld(sx, sy) {
    const zoom = Math.min(this.vw, this.vh) / (C.map.size * 1.05);
    const ox = this.vw / 2 - this.game.zone.cx * zoom, oy = this.vh / 2 - this.game.zone.cy * zoom;
    return { x: (sx - ox) / zoom, y: (sy - oy) / zoom };
  }

  _tryCraft() {
    if (!this.human.alive || this.human.crafting) return;
    if (E.startCraft(this.game, this.human)) this.audio.craftStart();
    else this._toast('근처에 눈더미가 없습니다 — 반짝이는 흰 둔덕을 찾으세요 (M 지도)');
  }
  _throw(heldMs) {
    if (!this.human.alive || this.human.crafting) return;
    if (this.human.snowballs <= 0) { this._toast('눈뭉치 없음 — 눈더미에서 E로 제작하세요'); return; }
    const charge = E.chargeFromMs(heldMs);
    E.throwSnowball(this.game, this.human, this.yaw, charge);
    this.audio.throw();
    this.viewKick = 1;
  }
  _act(kind) {
    if (!this.human.alive || this.human.crafting) return;
    this.human.aim = this.yaw;
    if (kind === 'wall') { if (E.buildWall(this.game, this.human)) this.audio.wall(); else this._toast(`설벽: 눈뭉치 ${C.wall.cost}개 필요 (최대 ${C.wall.maxPerPlayer})`); }
    if (kind === 'decoy') { if (E.placeDecoy(this.game, this.human)) this.audio.decoy(); else this._toast(`미끼: 눈뭉치 ${C.decoy.cost}개 필요 (최대 ${C.decoy.maxPerPlayer})`); }
  }

  // ---- per-frame update -------------------------------------------------------
  _update(dt) {
    if (!this.game) return;
    if (this.sceneName === 'drop') {
      this.dropT += dt;
      if (this.dropT >= 8) this._enterPlay();
      return;
    }
    if (this.sceneName !== 'play') return;
    const g = this.game, h = this.human;
    h.aim = this.yaw;
    if (h.alive && !h.crafting) {
      let f = 0, r = 0;
      if (this.keys['KeyW'] || this.keys['ArrowUp']) f += 1;
      if (this.keys['KeyS'] || this.keys['ArrowDown']) f -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) r += 1;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) r -= 1;
      h.cover = !!this.keys['KeyC'];
      if (f || r) {
        const cos = Math.cos(this.yaw), sin = Math.sin(this.yaw);
        const mx = cos * f + (-sin) * r;
        const my = sin * f + (cos) * r;
        E.movePlayer(g, h, mx, my, dt);
        this.bobT += dt * 9;
      }
    }
    // snow machine gun: hold left mouse to spray (straight-line, own ammo pool)
    if (h.alive && !h.crafting && h.mg && h.mg.until > g.t && h.mg.ammo > 0 && this.mouse.down && this.locked) {
      if (E.fireMachineGun(g, h, this.yaw)) { this.audio.throw(); this.viewKick = 0.4; }
    }
    const beforeHp = h.hp, beforeCraft = h.crafting, beforeAlive = h.alive;
    const killsBefore = g.kills[h.id] || 0;
    const hitsBefore = g.stats.hits;
    if (h.crafting) { this._craftBeat = (this._craftBeat || 0) + dt; if (this._craftBeat > 0.5) { this._craftBeat = 0; this.audio.craftTick(); } }
    E.step(g, dt);
    if (h.hp < beforeHp) { this.audio.hit(); this.damageFlashUntil = performance.now() + 250; }
    if ((g.kills[h.id] || 0) > killsBefore) this.hitMarkerUntil = performance.now() + 400;
    else if (g.stats.hits > hitsBefore) this.hitMarkerUntil = Math.max(this.hitMarkerUntil, performance.now() + 220);
    if (beforeAlive && !h.alive) this._humanLastCause = '눈뭉치에 맞아 탈락했습니다.';
    for (const e of g.events.splice(0)) {
      if (e.type === 'kill') {
        const by = g.players.find((p) => p.id === e.by), v = g.players.find((p) => p.id === e.victim);
        if (by && v) this.killFeed.push({ text: `${by.name} ❄→ ${v.name}`, until: performance.now() + 4200 });
      }
      if (e.type === 'shieldBlock' && e.id === h.id) {
        this.shieldFlashUntil = performance.now() + 300;
        this.audio.wall();
        if (e.left === 0) this._toast('🛡 방패가 부서졌습니다!');
      }
    }
    if (this.killFeed.length > 5) this.killFeed = this.killFeed.slice(-5);
    const surv = E.aliveCount(g);
    if (surv !== this._lastSurvivors) { this.audio.setIntensity(surv); this._lastSurvivors = surv; }
    if (g.zone.shrinks !== this._lastShrinks) { this._lastShrinks = g.zone.shrinks; this.audio.zoneWarn(); this._toast('⚠ 눈보라 구역이 좁아집니다!'); }
    if (beforeCraft && !h.crafting && h.craftTimer <= 0 && h.alive) this.audio.craftDone();
    // human auto-pickup: walk over heal/shield to grab it
    if (h.alive) {
      const got = E.tryPickup(g, h);
      if (got === 'heal') { this.audio.craftDone(); this._toast(`💊 힐팩 +${C.items.healAmount} HP`); }
      if (got === 'shield') { this.audio.wall(); this._toast(`🛡 방패 획득 — 다음 ${C.items.shieldHits}회 피격 완전 방어 (내구도 ${C.items.shieldHits})`); }
      if (got && got.kind === 'pill') {
        this.audio.fanfare();
        const b = got.buff;
        const msg = b.kind === 'mg' ? `💊🔥 눈 기관총!! ${C.items.pill.mgAmmo}발 · ${C.items.pill.durationSec}초 — 좌클릭 홀드로 연사`
          : b.kind === 'speed' ? `💊 알약: 이동속도 +${Math.round((b.mul - 1) * 100)}% (${C.items.pill.durationSec}초)`
          : b.kind === 'power' ? `💊 알약: 공격력 +${Math.round((b.mul - 1) * 100)}% (${C.items.pill.durationSec}초)`
          : `💊 알약: 제작속도 2배 (${C.items.pill.durationSec}초)`;
        this._toast(msg, 4200);
      }
    }
    if (this.viewKick > 0) this.viewKick = Math.max(0, this.viewKick - dt * 4);
    if (g.over) this._showResult();
  }

  // ---- sync engine state -> 3D scene -------------------------------------------
  _sync3d(now) {
    const g = this.game, s = this.scene3;
    if (!s) return;
    // camera
    const h = this.human;
    const bob = Math.sin(this.bobT) * 0.8;
    const eyeY = EYE + bob + (h.z || 0);   // jump raises the camera
    this.camera.position.set(h.x, eyeY, h.y);
    const lookX = h.x + Math.cos(this.yaw) * Math.cos(this.pitch) * 10;
    const lookY = eyeY + Math.sin(this.pitch) * 10;
    const lookZ = h.y + Math.sin(this.yaw) * Math.cos(this.pitch) * 10;
    this.camera.lookAt(lookX, lookY, lookZ);

    // actors: position + walk swing + aim yaw + floating HP bar
    for (const p of g.players) {
      if (p.id === g._humanId) continue;
      const fig = this.actors.get(p.id);
      if (!fig) continue;
      fig.visible = p.alive;
      const hpS = this._hpSprite(p);
      if (!p.alive) { if (hpS) hpS.visible = false; continue; }
      fig.position.set(p.x, p.z || 0, p.y);
      fig.rotation.y = -p.aim + Math.PI / 2;
      const swing = Math.sin(now / 130 + p.id) * 0.5;
      const ud = fig.userData;
      if (ud.legL) { ud.legL.rotation.x = swing; ud.legR.rotation.x = -swing; }
      if (p.crafting) { ud.armL.rotation.x = -1.2; ud.armR.rotation.x = -1.2; }
      else { ud.armL.rotation.x = swing * 0.5; ud.armR.rotation.x = -swing * 0.5; }
      // shield bubble: translucent blue sphere while durability remains
      if (p.shieldHits > 0 && !ud.shield) {
        const bub = new THREE.Mesh(
          new THREE.SphereGeometry(CHAR_SCALE * 1.45, 18, 14),
          new THREE.MeshBasicMaterial({ color: 0x4d9fff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }),
        );
        bub.position.y = CHAR_SCALE * 1.25;
        fig.add(bub); ud.shield = bub;
      }
      if (ud.shield) {
        ud.shield.visible = p.shieldHits > 0;
        if (p.shieldHits > 0) ud.shield.material.opacity = 0.16 + Math.sin(now / 180) * 0.07;
      }
      // HP bar sprite hovers over the head, redrawn when hp changes
      if (hpS) {
        hpS.visible = true;
        hpS.position.set(p.x, CHAR_SCALE * 2.75 + (p.z || 0), p.y);
        if (hpS.userData.lastHp !== p.hp || hpS.userData.lastShield !== p.shieldHits) this._paintHpSprite(hpS, p);
      }
    }

    // corpses: when a player dies, tip their figure over and leave it in the snow
    for (const cp of g.corpses) {
      if (this.corpseSet.has(cp.id)) continue;
      this.corpseSet.add(cp.id);
      let fig = this.actors.get(cp.id);
      if (fig) this.actors.delete(cp.id);
      else { fig = this._makeFigure(cp.skin, true); s.add(fig); }
      fig.visible = true;
      fig.position.set(cp.x, 2.4, cp.y);
      fig.rotation.set(-Math.PI / 2, 0, cp.yaw + Math.PI / 2); // lying face-up
      // scatter a few snow clumps around the fall
      for (let i = 0; i < 4; i++) {
        const clump = new THREE.Mesh(
          new THREE.SphereGeometry(1.6 + (i % 2), 6, 5),
          new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }),
        );
        const a = (i / 4) * Math.PI * 2 + cp.yaw;
        clump.position.set(cp.x + Math.cos(a) * 9, 1, cp.y + Math.sin(a) * 9);
        s.add(clump);
      }
    }

    // snowballs: glowing spheres + trail
    const seen = new Set();
    for (const sb of g.snowballs) {
      seen.add(sb.id);
      let m = this.sbMeshes.get(sb.id);
      if (!m) {
        m = new THREE.Group();
        const ball = new THREE.Mesh(
          new THREE.SphereGeometry(sb.flat ? 2.4 : 3.4, 12, 10),
          new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: sb.flat ? 0xffe08a : 0xbfe6ff, emissiveIntensity: sb.flat ? 1.3 : 0.9, roughness: 0.4,
          }),
        );
        m.add(ball);
        // trail: small fading spheres
        const trail = [];
        for (let i = 0; i < 5; i++) {
          const t = new THREE.Mesh(
            new THREE.SphereGeometry(2.4 - i * 0.38, 8, 6),
            new THREE.MeshBasicMaterial({ color: 0xdff2ff, transparent: true, opacity: 0.5 - i * 0.09 }),
          );
          m.add(t); trail.push(t);
        }
        m.userData.trail = trail;
        m.userData.hist = [];
        s.add(m);
        this.sbMeshes.set(sb.id, m);
      }
      const t01 = sb.range > 0 ? sb.traveled / sb.range : 0;
      const apex = sb.flat ? 0 : Math.min(60, sb.range * 0.16); // MG rounds fly straight
      const z = Math.max(0, 4 * apex * t01 * (1 - t01)) + (sb.flat ? EYE - 2 : 12);
      m.position.set(sb.x, z, sb.y);
      // update trail from history
      const hist = m.userData.hist;
      hist.unshift({ x: sb.x, y: z, z2: sb.y });
      if (hist.length > 6) hist.pop();
      m.userData.trail.forEach((tm, i) => {
        const hp = hist[Math.min(i + 1, hist.length - 1)];
        tm.position.set(hp.x - sb.x, hp.y - z, hp.z2 - sb.y);
      });
    }
    for (const [id, m] of this.sbMeshes) {
      if (!seen.has(id)) { this.scene3.remove(m); this.sbMeshes.delete(id); }
    }

    // walls
    const wallSeen = new Set();
    for (const w of g.walls) {
      wallSeen.add(w.id);
      let m = this.wallMeshes.get(w.id);
      if (!m) {
        m = new THREE.Mesh(
          new THREE.BoxGeometry(C.wall.len, 16, 6),
          new THREE.MeshStandardMaterial({ color: 0xeaf4fb, roughness: 0.9 }),
        );
        m.position.set(w.x, 8, w.y);
        m.rotation.y = -w.angle;
        this.scene3.add(m);
        this.wallMeshes.set(w.id, m);
      }
      // crack tint as durability drops
      m.material.color.setHex(w.hp >= 3 ? 0xeaf4fb : w.hp === 2 ? 0xd9e6f0 : 0xc4d4e2);
    }
    for (const [id, m] of this.wallMeshes) if (!wallSeen.has(id)) { this.scene3.remove(m); this.wallMeshes.delete(id); }

    // decoys
    const decSeen = new Set();
    for (const d of g.decoys) {
      decSeen.add(d.id);
      if (!this.decoyMeshes.has(d.id)) {
        const grp = new THREE.Group();
        const body = new THREE.Mesh(new THREE.SphereGeometry(6, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }));
        body.position.y = 6; grp.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(4, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }));
        head.position.y = 13.5; grp.add(head);
        const nose = new THREE.Mesh(new THREE.ConeGeometry(0.9, 3.4, 6), new THREE.MeshStandardMaterial({ color: 0xff6b35 }));
        nose.rotation.x = Math.PI / 2; nose.position.set(0, 13.5, 4); grp.add(nose);
        grp.position.set(d.x, 0, d.y);
        this.scene3.add(grp);
        this.decoyMeshes.set(d.id, grp);
      }
    }
    for (const [id, m] of this.decoyMeshes) if (!decSeen.has(id)) { this.scene3.remove(m); this.decoyMeshes.delete(id); }

    // piles cooldown tint + position (they respawn/relocate)
    for (const pile of g.piles) {
      const m = this.pileMeshes && this.pileMeshes.get(pile.id);
      if (m) {
        m.material.color.setHex(pile.cooldownUntil > g.t ? 0xc3cdd6 : 0xffffff);
        m.position.set(pile.x, 0, pile.y);
      }
    }

    // pickups: bob + spin, hidden while on respawn cooldown
    if (this.pickupMeshes) {
      for (const it of g.pickups) {
        const m = this.pickupMeshes.get(it.id);
        if (!m) continue;
        const taken = it.takenUntil > g.t;
        m.visible = !taken;
        if (!taken) {
          m.position.set(it.x, Math.sin(now / 400 + it.id) * 1.6, it.y);
          m.rotation.y = now / 800;
        }
      }
    }

    // zone wall scale + pulse (better visibility)
    const r = g.zone.radius;
    this.zoneWall.scale.set(r, 1, r);
    this.zoneMat.opacity = 0.14 + Math.sin(now / 300) * 0.05;
    if (Math.abs(this._zoneRingR - r) > 1) {
      this.zoneRing.geometry.dispose();
      this.zoneRing.geometry = new THREE.TorusGeometry(r, 2.2, 8, 128);
      this._zoneRingR = r;
    }
    // beams ride the shrinking circle and shimmer
    if (this.zoneBeams) {
      const spin = now / 9000;
      this.zoneBeams.children.forEach((beam, i) => {
        const a = beam.userData.angle + spin;
        beam.position.x = Math.cos(a) * r;
        beam.position.z = Math.sin(a) * r;
        beam.material.opacity = 0.4 + Math.sin(now / 160 + i) * 0.2;
      });
    }

    // snowfall drift
    const fp = this.snowPts.geometry.attributes.position;
    for (let i = 0; i < fp.count; i++) {
      let y = fp.getY(i) - 0.35;
      if (y < 0) y = 160;
      fp.setY(i, y);
    }
    fp.needsUpdate = true;
  }

  // ---- render loop -------------------------------------------------------------
  _loop() {
    let last = performance.now();
    const frame = (now) => {
      let dt = (now - last) / 1000; last = now;
      dt = Math.min(0.05, dt) * this.timeScale;
      if (this.game && (this.sceneName === 'play' || this.sceneName === 'drop')) this._update(dt);
      if (this.game && this.scene3) {
        if (this.sceneName === 'drop') {
          this._renderDrop(now); // draws its own fx-map overlay — don't clear it
        } else {
          this._sync3d(now); this.renderer.render(this.scene3, this.camera);
          this._renderFx(now);
        }
        this._renderHud();
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  _renderDrop(now) {
    // aerial camera slowly descending toward drop target — real 3D flyover.
    // sync FIRST (it resets the camera to eye height), then aim the aerial cam.
    const g = this.game;
    this._sync3d(now);
    // co-drop: NPCs fall from the sky on their own staggered schedules,
    // swaying like parachutists, and land during the 8s drop window
    if (this.dropPlan) {
      for (const p of g.players) {
        if (p.id === g._humanId || !p.alive) continue;
        const plan = this.dropPlan.get(p.id);
        const fig = this.actors.get(p.id);
        if (!plan || !fig) continue;
        // parachute canopy above the figure while falling (lazy-built once)
        if (!plan.chute) {
          const S = CHAR_SCALE;
          const chute = new THREE.Group();
          const canopy = new THREE.Mesh(
            new THREE.SphereGeometry(S * 1.7, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
            new THREE.MeshStandardMaterial({ color: [0xff6b35, 0x7fd4ff, 0xffd43b, 0x9fe0c4][p.id % 4], roughness: 0.85, side: THREE.DoubleSide }),
          );
          canopy.position.y = S * 4.4; chute.add(canopy);
          const lineMat = new THREE.MeshBasicMaterial({ color: 0xdddddd });
          for (const [lx, lz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
            const line = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, S * 2.2, 3), lineMat);
            line.position.set(lx * S * 0.9, S * 3.3, lz * S * 0.9);
            line.rotation.z = -lx * 0.32; line.rotation.x = lz * 0.32;
            chute.add(line);
          }
          fig.add(chute); plan.chute = chute;
        }
        const ft = (this.dropT - plan.delay) / plan.fallSec; // 0..1 fall progress
        if (ft < 1) {
          const fallY = ft <= 0 ? 620 : 620 * (1 - ft) * (1 - ft); // ease-in landing
          const sway = Math.sin(now / 500 + plan.sway) * 14 * Math.max(0, 1 - ft);
          fig.position.y = fallY + 0.01;
          fig.position.x = p.x + sway;
          fig.rotation.z = Math.sin(now / 400 + plan.sway) * 0.18 * Math.max(0, 1 - ft);
          plan.chute.visible = ft > 0;
          const hpS = this.hpSprites && this.hpSprites.get(p.id);
          if (hpS) hpS.visible = false; // no HP bars while airborne
        } else {
          fig.rotation.z = 0;
          plan.chute.visible = false; // landed: canopy packed away
        }
      }
    }
    const tx = this.dropTarget ? this.dropTarget.x : g.zone.cx;
    const ty = this.dropTarget ? this.dropTarget.y : g.zone.cy;
    // smooth skydive: start high above the target, spiral down, and blend to
    // eye height by landing so the cut into first-person is seamless
    const t01 = Math.min(1, this.dropT / 8);
    const ease = t01 * t01 * (3 - 2 * t01); // smoothstep
    const alt = 620 * (1 - ease) + EYE;
    const ang = -Math.PI / 2 + ease * 1.1; // gentle spiral
    const dist = 420 * (1 - ease) + 8;
    this.camera.position.set(tx + Math.cos(ang) * dist, alt, ty + Math.sin(ang) * dist);
    const lookY = 8 * (1 - ease) + EYE * ease; // look down early, level out at landing
    this.camera.lookAt(tx, lookY, ty);
    this._dropLandYaw = ang + Math.PI; // face the same way we were gliding
    this.renderer.render(this.scene3, this.camera);
    // 2D tactical map (right side panel) for click-targeting — 3D flyover stays visible
    const ctx = this.fxCtx;
    ctx.clearRect(0, 0, this.vw, this.vh);
    const mapSz = Math.min(this.vh * 0.55, 340);
    const zoom = mapSz / C.map.size;
    const ox = this.vw - mapSz - 24, oy = (this.vh - mapSz) / 2;
    this._dropMap = { ox, oy, zoom };
    ctx.fillStyle = 'rgba(13,27,42,0.72)'; ctx.fillRect(ox - 8, oy - 26, mapSz + 16, mapSz + 40);
    ctx.strokeStyle = '#7fd4ff'; ctx.strokeRect(ox - 8, oy - 26, mapSz + 16, mapSz + 40);
    ctx.fillStyle = '#fff'; ctx.font = 'bold 13px system-ui'; ctx.textAlign = 'center';
    ctx.fillText('🗺 클릭해서 낙하 지점 선택', ox + mapSz / 2, oy - 9);
    ctx.fillStyle = 'rgba(200,220,235,0.25)'; ctx.fillRect(ox, oy, mapSz, mapSz);
    ctx.beginPath(); ctx.arc(g.zone.cx * zoom + ox, g.zone.cy * zoom + oy, g.zone.radius * zoom, 0, Math.PI * 2);
    ctx.strokeStyle = '#7fd4ff'; ctx.lineWidth = 2; ctx.stroke();
    for (const p of g.piles) { ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.fillRect(p.x * zoom + ox - 1, p.y * zoom + oy - 1, 3, 3); }
    for (const it of g.pickups) { ctx.fillStyle = it.kind === 'heal' ? '#ff6b6b' : it.kind === 'shield' ? '#4d9fff' : '#ffd43b'; ctx.fillRect(it.x * zoom + ox - 1.5, it.y * zoom + oy - 1.5, 3.5, 3.5); }
    if (this.dropTarget) {
      const px = this.dropTarget.x * zoom + ox, py = this.dropTarget.y * zoom + oy;
      ctx.strokeStyle = '#FF6B35'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(px, py, 11, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px - 16, py); ctx.lineTo(px + 16, py); ctx.moveTo(px, py - 16); ctx.lineTo(px, py + 16); ctx.stroke();
    }
  }

  // 2D FX overlay: crosshair, charge, hit marker, damage vignette, view model
  _renderFx(now) {
    const ctx = this.fxCtx;
    ctx.clearRect(0, 0, this.vw, this.vh);
    if (this.sceneName !== 'play') return;
    const h = this.human;

    // outside-zone tint
    const g = this.game;
    const distC = Math.hypot(h.x - g.zone.cx, h.y - g.zone.cy);
    if (distC > g.zone.radius) { ctx.fillStyle = 'rgba(90,140,200,0.25)'; ctx.fillRect(0, 0, this.vw, this.vh); }

    if (now < this.damageFlashUntil) {
      const gEdge = ctx.createRadialGradient(this.vw / 2, this.vh / 2, this.vh * 0.35, this.vw / 2, this.vh / 2, this.vh * 0.75);
      gEdge.addColorStop(0, 'rgba(220,20,60,0)'); gEdge.addColorStop(1, 'rgba(220,20,60,0.5)');
      ctx.fillStyle = gEdge; ctx.fillRect(0, 0, this.vw, this.vh);
    }
    // shield: steady blue edge glow while held, bright flash on block
    if (h.shieldHits > 0 || now < (this.shieldFlashUntil || 0)) {
      const flash = now < (this.shieldFlashUntil || 0);
      const a = flash ? 0.45 : 0.14 + Math.sin(now / 300) * 0.04;
      const gEdge = ctx.createRadialGradient(this.vw / 2, this.vh / 2, this.vh * 0.38, this.vw / 2, this.vh / 2, this.vh * 0.72);
      gEdge.addColorStop(0, 'rgba(77,159,255,0)'); gEdge.addColorStop(1, `rgba(77,159,255,${a})`);
      ctx.fillStyle = gEdge; ctx.fillRect(0, 0, this.vw, this.vh);
    }

    this._renderViewModel(ctx, now);
    this._renderCrosshair(ctx, now);

    if (!this.locked && h.alive) {
      ctx.fillStyle = 'rgba(13,27,42,0.75)';
      const bw = 420, bh = 54;
      ctx.fillRect(this.vw / 2 - bw / 2, this.vh * 0.62, bw, bh);
      ctx.strokeStyle = '#FF6B35'; ctx.strokeRect(this.vw / 2 - bw / 2, this.vh * 0.62, bw, bh);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 16px system-ui'; ctx.textAlign = 'center';
      ctx.fillText('🖱 화면을 클릭해 조준 잠금 (마우스로 시점 회전)', this.vw / 2, this.vh * 0.62 + 33);
    }
    // E prompt if near pile
    const pile = E.nearestPile(g, h);
    if (pile && !h.crafting && h.alive) {
      ctx.fillStyle = '#FF6B35'; ctx.font = 'bold 17px system-ui'; ctx.textAlign = 'center';
      ctx.fillText('E — 눈뭉치 제작 (3초 무방비)', this.vw / 2, this.vh * 0.56);
    }
  }

  _renderViewModel(ctx, now) {
    const h = this.human;
    if (!h.alive) return;
    const cx = this.vw / 2, base = this.vh;
    const bob = Math.sin(this.bobT) * 5;
    const kick = (this.viewKick || 0);
    const charge = this.mouse.down ? E.chargeFromMs(performance.now() - this.mouse.downAt) : 0;
    const pull = charge * 26 + kick * -34;
    const hx = cx + this.vw * 0.21, hy = base - 64 + bob + pull * 0.6;
    ctx.fillStyle = '#1B2A4A';
    ctx.beginPath();
    ctx.moveTo(hx + 90, base + 10);
    ctx.quadraticCurveTo(hx + 40, hy + 40, hx, hy + 8);
    ctx.lineTo(hx + 34, hy - 14);
    ctx.quadraticCurveTo(hx + 90, hy + 20, hx + 130, base + 10);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#FF6B35'; ctx.beginPath(); ctx.ellipse(hx + 16, hy + 2, 20, 12, -0.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#2c3e63';
    ctx.beginPath(); ctx.ellipse(hx, hy - 6, 24, 19, -0.35, 0, Math.PI * 2); ctx.fill();
    if (h.snowballs > 0 && !h.crafting) {
      ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#bcd7e8';
      ctx.beginPath(); ctx.arc(hx - 6, hy - 18, 15 + charge * 3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
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
    ctx.strokeStyle = 'rgba(255,255,255,0.95)'; ctx.lineWidth = 2;
    const gap = 5 + (this.mouse.down ? E.chargeFromMs(performance.now() - this.mouse.downAt) * 8 : 0);
    const len = 8;
    ctx.beginPath();
    ctx.moveTo(cx - gap - len, cy); ctx.lineTo(cx - gap, cy);
    ctx.moveTo(cx + gap, cy); ctx.lineTo(cx + gap + len, cy);
    ctx.moveTo(cx, cy - gap - len); ctx.lineTo(cx, cy - gap);
    ctx.moveTo(cx, cy + gap); ctx.lineTo(cx, cy + gap + len);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.fillRect(cx - 1, cy - 1, 2, 2);
    if (this.mouse.down && h.alive && !h.crafting) {
      const charge = E.chargeFromMs(performance.now() - this.mouse.downAt);
      const bw = 90;
      ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(cx - bw / 2, cy + 26, bw, 7);
      ctx.fillStyle = charge > 0.85 ? '#DC143C' : '#FF6B35';
      ctx.fillRect(cx - bw / 2, cy + 26, bw * charge, 7);
      ctx.fillStyle = '#fff'; ctx.font = '11px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(`${Math.round(E.rangeForCharge(charge) / 10)}m`, cx, cy + 47);
    }
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

  // ---- HUD (DOM) ---------------------------------------------------------------
  _renderHud() {
    if (this.sceneName !== 'play' && this.sceneName !== 'drop') { this.hud.style.display = 'none'; return; }
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

    const bl = el('div', 'sr-hud-bl');
    const hpWrap = el('div', 'sr-hp');
    const maxHp = h.maxHp || 100;
    const hpFill = el('div', 'sr-hp-fill'); hpFill.style.width = Math.max(0, (h.hp / maxHp) * 100) + '%';
    hpFill.style.background = h.hp > maxHp * 0.5 ? '#7FFFD4' : h.hp > maxHp * 0.25 ? '#FF6B35' : '#DC143C';
    hpWrap.appendChild(hpFill); hpWrap.appendChild(el('span', 'sr-hp-txt', `${Math.max(0, Math.round(h.hp))}/${maxHp}`));
    bl.appendChild(hpWrap);
    if (h.shieldHits > 0) bl.appendChild(el('div', 'sr-shield', `🛡 방패 내구도 ${h.shieldHits}/${C.items.shieldHits} — 피격 완전 방어`));
    if (h.mg && h.mg.until > g.t && h.mg.ammo > 0) bl.appendChild(el('div', 'sr-buff sr-buff-mg', `🔥 눈 기관총 ${h.mg.ammo}발 · ${Math.ceil(h.mg.until - g.t)}초`));
    if (h.buff && h.buff.until > g.t) {
      const label = h.buff.kind === 'speed' ? '💨 이동속도 증가' : h.buff.kind === 'power' ? '💪 공격력 증가' : '⚒ 제작속도 증가';
      bl.appendChild(el('div', 'sr-buff', `${label} ${Math.ceil(h.buff.until - g.t)}초`));
    }
    const cls = CLASSES[h.classId];
    if (cls) bl.appendChild(el('div', 'sr-class-tag', cls.name));
    if (this.sceneName === 'drop') bl.appendChild(el('div', 'sr-drop', `낙하 중 — 착지 ${Math.max(0, Math.ceil(8 - this.dropT))}s (지도 클릭=낙하 지점)`));
    this.hud.appendChild(bl);

    const br = el('div', 'sr-hud-br');
    br.appendChild(el('div', 'sr-ammo-big', `${h.snowballs}`));
    br.appendChild(el('div', 'sr-ammo-cap', '❄ SNOWBALLS'));
    br.appendChild(el('div', 'sr-tac', `Q 설벽 ${h.walls}/${C.wall.maxPerPlayer} · F 미끼 ${h.decoys}/${C.decoy.maxPerPlayer}`));
    this.hud.appendChild(br);

    const feedNow = performance.now();
    this.killFeed = this.killFeed.filter((k) => k.until > feedNow);
    if (this.killFeed.length) {
      const feed = el('div', 'sr-killfeed');
      for (const k of this.killFeed) feed.appendChild(el('div', 'sr-kf-row', k.text));
      this.hud.appendChild(feed);
    }
    if (this._showMinimap && this.sceneName === 'play') this.hud.appendChild(this._minimapEl());
    if (this._toastText && performance.now() < this._toastUntil) {
      this.hud.appendChild(el('div', 'sr-toast', this._toastText));
    }
  }

  _minimapEl() {
    const g = this.game; const box = el('div', 'sr-minimap');
    const cv = document.createElement('canvas'); cv.width = 170; cv.height = 170; box.appendChild(cv);
    const x = cv.getContext('2d'); const sc = 170 / C.map.size;
    x.fillStyle = 'rgba(13,27,42,0.88)'; x.fillRect(0, 0, 170, 170);
    x.strokeStyle = '#7fd4ff'; x.lineWidth = 1.5;
    x.beginPath(); x.arc(g.zone.cx * sc, g.zone.cy * sc, g.zone.radius * sc, 0, Math.PI * 2); x.stroke();
    for (const o of g.obstacles) { x.fillStyle = 'rgba(120,140,160,0.6)'; x.fillRect(o.x * sc - 1, o.y * sc - 1, 3, 3); }
    for (const pile of g.piles) { if (pile.cooldownUntil <= g.t) { x.fillStyle = '#A8D8EA'; x.fillRect(pile.x * sc - 1, pile.y * sc - 1, 3, 3); } }
    for (const p of g.players) {
      if (!p.alive) continue;
      x.fillStyle = p.id === g._humanId ? '#FF6B35' : '#9E9E9E';
      x.beginPath(); x.arc(p.x * sc, p.y * sc, p.id === g._humanId ? 3.4 : 2, 0, Math.PI * 2); x.fill();
    }
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
    if (state === 'title') { this._showTitle(); return; }
    this.newGame(42);
    if (state === 'drop') return;
    if (state === 'play' || state === 'fps') {
      this._enterPlay(); this.human.snowballs = 10;
      const h = this.human;
      this.yaw = 0; this.pitch = 0;
      const near = this.game.players.filter((p) => p.isNpc).slice(0, 4);
      const dists = [80, 150, 260, 420];
      near.forEach((p, i) => { p.x = h.x + dists[i]; p.y = h.y + (i - 1.5) * 55; p.aim = Math.PI + Math.atan2(p.y - h.y, p.x - h.x); });
      this.game.piles.push({ id: 90001, x: h.x + 44, y: h.y + 12, cooldownUntil: 0 });
      // place pickups in view for screenshot QA
      this.game.pickups.push({ id: 90002, kind: 'heal', x: h.x + 70, y: h.y - 40, takenUntil: 0 });
      this.game.pickups.push({ id: 90003, kind: 'shield', x: h.x + 110, y: h.y + 60, takenUntil: 0 });
      this.game.pickups.push({ id: 90004, kind: 'pill', x: h.x + 60, y: h.y + 18, takenUntil: 0 });
      this._buildWorld(); // rebuild so QA pickups get meshes
      near.forEach((p) => { p.hp = 40 + ((p.id * 13) % 55); }); // varied HP so gauges are visible
      return;
    }
    if (state === 'corpse') {
      this._enterPlay(); this.yaw = 0;
      const h = this.human;
      const victims = this.game.players.filter((p) => p.isNpc).slice(0, 3);
      victims.forEach((p, i) => { p.x = h.x + 90 + i * 60; p.y = h.y + (i - 1) * 45; E.setHp(this.game, p, 0); });
      return;
    }
    if (state === 'throw') {
      this._enterPlay(); this.yaw = 0;
      this.human.snowballs = 10; this.locked = true;
      this._throw(600); this._throw(1200);
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
      chk('장애물 생성(바위/나무/오두막)', g.obstacles.length >= 30, `${g.obstacles.length}`);
      const h = E.humanPlayer(g); g.piles.push({ id: 1, x: h.x, y: h.y, cooldownUntil: 0 });
      E.startCraft(g, h); E.step(g, 3.01); chk('3초 제작 +10', h.snowballs === 10, String(h.snowballs));
      const victim = g.players[2];
      E.setHp(g, victim, 0);
      chk('탈락 시 시체 생성', g.corpses.length === 1 && g.corpses[0].id === victim.id);
      // WebGL scene builds
      this.game = g; this.human = h;
      this._buildWorld();
      chk('3D 월드 생성(THREE scene)', !!this.scene3 && this.scene3.children.length > 30, `children=${this.scene3.children.length}`);
      chk('NPC 3D 피규어 생성', this.actors.size === 19, `${this.actors.size}`);
      chk('WebGL 렌더러', !!this.renderer && !!this.renderer.getContext());
      let guard = 0; while (!g.over && guard++ < 12000) { const hh = E.humanPlayer(g); if (hh.alive) { if (!hh.npc) hh.npc = { state: 'PATROL', reactTimer: 0 }; const w = hh.isNpc; hh.isNpc = true; E.npcThink(g, hh, 0.1); hh.isNpc = w; } E.step(g, 0.1); }
      chk('매치 완주(승자 1인)', g.over && E.aliveCount(g) === 1, `t=${g.t.toFixed(0)}s`);
      chk('시체 다수 누적(사라지지 않음)', g.corpses.length >= 18, `corpses=${g.corpses.length}`);
      // v3: pickups / classes / HP sprites
      const g3 = E.createGame(7, { total: 20, difficulty: 'normal', classId: 'bear' });
      chk('아이템 스폰(힐팩+방패)', g3.pickups.filter((i) => i.kind === 'heal').length === 10 && g3.pickups.filter((i) => i.kind === 'shield').length === 6, `${g3.pickups.length}`);
      const h3 = E.humanPlayer(g3);
      chk('클래스 적용(빅 베어 HP 130)', h3.maxHp === 130 && h3.hp === 130, `${h3.hp}/${h3.maxHp}`);
      E.setHp(g3, h3, 50);
      g3.pickups[0].x = h3.x; g3.pickups[0].y = h3.y; g3.pickups[0].kind = 'heal'; g3.pickups[0].takenUntil = 0;
      chk('힐팩 +40', E.tryPickup(g3, h3) === 'heal' && h3.hp === 90, `${h3.hp}`);
      this.game = g3; this.human = h3; this._buildWorld();
      for (const p of g3.players) if (p.isNpc && p.alive) this._hpSprite(p);
      chk('적 HP 게이지 스프라이트 19개', this.hpSprites.size === 19, `${this.hpSprites.size}`);
      chk('아이템 3D 메시 생성', this.pickupMeshes && this.pickupMeshes.size === g3.pickups.length, `${this.pickupMeshes ? this.pickupMeshes.size : 0}`);
    } catch (e) { rep.errors.push(String(e && e.message || e)); }
    rep.pass = rep.checks.every((c) => c.pass) && rep.errors.length === 0;
    return rep;
  }
}

function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
