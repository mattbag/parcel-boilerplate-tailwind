var tailwindcss = require('tailwindcss')
var purgecss = require('@fullhuman/postcss-purgecss');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./src/**/*.pug'],
    }),
    autoprefixer
  ]
}
