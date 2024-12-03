import { router } from './router.js';

export async function renderApp() {
  const app = document.getElementById('app');
  const component = await router.getComponent();
  app.innerHTML = component();
}