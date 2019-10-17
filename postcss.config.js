const autoprefixer = require('autoprefixer');
const browserList = require('./package');

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: browserList.browserslist
    }),
  ],
};
