module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    development: {
      plugins: [
        [
          'styled-components',
          {
            ssr: false,
            minify: false,
            displayName: true
          }
        ]
      ]
    },
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        [
          'styled-components',
          {
            ssr: false,
            minify: true,
            displayName: false
          }
        ]
      ]
    }
  }
};
