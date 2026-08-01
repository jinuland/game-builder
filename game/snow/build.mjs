// Build Snow Royale 3D: esbuild-bundle src/main.js (three.js included, MIT) to
// bundle.js, then emit a single-file dist/snow-royale.html with inlined JS+CSS.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..', '..');

// 1) bundle (iife, minified) — serves as ./bundle.js for the multi-file page too
execFileSync(join(repo, 'node_modules', '.bin', 'esbuild'), [
  join(here, 'src', 'main.js'),
  '--bundle', '--minify', '--format=iife',
  `--outfile=${join(here, 'bundle.js')}`,
], { stdio: 'inherit' });

// 2) single-file html
const js = readFileSync(join(here, 'bundle.js'), 'utf8');
const css = readFileSync(join(here, 'src', 'style.css'), 'utf8');
const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>스노우 로얄 (Snow Royale)</title><style>\n${css}\n</style></head>
<body><div id="game"></div><script>\n${js}\n</script></body></html>`;

mkdirSync(join(here, 'dist'), { recursive: true });
writeFileSync(join(here, 'dist', 'snow-royale.html'), html);
console.log(`built bundle.js (${(Buffer.byteLength(js) / 1024).toFixed(0)} KB) + dist/snow-royale.html (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
