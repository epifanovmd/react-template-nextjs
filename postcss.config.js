const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ["cover 99.5%"],
    }),
  ],
};