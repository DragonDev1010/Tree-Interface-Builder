import {
  getParentTreeOfMovingNode,
  switchingForwardInNodeList,
  movingUp,
  movingDown
} from '../interfaceBuilderTree/functions/controlJsonTree'
import { treeJsonTestData } from "./controlJsonTree.data.js";
import deepCopyOfNestedObject from './baseFunctions/deepCopyOfNestedObject';
const expect = require('chai').expect

describe('getParentTreeOfMovingNode', function() {
  it('getting parent of item 2', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 2)
    var expected = treeJsonTestData
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 3', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 3)
    var expected = treeJsonTestData
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 4', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 4)
    var expected = treeJsonTestData
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 5', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 5)
    var expected = treeJsonTestData
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 6', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 6)
    var expected = treeJsonTestData
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 8', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 8)
    var expected = treeJsonTestData.nodes[1]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 8', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 8)
    var expected = treeJsonTestData.nodes[1]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 9', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 9)
    var expected = treeJsonTestData.nodes[1]
    expect(result).to.eql(expected)
    done()
  })
  
  it('getting parent of item 11', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 11)
    var expected = treeJsonTestData.nodes[2]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 12', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 12)
    var expected = treeJsonTestData.nodes[3]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 13', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 13)
    var expected = treeJsonTestData.nodes[4]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 14', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 14)
    var expected = treeJsonTestData.nodes[4]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 16', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 16)
    var expected = treeJsonTestData.nodes[4].nodes[1]
    expect(result).to.eql(expected)
    done()
  })
})

describe('switchingForwardInNodeList', function() {
  it('switching forward item 3', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    switchingForwardInNodeList(testData, 3)
    var expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 2,
          type: 'leaf'
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })

  it('switching forward item 4', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    switchingForwardInNodeList(testData, 4)
    var expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('switching forward item 5', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    switchingForwardInNodeList(testData, 5)
    var expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('switching forward item 6', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    switchingForwardInNodeList(testData, 6)
    var expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
      
  it('switching forward item 9', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData.nodes[1])
    switchingForwardInNodeList(testData, 9)
    var expected = {
      id: 3,
      type: 'node',
      nodes: [
        {id: 9, type: 'leaf'},
        {id: 8, type: 'leaf'}
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
        
  it('switching forward item 11', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData.nodes[2])
    switchingForwardInNodeList(testData, 11)
    var expected = {
      id: 4,
      type: 'node',
      nodes: [
        {id: 11, type: 'leaf'},
        {id: 10, type: 'leaf'}
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
          
  it('switching forward item 14', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData.nodes[4])
    switchingForwardInNodeList(testData, 14)
    var expected = {
      id: 6,
      type: 'node',
      nodes: [
        {
          id: 14,
          type: 'node',
          nodes: [
            {id: 15, type: 'leaf'},
            {id: 16, type: 'leaf'}
          ]
        },
        { id: 13, type: 'leaf'}
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
            
  it('switching forward item 16', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData.nodes[4].nodes[1])
    switchingForwardInNodeList(testData, 16)
    var expected = {
      id: 14,
      type: 'node',
      nodes: [
        {id: 16, type: 'leaf'},
        {id: 15, type: 'leaf'}
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
})

describe('movingUp', function() {
  it('moving up item 3', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 3)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 2,
          type: 'leaf'
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })

  it('moving up item 4', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 4)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving up item 5', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 5)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving up item 6', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 6)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving up item 9', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 9)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 9, type: 'leaf'},
            {id: 8, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving up item 11', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 11)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 11, type: 'leaf'},
            {id: 10, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving up item 14', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 14)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            },
            { id: 13, type: 'leaf'}
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving up item 16', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingUp(testData, 16)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 16, type: 'leaf'},
                {id: 15, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
})

describe('movingDown', function() {
  it('moving down node - 2', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 2)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 2,
          type: 'leaf'
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })

  it('moving down node - 3', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 3)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving down node - 4', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 4)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving down node - 5', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 5)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }, {
          
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving down node - 8', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 8)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 9, type: 'leaf'},
            {id: 8, type: 'leaf'},
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
  
  it('moving down node - 10', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 10)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 11, type: 'leaf'},
            {id: 10, type: 'leaf'},
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
 
  it('moving down node - 13', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 13)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            },
            { id: 13, type: 'leaf'}
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
 
  it('moving down node - 15', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    movingDown(testData, 15)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf'
        }, {
          id: 3,
          type: 'node',
          nodes: [
            {id: 8, type: 'leaf'},
            {id: 9, type: 'leaf'}
          ]
        }, {
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 12, type: 'leaf'} ]
        }, {
          id: 6,
          type: 'node',
          nodes: [
            { id: 13, type: 'leaf'},
            {
              id: 14,
              type: 'node',
              nodes: [
                {id: 16, type: 'leaf'},
                {id: 15, type: 'leaf'},
              ]
            }
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
 
})