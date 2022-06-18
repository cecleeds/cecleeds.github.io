// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }]
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './_layouts/**/*.html', './pages/**/*.md', './pages/**/*.html', './pages/*.md', './pages/*.html', './*.html'
    '**/*.js'
  ],
  css: ['city.css'],
  defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};
