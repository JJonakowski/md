const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        oferta: resolve(__dirname, 'oferta-medyczna.html'),
        doswiadczenie: resolve(__dirname, 'doswiadczenie-zawodowe.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
      },
    },
  },
});
