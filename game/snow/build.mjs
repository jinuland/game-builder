// Single-file build for Snow Royale: bundles ES modules + CSS + base64 assets
// into one self-contained HTML (no external requests). Output: dist/snow-royale.html
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, 'src');
const ASSETS = join(here, 'assets');

const order = ['rng.js', 'config.js', 'audio.js', 'engine.js', 'app.js'];

function stripModule(code) {
  return code
    .replace(/^import[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '')
    .replace(/^import\s+['"][^'"]+['"];?\s*$/gm, '')
    .replace(/^export\s+(default\s+)?(async\s+)?(function|class|const|let|var)\s/gm, '$2$3 ')
    .replace(/^export\s*\{[^}]*\};?\s*$/gm, '');
}

let bundle = '/* Snow Royale — single-file build (all modules, one IIFE scope). */\n(function(){\n"use strict";\n';
for (const f of order) {
  bundle += `\n/* ===== ${f} ===== */\n` + stripModule(readFileSync(join(SRC, f), 'utf8')) + '\n';
}

// inline assets
const assetMap = {};
for (const file of readdirSync(ASSETS)) {
  if (!file.endsWith('.webp')) continue;
  assetMap[file] = `data:image/webp;base64,${readFileSync(join(ASSETS, file)).toString('base64')}`;
}
bundle += `\nvar __SNOW_ASSETS = ${JSON.stringify(assetMap)};\n`;

// main + asset loader patch
bundle += `
/* ===== main ===== */
var params = new URLSearchParams(location.search);
var seed = params.has('seed') ? parseInt(params.get('seed'),10) : null;
var app = new SnowApp(document.getElementById('game'), { seed: seed, autoStart: false });
window.__SR = app;
app._loadAssets = function(){
  var CHAR = { jack:'char_jack.webp', white:'char_white.webp', bear:'char_bear.webp', bot:'char_bot.webp' };
  var BG = { plains:'bg_plains.webp', village:'bg_village.webp', lake:'bg_lake.webp', lobby:'bg_lobby.webp' };
  var self = this; var jobs = [];
  function load(key, file){ return new Promise(function(res){ var img=new Image(); img.onload=function(){self.images[key]=img;res();}; img.onerror=function(){self.images[key]=null;res();}; img.src=__SNOW_ASSETS[file]||''; }); }
  for (var k in CHAR) jobs.push(load(k, CHAR[k]));
  for (var b in BG) jobs.push(load('bg_'+b, BG[b]));
  return Promise.all(jobs).then(function(){ self.assetsLoaded = true; });
};
app._loadAssets().then(function(){ app._showTitle(); });
})();
`;

const css = readFileSync(join(SRC, 'style.css'), 'utf8');
const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>스노우 로얄 (Snow Royale)</title><style>\n${css}\n</style></head>
<body><div id="game"></div><script>\n${bundle}\n</script></body></html>`;

mkdirSync(join(here, 'dist'), { recursive: true });
const out = join(here, 'dist', 'snow-royale.html');
writeFileSync(out, html);
console.log(`built ${out} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
