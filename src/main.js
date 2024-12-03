import './index.css';
import { router } from './router.js';
import { renderApp } from './app.js';

// Initialize the router
router.init();

// Initial render
renderApp();