const postcssPresetEnv = require('postcss-preset-env')
const postcssNesting = require('postcss-nesting')
const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const tailwindcssNesting = require('tailwindcss/nesting')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    postcssNesting,
    postcssImport,
    tailwindcssNesting,
    postcssPresetEnv,
    tailwindcss,
    autoprefixer,
  ],
}