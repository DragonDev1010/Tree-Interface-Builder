import {getChildren, generateTreeArrItem, getSiblingsNode, parseJsonRecursive, parseJsonToTree}
  from '../interfaceBuilderTree/functions/parseJsonToTree.js'
import { testJsonData } from './parseJsonToTree.data.js';
const expect = require('chai').expect;

describe('getChildren', function() {
  const testGraph = {
    nodes: [{id: 0}, {id: 1}, {id: 2}, {id: 5}]
  }
  it('test', function(done) {
    const result = getChildren(testGraph)
    expect(result).to.eql([0,1,2,5])
    done()
  })
})

describe('getSiblingsNode', () => { 
  const nodeList = [{id: 0}, {id: 7}, {id: 10}, {id: 4}, {id: 9}, {id: 2}]
  
  it('get siblings of Item-0', function(done) {
    const result = getSiblingsNode(nodeList, {id: 0})
    expect(result).to.eql([null, 7])
    done()
  })

  it('get siblings of Item-7', function(done) {
    const result = getSiblingsNode(nodeList, {id: 7})
    expect(result).to.eql([0, 10])
    done()
  })

  it('get siblings of Item-10', function(done) {
    const result = getSiblingsNode(nodeList, {id: 10})
    expect(result).to.eql([7, 4])
    done()
  })

  it('get siblings of Item-4', function(done) {
    const result = getSiblingsNode(nodeList, {id: 4})
    expect(result).to.eql([10, 9])
    done()
  })

  it('get siblings of Item-9', function(done) {
    const result = getSiblingsNode(nodeList, {id: 9})
    expect(result).to.eql([4, 2])
    done()
  })
  
  it('get siblings of Item-2', function(done) {
    const result = getSiblingsNode(nodeList, {id: 2})
    expect(result).to.eql([9, null])
    done()
  })
})

describe('generateTreeArrItem', function() {
  it('node 1', function(done) {
    const testSubGraph = {id: 1, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData, testSubGraph)
    expect(result).to.eql({id: 1, parent: 0, type: 'leaf', children: null, siblings: [null, 2]})
    done()
  })
  
  it('node 2', function(done) {
    const testSubGraph = {id: 2, type: 'node', nodes: [{id: 4}, {id: 5}]}
    const result = generateTreeArrItem(testJsonData, testSubGraph)
    expect(result).to.eql({id: 2, parent: 0, type: 'node', children: [4, 5], siblings: [1, 3]})
    done()
  })
  
  it('node 3', function(done) {
    const testSubGraph = {id: 3, type: 'node', nodes: [{id: 6}, {id: 7}]}
    const result = generateTreeArrItem(testJsonData, testSubGraph)
    expect(result).to.eql({id: 3, parent: 0, type: 'node', children: [6, 7], siblings: [2, null]})
    done()
  })
    
  it('node 4', function(done) {
    const testSubGraph = {id: 4, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData.nodes[1], testSubGraph)
    expect(result).to.eql({id: 4, parent: 2, type: 'leaf', children: null, siblings: [null, 5]})
    done()
  })
  
  it('node 5', function(done) {
    const testSubGraph = {id: 5, type: 'node', nodes: [{id: 8}, {id: 9}]}
    const result = generateTreeArrItem(testJsonData.nodes[1], testSubGraph)
    expect(result).to.eql({id: 5, parent: 2, type: 'node', children: [8, 9], siblings: [4, null]})
    done()
  })
  
  it('node 6', function(done) {
    const testSubGraph = {id: 6, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData.nodes[2], testSubGraph)
    expect(result).to.eql({id: 6, parent: 3, type: 'leaf', children: null, siblings: [null, 7]})
    done()
  })
  
  it('node 7', function(done) {
    const testSubGraph = {id: 7, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData.nodes[2], testSubGraph)
    expect(result).to.eql({id: 7, parent: 3, type: 'leaf', children: null, siblings: [6, null]})
    done()
  })
  
  it('node 8', function(done) {
    const testSubGraph = {id: 8, type: 'node', nodes: [{id: 10}, {id: 11}]}
    const result = generateTreeArrItem(testJsonData.nodes[1].nodes[1], testSubGraph)
    expect(result).to.eql({id: 8, parent: 5, type: 'node', children: [10, 11], siblings: [null, 9]})
    done()
  })

  it('node 9', function(done) {
    const testSubGraph = {id: 9, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData.nodes[1].nodes[1], testSubGraph)
    expect(result).to.eql({id: 9, parent: 5, type: 'leaf', children: null, siblings: [8, null]})
    done()
  })

  it('node 10', function(done) {
    const testSubGraph = {id: 10, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData.nodes[1].nodes[1].nodes[0], testSubGraph)
    expect(result).to.eql({id: 10, parent: 8, type: 'leaf', children: null, siblings: [null, 11]})
    done()
  })
  
  it('node 11', function(done) {
    const testSubGraph = {id: 11, type: 'leaf'}
    const result = generateTreeArrItem(testJsonData.nodes[1].nodes[1].nodes[0], testSubGraph)
    expect(result).to.eql({id: 11, parent: 8, type: 'leaf', children: null, siblings: [10, null]})
    done()
  })
})

describe('parseJsonToTree', function() {
  it('test', function(done) {
    var result = parseJsonToTree(testJsonData)
    done()
  })
})