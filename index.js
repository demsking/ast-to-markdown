'use strict'

module.exports = function (ast) {
  let doc = ast.children.reduce(function (doc, node) {
    if (node.type === 'Header') {
      if (doc.length) {
        doc += '\n\n'
      }
      doc += node.raw
    } else {
      doc += '\n' + node.raw
    }

    return doc
  }, '')

  if (doc) {
    doc += '\n'
  }

  return doc
}
