/**
 * Syntaxes
 * {@link https://github.com/postcss/postcss#syntaxes}
 *
 * Plugins
 * {@link https://github.com/postcss/postcss#plugins}
 *
 * Postcss-preset-env options
 * {@link https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env}
 *
 * Postcss-preset-env features
 * {@link https://preset-env.cssdb.org/features/}
 *
 * Additional options in autoprefixer
 * {@link https://github.com/postcss/autoprefixer#options}
 *
 * Optimising tailwindcss for production
 * {@link https://tailwindcss.com/docs/optimizing-for-production}
 */

module.exports = {
  syntax: 'postcss-syntax', //  automatically switch the required PostCSS syntax by file extension/source
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {},
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {}, // tailwindcss 사용 시 필요
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // production 환경에서 css minify 구현
  },
}
