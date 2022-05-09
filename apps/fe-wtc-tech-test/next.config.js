const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  // Set this to true if you use CSS modules.
  // See: https://github.com/css-modules/css-modules
  cssModules: false,
  env: {
    NEXT_PUBLIC_API_END_PATH: process.env.NEXT_PUBLIC_API_END_PATH,
  },
});
