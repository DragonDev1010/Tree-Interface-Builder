import {
  getNodeFromTreeArray,
  getParentNodeOfChild,
  getNeighbors,
  moveNodeUp,
  moveNodeDown
} from '../interfaceBuilderTree/functions/controlTree.js'
import {testControlTreeData, treeObjectTestData} from './controlTree.data.js'
import deepCopyOfNestedObject from './baseFunctions/deepCopyOfNestedObject.js'
const expect = require('chai').expect

describe('getNodeFromTreeArray', function() {
  it('node Item Id - null', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, null)
    var expected = null
    expect(result).to.eql(expected)
    done()
  })

  it('node Item Id - 1', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, 1)
    var expected = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    expect(result).to.eql(expected)
    done()
  })

  it('node Item Id - 2', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, 2)
    expect(result).to.eql({ id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] })
    done()
  })

  it('node Item Id - 3', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, 3)
    var expected = { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] }
    expect(result).to.eql(expected)
    done()
  })

  it('node Item Id - 6', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, 6)
    var expected = { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] }
    expect(result).to.eql(expected)
    done()
  })

  it('node Item Id - 9', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, 9)
    var expected = { id: 9, parent: 3, type: 'leaf', children: null, siblings: [ 8, null ] }
    expect(result).to.eql(expected)
    done()
  })

  it('checking deep copy of Item 1', function(done) {
    var result = getNodeFromTreeArray(testControlTreeData, 1)
    testControlTreeData[0].type = 'test'
    var expected = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    expect(result).to.eql(expected)
    testControlTreeData[0].type = 'node'
    done()
  })

})

describe('getParentNodeOfChild', function() {
  it('get parent of node-0', function(done) {
    const childNode = {}
    const expected = null
    var result = getParentNodeOfChild(testControlTreeData, childNode)
    expect(result).to.eql(expected)
    done()
  })

  it('get parent of node 1', function(done) {
    const childNode = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [ null, null ] }
    const expected = null
    var result = getParentNodeOfChild(testControlTreeData, childNode)
    expect(result).to.eql(expected)
    done()
  })

  it('get parent of node 2', function(done) {
    const childNode = { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 2 ] }
    const expected = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    var result = getParentNodeOfChild(testControlTreeData, childNode)
    expect(result).to.eql(expected)
    done()
  })

  it('get parent of node 3', function(done) {
    const childNode = { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 1, 4 ] }
    const expected = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    var result = getParentNodeOfChild(testControlTreeData, childNode)
    expect(result).to.eql(expected)
    done()
  })

  it('get parent of node 4', function(done) {
    const childNode = { id: 4, parent: 1, type: 'node', children: [ 10, 11 ], siblings: [ 3, 5 ] }
    const expected = { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] }
    var result = getParentNodeOfChild(testControlTreeData, childNode)
    expect(result).to.eql(expected)
    done()
  })

  it('get parent of node 14', function(done) {
    const childNode = { id: 14, parent: 6, type: 'node', children: [ 15, 16 ], siblings: [ 13, null ] }
    const expected = { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] }
    var result = getParentNodeOfChild(testControlTreeData, childNode)
    expect(result).to.eql(expected)
    done()
  })

})

describe('getNeighbors', function() {
  it('getting neighbors of item - 2', function(done) {
    var childNode = { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] }
    var result = getNeighbors(testControlTreeData, childNode)
    var expected = {
      currentPreviousChild: {id: null, siblings: null},
      currentNextChild: { id: 3, siblings: [ 2, 4 ] },
      twoPreviousChild: {id: null, siblings: null}
    }
    expect(result).to.eql(expected)
    done()
  })

  it('getting neighbors of item - 3', function(done) {
    var childNode = { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] }
    var result = getNeighbors(testControlTreeData, childNode)
    var expected = {
      currentPreviousChild: { id: 2, siblings: [ null, 3 ] },
      currentNextChild: { id: 4, siblings: [ 3, 5 ] },
      twoPreviousChild: {id: null, siblings: null}
    }
    expect(result).to.eql(expected)
    done()
  })

  it('getting neighbors of item - 4', function(done) {
    var childNode = { id: 4, parent: 1, type: 'node', children: [ 10, 11 ], siblings: [ 3, 5 ] }
    var result = getNeighbors(testControlTreeData, childNode)
    var expected = {
      currentPreviousChild: { id: 3, siblings: [ 2, 4 ] },
      currentNextChild: { id: 5, siblings: [ 4, 6 ] },
      twoPreviousChild: { id: 2, siblings: [ null, 3 ] }
    }
    expect(result).to.eql(expected)
    done()
  })

  it('getting neighbors of item - 5', function(done) {
    var childNode =  { id: 5, parent: 1, type: 'node', children: [ 12 ], siblings: [ 4, 6 ] }
    var result = getNeighbors(testControlTreeData, childNode)
    var expected = {
      currentPreviousChild: { id: 4, siblings: [ 3, 5 ] },
      currentNextChild: { id: 6, siblings: [ 5, null ] },
      twoPreviousChild: { id: 3, siblings: [ 2, 4 ] }
    }
    expect(result).to.eql(expected)
    done()
  })

  it('getting neighbors of item - 6', function(done) {
    var childNode = { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] }
    var result = getNeighbors(testControlTreeData, childNode)
    var expected = {
      currentPreviousChild: { id: 5, siblings: [ 4, 6 ] },
      currentNextChild: {id: null, siblings: null},
      twoPreviousChild: { id: 4, siblings: [ 3, 5 ] }
    }
    expect(result).to.eql(expected)
    done()
  })
})

// describe('moveNodeUp', function() {
//   it('move up Node 3', function(done) {
//     let testData = deepCopyOfNestedObject(treeObjectTestData)
//     var node = { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] }
//     var expected = {
//       id: 1,
//       type: 'node',
//       nodes: [
//         {
//           id: 3,
//           type: 'node',
//           nodes: [
//             {id: 8, type: 'leaf'},
//             {id: 9, type: 'leaf'}
//           ]
//         }, {
//           id: 2,
//           type: 'leaf'
//         }, {
//           id: 4,
//           type: 'node',
//           nodes: [
//             {id: 10, type: 'leaf'},
//             {id: 11, type: 'leaf'}
//           ]
//         }, {
//           id: 5,
//           type: 'node',
//           nodes: [ {id: 12, type: 'leaf'} ]
//         }, {
//           id: 6,
//           type: 'node',
//           nodes: [
//             { id: 13, type: 'leaf'},
//             {
//               id: 14,
//               type: 'node',
//               nodes: [
//                 {id: 15, type: 'leaf'},
//                 {id: 16, type: 'leaf'}
//               ]
//             }
//           ]
//         }
//       ]
//     }
//     moveNodeUp(testData, node)
//     expect(testData).to.eql(expected)
//     done()
//   })
    
//   it('move up Node 4', function(done) {
//     let testData = deepCopyOfNestedObject(treeObjectTestData)
//     var node = { id: 4, type: 'node', nodes: [ {id: 10, type: 'leaf'}, {id: 11, type: 'leaf'} ] }
//     var expected = {
//       id: 1,
//       type: 'node',
//       nodes: [
//         {
//           id: 2,
//           type: 'leaf'
//         }, {
//           id: 4,
//           type: 'node',
//           nodes: [
//             {id: 10, type: 'leaf'},
//             {id: 11, type: 'leaf'}
//           ]
//         }, {
//           id: 3,
//           type: 'node',
//           nodes: [
//             {id: 8, type: 'leaf'},
//             {id: 9, type: 'leaf'}
//           ]
//         }, {
//           id: 5,
//           type: 'node',
//           nodes: [ {id: 12, type: 'leaf'} ]
//         }, {
//           id: 6,
//           type: 'node',
//           nodes: [
//             { id: 13, type: 'leaf'},
//             {
//               id: 14,
//               type: 'node',
//               nodes: [
//                 {id: 15, type: 'leaf'},
//                 {id: 16, type: 'leaf'}
//               ]
//             }
//           ]
//         }
//       ]
//     }
//     moveNodeUp(testData, node)
//     expect(testData).to.eql(expected)
//     done()
//   })

//   it('move up Node 6', function(done) {
//     let testData = deepCopyOfNestedObject(treeObjectTestData)
//     var node = { id: 6, type: 'node', nodes: [ { id: 13, type: 'leaf'}, { id: 14, type: 'node', nodes: [ {id: 15, type: 'leaf'}, {id: 16, type: 'leaf'} ] } ] }
//     var expected = {
//       id: 1,
//       type: 'node',
//       nodes: [
//         {
//           id: 2,
//           type: 'leaf'
//         }, {
//           id: 3,
//           type: 'node',
//           nodes: [
//             {id: 8, type: 'leaf'},
//             {id: 9, type: 'leaf'}
//           ]
//         }, {
//           id: 4,
//           type: 'node',
//           nodes: [
//             {id: 10, type: 'leaf'},
//             {id: 11, type: 'leaf'}
//           ]
//         }, {
//           id: 6,
//           type: 'node',
//           nodes: [
//             { id: 13, type: 'leaf'},
//             {
//               id: 14,
//               type: 'node',
//               nodes: [
//                 {id: 15, type: 'leaf'},
//                 {id: 16, type: 'leaf'}
//               ]
//             }
//           ]
//         }, {
//           id: 5,
//           type: 'node',
//           nodes: [ {id: 12, type: 'leaf'} ]
//         }
//       ]
//     }
//     moveNodeUp(testData, node)
//     expect(testData).to.eql(expected)
//     done()
//   })
// })

// describe('moveNodeDown', function() {
//   it('move down Node 2', function(done) {
//     let testTreeData = deepCopyOfNestedObject(testControlTreeData)
//     var node = { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] }
//     var expected = [
//       { id: 1, parent: null, type: 'node', children: [3, 2, 4, 5, 6], siblings: [null, null] },
//       { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] },
//       { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] },
//       { id: 4, parent: 1, type: 'node', children: [ 10, 11 ], siblings: [ 3, 5 ] },
//       { id: 5, parent: 1, type: 'node', children: [ 12 ], siblings: [ 4, 6 ] },
//       { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] },
//       { id: 8, parent: 3, type: 'leaf', children: null, siblings: [ null, 9 ] },
//       { id: 9, parent: 3, type: 'leaf', children: null, siblings: [ 8, null ] },
//       { id: 10, parent: 4, type: 'leaf', children: null, siblings: [ null, 11 ] },
//       { id: 11, parent: 4, type: 'leaf', children: null, siblings: [ 10, null ] },
//       { id: 12, parent: 5, type: 'leaf', children: null, siblings: [ null, null ] },
//       { id: 13, parent: 6, type: 'leaf', children: null, siblings: [ null, 14 ] },
//       { id: 14, parent: 6, type: 'node', children: [ 15, 16 ], siblings: [ 13, null ] },
//       { id: 15, parent: 14, type: 'leaf', children: null, siblings: [ null, 16 ] },
//       { id: 16, parent: 14, type: 'leaf', children: null, siblings: [ 15, null ] },
//     ]
//     moveNodeDown(testTreeData, node)
//     expect(testTreeData).to.eql(expected)
//     done()
//   })

//   it('move down Node 3', function(done) {
//     let testTreeData = deepCopyOfNestedObject(testControlTreeData)
//     var node = { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] }
//     var expected = [
//       { id: 1, parent: null, type: 'node', children: [2, 4, 3, 5, 6], siblings: [null, null] },
//       { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] },
//       { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] },
//       { id: 4, parent: 1, type: 'node', children: [ 10, 11 ], siblings: [ 3, 5 ] },
//       { id: 5, parent: 1, type: 'node', children: [ 12 ], siblings: [ 4, 6 ] },
//       { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] },
//       { id: 8, parent: 3, type: 'leaf', children: null, siblings: [ null, 9 ] },
//       { id: 9, parent: 3, type: 'leaf', children: null, siblings: [ 8, null ] },
//       { id: 10, parent: 4, type: 'leaf', children: null, siblings: [ null, 11 ] },
//       { id: 11, parent: 4, type: 'leaf', children: null, siblings: [ 10, null ] },
//       { id: 12, parent: 5, type: 'leaf', children: null, siblings: [ null, null ] },
//       { id: 13, parent: 6, type: 'leaf', children: null, siblings: [ null, 14 ] },
//       { id: 14, parent: 6, type: 'node', children: [ 15, 16 ], siblings: [ 13, null ] },
//       { id: 15, parent: 14, type: 'leaf', children: null, siblings: [ null, 16 ] },
//       { id: 16, parent: 14, type: 'leaf', children: null, siblings: [ 15, null ] },
//     ]
//     moveNodeDown(testTreeData, node)
//     expect(testTreeData).to.eql(expected)
//     done()
//   })
// })