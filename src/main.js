import { router } from './router.js';
import { renderApp } from './app.js';

// Initialize the router
router.init();

// Initial render
renderApp();

// Handle navigation events
window.addEventListener('popstate', renderApp);