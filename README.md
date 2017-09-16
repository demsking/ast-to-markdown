# AST to Markdown

Transforms an Unist AST to a Markdown text

[![Build Status](https://travis-ci.org/demsking/ast-to-markdown.svg?branch=master)](https://travis-ci.org/demsking/ast-to-markdown) [![Known Vulnerabilities](https://snyk.io/test/github/demsking/ast-to-markdown/badge.svg)](https://snyk.io/test/github/demsking/ast-to-markdown) [![Coverage Status](https://coveralls.io/repos/github/demsking/ast-to-markdown/badge.svg?branch=master)](https://coveralls.io/github/demsking/ast-to-markdown?branch=master)

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

Under the MIT license. See [LICENSE](https://github.com/demsking/ast-to-markdown/blob/master/LICENSE) file for more details.
