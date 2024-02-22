module.exports = {
  // syntax: 'postcss-scss',
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
  },
}
