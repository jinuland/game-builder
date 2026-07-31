// Entry for AWS Specialist Saga (story mode).
import { StoryApp } from './story-app.js';

const params = new URLSearchParams(location.search);
const seed = parseInt(params.get('seed') || '42', 10);
const screen = params.get('screen');
const app = new StoryApp(document.getElementById('app'), { seed, autoStart: !screen });
window.__ST = app;

if (screen) app.__drive(screen);
