'use strict'

const fs = require('fs')
const path = require('path')

const toMarkdown = require('..')

/* global describe it expect */

describe('transform', () => {
  const expected = fs.readFileSync(path.join(__dirname, './expected.md'), 'utf8')

  it('should successfully transform an empty tree', () => {
    const tree = { children: [] }
    const md = toMarkdown(tree)
    const expected = ''

    expect(md).toEqual(expected)
  })

  it('should successfully transform a filled tree', () => {
    const tree = require('./tree')
    const md = toMarkdown(tree)

    expect(md).toEqual(expected)
  })

  it('should successfully transform a mdast tree', () => {
    const tree = require('./tree.mdast')
    const md = toMarkdown(tree)

    expect(md).toEqual(expected)
  })
})
