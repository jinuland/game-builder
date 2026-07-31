// Canvas renderer for the architecture grid, modules, connections, and effects.
// Pure drawing — reads game state, never mutates it. Uses requestAnimationFrame
// driven by GameApp. Palette-consistent with content.PALETTE.
import { PALETTE, MODULES, LAYERS } from './content.js';
import { idx, inBounds, cellLayer, neighborsOf } from './engine.js';

export class GridRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.effects = [];        // transient particle/pulse effects
    this.shake = 0;           // camera shake amount (px)
    this.bgImage = null;      // current background <img>
    this.hover = null;        // {cells, ok} preview
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
  }

  setBackground(img) { this.bgImage = img; }

  // Compute cell geometry to fit canvas with padding.
  geom(g) {
    const W = this.canvas.width / this.dpr;
    const H = this.canvas.height / this.dpr;
    const pad = 24;
    const cell = Math.floor(Math.min((W - pad * 2) / g.grid.cols, (H - pad * 2) / g.grid.rows));
    const gw = cell * g.grid.cols;
    const gh = cell * g.grid.rows;
    const ox = Math.floor((W - gw) / 2);
    const oy = Math.floor((H - gh) / 2);
    return { cell, ox, oy, gw, gh, W, H };
  }

  cellAt(g, px, py) {
    const { cell, ox, oy } = this.geom(g);
    const c = Math.floor((px - ox) / cell);
    const r = Math.floor((py - oy) / cell);
    if (c < 0 || r < 0 || c >= g.grid.cols || r >= g.grid.rows) return null;
    return { c, r };
  }

  addEffect(e) { this.effects.push({ ...e, t0: performance.now() }); }
  triggerShake(px = 4, ms = 300) { this.shake = px; this._shakeUntil = performance.now() + ms; }

  // Debt-driven background temperature tint (blue->yellow->orange->red).
  debtTint(debt) {
    if (debt <= 30) return 'rgba(0,120,200,0.12)';
    if (debt <= 55) return 'rgba(230,200,0,0.12)';
    if (debt <= 75) return 'rgba(255,140,0,0.16)';
    return 'rgba(204,34,0,0.22)';
  }

  draw(g, now) {
    const ctx = this.ctx;
    const { cell, ox, oy, gw, gh, W, H } = this.geom(g);

    // camera shake
    let sx = 0, sy = 0;
    if (this.shake > 0 && now < this._shakeUntil) {
      sx = (Math.random() * 2 - 1) * this.shake;
      sy = (Math.random() * 2 - 1) * this.shake;
    } else this.shake = 0;

    ctx.save();
    ctx.clearRect(0, 0, W, H);
    ctx.translate(sx, sy);

    // background image or navy fill
    if (this.bgImage && this.bgImage.complete) {
      ctx.globalAlpha = 0.55;
      ctx.drawImage(this.bgImage, 0, 0, W, H);
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(13,27,42,0.45)';
      ctx.fillRect(0, 0, W, H);
    } else {
      ctx.fillStyle = PALETTE.midnight;
      ctx.fillRect(0, 0, W, H);
    }

    // debt temperature overlay
    ctx.fillStyle = this.debtTint(g.techDebt);
    ctx.fillRect(0, 0, W, H);

    // layer bands (edge/compute/data) subtle labels
    const band = g.grid.cols / 3;
    const bandNames = ['엣지', '컴퓨트', '데이터'];
    for (let b = 0; b < 3; b++) {
      const bx = ox + Math.floor(band * b) * cell;
      const bw = Math.ceil(band) * cell;
      ctx.fillStyle = b % 2 === 0 ? 'rgba(74,85,104,0.10)' : 'rgba(74,85,104,0.04)';
      ctx.fillRect(bx, oy, bw, gh);
      ctx.fillStyle = 'rgba(245,240,232,0.35)';
      ctx.font = '11px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(bandNames[b], bx + 4, oy - 6);
    }

    // grid lines
    ctx.strokeStyle = g.techDebt > 75 ? 'rgba(204,34,0,0.6)' : 'rgba(0,229,255,0.25)';
    ctx.lineWidth = 1;
    for (let c = 0; c <= g.grid.cols; c++) {
      ctx.beginPath(); ctx.moveTo(ox + c * cell, oy); ctx.lineTo(ox + c * cell, oy + gh); ctx.stroke();
    }
    for (let r = 0; r <= g.grid.rows; r++) {
      ctx.beginPath(); ctx.moveTo(ox, oy + r * cell); ctx.lineTo(ox + gw, oy + r * cell); ctx.stroke();
    }

    // connection lines between adjacent compatible placements
    ctx.lineWidth = 3;
    const drawn = new Set();
    for (const p of g.placements) {
      if (p.down) continue;
      const pc = this._center(p, cell, ox, oy);
      for (const n of neighborsOf(g, p)) {
        if (!n || n.down) continue;
        const key = [p.id, n.id].sort((a, b) => a - b).join('-');
        if (drawn.has(key)) continue;
        drawn.add(key);
        const nc = this._center(n, cell, ox, oy);
        const dist = Math.abs(LAYERS.indexOf(p.layer) - LAYERS.indexOf(n.layer));
        ctx.strokeStyle = dist > 1 ? PALETTE.errorRed : (MODULES[p.moduleId].family === MODULES[n.moduleId].family ? PALETTE.synergyGold : PALETTE.cyan);
        ctx.beginPath(); ctx.moveTo(pc.x, pc.y); ctx.lineTo(nc.x, nc.y); ctx.stroke();
      }
    }

    // hover preview
    if (this.hover) {
      for (const [c, r] of this.hover.cells) {
        if (!inBounds(g, c, r)) continue;
        const x = ox + c * cell, y = oy + r * cell;
        ctx.fillStyle = this.hover.ok ? 'rgba(51,255,170,0.35)' : 'rgba(204,34,0,0.30)';
        ctx.fillRect(x + 2, y + 2, cell - 4, cell - 4);
        if (!this.hover.ok) {
          ctx.strokeStyle = PALETTE.errorRed; ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(x + 8, y + 8); ctx.lineTo(x + cell - 8, y + cell - 8);
          ctx.moveTo(x + cell - 8, y + 8); ctx.lineTo(x + 8, y + cell - 8);
          ctx.stroke();
        }
      }
    }

    // placed modules
    for (const p of g.placements) this._drawModule(ctx, g, p, cell, ox, oy, now);

    // effects
    this._drawEffects(ctx, cell, ox, oy, now);

    ctx.restore();
  }

  _center(p, cell, ox, oy) {
    const xs = p.cells.map(([c]) => c), ys = p.cells.map(([, r]) => r);
    const cx = (Math.min(...xs) + Math.max(...xs) + 1) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys) + 1) / 2;
    return { x: ox + cx * cell, y: oy + cy * cell };
  }

  _drawModule(ctx, g, p, cell, ox, oy, now) {
    const mod = MODULES[p.moduleId];
    const xs = p.cells.map(([c]) => c), ys = p.cells.map(([, r]) => r);
    const minC = Math.min(...xs), minR = Math.min(...ys);
    const maxC = Math.max(...xs), maxR = Math.max(...ys);
    const x = ox + minC * cell, y = oy + minR * cell;
    const w = (maxC - minC + 1) * cell, h = (maxR - minR + 1) * cell;

    ctx.save();
    // body
    const grad = ctx.createLinearGradient(x, y, x, y + h);
    if (p.down) {
      grad.addColorStop(0, '#5a1a10'); grad.addColorStop(1, '#2a0a06');
    } else {
      grad.addColorStop(0, mod.color); grad.addColorStop(1, this._darken(mod.color, 0.5));
    }
    ctx.fillStyle = grad;
    this._roundRect(ctx, x + 3, y + 3, w - 6, h - 6, 6);
    ctx.fill();

    // outline (2px design system)
    ctx.strokeStyle = p.down ? PALETTE.errorRed : PALETTE.warmWhite;
    ctx.lineWidth = 2;
    this._roundRect(ctx, x + 3, y + 3, w - 6, h - 6, 6);
    ctx.stroke();

    // cel-shading highlight (upper-left)
    if (!p.down) {
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      this._roundRect(ctx, x + 5, y + 5, w - 10, (h - 10) * 0.4, 4);
      ctx.fill();
    }

    // glyph + label
    ctx.fillStyle = p.down ? '#ff8877' : PALETTE.warmWhite;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${Math.floor(cell * 0.42)}px system-ui, sans-serif`;
    ctx.fillText(mod.glyph, x + w / 2, y + h / 2 - (cell * 0.08));
    ctx.font = `bold ${Math.floor(cell * 0.16)}px system-ui, sans-serif`;
    ctx.fillText(mod.short, x + w / 2, y + h - cell * 0.22);

    // down state: pulsing red X
    if (p.down) {
      const pulse = 0.5 + 0.5 * Math.sin(now / 200);
      ctx.strokeStyle = `rgba(255,50,0,${0.5 + pulse * 0.5})`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x + 10, y + 10); ctx.lineTo(x + w - 10, y + h - 10);
      ctx.moveTo(x + w - 10, y + 10); ctx.lineTo(x + 10, y + h - 10);
      ctx.stroke();
    }
    ctx.restore();
  }

  _drawEffects(ctx, cell, ox, oy, now) {
    this.effects = this.effects.filter((e) => {
      const age = now - e.t0;
      const dur = e.dur || 500;
      if (age > dur) return false;
      const p = age / dur;
      const x = ox + (e.c + 0.5) * cell, y = oy + (e.r + 0.5) * cell;
      ctx.save();
      if (e.type === 'ripple') {
        ctx.strokeStyle = `rgba(0,229,255,${1 - p})`;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(x, y, p * cell * 1.4, 0, Math.PI * 2); ctx.stroke();
      } else if (e.type === 'pulse') {
        ctx.fillStyle = `rgba(255,170,0,${(1 - p) * 0.6})`;
        ctx.beginPath(); ctx.arc(x, y, (0.5 + p * 0.6) * cell, 0, Math.PI * 2); ctx.fill();
      } else if (e.type === 'crack') {
        ctx.strokeStyle = `rgba(204,34,0,${1 - p})`;
        ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2 + p;
          ctx.beginPath(); ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(a) * cell * 0.5 * p, y + Math.sin(a) * cell * 0.5 * p); ctx.stroke();
        }
      } else if (e.type === 'flash') {
        ctx.fillStyle = `rgba(51,255,170,${(1 - p) * 0.7})`;
        ctx.fillRect(x - cell / 2, y - cell / 2, cell, cell);
      } else if (e.type === 'sparkle') {
        // rising gold particle (S-grade)
        const ry = y - p * cell * 3;
        ctx.fillStyle = `rgba(255,170,0,${1 - p})`;
        ctx.beginPath(); ctx.arc(x + (e.dx || 0), ry, 3 * (1 - p) + 1, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
      return true;
    });
  }

  _roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  _darken(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.floor(((n >> 16) & 255) * f);
    const g = Math.floor(((n >> 8) & 255) * f);
    const b = Math.floor((n & 255) * f);
    return `rgb(${r},${g},${b})`;
  }
}
