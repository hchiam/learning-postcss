# Learning PostCSS [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-postcss/blob/main/LICENSE)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

You can make CSS run fast for users, while also letting yourself write modern CSS, all without having to think about (but still shipping) things like compatibility for browser vendor prefixes and support for older browsers. PostCSS does both post-processing and pre-processing of CSS, all customizable with your choice of plugins (in postcss.config.js).

https://www.youtube.com/watch?v=WhCXiEwdU1A

https://postcss.org

https://github.com/postcss/postcss#usage

https://www.sitepoint.com/an-introduction-to-postcss

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
