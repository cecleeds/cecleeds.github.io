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
const themeDir = './woodcock3/city-jekyll/../../';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    themeDir + '_layouts/**/*.html',
    themeDir + '_includes/**/*.html',
    themeDir + '_includes/**/*.svg',
    // Specify path to own javascript
    themeDir + 'assets/js/*.js',
    './**/**/*.html',
    './**/**/*.svg',
    './**/**/*.md',
    './**/**/*.jS',
    './_includes/**/*.html',
    './_includes/**/*.svg', 
    './_layouts/**/*.html', 
    './pages/**/*.md', 
    './pages/**/*.html'
  ],
  css: ['city.css'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};
