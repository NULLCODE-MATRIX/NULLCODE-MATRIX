export const router = {
  routes: {
    '/': () => import('./pages/home.js').then(module => module.default()),
    '/about': () => import('./pages/about.js').then(module => module.default()),
    '/gametheory': () => import('./pages/gametheory.js').then(module => module.default())
  },

  init() {
    // Handle initial route
    this.handleRoute();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => this.handleRoute());

    // Handle link clicks
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
        e.preventDefault();
        const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
        const href = link.getAttribute('href');
        this.navigate(href);
      }
    });
  },

  async handleRoute() {
    const path = window.location.pathname;
    const component = await this.loadComponent(path);
    const app = document.getElementById('app');
    app.innerHTML = component;
  },

  async loadComponent(path) {
    const route = this.routes[path] || this.routes['/'];
    try {
      return await route();
    } catch (error) {
      console.error('Error loading component:', error);
      // Fallback to home page on error
      if (path !== '/') {
        this.navigate('/');
        return await this.routes['/']();
      }
      return '<div>Error loading page</div>';
    }
  },

  navigate(path) {
    window.history.pushState(null, '', path);
    this.handleRoute();
  }
};