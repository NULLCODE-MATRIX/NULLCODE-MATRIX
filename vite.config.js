import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    cssCodeSplit: false,
    assetsInlineLimit: 4096
  },
  // Add base URL and handle SPA routing
  base: '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Handle SPA routing by serving index.html for all routes
  appType: 'spa'
});