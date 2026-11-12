import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import portfolio from './src/data/index.js';

export default defineConfig({
  base: '/Portafolio-WEB/',
  plugins: [
    handlebars({
      partialDirectory: 'src/components',
      context: () => portfolio,
    }),
  ],
  build: {
    cssMinify: 'lightningcss',
    minify: 'oxc',
    sourcemap: false,
  },
});
