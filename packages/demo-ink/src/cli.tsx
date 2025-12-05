#!/usr/bin/env node
import { render } from 'ink';
import App from './App.js';

// Enable fullscreen mode with patchConsole to prevent console.log interference
render(<App />, {
    exitOnCtrlC: false, // We handle exit with 'q' key
    patchConsole: true,  // Prevent console.log from breaking the UI
});
