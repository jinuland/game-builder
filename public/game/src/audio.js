// Procedural audio via Web Audio API. All sound synthesized at runtime — no
// external asset files, so no licensing concerns. 3 BGM tracks (calm/tension/audit)
// via looping oscillator patterns + 9 SFX moments. Only starts after user gesture.
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.bgmGain = null;
    this.sfxGain = null;
    this.currentTrack = null;
    this.bgmNodes = [];
    this.bgmTimer = null;
    this.enabled = true;
    this.started = false;
    this.muted = false;
  }

  // Must be called from a user gesture (click) to satisfy autoplay policy.
  init() {
    if (this.started) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { this.enabled = false; return; }
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.6;
    this.master.connect(this.ctx.destination);
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.value = 0.35;
    this.bgmGain.connect(this.master);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.7;
    this.sfxGain.connect(this.master);
    this.started = true;
  }

  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.6;
  }

  // ---- SFX -----------------------------------------------------------------
  _blip(freq, dur, type = 'sine', vol = 0.5, glide = 0) {
    if (!this.started || this.muted) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + glide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.sfxGain);
    o.start(t); o.stop(t + dur + 0.02);
  }

  _chord(freqs, dur, type = 'triangle', vol = 0.35) {
    freqs.forEach((f, i) => setTimeout(() => this._blip(f, dur, type, vol), i * 60));
  }

  _noise(dur, vol = 0.4) {
    if (!this.started || this.muted) return;
    const t = this.ctx.currentTime;
    const bufSize = this.ctx.sampleRate * dur;
    const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const g = this.ctx.createGain();
    g.gain.value = vol;
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'highpass'; filt.frequency.value = 800;
    src.connect(filt); filt.connect(g); g.connect(this.sfxGain);
    src.start(t);
  }

  place() { this._blip(880, 0.12, 'sine', 0.4, 220); }                 // crisp click
  cardAdd() { this._blip(500, 0.18, 'sawtooth', 0.3, 400); }           // whoosh up
  synergyCombo() { this._chord([523, 659, 784, 1046], 0.35, 'triangle', 0.3); } // rising chord
  debtWarn() { this._blip(110, 0.4, 'square', 0.35, -30); }            // low buzzer
  incident() { this._noise(0.3, 0.5); this._blip(180, 0.3, 'square', 0.3, -80); } // glitch
  recover() { this._blip(300, 0.25, 'sine', 0.35, 300); this._chord([440, 660], 0.3, 'sine', 0.25); } // reboot
  roadmap(tone) { this._blip([392, 523, 659][tone] || 440, 0.5, 'triangle', 0.3); } // path preview
  fanfare() { this._chord([523, 659, 784, 1046, 1318], 0.5, 'triangle', 0.35); }    // S grade
  crash() { this._blip(200, 0.6, 'sawtooth', 0.4, -180); this._noise(0.5, 0.5); }   // power-down

  // ---- BGM -----------------------------------------------------------------
  // Simple looped arpeggio patterns; track determines scale + tempo.
  playTrack(name) {
    if (!this.started || this.currentTrack === name) return;
    this.currentTrack = name;
    this._stopBgm(0.8);
    const scales = {
      calm: { notes: [220, 277, 330, 415, 330, 277], bpm: 92, type: 'triangle' },
      tension: { notes: [196, 233, 196, 155, 233, 277], bpm: 132, type: 'sawtooth' },
      audit: { notes: [262, 330, 392, 523, 392, 330], bpm: 108, type: 'triangle' },
    };
    const cfg = scales[name] || scales.calm;
    const interval = 60000 / cfg.bpm / 2;
    let i = 0;
    const step = () => {
      if (this.currentTrack !== name || this.muted) return;
      const f = cfg.notes[i % cfg.notes.length];
      this._bgmNote(f, interval / 1000 * 1.4, cfg.type);
      if (i % cfg.notes.length === 0) this._bgmNote(f / 2, interval / 1000 * 2.5, 'sine', 0.12); // bass
      i++;
    };
    step();
    this.bgmTimer = setInterval(step, interval);
  }

  _bgmNote(freq, dur, type, vol = 0.18) {
    if (!this.started) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.bgmGain);
    o.start(t); o.stop(t + dur + 0.05);
  }

  _stopBgm() {
    if (this.bgmTimer) { clearInterval(this.bgmTimer); this.bgmTimer = null; }
  }

  stopAll() { this._stopBgm(); this.currentTrack = null; }
}
