// Snow Royale — TRUE 3D renderer (Three.js, MIT). First-person WebGL:
// low-poly procedural characters (built from primitives — no external model
// downloads, fully open-source), 3D snow terrain with rocks/trees/cabins,
// a glowing cylindrical storm wall for the shrinking zone, corpses that fall
// over and stay, glowing snowballs with trails. Engine logic is unchanged.
import * as THREE from 'three';
import * as E from './engine.js';
import { AudioEngine } from './audio.js';
import { CONFIG as C, SKINS, CLASSES, actForSurvivors } from './config.js';
import { NetClient, getNickname, setNickname } from './net.js';

const SAVE_KEY = 'snow_royale_save_v1';
const EYE = 17;               // camera eye height (world units; 1200u map)
const CHAR_SCALE = 11;        // base character size

// skin palettes for low-poly figures (jacket, pants, head, accent)
// pill capsule/beacon colors keyed by buff kind (color telegraphs the buff)
const PILL_COLORS = {
  mg: { a: 0xff5722, name: '기관총' },      // orange-red = jackpot
  speed: { a: 0x3ddc84, name: '이동' },     // green
  power: { a: 0xffd43b, name: '공격' },     // yellow
  craft: { a: 0xb388ff, name: '제작' },     // purple
};

const PALETTES = {
  jack: { jacket: 0x1b2a4a, pants: 0x2c3550, head: 0xe8b89a, accent: 0xff6b35 },
  white: { jacket: 0xe8eef4, pants: 0xd7e2ec, head: 0xf0c6a8, accent: 0xa8d8ea },
  bear: { jacket: 0x5b4326, pants: 0x3e3020, head: 0xd9a97f, accent: 0xd4a017 },
  dash: { jacket: 0xdc143c, pants: 0xb01030, head: 0xf0c6a8, accent: 0xffd43b, boots: 0xffd43b }, // red body, yellow shoes
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
    if (autoStart) {
      this._showTitle();
      // reload during an online match? auto-rejoin the room (60s server grace)
      let savedRoom = null;
      try { savedRoom = sessionStorage.getItem('snow_room'); } catch { /* */ }
      if (savedRoom) {
        this._mode = 'online';
        this._joinOnline({ code: savedRoom }).catch(() => { try { sessionStorage.removeItem('snow_room'); } catch { /* */ } });
      }
    }
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

    // pickups: heal packs, shields, pills (colored per buff)
    this.pickupMeshes = new Map();
    for (const it of g.pickups) this._makePickupMesh(it);

    // spring jump pads: coil + bright top plate (NPC-sized)
    this.padMeshes = new Map();
    for (const pad of g.pads || []) {
      const grp = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(pad.r, pad.r + 2, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0x37474f, roughness: 0.8 }),
      );
      base.position.y = 1.5; grp.add(base);
      // coil: stacked shrinking tori reads as a spring
      const coilMat = new THREE.MeshStandardMaterial({ color: 0xb0bec5, metalness: 0.6, roughness: 0.4 });
      for (let ci = 0; ci < 4; ci++) {
        const coil = new THREE.Mesh(new THREE.TorusGeometry(pad.r * 0.55, 1.3, 6, 20), coilMat);
        coil.rotation.x = Math.PI / 2;
        coil.position.y = 4 + ci * 3;
        grp.add(coil);
      }
      const plate = new THREE.Mesh(
        new THREE.CylinderGeometry(pad.r * 0.8, pad.r * 0.8, 2.4, 16),
        new THREE.MeshStandardMaterial({ color: 0x00e5ff, emissive: 0x00a5cc, emissiveIntensity: 0.8, roughness: 0.3 }),
      );
      plate.position.y = 17; grp.add(plate);
      grp.userData.plate = plate;
      grp.position.set(pad.x, 0, pad.y);
      s.add(grp);
      this.padMeshes.set(pad.id, grp);
    }

    // rock towers: climbable one-story flat-top rocks
    for (const tw of g.towers || []) {
      const rock = new THREE.Mesh(
        new THREE.CylinderGeometry(tw.r, tw.r * 1.25, tw.h, 9),
        new THREE.MeshStandardMaterial({ color: 0x8d99a6, roughness: 1, flatShading: true }),
      );
      rock.position.set(tw.x, tw.h / 2, tw.y);
      s.add(rock);
      const snowTop = new THREE.Mesh(
        new THREE.CylinderGeometry(tw.r * 0.98, tw.r * 0.9, 2.2, 9),
        new THREE.MeshStandardMaterial({ color: 0xf4f8fb, roughness: 1, flatShading: true }),
      );
      snowTop.position.set(tw.x, tw.h + 1.1, tw.y);
      s.add(snowTop);
    }

    // bottle-cap piles: small golden discs stack
    this.capMeshes = new Map();
    for (const cp of g.caps) this._makeCapMesh(cp);
    // grenade meshes + danger rings created on demand
    this.grenadeMeshes = new Map();

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
      if (this.online && this.human && p.id === this.human.id) continue; // don't render self
      const fig = this._makeFigure(p.skin, p.isNpc, !!p.userSkin);
      fig.position.set(p.x, 0, p.y);
      s.add(fig);
      this.actors.set(p.id, fig);
    }
  }

  // explosion burst: white snow chunks flying outward
  _spawnBoomFx(x, y, radius) {
    this._boomFx = this._boomFx || [];
    const grp = new THREE.Group();
    const speeds = [];
    for (let i = 0; i < 26; i++) {
      const chunk = new THREE.Mesh(
        new THREE.SphereGeometry(1.6 + Math.random() * 3.2, 6, 5),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 }),
      );
      chunk.position.set(x, 4, y);
      grp.add(chunk);
      const a = Math.random() * Math.PI * 2;
      const v = 30 + Math.random() * radius * 1.4;
      speeds.push({ x: Math.cos(a) * v, y: 40 + Math.random() * 60, z: Math.sin(a) * v });
    }
    this.scene3.add(grp);
    this._boomFx.push({ grp, speeds, at: performance.now() });
  }

  // bottle-cap pile: stack of glinting gold discs (bigger pile = more caps)
  _makeCapMesh(cp) {
    const grp = new THREE.Group();
    const capMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, emissive: 0x6b5008, emissiveIntensity: 0.5, metalness: 0.7, roughness: 0.3 });
    const n = Math.min(4, Math.max(2, Math.round(cp.amount / 2)));
    for (let i = 0; i < n; i++) {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 1, 10), capMat);
      disc.position.set((i % 2) * 3 - 1.5, 1 + i * 1.1, Math.floor(i / 2) * 3 - 1.5);
      disc.rotation.y = i * 0.7;
      grp.add(disc);
    }
    grp.position.set(cp.x, 0, cp.y);
    this.scene3.add(grp);
    this.capMeshes.set(cp.id, grp);
    return grp;
  }

  // build (or rebuild, on pill re-roll) one pickup's mesh group
  _makePickupMesh(it) {
    const old = this.pickupMeshes.get(it.id);
    if (old) this.scene3.remove(old);
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
    } else if (it.kind === 'club') { // wooden bat leaning in the snow
      const wood = new THREE.MeshStandardMaterial({ color: 0x9c6b3f, roughness: 0.85 });
      const bat = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 2.6, 16, 8), wood);
      bat.position.y = 8; bat.rotation.z = 0.5; grp.add(bat);
      grp.userData.pillColor = 0xc98a4b;
    } else { // pill: capsule colored by its buff so you know what you're grabbing
      const pc = PILL_COLORS[it.buff && it.buff.kind] || PILL_COLORS.speed;
      const capMatA = new THREE.MeshStandardMaterial({ color: pc.a, emissive: pc.a, emissiveIntensity: 0.5, roughness: 0.35 });
      const capMatB = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, emissive: 0x999999, emissiveIntensity: 0.3, roughness: 0.35 });
      const half1 = new THREE.Mesh(new THREE.CapsuleGeometry(4.6, 5, 6, 12), capMatA);
      half1.rotation.z = Math.PI / 2; half1.position.set(-2.6, 9, 0); grp.add(half1);
      const half2 = new THREE.Mesh(new THREE.CapsuleGeometry(4.6, 5, 6, 12), capMatB);
      half2.rotation.z = Math.PI / 2; half2.position.set(2.6, 9, 0); grp.add(half2);
      grp.userData.pillColor = pc.a;
      grp.userData.buffKind = it.buff && it.buff.kind;
    }
    // vertical light beacon so items are findable from a distance
    const beaconColor = it.kind === 'heal' ? 0xff6b6b : it.kind === 'shield' ? 0x4d9fff : (grp.userData.pillColor || 0xffd43b);
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.5, 52, 6),
      new THREE.MeshBasicMaterial({ color: beaconColor, transparent: true, opacity: 0.34, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    beam.position.y = 26; grp.add(beam);
    grp.position.set(it.x, 0, it.y);
    this.scene3.add(grp);
    this.pickupMeshes.set(it.id, grp);
    return grp;
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
    // name — real players get a bright orange tag so they pop vs bots
    x.font = 'bold 10px system-ui'; x.textAlign = 'center';
    x.fillStyle = p.userSkin ? '#FFB020' : (p.isNpc ? '#d7dde3' : '#ffffff');
    x.fillText((p.userSkin ? '★ ' : '') + p.name.slice(0, 14), cv.width / 2, 9);
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

  // low-poly humanoid from primitives (open-source procedural, no downloads).
  // isUser: real people get a distinct look — golden beanie + bright scarf,
  // so they're instantly tellable from grey-visored bots.
  _makeFigure(skin, isNpc, isUser = false) {
    const pal = PALETTES[skin] || PALETTES.bot;
    const gp = new THREE.Group();
    const S = CHAR_SCALE;
    if (isUser) {
      const scarf = new THREE.Mesh(new THREE.BoxGeometry(S * 0.5, S * 0.16, S * 0.48), new THREE.MeshStandardMaterial({ color: 0xff6b35, roughness: 0.8 }));
      scarf.position.y = S * 1.72; gp.add(scarf);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(S * 0.14, S * 0.5, S * 0.1), new THREE.MeshStandardMaterial({ color: 0xff6b35, roughness: 0.8 }));
      tail.position.set(S * 0.2, S * 1.45, -S * 0.26); gp.add(tail);
      const beanie = new THREE.Mesh(new THREE.SphereGeometry(S * 0.26, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xffd43b, roughness: 0.9 }));
      beanie.position.y = S * 2.12; gp.add(beanie);
      const pom = new THREE.Mesh(new THREE.SphereGeometry(S * 0.09, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }));
      pom.position.y = S * 2.3; gp.add(pom);
    }
    const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, flatShading: true });
    // legs
    const legGeo = new THREE.BoxGeometry(S * 0.28, S * 0.8, S * 0.3);
    const legL = new THREE.Mesh(legGeo, mat(pal.pants)); legL.position.set(-S * 0.18, S * 0.4, 0); gp.add(legL);
    const legR = new THREE.Mesh(legGeo, mat(pal.pants)); legR.position.set(S * 0.18, S * 0.4, 0); gp.add(legR);
    // boots (e.g. Snow Runner's yellow shoes)
    if (pal.boots) {
      const bootGeo = new THREE.BoxGeometry(S * 0.32, S * 0.18, S * 0.4);
      const bootL = new THREE.Mesh(bootGeo, mat(pal.boots)); bootL.position.set(-S * 0.18, S * 0.09, S * 0.04); gp.add(bootL);
      const bootR = new THREE.Mesh(bootGeo, mat(pal.boots)); bootR.position.set(S * 0.18, S * 0.09, S * 0.04); gp.add(bootR);
    }
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

  // ---- caps wallet & owned items (persisted per browser) --------------------
  _wallet() {
    try { return JSON.parse(localStorage.getItem('snow_wallet') || '{"caps":0,"items":{}}'); }
    catch { return { caps: 0, items: {} }; }
  }
  _saveWallet(w) { try { localStorage.setItem('snow_wallet', JSON.stringify(w)); } catch { /* */ } }
  _bankCaps(n) { const w = this._wallet(); w.caps += n; this._saveWallet(w); }

  _showShop() {
    const w = this._wallet();
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '🏪 병뚜껑 상점'; h.style.fontSize = '38px';
    c.appendChild(h);
    c.appendChild(el('p', 'sr-sub', `보유 병뚜껑: 🍾 ${w.caps}개 — 전장에서 병뚜껑을 주워 모으세요`));
    const box = document.createElement('div'); box.className = 'sr-shoplist';
    for (const def of Object.values(C.shop)) {
      const owned = w.items[def.id] || 0;
      const row = document.createElement('div'); row.className = 'sr-shopitem';
      const info = document.createElement('div'); info.className = 'sr-shopinfo';
      info.innerHTML = `<b>${def.emoji} ${def.name} <i>🍾${def.cost}</i></b><span>${def.desc}</span><small>${owned ? `보유 ${owned}개` : ''}</small>`;
      const buy = document.createElement('button'); buy.className = 'sr-btn'; buy.style.width = 'auto'; buy.style.margin = '0';
      buy.textContent = '구매';
      buy.disabled = w.caps < def.cost;
      buy.addEventListener('click', () => {
        const w2 = this._wallet();
        if (w2.caps < def.cost) return;
        w2.caps -= def.cost; w2.items[def.id] = (w2.items[def.id] || 0) + 1;
        this._saveWallet(w2);
        this.audio.craftDone();
        this._showShop();
      });
      row.appendChild(info); row.appendChild(buy);
      box.appendChild(row);
    }
    c.appendChild(box);
    c.appendChild(this._btn('🎒 인벤토리 (들고 갈 아이템 선택)', () => this._showInventory()));
    c.appendChild(this._btn('← 타이틀로', () => this._showTitle()));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  _showInventory() {
    const w = this._wallet();
    this._carryItem = this._carryItem || null;
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '🎒 인벤토리'; h.style.fontSize = '38px';
    c.appendChild(h);
    c.appendChild(el('p', 'sr-sub', '매치에 들고 갈 아이템을 하나만 고르세요 (사용하면 소모)'));
    const box = document.createElement('div'); box.className = 'sr-shoplist';
    const ownedIds = Object.keys(w.items).filter((id) => w.items[id] > 0);
    if (!ownedIds.length) box.appendChild(el('p', 'sr-sub', '보유한 아이템이 없습니다. 상점에서 구매하세요.'));
    for (const id of ownedIds) {
      const def = C.shop[id];
      const row = document.createElement('button');
      row.className = 'sr-shopitem sr-shopitem-btn' + (this._carryItem === id ? ' on' : '');
      row.innerHTML = `<div class="sr-shopinfo"><b>${def.emoji} ${def.name} ×${w.items[id]}</b><span>${def.desc}</span></div><i>${this._carryItem === id ? '✅ 장착' : '선택'}</i>`;
      row.addEventListener('click', () => { this._carryItem = this._carryItem === id ? null : id; this._showInventory(); });
      box.appendChild(row);
    }
    c.appendChild(box);
    c.appendChild(el('p', 'sr-foot', this._carryItem ? `장착: ${C.shop[this._carryItem].emoji} ${C.shop[this._carryItem].name} — 게임에서 X키로 사용 (제트팩은 점프키 자동)` : '장착된 아이템 없음'));
    c.appendChild(this._btn('🏪 상점', () => this._showShop()));
    c.appendChild(this._btn('← 타이틀로', () => this._showTitle()));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  // consume one owned item when entering a match with it equipped
  _consumeCarryItem() {
    if (!this._carryItem) return null;
    const w = this._wallet();
    if (!w.items[this._carryItem] || w.items[this._carryItem] <= 0) { this._carryItem = null; return null; }
    w.items[this._carryItem]--;
    this._saveWallet(w);
    const id = this._carryItem;
    if (w.items[id] <= 0) this._carryItem = null;
    return id;
  }

  // render a class's figure to a small PNG for the selection card (cached)
  _classPreview(cls) {
    this._previewCache = this._previewCache || {};
    if (this._previewCache[cls.id]) return this._previewCache[cls.id];
    const w = 96, h = 116;
    const scene = new THREE.Scene();
    scene.background = null;
    scene.add(new THREE.HemisphereLight(0xffffff, 0xbfd4e6, 1.15));
    const sun = new THREE.DirectionalLight(0xfff3e0, 1.1); sun.position.set(-40, 60, 80); scene.add(sun);
    const fig = this._makeFigure(cls.skin, false, true);
    fig.rotation.y = 0.6;
    scene.add(fig);
    const cam = new THREE.PerspectiveCamera(38, w / h, 1, 500);
    cam.position.set(0, CHAR_SCALE * 1.5, CHAR_SCALE * 4.6);
    cam.lookAt(0, CHAR_SCALE * 1.15, 0);
    const rt = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rt.setSize(w, h);
    rt.render(scene, cam);
    const url = rt.domElement.toDataURL('image/png');
    rt.dispose();
    this._previewCache[cls.id] = url;
    return url;
  }

  // ---- scenes (DOM overlays reused) -----------------------------------------
  _showTitle() {
    this.sceneName = 'title'; this.hud.style.display = 'none';
    if (document.pointerLockElement) document.exitPointerLock();
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '스노우 로얄';
    const sub = document.createElement('p'); sub.className = 'sr-sub'; sub.textContent = 'Snow Royale — 3D 1인칭 눈싸움 배틀로얄';
    c.appendChild(h); c.appendChild(sub);
    // nickname (shown to other players online)
    const nickRow = document.createElement('div'); nickRow.className = 'sr-nickrow';
    const nickLabel = document.createElement('span'); nickLabel.textContent = '닉네임';
    const nick = document.createElement('input');
    nick.className = 'sr-nick'; nick.maxLength = 12; nick.placeholder = '눈사람';
    nick.value = getNickname();
    nick.addEventListener('change', () => setNickname(nick.value.trim()));
    nickRow.appendChild(nickLabel); nickRow.appendChild(nick);
    c.appendChild(nickRow);
    this._nickInput = nick;
    // mode: solo vs online
    this._mode = this._mode || 'solo';
    const modeRow = document.createElement('div'); modeRow.className = 'sr-diffrow';
    for (const [k, label] of [['solo', '🏔 1인 플레이 (봇 19)'], ['online', '🌐 온라인 플레이']]) {
      const b = document.createElement('button'); b.className = 'sr-diff' + (this._mode === k ? ' on' : ''); b.textContent = label;
      b.addEventListener('click', () => { this._mode = k; this._showTitle(); });
      modeRow.appendChild(b);
    }
    c.appendChild(modeRow);
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
      const img = document.createElement('img');
      img.className = 'sr-class-img'; img.alt = cls.name;
      try { img.src = this._classPreview(cls); } catch { /* preview optional */ }
      const txt = document.createElement('div'); txt.className = 'sr-class-txt';
      const nm = document.createElement('b'); nm.textContent = cls.name;
      const ds = document.createElement('span'); ds.textContent = cls.desc;
      txt.appendChild(nm); txt.appendChild(ds);
      b.appendChild(img); b.appendChild(txt);
      b.addEventListener('click', () => { this._classId = cls.id; this._showTitle(); });
      clsRow.appendChild(b);
    }
    c.appendChild(clsRow);
    // Y-axis invert option (default OFF = standard FPS: mouse up → look up)
    this.invertY = this.invertY ?? false;
    const inv = this._btn(this.invertY ? '↕ 마우스 상하 반전: 켜짐' : '↕ 마우스 상하 반전: 꺼짐', () => { this.invertY = !this.invertY; this._showTitle(); });
    c.appendChild(inv);
    if (this._mode === 'online') {
      c.appendChild(this._btn('🌐 공개 방 목록 / 빠른 입장', () => this._showOnlineLobby(), true));
      const codeRow = document.createElement('div'); codeRow.className = 'sr-nickrow';
      const codeIn = document.createElement('input'); codeIn.className = 'sr-nick'; codeIn.maxLength = 4;
      codeIn.placeholder = '방 코드 (예: 4F2K)'; codeIn.style.textTransform = 'uppercase';
      const joinB = document.createElement('button'); joinB.className = 'sr-btn'; joinB.style.width = 'auto'; joinB.style.margin = '0'; joinB.textContent = '코드로 입장';
      joinB.addEventListener('click', () => { if (codeIn.value.trim().length === 4) this._joinOnline({ code: codeIn.value.trim().toUpperCase() }); });
      codeRow.appendChild(codeIn); codeRow.appendChild(joinB);
      c.appendChild(codeRow);
      c.appendChild(this._btn('🏠 방 만들기 (공개)', () => this._joinOnline({ create: true, isPublic: true })));
      c.appendChild(this._btn('🔒 방 만들기 (비공개 · 코드 공유)', () => this._joinOnline({ create: true, isPublic: false })));
      c.appendChild(this._btn('📊 내 전적', () => this._showStats()));
    } else {
      const start = this._btn('낙하 시작', () => this.newGame(), true); c.appendChild(start);
    }
    const w = this._wallet();
    c.appendChild(this._btn(`🏪 상점 · 🍾 ${w.caps} — 🎒 ${this._carryItem ? C.shop[this._carryItem].emoji + ' ' + C.shop[this._carryItem].name : '장착 없음'}`, () => this._showShop()));
    c.appendChild(this._btn('❓ 조작법', () => this._showHelp()));
    const mute = this._btn(this.audio.muted ? '🔇 사운드' : '🔊 사운드', () => { this.audio.setMuted(!this.audio.muted); mute.textContent = this.audio.muted ? '🔇 사운드' : '🔊 사운드'; });
    c.appendChild(mute);
    const foot = document.createElement('p'); foot.className = 'sr-foot';
    foot.textContent = 'WASD 이동 · Space 점프/제트팩 · 좌클릭 투척 · F 근접(주먹/몽둥이) · X 아이템 · E 제작 · Q 설벽 · G 미끼 · C 엄폐 · M 지도';
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
      '💊 알약 — 색으로 구분: 🟢이동 🟡공격 🟣제작 🔴기관총(75발 연사, 20초)',
      '🌀 스프링 점프 패드 — 밟으면 달리던 방향으로 높이 발사. 돌 타워 위로 올라갈 수 있음',
      '좌클릭 홀드 → 놓기 — 눈뭉치 투척 (오래 누를수록 멀리)',
      'E — 눈더미(반짝이는 흰 둔덕) 앞에서 3초 제작 +10 (무방비!)',
      'Q — 설벽 건설 (4개) · G — 눈사람 미끼 (5개) · M — 지도',
      'F — 근접 공격: 기본 주먹(10). 🏏 몽둥이를 주우면 강타(26+넉백)',
      '🍾 병뚜껑 — 전장에서 주워 상점에서 아이템 구매 (죽은 자는 지갑을 떨어뜨린다)',
      'X — 장착한 상점 아이템 사용 (건빵/돌격물약/수면총/수류탄) · 제트팩은 점프키로 비행',
      '파란 빛 기둥 벽 = 눈보라 구역 경계. 벽 밖에 있으면 체력이 닳습니다',
      '쓰러진 플레이어는 그 자리에 남습니다',
    ];
    lines.forEach((t) => { const p = document.createElement('p'); p.textContent = t; box.appendChild(p); });
    box.appendChild(this._btn('닫기', () => ov.remove(), true));
    ov.appendChild(box); this.root.appendChild(ov);
  }

  // ---- online: lobby & rooms --------------------------------------------------
  _nickname() { return (this._nickInput && this._nickInput.value.trim()) || getNickname() || '눈사람'; }

  async _ensureNet() {
    if (this.net && this.net.connected) return this.net;
    this.net = new NetClient();
    this.net
      .on('joined', (m) => { try { sessionStorage.setItem('snow_room', m.code); } catch { /* */ } })
      .on('lobby', (m) => this._renderRoomLobby(m))
      .on('rooms', (m) => this._renderRoomList(m.rooms))
      .on('error', (m) => { this._toast(`⚠ ${m.error}`); if (/방을 찾을 수 없습니다|진행 중/.test(m.error)) { try { sessionStorage.removeItem('snow_room'); } catch { /* */ } } })
      .on('you', (m) => { this.onlineYouId = m.playerId; this._applyYou(); })
      .on('match_start', (m) => this._onlineMatchStart(m))
      .on('drop_tick', (m) => { this.onlineDropLeft = m.left; })
      .on('play_begin', (m) => this._onlinePlayBegin(m))
      .on('snap', (m) => this._onlineSnap(m))
      .on('you_died', (m) => this._onlineDied(m))
      .on('caps_got', (m) => {
        this._bankCaps(m.amount);
        this.capsFxUntil = performance.now() + 1600; this.capsFxAmount = m.amount;
        this.audio.craftDone();
        this._toast(`🍾 병뚜껑 +${m.amount}! (지갑 ${this._wallet().caps}개)`, 2600);
      })
      .on('match_over', (m) => this._onlineOver(m))
      .on('stats', (m) => this._renderStats(m.stats))
      .on('_close', () => { if (this.online) { this._toast('서버 연결이 끊어졌습니다'); this.online = false; this._showTitle(); } });
    await this.net.connect();
    return this.net;
  }

  async _joinOnline({ create = false, isPublic = true, code = null, quick = false } = {}) {
    setNickname(this._nickname());
    try {
      const net = await this._ensureNet();
      const base = { name: this._nickname(), classId: this._classId || 'jack', itemId: this._carryItem || undefined };
      if (create) net.send({ type: 'create_room', isPublic, ...base });
      else if (code) net.send({ type: 'join_room', code, ...base });
      else if (quick) net.send({ type: 'quick_join', ...base });
    } catch (e) {
      this._toast(`⚠ ${e.message} — 서버가 꺼져 있으면 1인 플레이를 이용하세요`, 4200);
    }
  }

  async _showOnlineLobby() {
    setNickname(this._nickname());
    try {
      const net = await this._ensureNet();
      net.send({ type: 'list_rooms' });
      this._renderRoomList(null); // loading state
    } catch (e) {
      this._toast(`⚠ ${e.message}`, 4200);
    }
  }

  _renderRoomList(list) {
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '공개 방'; h.style.fontSize = '40px';
    c.appendChild(h);
    if (list == null) { c.appendChild(el('p', 'sr-sub', '목록을 불러오는 중…')); }
    else if (!list.length) { c.appendChild(el('p', 'sr-sub', '대기 중인 공개 방이 없습니다. 새로 만들어보세요!')); }
    else {
      const box = document.createElement('div'); box.className = 'sr-roomlist';
      for (const r of list) {
        const b = document.createElement('button'); b.className = 'sr-room';
        b.innerHTML = `<b>${r.code}</b><span>${r.host}님의 방 · ${r.players}/${r.max}명</span>`;
        b.addEventListener('click', () => this._joinOnline({ code: r.code }));
        box.appendChild(b);
      }
      c.appendChild(box);
    }
    c.appendChild(this._btn('⚡ 빠른 입장 (자동 매칭)', () => this._joinOnline({ quick: true }), true));
    c.appendChild(this._btn('🔄 새로고침', () => { this.net && this.net.send({ type: 'list_rooms' }); }));
    c.appendChild(this._btn('← 타이틀로', () => this._showTitle()));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  _renderRoomLobby(m) {
    if (this.sceneName === 'play') return; // lobby updates during play = rematch prep
    this.roomCode = m.code;
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = `방 ${m.code}`; h.style.fontSize = '40px';
    c.appendChild(h);
    c.appendChild(el('p', 'sr-sub', m.isPublic ? '공개 방 — 목록에 노출됩니다' : `비공개 방 — 친구에게 코드 ${m.code}를 알려주세요`));
    const box = document.createElement('div'); box.className = 'sr-roomlist';
    for (const mem of m.members) {
      const row = document.createElement('div'); row.className = 'sr-room sr-room-static';
      const cls = CLASSES[mem.classId] || CLASSES.jack;
      row.innerHTML = `<b>${mem.name}${mem.uid === this.net.uid ? ' (나)' : ''}${mem.uid === m.hostUid ? ' 👑' : ''}</b><span>${cls.name} · ${mem.ready ? '✅ 준비됨' : '대기 중'}</span>`;
      box.appendChild(row);
    }
    c.appendChild(box);
    c.appendChild(el('p', 'sr-foot', `남는 자리는 봇이 채웁니다 (총 ${C.match.total}인 매치)`));
    const me = m.members.find((x) => x.uid === this.net.uid);
    const readyB = this._btn(me && me.ready ? '준비 취소' : '✅ 준비', () => this.net.send({ type: 'ready', ready: !(me && me.ready) }));
    c.appendChild(readyB);
    if (m.hostUid === this.net.uid) c.appendChild(this._btn('🚀 게임 시작 (방장)', () => this.net.send({ type: 'start' }), true));
    c.appendChild(this._btn('나가기', () => { this.net.send({ type: 'leave' }); try { sessionStorage.removeItem('snow_room'); } catch { /* */ }; this._showTitle(); }));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  async _showStats() {
    try {
      const net = await this._ensureNet();
      net.send({ type: 'stats' });
    } catch (e) { this._toast(`⚠ ${e.message}`); }
  }

  _renderStats(s) {
    const c = document.createElement('div'); c.className = 'sr-title';
    const h = document.createElement('h1'); h.textContent = '내 전적'; h.style.fontSize = '40px';
    c.appendChild(h);
    if (!s || !s.matches) c.appendChild(el('p', 'sr-sub', '아직 온라인 전적이 없습니다. 첫 매치를 뛰어보세요!'));
    else {
      const stat = document.createElement('div'); stat.className = 'sr-rstats';
      stat.appendChild(this._stat('매치', s.matches));
      stat.appendChild(this._stat('승리', s.wins || 0));
      stat.appendChild(this._stat('TOP3', s.top3 || 0));
      stat.appendChild(this._stat('처치', s.kills || 0));
      stat.appendChild(this._stat('평균 순위', s.matches ? (s.totalPlace / s.matches).toFixed(1) : '-'));
      c.appendChild(stat);
      c.appendChild(el('p', 'sr-sub', `${s.name || ''} · 마지막 플레이 ${s.lastPlayedAt ? s.lastPlayedAt.slice(0, 10) : '-'}`));
    }
    c.appendChild(this._btn('← 타이틀로', () => this._showTitle()));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
  }

  newGame(seed = this.seed) {
    this.audio.init(); this.audio.resume();
    const s = seed != null ? seed : (Math.floor(performance.now()) % 100000) + 1;
    const carried = this._consumeCarryItem();
    this.game = E.createGame(s, { total: this._total || C.match.total, difficulty: this._difficulty || 'normal', classId: this._classId || 'jack', itemId: carried });
    if (carried) this._toast(`${C.shop[carried].emoji} ${C.shop[carried].name} 장착 — ${carried === 'jetpack' ? '점프키로 비행' : carried === 'club' ? 'F키로 강타' : 'X키로 사용'}`, 4500);
    this.human = E.humanPlayer(this.game);
    this._buildWorld();
    this.online = false;
    this.ghost = false;
    this.ghostPos = null;
    if (this.human) this.human.name = this._nickname ? this._nickname() : this.human.name;
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

  // ---- online match: seed-built world + server snapshots ----------------------
  _onlineMatchStart(m) {
    this.audio.init(); this.audio.resume();
    this.online = true;
    this.onlineMeta = m;
    this._consumeCarryItem(); // hand the carried item to this match
    // identical world from the shared seed; server owns all simulation
    this.game = E.createGame(m.seed, { total: m.total, allNpc: true, humanId: -1, difficulty: 'normal' });
    // mirror names/skins/user flags from the roster
    for (const rp of m.players) {
      const p = this.game.players.find((x) => x.id === rp.id);
      if (p) { p.name = rp.name; p.isNpc = rp.isNpc; p.userSkin = rp.userSkin; if (rp.classId) E.applyClass(this.game, p, rp.classId); }
    }
    this.human = null; // assigned when 'you' arrives (may already be set)
    this._applyYou();
    this._buildWorld();
    this.ghost = false;
    this.killFeed = [];
    this.overlay.style.display = 'none'; this.overlay.innerHTML = '';
    this.hud.style.display = 'block';
    this.yaw = 0; this.pitch = 0;
    this._lastSurvivors = m.total;
    if (m.rejoin) {
      // reload-rejoin: straight into the live match
      this.sceneName = 'play';
      this._toast('🔄 매치에 다시 접속했습니다 — 화면을 클릭해 조준을 잠그세요', 4000);
    } else {
      // shared drop phase: aerial flyover + map click to pick a landing spot
      this.sceneName = 'drop';
      this.dropT = 0;
      this.onlineDropLeft = 8;
      this.dropTarget = { x: this.game.zone.cx, y: this.game.zone.cy };
      this.dropPlan = new Map();
      for (const p of this.game.players) {
        if (this.human && p.id === this.human.id) continue;
        this.dropPlan.set(p.id, { delay: this.game.rng.range(0, 2.5), fallSec: this.game.rng.range(3.2, 4.6), sway: this.game.rng.range(0, Math.PI * 2) });
      }
      this._toast('🌐 온라인 매치 — 지도를 클릭해 낙하 지점을 고르세요');
    }
  }

  _onlinePlayBegin() {
    if (!this.online) return;
    this.sceneName = 'play';
    this.audio.landing();
    this._toast('착지! 화면을 클릭해 조준을 잠그세요');
  }

  _applyYou() {
    if (this.onlineYouId == null || !this.game) return;
    this.human = this.game.players.find((p) => p.id === this.onlineYouId) || null;
    if (this.human) {
      const fig = this.actors.get(this.human.id);
      if (fig) { this.scene3.remove(fig); this.actors.delete(this.human.id); }
      const hpS = this.hpSprites && this.hpSprites.get(this.human.id);
      if (hpS) { hpS.visible = false; }
    }
  }

  _onlineSnap(m) {
    if (!this.online || !this.game) return;
    if (!this.human) this._applyYou();
    const g = this.game;
    g.t = m.t;
    g.zone.radius = m.zone.r;
    g.zone.nextShrink = m.t + m.zone.next;
    for (const row of m.players) {
      const p = g.players.find((x) => x.id === row[0]);
      if (!p) continue;
      if (row.length === 1) { if (p.alive) { p.alive = false; if (!g.placementOrder.includes(p.id)) g.placementOrder.push(p.id); g.corpses.push({ id: p.id, x: p.x, y: p.y, skin: p.skin, name: p.name, at: g.t, yaw: p.aim }); } continue; }
      const [, x, y, z, aim, hp, balls, crafting, shield, mg, buff, cover, asleep, charging, hasClub, caps, itemId, itemUses, jetFuel] = row;
      // don't snap our own aim (mouse-owned), but position is server-authoritative
      p.x = x; p.y = y; p.z = z; p.hp = hp; p.snowballs = balls;
      p.crafting = !!crafting; p.shieldHits = shield;
      p.mg = mg > 0 ? { ammo: mg, until: g.t + 99, fireCd: 0 } : null;
      p.buff = buff ? { kind: buff, until: g.t + 99, mul: 1 } : null;
      p.cover = !!cover;
      p.sleepUntil = asleep ? g.t + 1 : 0;
      p.chargeUntil = charging ? g.t + 1 : 0;
      p.hasClub = !!hasClub;
      p.caps = caps || 0;
      p.item = itemId ? { id: itemId, usesLeft: itemUses } : null;
      p.jetFuel = jetFuel || 0;
      if (!this.human || p.id !== this.human.id) p.aim = aim;
    }
    // projectiles: sync by id
    const ids = new Set();
    for (const [id, x, y, flat, t100] of m.balls) {
      ids.add(id);
      let sb = g.snowballs.find((s) => s.id === id);
      if (!sb) { sb = { id, x, y, dirX: 0, dirY: 0, traveled: t100, range: 100, speed: 0, flat: !!flat, dead: false }; g.snowballs.push(sb); }
      sb.x = x; sb.y = y; sb.traveled = t100; sb.range = 100;
    }
    g.snowballs = g.snowballs.filter((s) => ids.has(s.id));
    // walls / decoys
    const wids = new Set();
    for (const [id, x, y, angle, hp] of m.walls) {
      wids.add(id);
      let w = g.walls.find((v) => v.id === id);
      if (!w) { w = { id, x, y, angle, hp }; g.walls.push(w); }
      w.hp = hp;
    }
    g.walls = g.walls.filter((w) => wids.has(w.id));
    const dids = new Set();
    for (const [id, x, y] of m.decoys) {
      dids.add(id);
      if (!g.decoys.find((v) => v.id === id)) g.decoys.push({ id, x, y, alive: true, until: g.t + 99 });
    }
    g.decoys = g.decoys.filter((d) => dids.has(d.id));
    // caps + grenades (server-authoritative lists)
    if (m.caps) {
      for (const [id, gone, x, y, amount] of m.caps) {
        let cp = g.caps.find((v) => v.id === id);
        if (!cp) { cp = { id, x, y, amount, takenUntil: 0, dropped: true }; g.caps.push(cp); }
        cp.x = x; cp.y = y; cp.amount = amount;
        cp.gone = !!gone; cp.takenUntil = gone ? g.t + 99 : 0;
      }
    }
    if (m.nades) {
      const nids = new Set();
      for (const [id, x, y, z, lx, ly, radius, left, exploded] of m.nades) {
        nids.add(id);
        let gr = g.grenades.find((v) => v.id === id);
        if (!gr) { gr = { id, sx: x, sy: y }; g.grenades.push(gr); }
        gr.x = x; gr.y = y; gr.z = z; gr.lx = lx; gr.ly = ly; gr.radius = radius;
        gr.explodeAt = g.t + left; gr.exploded = !!exploded;
      }
      g.grenades = g.grenades.filter((v) => nids.has(v.id));
    }
    // pickups / piles state
    for (const [id, taken, x, y, buffKind] of m.pickups) {
      const it = g.pickups.find((v) => v.id === id);
      if (it) { it.takenUntil = taken ? g.t + 5 : 0; it.x = x; it.y = y; if (buffKind && it.buff) it.buff.kind = buffKind; }
    }
    for (const [id, cooling, x, y] of m.piles) {
      const pl = g.piles.find((v) => v.id === id);
      if (pl) { pl.cooldownUntil = cooling ? g.t + 5 : 0; pl.x = x; pl.y = y; }
    }
    // events -> kill feed, zone warnings
    for (const e of m.events || []) {
      if (e.type === 'kill') {
        const by = g.players.find((p) => p.id === e.by), v = g.players.find((p) => p.id === e.victim);
        if (by && v) this.killFeed.push({ text: `${by.name} ❄→ ${v.name}`, until: performance.now() + 4200 });
      }
      if (e.type === 'zoneShrink') { this.audio.zoneWarn(); this._toast('⚠ 눈보라 구역이 좁아집니다!'); }
      if (e.type === 'pad' && this.human && e.id === this.human.id) this._toast('🌀 스프링 점프!', 1200);
      if (e.type === 'placeReward' && this.human && e.id === this.human.id) {
        this._bankCaps(e.amount);
        this.capsFxUntil = performance.now() + 2000; this.capsFxAmount = e.amount;
        this._toast(`🏅 ${e.place}등 보상 — 병뚜껑 +${e.amount}!`, 4500);
      }
      if (e.type === 'swing' && (!this.human || e.id !== this.human.id)) {
        const fig = this.actors.get(e.id);
        if (fig && fig.userData) fig.userData.swingAt = performance.now();
      }
    }
    if (this.killFeed.length > 5) this.killFeed = this.killFeed.slice(-5);
    const surv = m.alive;
    if (surv !== this._lastSurvivors) { this.audio.setIntensity(surv); this._lastSurvivors = surv; }
    this._lastSnapAt = performance.now();
  }

  _onlineDied(m) {
    this.ghost = true;
    this._toast(`💀 탈락 — 최종 ${m.place}위 / ${m.total}명 · 처치 ${m.kills} — 유령 모드로 관전합니다 (WASD 이동)`, 6000);
    this.audio.gameover();
  }

  _onlineOver(m) {
    this.online = false;
    const won = this.human && m.winner && m.winner.id === this.human.id;
    const c = document.createElement('div'); c.className = 'sr-result ' + (won ? 'sr-win' : 'sr-lose');
    const big = document.createElement('div'); big.className = 'sr-place';
    big.textContent = won ? '🏆' : '🏁';
    const h2 = document.createElement('h2');
    h2.textContent = won ? '설원의 왕!' : `우승: ${m.winner ? m.winner.name : '-'}`;
    c.appendChild(big); c.appendChild(h2);
    c.appendChild(el('p', 'sr-sub', '잠시 후 방 로비로 돌아갑니다 — 준비를 누르면 리매치!'));
    c.appendChild(this._btn('타이틀로', () => { this.net && this.net.send({ type: 'leave' }); try { sessionStorage.removeItem('snow_room'); } catch { /* */ }; this._showTitle(); }));
    this.overlay.innerHTML = ''; this.overlay.appendChild(c); this.overlay.style.display = 'flex';
    if (won) this.audio.fanfare();
    this.sceneName = 'result';
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
        if (this.ghost) {
          if (e.code === 'Enter' || e.code === 'KeyL') {
            // leave: online -> back to lobby/title, solo -> results screen
            if (this.online) { this.online = false; this.ghost = false; if (this.net) this.net.send({ type: 'leave' }); try { sessionStorage.removeItem('snow_room'); } catch { /* */ }; this._showTitle(); }
            else if (this.game) { this.ghost = false; this._showResult(); }
          }
        } else if (this.online) {
          if (e.code === 'KeyE') this._queuedCraft = true;
          if (e.code === 'KeyQ') this._queuedWall = true;
          if (e.code === 'KeyG') this._queuedDecoy = true;
          if (e.code === 'KeyF') this._queuedMelee = true;
          if (e.code === 'KeyX') this._queuedUse = true;
          if (e.code === 'Space') { this._queuedJump = true; this._jetHold = true; }
        } else {
          if (e.code === 'KeyE') this._tryCraft();
          if (e.code === 'KeyQ') this._act('wall');
          if (e.code === 'KeyG') this._act('decoy');
          if (e.code === 'KeyF') this._melee();
          if (e.code === 'KeyX') this._useItem();
          if (e.code === 'Space') {
            this.human.jetHold = true;
            if (E.jump(this.game, this.human)) this.audio.throw();
          }
        }
        if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(e.code)) e.preventDefault();
      }
      if (e.code === 'KeyM') this._showMinimap = !this._showMinimap;
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Space') { if (this.human) this.human.jetHold = false; this._jetHold = false; }
    });
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
        if (w) {
          this.dropTarget = w;
          // online: the server owns positions — send the chosen landing spot
          if (this.online && this.net) this.net.send({ type: 'input', dropX: w.x, dropY: w.y });
        }
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
        const mgActive = h && h.mg && g && h.mg.ammo > 0 && (this.online || h.mg.until > g.t);
        if (!mgActive && !this.ghost) {
          if (this.online) {
            if (h && h.snowballs > 0) { this._queuedThrow = E.chargeFromMs(performance.now() - this.mouse.downAt); this.audio.throw(); this.viewKick = 1; }
          } else this._throw(performance.now() - this.mouse.downAt);
        }
        this.mouse.down = false;
      }
    });
    // mobile: left half = virtual move stick, right half = look; buttons for actions
    this.isMobile = 'ontouchstart' in window && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (this.isMobile) this._bindTouch();
    else {
      this.canvas.addEventListener('touchstart', (e) => { this.audio.resume(); if (this.sceneName === 'play') { this.mouse.down = true; this.mouse.downAt = performance.now(); } e.preventDefault(); }, { passive: false });
      this.canvas.addEventListener('touchend', (e) => { if (this.sceneName === 'play' && this.mouse.down) { this._throw(performance.now() - this.mouse.downAt); this.mouse.down = false; } e.preventDefault(); }, { passive: false });
    }
  }

  _bindTouch() {
    this.touch = { moveId: null, moveOx: 0, moveOy: 0, mvx: 0, mvy: 0, lookId: null, lastLx: 0, lastLy: 0 };
    const onStart = (e) => {
      this.audio.resume();
      if (this.sceneName === 'drop') {
        const t = e.changedTouches[0];
        const r = this.canvas.getBoundingClientRect();
        const w = this._dropScreenToWorld(t.clientX - r.left, t.clientY - r.top);
        if (w) { this.dropTarget = w; if (this.online && this.net) this.net.send({ type: 'input', dropX: w.x, dropY: w.y }); }
        e.preventDefault(); return;
      }
      if (this.sceneName !== 'play') return;
      for (const t of e.changedTouches) {
        if (t.clientX < this.vw * 0.42 && this.touch.moveId == null) {
          this.touch.moveId = t.identifier; this.touch.moveOx = t.clientX; this.touch.moveOy = t.clientY;
        } else if (this.touch.lookId == null) {
          this.touch.lookId = t.identifier; this.touch.lastLx = t.clientX; this.touch.lastLy = t.clientY;
          this.mouse.down = true; this.mouse.downAt = performance.now(); // hold-to-charge on look half
        }
      }
      e.preventDefault();
    };
    const onMove = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.touch.moveId) {
          const dx = t.clientX - this.touch.moveOx, dy = t.clientY - this.touch.moveOy;
          const len = Math.hypot(dx, dy);
          const dead = 12, max2 = 60;
          if (len < dead) { this.touch.mvx = 0; this.touch.mvy = 0; }
          else {
            const k = Math.min(1, (len - dead) / max2);
            this.touch.mvx = (dx / len) * k; this.touch.mvy = (dy / len) * k;
          }
        } else if (t.identifier === this.touch.lookId) {
          const sens = 0.0058;
          this.yaw += (t.clientX - this.touch.lastLx) * sens;
          const dir = this.invertY ? -1 : 1;
          this.pitch = Math.max(-0.85, Math.min(0.85, this.pitch - (t.clientY - this.touch.lastLy) * sens * dir));
          this.touch.lastLx = t.clientX; this.touch.lastLy = t.clientY;
        }
      }
      e.preventDefault();
    };
    const onEnd = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.touch.moveId) { this.touch.moveId = null; this.touch.mvx = 0; this.touch.mvy = 0; }
        if (t.identifier === this.touch.lookId) {
          this.touch.lookId = null;
          if (this.sceneName === 'play' && this.mouse.down) {
            const held = performance.now() - this.mouse.downAt;
            const h = this.human, g = this.game;
            const mgActive = h && h.mg && g && h.mg.ammo > 0;
            if (held > 120 && !mgActive && !this.ghost) {
              if (this.online) { if (h && h.snowballs > 0) { this._queuedThrow = E.chargeFromMs(held); } }
              else this._throw(held);
            }
            this.mouse.down = false;
          }
        }
      }
      e.preventDefault();
    };
    this.canvas.addEventListener('touchstart', onStart, { passive: false });
    this.canvas.addEventListener('touchmove', onMove, { passive: false });
    this.canvas.addEventListener('touchend', onEnd, { passive: false });
    this.canvas.addEventListener('touchcancel', onEnd, { passive: false });
    // action buttons (DOM, above fx canvas)
    const bar = document.createElement('div'); bar.className = 'sr-touchbar';
    const mk = (label, cls, fn) => {
      const b = document.createElement('button'); b.className = 'sr-tbtn ' + cls; b.textContent = label;
      b.addEventListener('touchstart', (ev) => { ev.preventDefault(); ev.stopPropagation(); this.audio.resume(); fn(); }, { passive: false });
      bar.appendChild(b); return b;
    };
    mk('⤒', 'sr-tbtn-jump', () => {
      if (this.ghost) return;
      if (this.online) { this._queuedJump = true; this._jetHold = true; setTimeout(() => { this._jetHold = false; }, 900); }
      else if (this.human) { this.human.jetHold = true; E.jump(this.game, this.human); setTimeout(() => { if (this.human) this.human.jetHold = false; }, 900); }
    });
    mk('👊', 'sr-tbtn-melee', () => { if (this.ghost) return; this.online ? this._queuedMelee = true : this._melee(); });
    mk('E', 'sr-tbtn-craft', () => { if (this.ghost) return; this.online ? this._queuedCraft = true : this._tryCraft(); });
    mk('X', 'sr-tbtn-item', () => { if (this.ghost) return; this.online ? this._queuedUse = true : this._useItem(); });
    mk('Q', 'sr-tbtn-wall', () => { if (this.ghost) return; this.online ? this._queuedWall = true : this._act('wall'); });
    this.root.appendChild(bar);
    this.touchBar = bar;
  }

  _dropScreenToWorld(sx, sy) {
    // map panel geometry is computed by _renderDrop each frame
    const m = this._dropMap;
    if (!m) return null;
    const x = (sx - m.ox) / m.zoom, y = (sy - m.oy) / m.zoom;
    if (x < -30 || y < -30 || x > C.map.size + 30 || y > C.map.size + 30) return null; // clicked outside panel
    return { x: Math.max(0, Math.min(C.map.size, x)), y: Math.max(0, Math.min(C.map.size, y)) };
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
  _melee() {
    const h = this.human;
    if (!h.alive || h.crafting) return;
    const victim = E.melee(this.game, h, this.yaw);
    this.meleeSwingAt = performance.now();
    this.audio.throw();
    if (victim) { this.hitMarkerUntil = performance.now() + 300; this.audio.hit(); }
  }
  _useItem() {
    const h = this.human;
    if (!h.item) { this._toast('가진 아이템 없음 — 상점에서 구매 후 인벤토리에서 장착'); return; }
    const r = E.useItem(this.game, h, this.yaw);
    if (!r) return;
    if (r.used === 'hardtack') { this.audio.craftDone(); this._toast(`🍪 건빵! +${C.shop.hardtack.healAmount} HP (남은 ${h.item ? h.item.usesLeft : 0}회)`); }
    if (r.used === 'charge') { this.audio.fanfare(); this._toast(`⚗️ 돌격! ${C.shop.charge.durationSec}초 무적 — 부딪히면 날아간다!`, 4000); }
    if (r.used === 'sleepgun') { this.audio.throw(); this._toast(`🔫 수면탄 발사! (남은 ${r.left}발)`); }
    if (r.used === 'grenade') { this.audio.throw(); this._toast(`💣 수류탄 투척 — 3초 후 폭발! (남은 ${r.left}개)`); }
    if (r.used === 'rocket') { this.audio.throw(); this.viewKick = 1; this._toast(`🧨 폭축 발사!! (남은 ${r.left}발)`); }
  }

  // ---- per-frame update -------------------------------------------------------
  _update(dt) {
    if (!this.game) return;
    if (this.sceneName === 'drop') {
      this.dropT += dt;
      // online: the server announces play_begin; solo enters after 8s
      if (!this.online && this.dropT >= 8) this._enterPlay();
      return;
    }
    if (this.sceneName !== 'play') return;
    // ---- online: send inputs, server owns simulation ----
    if (this.online) { this._updateOnline(dt); return; }
    // ---- solo ghost: free-fly spectate after death ----
    if (this.ghost) { this._updateGhost(dt); if (this.game && !this.game.over) { E.step(this.game, dt); this._drainSoloEvents(); } else if (this.game && this.game.over) this._showResult(); return; }
    const g = this.game, h = this.human;
    h.aim = this.yaw;
    if (h.alive && !h.crafting) {
      let f = 0, r = 0;
      if (this.keys['KeyW'] || this.keys['ArrowUp']) f += 1;
      if (this.keys['KeyS'] || this.keys['ArrowDown']) f -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) r += 1;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) r -= 1;
      if (this.touch && (this.touch.mvx || this.touch.mvy)) { f = -this.touch.mvy; r = this.touch.mvx; }
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
    if (beforeAlive && !h.alive) {
      this._humanLastCause = '눈뭉치에 맞아 탈락했습니다.';
      // solo ghost mode: announce placement, keep watching the match play out
      if (!g.over) {
        this.ghost = true;
        const place = g.players.length - g.placementOrder.indexOf(h.id);
        this.ghostPos = { x: h.x, y: h.y, z: 60 };
        this._toast(`💀 탈락 — ${place}위 / ${g.players.length}명 · 유령 모드로 관전 (WASD+마우스, Space 상승/C 하강, Enter 결과 보기)`, 7000);
        this.audio.gameover();
        return;
      }
    }
    for (const e of g.events.splice(0)) {
      if (e.type === 'kill') {
        const by = g.players.find((p) => p.id === e.by), v = g.players.find((p) => p.id === e.victim);
        if (by && v) this.killFeed.push({ text: `${by.name} ❄→ ${v.name}`, until: performance.now() + 4200 });
      }
      if (e.type === 'pad' && e.id === h.id) { this.audio.throw(); this._toast('🌀 스프링 점프!', 1500); }
      if (e.type === 'swing' && e.id !== h.id) {
        const fig = this.actors.get(e.id);
        if (fig && fig.userData) fig.userData.swingAt = performance.now();
      }
      if (e.type === 'placeReward' && e.id === h.id) {
        this._bankCaps(e.amount);
        this.capsFxUntil = performance.now() + 2000; this.capsFxAmount = e.amount;
        this._toast(`🏅 ${e.place}등 보상 — 병뚜껑 +${e.amount}!`, 4500);
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
      // bottle caps: pick up + celebration flash
      const capsGot = E.tryPickupCaps(g, h);
      if (capsGot > 0) {
        this._bankCaps(capsGot);
        this.capsFxUntil = performance.now() + 1600;
        this.capsFxAmount = capsGot;
        this.audio.craftDone();
        this._toast(`🍾 병뚜껑 +${capsGot}! (지갑 ${this._wallet().caps}개)`, 2600);
      }
      const got = E.tryPickup(g, h);
      if (got === 'club') { this.audio.wall(); this._toast('🏏 몽둥이 획득! F키 근접 공격이 강해졌다 (26 피해 + 넉백)', 4000); }
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

  // ghost spectate: free-fly camera (WASD + mouse, Space up, C down)
  _updateGhost(dt) {
    if (!this.ghostPos) this.ghostPos = { x: this.human ? this.human.x : C.map.size / 2, y: this.human ? this.human.y : C.map.size / 2, z: 60 };
    const sp = 260 * dt;
    let f = 0, r = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) f += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) f -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) r += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) r -= 1;
    if (this.touch && (this.touch.mvx || this.touch.mvy)) { f = -this.touch.mvy; r = this.touch.mvx; }
    const cos = Math.cos(this.yaw), sin = Math.sin(this.yaw);
    this.ghostPos.x = Math.max(0, Math.min(C.map.size, this.ghostPos.x + (cos * f - sin * r) * sp));
    this.ghostPos.y = Math.max(0, Math.min(C.map.size, this.ghostPos.y + (sin * f + cos * r) * sp));
    if (this.keys['Space']) this.ghostPos.z = Math.min(400, this.ghostPos.z + 160 * dt);
    if (this.keys['KeyC'] || this.keys['ShiftLeft'] || this.keys['ShiftRight'] || this.keys['ControlLeft']) {
      this.ghostPos.z = Math.max(10, this.ghostPos.z - 160 * dt);
    }
    // look down + move forward also descends (natural fly-cam feel)
    if (this.pitch < -0.25 && (this.keys['KeyW'] || this.keys['ArrowUp'])) {
      this.ghostPos.z = Math.max(10, this.ghostPos.z + Math.sin(this.pitch) * 200 * dt);
    }
  }

  // solo ghost: keep kill feed / zone warnings flowing while spectating
  _drainSoloEvents() {
    const g = this.game;
    for (const e of g.events.splice(0)) {
      if (e.type === 'kill') {
        const by = g.players.find((p) => p.id === e.by), v = g.players.find((p) => p.id === e.victim);
        if (by && v) this.killFeed.push({ text: `${by.name} ❄→ ${v.name}`, until: performance.now() + 4200 });
      }
      if (e.type === 'placeReward' && this.human && e.id === this.human.id) {
        this._bankCaps(e.amount);
        this._toast(`🏅 ${e.place}등 보상 — 병뚜껑 +${e.amount}!`, 4500);
      }
    }
    if (this.killFeed.length > 5) this.killFeed = this.killFeed.slice(-5);
    if (g.zone.shrinks !== this._lastShrinks) { this._lastShrinks = g.zone.shrinks; this.audio.zoneWarn(); }
  }

  // online play: gather local input and ship it to the server (20Hz alongside frames)
  _updateOnline(dt) {
    const h = this.human;
    if (!h) return;
    if (this.ghost) { this._updateGhost(dt); return; }
    let f = 0, r = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) f += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) f -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) r += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) r -= 1;
    if (this.touch && (this.touch.mvx || this.touch.mvy)) { f = -this.touch.mvy; r = this.touch.mvx; }
    const cos = Math.cos(this.yaw), sin = Math.sin(this.yaw);
    const mvx = f || r ? cos * f - sin * r : 0;
    const mvy = f || r ? sin * f + cos * r : 0;
    if (f || r) this.bobT += dt * 9;
    h.aim = this.yaw;
    const mgActive = h.mg && h.mg.ammo > 0;
    this.net.send({
      type: 'input',
      mvx, mvy, aim: this.yaw, cover: !!this.keys['KeyC'],
      jump: this._queuedJump || undefined,
      craft: this._queuedCraft || undefined,
      wall: this._queuedWall || undefined,
      decoy: this._queuedDecoy || undefined,
      melee: this._queuedMelee || undefined,
      useItem: this._queuedUse || undefined,
      jetHold: this._jetHold || undefined,
      throwCharge: this._queuedThrow != null ? this._queuedThrow : undefined,
      mg: !!(mgActive && this.mouse.down && this.locked),
    });
    if (this._queuedMelee) { this.meleeSwingAt = performance.now(); this.audio.throw(); }
    this._queuedJump = this._queuedCraft = this._queuedWall = this._queuedDecoy = this._queuedMelee = this._queuedUse = false;
    this._queuedThrow = null;
    // local hit feedback from hp deltas
    if (this._lastHp != null && h.hp < this._lastHp) { this.audio.hit(); this.damageFlashUntil = performance.now() + 250; }
    this._lastHp = h.hp;
  }

  // ---- sync engine state -> 3D scene -------------------------------------------
  _sync3d(now) {
    const g = this.game, s = this.scene3;
    if (!s) return;
    // camera
    const h = this.human || { x: g.zone.cx, y: g.zone.cy, z: 40 };
    let camX, camY, camZ;
    if (this.ghost && this.ghostPos) {
      camX = this.ghostPos.x; camY = this.ghostPos.z; camZ = this.ghostPos.y;
    } else {
      const bob = Math.sin(this.bobT) * 0.8;
      camX = h.x; camY = EYE + bob + (h.z || 0); camZ = h.y; // jump/pad/tower height raises the camera
    }
    // explosion camera shake
    if (this.shakeUntil && now < this.shakeUntil) {
      const s2 = (this.shakeUntil - now) / 320;
      camX += (Math.random() - 0.5) * 4 * s2;
      camY += (Math.random() - 0.5) * 3 * s2;
      camZ += (Math.random() - 0.5) * 4 * s2;
    }
    this.camera.position.set(camX, camY, camZ);
    const lookX = camX + Math.cos(this.yaw) * Math.cos(this.pitch) * 10;
    const lookY = camY + Math.sin(this.pitch) * 10;
    const lookZ = camZ + Math.sin(this.yaw) * Math.cos(this.pitch) * 10;
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
      // club in hand: attach a bat to the right arm while the player has one
      if (p.hasClub && !ud.clubMesh) {
        const bat = new THREE.Mesh(
          new THREE.CylinderGeometry(CHAR_SCALE * 0.08, CHAR_SCALE * 0.16, CHAR_SCALE * 1.1, 8),
          new THREE.MeshStandardMaterial({ color: 0x9c6b3f, roughness: 0.85 }),
        );
        bat.position.set(0, -CHAR_SCALE * 0.75, CHAR_SCALE * 0.1);
        bat.rotation.x = Math.PI / 2.4;
        ud.armR.add(bat); ud.clubMesh = bat;
      }
      if (ud.clubMesh) ud.clubMesh.visible = !!p.hasClub;
      // melee swing animation overrides arm pose briefly
      const swingAge = ud.swingAt ? (now - ud.swingAt) / 280 : 99;
      if (swingAge < 1) {
        ud.armR.rotation.x = -2.4 + swingAge * 2.6; // overhead chop
        ud.armL.rotation.x = swing * 0.5;
      } else if (p.crafting) { ud.armL.rotation.x = -1.2; ud.armR.rotation.x = -1.2; }
      else if (p.hasClub) { ud.armR.rotation.x = -0.5; ud.armL.rotation.x = swing * 0.5; } // ready stance
      else { ud.armL.rotation.x = swing * 0.5; ud.armR.rotation.x = -swing * 0.5; }
      // sleep: figure tips sideways + slow spin nap
      if (p.sleepUntil > g.t) {
        fig.rotation.z = Math.PI / 2 * 0.85;
        fig.position.y = 3;
      } else if (fig.rotation.z !== 0 && !(p.kbVx || p.kbVy)) fig.rotation.z = 0;
      // charge potion: figure glows red-orange while ramming
      if (E.chargeActive(g, p) && !ud.chargeGlow) {
        const glow = new THREE.Mesh(
          new THREE.SphereGeometry(CHAR_SCALE * 1.5, 14, 10),
          new THREE.MeshBasicMaterial({ color: 0xff5030, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false }),
        );
        glow.position.y = CHAR_SCALE * 1.2; fig.add(glow); ud.chargeGlow = glow;
      }
      if (ud.chargeGlow) ud.chargeGlow.visible = E.chargeActive(g, p);
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

    // walls: tall translucent energy barrier (Fortnite-style) — you can see
    // through it and watch shots splat against the surface
    const wallSeen = new Set();
    for (const w of g.walls) {
      wallSeen.add(w.id);
      let m = this.wallMeshes.get(w.id);
      if (!m) {
        m = new THREE.Group();
        const H = C.wall.height || 26;
        const panel = new THREE.Mesh(
          new THREE.BoxGeometry(C.wall.len, H, 2),
          new THREE.MeshBasicMaterial({ color: 0x7fd4ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
        );
        panel.position.y = H / 2; m.add(panel);
        // frame edges for readability
        const edgeMat = new THREE.MeshBasicMaterial({ color: 0xbfeaff, transparent: true, opacity: 0.8 });
        for (const [ex, ey, ew, eh] of [[0, H, C.wall.len, 1.2], [0, 0.6, C.wall.len, 1.2], [-C.wall.len / 2, H / 2, 1.2, H], [C.wall.len / 2, H / 2, 1.2, H]]) {
          const edge = new THREE.Mesh(new THREE.BoxGeometry(ew, eh, 2.4), edgeMat);
          edge.position.set(ex, ey, 0); m.add(edge);
        }
        // durability bar floating on top
        const cv = document.createElement('canvas'); cv.width = 64; cv.height = 10;
        const tex = new THREE.CanvasTexture(cv);
        const bar = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
        bar.scale.set(22, 3.4, 1); bar.position.y = H + 5;
        m.add(bar);
        m.userData = { panel, bar, cv, tex, lastHp: -1, splats: [] };
        m.position.set(w.x, 0, w.y);
        m.rotation.y = -w.angle;
        this.scene3.add(m);
        this.wallMeshes.set(w.id, m);
      }
      const ud = m.userData;
      // hp bar redraw on change
      if (ud.lastHp !== w.hp) {
        const x = ud.cv.getContext('2d');
        x.clearRect(0, 0, 64, 10);
        x.fillStyle = 'rgba(0,0,0,0.6)'; x.fillRect(0, 0, 64, 10);
        const frac = Math.max(0, w.hp / C.wall.durability);
        x.fillStyle = frac > 0.5 ? '#7fd4ff' : frac > 0.25 ? '#FF6B35' : '#DC143C';
        x.fillRect(1, 1, 62 * frac, 8);
        ud.tex.needsUpdate = true; ud.lastHp = w.hp;
        ud.panel.material.opacity = 0.14 + frac * 0.12; // fades as it weakens
      }
      // flash + splat on recent hit
      if (w.lastHitAt != null && g.t - w.lastHitAt < 0.25) {
        ud.panel.material.opacity = 0.5;
        if (!ud.lastSplatAt || ud.lastSplatAt !== w.lastHitAt) {
          ud.lastSplatAt = w.lastHitAt;
          const splat = new THREE.Mesh(
            new THREE.CircleGeometry(3.6, 10),
            new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false }),
          );
          splat.position.set((Math.random() - 0.5) * C.wall.len * 0.7, 6 + Math.random() * (C.wall.height - 10), 1.4);
          m.add(splat); ud.splats.push({ mesh: splat, at: now });
        }
      }
      // fade old splats
      ud.splats = ud.splats.filter((s2) => {
        const age = (now - s2.at) / 1000;
        if (age > 3) { m.remove(s2.mesh); return false; }
        s2.mesh.material.opacity = 0.9 * (1 - age / 3);
        return true;
      });
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

    // pickups: bob + spin, hidden while on respawn cooldown; pills rebuild
    // their mesh when the respawn re-rolls the buff (color must match)
    if (this.pickupMeshes) {
      for (const it of g.pickups) {
        let m = this.pickupMeshes.get(it.id);
        if (!m) continue;
        if (it.kind === 'pill' && it.buff && m.userData.buffKind !== it.buff.kind) m = this._makePickupMesh(it);
        const taken = it.takenUntil > g.t;
        m.visible = !taken;
        if (!taken) {
          m.position.set(it.x, Math.sin(now / 400 + it.id) * 1.6, it.y);
          m.rotation.y = now / 800;
        }
      }
    }
    // bottle caps: show/hide + new dropped wallets
    if (this.capMeshes) {
      for (const cp of g.caps) {
        let m = this.capMeshes.get(cp.id);
        if (!m && !cp.gone) m = this._makeCapMesh(cp);
        if (!m) continue;
        m.visible = !cp.gone && cp.takenUntil <= g.t;
        if (m.visible) { m.position.set(cp.x, Math.sin(now / 350 + cp.id) * 0.8, cp.y); m.rotation.y = now / 1200; }
      }
    }
    // grenades: flying ball + pulsing danger ring after landing
    if (this.grenadeMeshes) {
      const gseen = new Set();
      for (const gr of g.grenades) {
        gseen.add(gr.id);
        let m = this.grenadeMeshes.get(gr.id);
        if (!m) {
          m = new THREE.Group();
          // big detailed white SNOW grenade: packed-snow sphere + ice band +
          // stem cap + pin ring, blinking red fuse light
          const body = new THREE.Group();
          const ball = new THREE.Mesh(new THREE.SphereGeometry(9, 16, 14), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.65, emissive: 0xaabfcf, emissiveIntensity: 0.25 }));
          body.add(ball);
          for (let ci = 0; ci < 5; ci++) { // packed-snow clumps
            const clump = new THREE.Mesh(new THREE.SphereGeometry(2.6, 8, 6), new THREE.MeshStandardMaterial({ color: 0xf1f7fb, roughness: 0.9 }));
            const a = ci * 2.4;
            clump.position.set(Math.cos(a) * 7, Math.sin(a * 1.3) * 6, Math.sin(a) * 7);
            body.add(clump);
          }
          const band = new THREE.Mesh(new THREE.TorusGeometry(9.2, 1, 8, 24), new THREE.MeshStandardMaterial({ color: 0x9fd8f0, roughness: 0.4, metalness: 0.3 }));
          band.rotation.x = Math.PI / 2; body.add(band);
          const cap = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 3.2, 4, 10), new THREE.MeshStandardMaterial({ color: 0x8a97a5, metalness: 0.6, roughness: 0.4 }));
          cap.position.y = 10.5; body.add(cap);
          const pin = new THREE.Mesh(new THREE.TorusGeometry(2, 0.5, 6, 14), new THREE.MeshStandardMaterial({ color: 0xd4a017, metalness: 0.7, roughness: 0.3 }));
          pin.position.set(3.4, 11, 0); pin.rotation.y = Math.PI / 3; body.add(pin);
          const fuse = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3030 }));
          fuse.position.y = 13; body.add(fuse);
          m.add(body);
          // danger zone: filled disc + rim ring (much more readable than rim alone)
          const zone = new THREE.Mesh(
            new THREE.CircleGeometry(gr.radius, 48),
            new THREE.MeshBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }),
          );
          zone.rotation.x = -Math.PI / 2; zone.position.y = 0.7;
          const ring = new THREE.Mesh(
            new THREE.RingGeometry(gr.radius - 3.5, gr.radius, 48),
            new THREE.MeshBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }),
          );
          ring.rotation.x = -Math.PI / 2; ring.position.y = 0.8;
          m.userData = { ring, zone, body, fuse, boomAt: null };
          this.scene3.add(zone); this.scene3.add(ring); this.scene3.add(m);
          this.grenadeMeshes.set(gr.id, m);
        }
        m.position.set(gr.x, (gr.z || 0) + 6, gr.y);
        m.rotation.y = now / 300; m.rotation.z = now / 500; // tumble in flight
        const { ring, zone, body, fuse } = m.userData;
        ring.position.set(gr.lx, 0.8, gr.ly);
        zone.position.set(gr.lx, 0.7, gr.ly);
        const left = gr.explodeAt - g.t;
        const pulseHz = left < 1 ? 60 : 160;
        ring.material.opacity = 0.35 + Math.abs(Math.sin(now / pulseHz)) * 0.45;
        zone.material.opacity = 0.08 + Math.abs(Math.sin(now / pulseHz)) * 0.12;
        fuse.material.color.setHex(Math.sin(now / pulseHz) > 0 ? 0xff3030 : 0x661010); // blink
        if (gr.exploded) {
          body.visible = false;
          if (!m.userData.boomAt) {
            m.userData.boomAt = now;
            this._spawnBoomFx(gr.lx, gr.ly, gr.radius);
            this.audio.hit();
            if (this.shakeUntil == null || this.shakeUntil < now + 320) this.shakeUntil = now + 320;
          }
          const bt = (now - m.userData.boomAt) / 500;
          ring.material.opacity = Math.max(0, 0.9 - bt);
          zone.material.opacity = Math.max(0, 0.5 - bt);
          ring.scale.setScalar(1 + bt * 1.6);
        }
      }
      for (const [id, m] of this.grenadeMeshes) {
        if (!gseen.has(id)) { this.scene3.remove(m); this.scene3.remove(m.userData.ring); this.scene3.remove(m.userData.zone); this.grenadeMeshes.delete(id); }
      }
      // snow burst particles fly out and settle
      if (this._boomFx) {
        this._boomFx = this._boomFx.filter((fx) => {
          const age = (now - fx.at) / 1000;
          if (age > 1.1) { this.scene3.remove(fx.grp); return false; }
          fx.grp.children.forEach((c2, i) => {
            const sp = fx.speeds[i];
            c2.position.x += sp.x * 0.016; c2.position.z += sp.z * 0.016;
            c2.position.y = Math.max(1, c2.position.y + sp.y * 0.016 - age * 2.4);
            c2.material.opacity = Math.max(0, 0.95 - age);
          });
          return true;
        });
      }
    }
    // jump pad plates pulse
    if (this.padMeshes) {
      for (const [, m] of this.padMeshes) {
        const plate = m.userData.plate;
        if (plate) plate.position.y = 17 + Math.sin(now / 260) * 1.4;
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
    if (this.sceneName !== 'play' || !this.human) return;
    if (this.ghost) { // spectator banner instead of crosshair/viewmodel
      ctx.fillStyle = 'rgba(13,27,42,0.75)';
      ctx.fillRect(this.vw / 2 - 190, 14, 380, 34);
      ctx.fillStyle = '#A8D8EA'; ctx.font = 'bold 14px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(`👻 관전 중 · 생존 ${this._lastSurvivors ?? ''} · Space 상승 / C 하강 · Enter=나가기`, this.vw / 2, 36);
      return;
    }
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
    // charge potion: pulsing red flash so the rampage is unmistakable
    if (E.chargeActive(g, h)) {
      const pulse = 0.18 + Math.abs(Math.sin(now / 130)) * 0.22;
      const gEdge = ctx.createRadialGradient(this.vw / 2, this.vh / 2, this.vh * 0.3, this.vw / 2, this.vh / 2, this.vh * 0.75);
      gEdge.addColorStop(0, 'rgba(255,60,30,0)'); gEdge.addColorStop(1, `rgba(255,60,30,${pulse})`);
      ctx.fillStyle = gEdge; ctx.fillRect(0, 0, this.vw, this.vh);
      ctx.fillStyle = `rgba(255,80,40,${0.5 + Math.sin(now / 130) * 0.3})`;
      ctx.font = 'bold 20px system-ui'; ctx.textAlign = 'center';
      ctx.fillText(`⚗️ 돌격!! ${Math.ceil(h.chargeUntil - g.t)}초`, this.vw / 2, 70);
    }
    // shield: steady blue edge glow while held, bright flash on block
    if (h.shieldHits > 0 || now < (this.shieldFlashUntil || 0)) {
      const flash = now < (this.shieldFlashUntil || 0);
      const a = flash ? 0.45 : 0.14 + Math.sin(now / 300) * 0.04;
      const gEdge = ctx.createRadialGradient(this.vw / 2, this.vh / 2, this.vh * 0.38, this.vw / 2, this.vh / 2, this.vh * 0.72);
      gEdge.addColorStop(0, 'rgba(77,159,255,0)'); gEdge.addColorStop(1, `rgba(77,159,255,${a})`);
      ctx.fillStyle = gEdge; ctx.fillRect(0, 0, this.vw, this.vh);
    }

    // caps pickup celebration: golden burst + big +N
    if (now < (this.capsFxUntil || 0)) {
      const t = 1 - (this.capsFxUntil - now) / 1600;
      const cx = this.vw / 2, cy = this.vh * 0.34;
      ctx.save();
      ctx.globalAlpha = 1 - t;
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 + t * 2;
        const r = 20 + t * 70;
        ctx.fillStyle = i % 2 ? '#FFD43B' : '#D4A017';
        ctx.beginPath(); ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.6, 4 - t * 2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#FFD43B'; ctx.font = `bold ${Math.round(30 - t * 8)}px system-ui`; ctx.textAlign = 'center';
      ctx.shadowColor = '#000'; ctx.shadowBlur = 6;
      ctx.fillText(`🍾 +${this.capsFxAmount}`, cx, cy - 20 - t * 26);
      ctx.restore();
    }
    // melee swing arc flash
    if (this.meleeSwingAt && now - this.meleeSwingAt < 180) {
      const t = (now - this.meleeSwingAt) / 180;
      ctx.save();
      ctx.globalAlpha = 0.7 * (1 - t);
      ctx.strokeStyle = this.human.hasClub ? '#c98a4b' : '#ffffff';
      ctx.lineWidth = 7 - t * 4;
      ctx.beginPath();
      ctx.arc(this.vw / 2, this.vh / 2, 60 + t * 80, -0.9 + t * 1.4, 0.2 + t * 1.4);
      ctx.stroke();
      ctx.restore();
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
    // club in hand: wooden bat sticking up from the fist, swings on F
    if (h.hasClub) {
      const swingAge = this.meleeSwingAt ? (now - this.meleeSwingAt) / 280 : 99;
      const swingRot = swingAge < 1 ? -1.1 + swingAge * 1.3 : -0.35;
      ctx.save();
      ctx.translate(hx - 4, hy - 8);
      ctx.rotate(swingRot);
      const grad = ctx.createLinearGradient(0, 0, 0, -95);
      grad.addColorStop(0, '#7a5230'); grad.addColorStop(1, '#a97c4f');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(-5, 0); ctx.lineTo(5, 0); ctx.lineTo(9, -78); ctx.lineTo(-9, -78);
      ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.ellipse(0, -80, 9.5, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#5f3f24'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-4, -20); ctx.lineTo(4, -22); ctx.stroke();
      ctx.restore();
    }
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
    if (this.touchBar) this.touchBar.className = 'sr-touchbar' + (this.sceneName === 'play' && !this.ghost ? ' on' : '');
    if (this.sceneName !== 'play' && this.sceneName !== 'drop') { this.hud.style.display = 'none'; return; }
    this.hud.style.display = 'block';
    const g = this.game, h = this.human;
    if (!g || !h) return; // online: waiting for 'you' assignment
    const surv = this.online ? (this._lastSurvivors || g.players.length) : E.aliveCount(g);
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
    br.appendChild(el('div', 'sr-tac', `Q 설벽 ${h.walls}/${C.wall.maxPerPlayer} · G 미끼 ${h.decoys}/${C.decoy.maxPerPlayer} · F ${h.hasClub ? '🏏 몽둥이' : '👊 주먹'}`));
    br.appendChild(el('div', 'sr-caps', `🍾 ${h.caps || 0}`));
    if (h.item) {
      const def = C.shop[h.item.id];
      const label = h.item.id === 'jetpack'
        ? `${def.emoji} 연료 ${Math.ceil(h.jetFuel)}s (점프키)`
        : `${def.emoji} ${def.name}${h.item.id === 'hardtack' ? ` ${h.item.usesLeft}회` : ''} — X키`;
      br.appendChild(el('div', 'sr-item-slot', label));
    }
    if (E.chargeActive(g, h)) br.appendChild(el('div', 'sr-buff sr-buff-mg', `⚗️ 돌격 무적 ${Math.ceil(h.chargeUntil - g.t)}초`));
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
