// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }
  ]
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['index.html', './**/*.html', '**/*.html', '/**/*.html', './**/site.js'],
  css: ['assets/css/city.css'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track'],
  rejected: true
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ],
};
