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
  content: ['./_layouts/*.html', './_includes/**/*.svg', './pages/**/*.md', './pages/*.md', '**/*.js'],
  css: ['city.css'],
  defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
  safelist: {
    standard: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track'],
    greedy: [/^bg-/]
  }
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};
