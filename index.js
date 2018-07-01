'use strict'

const headers = ['heading', 'Header']

module.exports = function (ast) {
  const doc = ast.children.reduce(function (doc, node) {
    if (headers.indexOf(node.type) !== -1) {
      if (doc.length) {
        doc += '\n\n'
      }
      doc += node.raw || node.value
    } else {
      doc += '\n\n' + (node.raw || node.value)
    }

    return doc
  }, '')

  if (doc) {
    return doc + '\n'
  }

  return doc
}
