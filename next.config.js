const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withTypescript(withSass(
  {
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]",
    },
  },
  {
    postcssLoaderOptions: {
      parser: true,
      autoprefixer: true
    }
  }
)));
