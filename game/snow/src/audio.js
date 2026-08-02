// Procedural Web Audio for Snow Royale. All sound synthesized at runtime (no
// external files). Ambient BGM loop that speeds up as survivors drop, craft-time
// heartbeat with BGM ducking, and SFX moments. Starts only after a user gesture.
export class AudioEngine {
  constructor() {
    this.ctx = null; this.master = null; this.bgm = null; this.sfx = null;
    this.started = false; this.muted = false; this.bpm = 92; this.timer = null; this.step = 0;
    this.ducked = false;
  }
  init() {
    if (this.started) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.gain.value = 0.5; this.master.connect(this.ctx.destination);
    this.bgm = this.ctx.createGain(); this.bgm.gain.value = 0.28; this.bgm.connect(this.master);
    this.sfx = this.ctx.createGain(); this.sfx.gain.value = 0.7; this.sfx.connect(this.master);
    this.started = true;
    this._startBgm();
  }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); }
  // browsers suspend the context on tab switch / pointer-lock transitions;
  // check before every sound so audio recovers by itself
  _ok() {
    if (!this.started || this.muted) return false;
    if (this.ctx.state === 'suspended') { this.resume(); return this.ctx.state === 'running'; }
    return true;
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.5; }

  _tone(freq, dur, type = 'sine', vol = 0.4, glide = 0, dest = this.sfx) {
    if (!this._ok()) return;
    const t = this.ctx.currentTime; const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + glide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || this.sfx); o.start(t); o.stop(t + dur + 0.02);
  }
  _noise(dur, vol = 0.4, hp = 800) {
    if (!this._ok()) return;
    const t = this.ctx.currentTime; const n = this.ctx.sampleRate * dur;
    const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate); const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = this.ctx.createBufferSource(); src.buffer = buf;
    const g = this.ctx.createGain(); g.gain.value = vol;
    const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    src.connect(f); f.connect(g); g.connect(this.sfx); src.start(t);
  }

  // SFX moments (spec soundMoments)
  landing() { this._noise(0.2, 0.5, 300); this._tone(120, 0.15, 'sine', 0.3); }
  craftStart() { this._duck(true); }
  craftTick() { this._tone(70, 0.12, 'sine', 0.5); } // heartbeat
  craftDone() { this._duck(false); this._tone(880, 0.1, 'sine', 0.4, 200); }
  craftCancel() { this._duck(false); this._tone(200, 0.2, 'sawtooth', 0.3, -120); }
  throw() { this._noise(0.12, 0.25, 1200); }
  hit() { this._noise(0.15, 0.5, 500); this._tone(90, 0.12, 'square', 0.3, -30); }
  wall() { this._tone(140, 0.18, 'square', 0.35); this._tone(1200, 0.12, 'sine', 0.2); }
  decoy() { this._tone(500, 0.12, 'triangle', 0.3, 200); }
  zoneWarn() { this._tone(70, 0.5, 'sawtooth', 0.35, 20); }
  fanfare() { [523, 659, 784, 1046, 1318].forEach((f, i) => setTimeout(() => this._tone(f, 0.5, 'triangle', 0.35), i * 120)); }
  gameover() { this._tone(180, 0.6, 'sawtooth', 0.4, -120); this._noise(0.4, 0.4); }

  _duck(on) {
    if (!this.started) return;
    this.ducked = on;
    const t = this.ctx.currentTime;
    this.bgm.gain.cancelScheduledValues(t);
    this.bgm.gain.linearRampToValueAtTime(on ? 0.05 : 0.28, t + 0.15);
  }

  // BGM: looping arpeggio, tempo scales with setIntensity()
  _startBgm() {
    const notes = [220, 277, 330, 262, 330, 294];
    const tick = () => {
      if (!this.started) return;
      if (!this.muted && !this.ducked) {
        const f = notes[this.step % notes.length];
        this._tone(f, 0.28, 'triangle', 0.14, 0, this.bgm);
        if (this.step % notes.length === 0) this._tone(f / 2, 0.5, 'sine', 0.1, 0, this.bgm);
      }
      this.step++;
      this.timer = setTimeout(tick, 60000 / this.bpm / 2);
    };
    tick();
  }
  // survivors 20 -> bpm 92, survivors 5 -> ~132 (spec: +1.4x by 5 alive)
  setIntensity(survivors, total = 20) {
    const frac = 1 - Math.max(0, (survivors - 1)) / (total - 1);
    this.bpm = 92 + frac * 55;
  }
  stopAll() { if (this.timer) clearTimeout(this.timer); this.timer = null; this.started && (this.step = 0); }
}
