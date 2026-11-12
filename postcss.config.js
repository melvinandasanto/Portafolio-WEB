import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';

export default {
  plugins: [
    purgeCSSPlugin({
      content: ['./index.html', './src/**/*.js', './src/**/*.hbs'],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
    cssnano({ preset: 'default' }),
  ],
};
