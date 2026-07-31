// Entry point — boots GameApp, loads assets, supports URL params for
// deterministic testing (?seed=42&fast=1 for time-accelerated playthrough).
import { GameApp } from './app.js';

const params = new URLSearchParams(location.search);
const seed = parseInt(params.get('seed') || '42', 10);
const timeScale = params.get('fast') ? 10 : 1;

const root = document.getElementById('game');
const app = new GameApp(root, { seed, timeScale });
window.__AZ = app; // exposed for automated browser validation

app.loadAssets().then(async () => {
  app._showTitle(); // refresh title with loaded bg
  window.__AZ_READY = true;
  if (params.get('validate')) {
    const { runValidation } = await import('./validate.js');
    runValidation(app);
  }
  // Screenshot-state driver for browser-validation evidence.
  const screen = params.get('screen');
  if (screen) app.__driveTo(screen);
});
