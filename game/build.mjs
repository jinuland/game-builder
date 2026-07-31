// Single-file build: bundles ES modules + CSS + base64 assets into one HTML.
// No external deps — resolves the local import graph manually (flat src/).
// Output: dist/architect-zero.html
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, 'src');
const ASSETS = join(here, 'assets');

// module load order (dependency-first) — validate.js excluded from prod build.
const order = ['rng.js', 'content.js', 'audio.js', 'engine.js', 'render.js', 'app.js'];

// Concatenate modules, stripping import/export so they share one scope.
function stripModule(code) {
  return code
    // remove import lines (single and multi-line)
    .replace(/^import[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '')
    .replace(/^import\s+['"][^'"]+['"];?\s*$/gm, '')
    // convert `export function` / `export class` / `export const` -> plain
    .replace(/^export\s+(function|class|const|let|var)\s/gm, '$1 ')
    // remove standalone `export { ... };`
    .replace(/^export\s*\{[^}]*\};?\s*$/gm, '');
}

let bundle = '/* Architect Zero — single-file build. All modules in one IIFE scope. */\n';
bundle += '(function(){\n"use strict";\n';
for (const f of order) {
  const code = readFileSync(join(SRC, f), 'utf8');
  bundle += `\n/* ===== ${f} ===== */\n` + stripModule(code) + '\n';
}

// Inline assets as base64 data URLs; app.js references ASSET_BASE + file.
// We override the loader by injecting a global map and patching Image src resolution.
const assetMap = {};
for (const file of readdirSync(ASSETS)) {
  const b = readFileSync(join(ASSETS, file));
  const mime = file.endsWith('.webp') ? 'image/webp' : 'application/octet-stream';
  assetMap[file] = `data:${mime};base64,${b.toString('base64')}`;
}
bundle += `\nvar __AZ_ASSETS = ${JSON.stringify(assetMap)};\n`;

// main (inlined, no dynamic import of validate in prod)
bundle += `
/* ===== main ===== */
var params = new URLSearchParams(location.search);
var seed = parseInt(params.get('seed') || '42', 10);
var app = new GameApp(document.getElementById('game'), { seed: seed });
window.__AZ = app;
// patch asset loading to use inlined data URLs
var _origLoad = app.loadAssets.bind(app);
app.loadAssets = function(){
  var CHAR = { archi:'char_archi.webp', kang:'char_kang.webp', yoo:'char_yoo.webp', incbot:'char_incbot.webp' };
  var BGS = ['bg_serverroom','bg_crisis','bg_roadmap','bg_audit'];
  var jobs = [];
  var self = this;
  function load(key, file){ return new Promise(function(res){ var img=new Image(); img.onload=function(){self.images[key]=img;res(true);}; img.onerror=function(){self.images[key]=null;res(false);}; img.src = __AZ_ASSETS[file] || ''; }); }
  for (var k in CHAR) jobs.push(load(k, CHAR[k]));
  BGS.forEach(function(b){ jobs.push(load(b, b+'.webp')); });
  return Promise.all(jobs);
};
app.loadAssets().then(function(){ app._showTitle(); window.__AZ_READY = true; });
`;
bundle += '\n})();\n';

const css = readFileSync(join(SRC, 'style.css'), 'utf8');

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>아키텍트 제로: 설계자의 계단</title>
<style>
${css}
</style>
</head>
<body>
<div id="game"></div>
<script>
${bundle}
</script>
</body>
</html>`;

mkdirSync(join(here, 'dist'), { recursive: true });
const out = join(here, 'dist', 'architect-zero.html');
writeFileSync(out, html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`built ${out} (${kb} KB)`);
