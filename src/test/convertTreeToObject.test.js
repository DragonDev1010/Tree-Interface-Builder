import {
  getRootFromTreeArray,
  popItemFromArray,
  convertTreeArrayToObject,
  getItemFromArrayByItemid
} from '../interfaceBuilderTree/functions/convertTreeToObject'

import {testTreeArray, correctObject} from './convertTreeToObject.data'
import deepCopyOfNestedObject from './baseFunctions/deepCopyOfNestedObject.js'
const expect = require('chai').expect

describe('getRootFromTreeArray', function() {
  it('get Root', function(done) {
    var result = getRootFromTreeArray(testTreeArray)
    var expected = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    expect(result.rootNode).to.eql(expected)
    done()
  })
})

describe('popItemFromArray', function() {
  it('remove item', function(done) {
    var testData = deepCopyOfNestedObject(testTreeArray)
    var result = popItemFromArray(testData, 0)
    var expected = [
      { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] },
      { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] },
      { id: 4, parent: 1, type: 'node', children: [ 10, 11 ], siblings: [ 3, 5 ] },
      { id: 5, parent: 1, type: 'node', children: [ 12 ], siblings: [ 4, 6 ] },
      { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] },
      { id: 8, parent: 3, type: 'leaf', children: null, siblings: [ null, 9 ] },
      { id: 9, parent: 3, type: 'leaf', children: null, siblings: [ 8, null ] },
      { id: 10, parent: 4, type: 'leaf', children: null, siblings: [ null, 11 ] },
      { id: 11, parent: 4, type: 'leaf', children: null, siblings: [ 10, null ] },
      { id: 12, parent: 5, type: 'leaf', children: null, siblings: [ null, null ] },
      { id: 13, parent: 6, type: 'leaf', children: null, siblings: [ null, 14 ] },
      { id: 14, parent: 6, type: 'node', children: [ 15, 16 ], siblings: [ 13, null ] },
      { id: 15, parent: 14, type: 'leaf', children: null, siblings: [ null, 16 ] },
      { id: 16, parent: 14, type: 'leaf', children: null, siblings: [ 15, null ] },
    ]
    expect(result).to.eql(expected)
    done()
  })
})

describe('getItemFromArrayByItemid', function() {
  it('test', function(done) {
    var testData = deepCopyOfNestedObject(testTreeArray)
    var result = getItemFromArrayByItemid(testData, 3)
    testData[2].parent = 2
    var expected = { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] }
    expect(result).to.eql(expected)
    done()
  })
})

describe('convertTreeArrayToObject', function() {
  it('test', function(done) {
    var testData = deepCopyOfNestedObject(testTreeArray)
    var parentNode = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    var result = convertTreeArrayToObject(testData, parentNode)
    expect(result).to.eql(correctObject)
    done()
  })
})