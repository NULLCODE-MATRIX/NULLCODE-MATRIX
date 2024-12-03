export const router = {
  routes: {
    '/': () => import('./pages/home.js'),
    '/about': () => import('./pages/about.js'),
    '/gametheory': () => import('./pages/gametheory.js')
  },

  init() {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        this.navigate(href);
      }
    });
  },

  async getComponent() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/'];
    const module = await route();
    return module.default;
  },

  navigate(path) {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};