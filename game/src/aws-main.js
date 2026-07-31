// Entry for the AWS Architect Trainer quiz mode.
import { AwsQuizApp } from './aws-app.js';

const params = new URLSearchParams(location.search);
const seed = parseInt(params.get('seed') || '42', 10);
const app = new AwsQuizApp(document.getElementById('app'), { seed });
window.__AQ = app;

// screenshot/validation driver
const screen = params.get('screen');
if (screen) app.__drive?.(screen);
