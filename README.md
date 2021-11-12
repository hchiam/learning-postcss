# Learning PostCSS [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-postcss/blob/main/LICENSE)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

You can make CSS run fast for users, while also letting yourself write modern CSS, all without having to think about (but still shipping) things like compatibility for browser vendor prefixes and support for older browsers. PostCSS does both post-processing and pre-processing of CSS, all customizable with your choice of plugins (in postcss.config.js). The difference with things like SASS, is that PostCSS plugins let you choose which features you want, e.g. adding partials and nesting but with the choice of not having SASS loops enabled, etc.

https://www.youtube.com/watch?v=WhCXiEwdU1A

https://postcss.org

https://github.com/postcss/postcss#usage

https://www.sitepoint.com/an-introduction-to-postcss

Use the `--no-map` option for production-deployment-ready CSS.

Use the `--watch` option to auto-build upon change. (Ctrl+C or Cmd+C to stop the running CLI command.)

## From scratch

Using [`yarn`](https://github.com/hchiam/learning-yarn):

```bash
yarn --dev add postcss postcss-cli autoprefixer postcss-nested postcss-mixins postcss-preset-env cssnano
```

Or with `npm`:

```bash
npm --save-dev install postcss postcss-cli autoprefixer postcss-nested postcss-mixins postcss-preset-env cssnano
```

And then:

```bash
touch postcss.config.js input.css
postcss input.css -o output.css
```

## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-postcss.git && cd learning-postcss && yarn;
# and then
yarn build
# input.css --> output.css
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-postcss.git && cd learning-postcss && npm install;
# and then
npm run build
# input.css --> output.css
```

## Fun

You can [write your own PostCSS plugin](https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md):

For example, to let you write CSS in a language other than English, and have PostCSS transform it into runnable CSS: <https://github.com/ismamz/postcss-spanish-stylesheets>

Also: <https://github.com/postcss/postcss-plugin-boilerplate/>
