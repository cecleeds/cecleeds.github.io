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
  content: ['../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/_includes/**/*.html', '**/*.js', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/_includes/**/*.svg', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/_layouts/**/*.html', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/pages/**/*.md', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/pages/**/*.html', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/pages/*.md', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/pages/*.html', '../../../../../tmp/jekyll-remote-theme-20220406-1732-1t6t1kk/*.html'],
  css: ['city.css'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};
