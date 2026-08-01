// Entry for Snow Royale 3D. Supports ?seed=42&screen=play for headless validation.
import { SnowApp } from './app3d.js';

const params = new URLSearchParams(location.search);
const seed = params.has('seed') ? parseInt(params.get('seed'), 10) : null;
const timeScale = params.get('fast') ? parseFloat(params.get('fast')) : 1;
const screen = params.get('screen');

const app = new SnowApp(document.getElementById('game'), { seed, timeScale, autoStart: !screen });
window.__SR = app;

if (screen) app.__drive(screen);
