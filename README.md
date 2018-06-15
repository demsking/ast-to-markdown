# AST to Markdown

Transforms an Unist AST to a Markdown text

[![npm](https://img.shields.io/npm/v/ast-to-markdown.svg)](https://www.npmjs.com/package/ast-to-markdown) [![Build status](https://gitlab.com/demsking/ast-to-markdown/badges/master/build.svg)](https://gitlab.com/demsking/ast-to-markdown/pipelines) [![Test coverage](https://gitlab.com/demsking/ast-to-markdown/badges/master/coverage.svg)](https://gitlab.com/demsking/ast-to-markdown/-/jobs)

## Install

```sh
npm install --save ast-to-markdown
```

## Usage

```javascript
const toMarkdown = require('ast-to-markdown')

const mdText = toMarkdown(tree)

console.log(mdText)
```

## License

Under the MIT license. See [LICENSE](https://gitlab.com/demsking/ast-to-markdown/blob/master/LICENSE) file for more details.
