import {
  setInitial,
  getParentTreeOfMovingNode,
  switchingForwardInNodeList,
  movingUp,
  movingDown,
  getIdxOfNodeInArray,
  movingLeft,
  movingRight,
  findIdxOfLastNode,
  createNewNode,
  creatingChild,
  deletingChild
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
  
  it('getting parent of item 2', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 2)
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
  
  it('getting parent of item 10', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 10)
    var expected = treeJsonTestData.nodes[2]
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

  it('getting parent of item 15', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 15)
    var expected = treeJsonTestData.nodes[4].nodes[1]
    expect(result).to.eql(expected)
    done()
  })

  it('getting parent of item 16', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 16)
    var expected = treeJsonTestData.nodes[4].nodes[1]
    expect(result).to.eql(expected)
    done()
  })
  
  it('getting parent of item 11', function(done) {
    var result = getParentTreeOfMovingNode(treeJsonTestData, 11)
    var expected = treeJsonTestData.nodes[2]
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

describe('getIdxOfNodeInArray', function() {
  it('get idx of node - 2', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    var target = {
      id: 2,
      type: 'leaf'
    }
    var result = getIdxOfNodeInArray(testData.nodes, 2)
    expect(result).to.eql(0)
    done()
  })

  // it('get idx of node - 3', function(done) {
  //   var testData = deepCopyOfNestedObject(treeJsonTestData)
  //   var target = {
  //     id: 3,
  //     type: 'node',
  //     nodes: [
  //       {id: 8, type: 'leaf'},
  //       {id: 9, type: 'leaf'}
  //     ]
  //   }
  //   var result = getIdxOfNodeInArray(testData.nodes, target)
  //   expect(result).to.eql(1)
  //   done()
  // })
  
  // it('get idx of node - 4', function(done) {
  //   var testData = deepCopyOfNestedObject(treeJsonTestData)
  //   var target = {
  //     id: 4,
  //     type: 'node',
  //     nodes: [
  //       {id: 10, type: 'leaf'},
  //       {id: 11, type: 'leaf'}
  //     ]
  //   }
  //   var result = getIdxOfNodeInArray(testData.nodes, target)
  //   expect(result).to.eql(2)
  //   done()
  // })
  
  // it('get idx of node - 13', function(done) {
  //   var testData = deepCopyOfNestedObject(treeJsonTestData)
  //   var target = { id: 13, type: 'leaf'}
  //   var result = getIdxOfNodeInArray(testData.nodes[4].nodes, target)
  //   expect(result).to.eql(0)
  //   done()
  // })
  
  // it('get idx of node - 16', function(done) {
  //   var testData = deepCopyOfNestedObject(treeJsonTestData)
  //   var target = {id: 16, type: 'leaf'}
  //   var result = getIdxOfNodeInArray(testData.nodes[4].nodes[1].nodes, target)
  //   expect(result).to.eql(1)
  //   done()
  // })
  
})

describe('movingLeft', function() {
  it('moving left node - 1', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    var movingNode = {
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
                {id: 15, type: 'leaf'},
                {id: 16, type: 'leaf'}
              ]
            }
          ]
        }
      ]
    }
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
    movingLeft(testData, movingNode)
    expect(testData).to.eql(expected)
    done()
  })

  it('moving left node - 8', function(done) {
    var testData = deepCopyOfNestedObject(treeJsonTestData)
    var movingNode = {id: 8, type: 'leaf'}
    movingLeft(testData, movingNode)
    expect(testData).to.eql(testData)
    done()
  })
})

describe('movingRight', function() {
  it('moving right node - 3', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    let movingNode = {
      id: 3,
      type: 'node',
      nodes: [
        {id: 8, type: 'leaf'},
        {id: 9, type: 'leaf'}
      ]
    }
    movingRight(testData, movingNode)
    let expected = {
      id: 1,
      type: 'node',
      nodes: [
        {
          id: 2,
          type: 'leaf',
          nodes: [
            {
              id: 3,
              type: 'node',
              nodes: [
                {id: 8, type: 'leaf'},
                {id: 9, type: 'leaf'}
              ]
            },
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

  it('moving right node - 14', function(done) {
    let testData = deepCopyOfNestedObject(treeJsonTestData)
    let movingNode = {
      id: 14,
      type: 'node',
      nodes: [
        {id: 15, type: 'leaf'},
        {id: 16, type: 'leaf'}
      ]
    }
    movingRight(testData, movingNode)
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
              id: 13, 
              type: 'leaf',
              nodes: [
                {
                  id: 14,
                  type: 'node',
                  nodes: [
                    {id: 15, type: 'leaf'},
                    {id: 16, type: 'leaf'}
                  ]
                }
              ]
            },
            
          ]
        }
      ]
    }
    expect(testData).to.eql(expected)
    done()
  })
})

describe('getting the largest ID of node', function() {
  it('getting largest Id of node - 1', function(done) {
    var testData = {
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
        }
      ]
    }
    var result = findIdxOfLastNode(testData)
    expect(result).to.eql(16)
    done()
  })

  it('getting largest Id of node - 1', function(done) {
    var testData = {
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
          id: 4,
          type: 'node',
          nodes: [
            {id: 10, type: 'leaf'},
            {id: 11, type: 'leaf'}
          ]
        }, {
          id: 5,
          type: 'node',
          nodes: [ {id: 19, type: 'leaf'} ]
        }
      ]
    }
    var result = findIdxOfLastNode(testData)
    expect(result).to.eql(19)
    done()
  })
})

describe('create new node', function() {
  it('createNewNode - 1', function(done) {
    const testData = {
      id: 4,
      nodes: [
        {id: 10},
        {
          id: 9,
          nodes: [
            {id: 1}, {id: 5}
          ]
        }
      ]
    }
    const newNode = {nodes: [{id: 100}, {id: 80}]}
    var result = createNewNode(testData, newNode)
    var expected = {id: 11, nodes: [{id: 100}, {id: 80}]}
    expect(result).to.eql(expected)
    done()
  })
})

describe('creatingChild', function() {
  it('creatingChild', function(done) {
    const testData = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {id: 109}, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    const expected = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {id: 109}, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            },
            {id: 201, val:'test data'}
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    creatingChild(testData, 1320, {val:'test data'})
    expect(testData).to.eql(expected)
    done()
  })

  it('creatingChild', function(done) {
    const testData = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {id: 109}, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    const expected = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {
              id: 109,
              nodes: [{id: 201, val:'test data'}]
            }, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    creatingChild(testData, 109, {val:'test data'})
    expect(testData).to.eql(expected)
    done()
  })
})

describe('deletingChild', function() {
  it('deletingChild', function(done) {
    const testData = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {id: 109}, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    var expected = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {id: 109}, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    deletingChild(testData, 49)
    expect(testData).to.eql(expected)
    done()
  })

  it('deletingChild', function(done) {
    const testData = {
      id: 10,
      nodes: [
        {
          id: 89,
          nodes: [
            {id: 109}, {id: 200}
          ]
        }, {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    var expected = {
      id: 10,
      nodes: [
        {
          id: 1320,
          nodes: [
            {id: 4},
            {
              id: 11,
              nodes: [
                {id: 6}, {id: 19}
              ]
            }
          ]
        }, {
          id: 34,
          nodes: [
            {
              id: 45,
              nodes: [
                {id: 49},
                {id: 50}
              ]
            }
          ]
        }
      ]
    }
    deletingChild(testData, 89)
    expect(testData).to.eql(expected)
    done()
  })
})