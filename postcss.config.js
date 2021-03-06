// many more options are available, like making this a function with dev-mode check

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-mixins"),
    require("postcss-preset-env"),
    require("postcss-coglang-stylesheets"), // just example custom PostCSS plugin
    require("autoprefixer"),
    // require("stylelint"),
    require("postcss-reporter"),
    require("cssnano"),
  ],
};
