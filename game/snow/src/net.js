// Snow Royale network client — thin WebSocket wrapper for the room server.
// Identity is a cookie-based uid (no login): stable across sessions.
export function getUid() {
  const m = document.cookie.match(/(?:^|;\s*)snow_uid=([^;]+)/);
  if (m) return m[1];
  const uid = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2)) .slice(0, 36);
  document.cookie = `snow_uid=${uid}; max-age=${3600 * 24 * 365}; path=/; SameSite=Lax`;
  return uid;
}

export function getNickname() {
  try { return localStorage.getItem('snow_nick') || ''; } catch { return ''; }
}
export function setNickname(n) {
  try { localStorage.setItem('snow_nick', n.slice(0, 12)); } catch { /* ignore */ }
}

export function wsUrl() {
  // same-origin /ws behind CloudFront; localhost dev talks to :8901 directly
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return 'ws://localhost:8901/ws';
  return `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;
}

export class NetClient {
  constructor() {
    this.ws = null;
    this.uid = getUid();
    this.handlers = new Map(); // msg type -> fn
    this.connected = false;
  }
  on(type, fn) { this.handlers.set(type, fn); return this; }
  connect() {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(wsUrl());
      this.ws = ws;
      const to = setTimeout(() => { try { ws.close(); } catch { /* */ } reject(new Error('서버 연결 시간 초과')); }, 6000);
      ws.onopen = () => { clearTimeout(to); this.connected = true; resolve(); };
      ws.onerror = () => { clearTimeout(to); if (!this.connected) reject(new Error('서버에 연결할 수 없습니다')); };
      ws.onclose = () => { this.connected = false; const h = this.handlers.get('_close'); if (h) h(); };
      ws.onmessage = (ev) => {
        let m; try { m = JSON.parse(ev.data); } catch { return; }
        const h = this.handlers.get(m.type);
        if (h) h(m);
      };
    });
  }
  send(msg) {
    if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify({ uid: this.uid, ...msg }));
  }
  close() { try { this.ws && this.ws.close(); } catch { /* */ } }
}
