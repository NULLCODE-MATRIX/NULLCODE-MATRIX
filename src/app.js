import { router } from './router.js';

export async function renderApp() {
  const app = document.getElementById('app');
  const path = window.location.pathname;
  const component = await router.loadComponent(path);
  app.innerHTML = component;
}