'use strict'

const headers = ['heading', 'Header']

module.exports = function (ast) {
  const doc = ast.children.reduce(function (doc, node) {
    if (headers.includes(node.type)) {
      if (doc.length) {
        doc += '\n\n'
      }
      doc += node.raw || node.value
    } else {
      doc += '\n' + (node.raw || node.value)
    }

    return doc
  }, '')

  if (doc) {
    return doc + '\n'
  }

  return doc
}
