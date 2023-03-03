import deepCopyOfNestedObject from "../../test/baseFunctions/deepCopyOfNestedObject"

function getRootFromTreeArray(treeArray) {
  var rootNode = null
  var indexOfRoot = null
  treeArray.map((treeNode, idx) => {
    if (treeNode && treeNode.parent == null) {
      rootNode = treeNode
      indexOfRoot = idx
    }
  })

  return {rootNode, indexOfRoot}
}

function popItemFromArray (itemList, idxOfRemoveItem) {
  itemList.splice(idxOfRemoveItem, 1)
  return itemList
}

function getItemFromArrayByItemid (itemList, idxOfItem) {
  var itemOfIdx = null
  itemList.map((item) => {
    if (item.id == idxOfItem)
      itemOfIdx = deepCopyOfNestedObject(item)
  })
  return itemOfIdx
}

// @root : input parameter : object
function convertTreeArrayToObject(treeArray, parentNode) {
  var convertedObject = {}
  if (parentNode.type == 'node') {
    var nodesOfParent = []
    parentNode.children.map((childNodeId) => {
      const childNodeItem = getItemFromArrayByItemid(treeArray, childNodeId)
      nodesOfParent.push(convertTreeArrayToObject(treeArray, childNodeItem))
    })
    Object.assign(convertedObject, {id: parentNode.id, type: 'node' }, {nodes: nodesOfParent})
  } else {
    Object.assign(convertedObject, {id: parentNode.id, type: 'leaf' })
  }
  return convertedObject
}

export {getRootFromTreeArray, popItemFromArray, convertTreeArrayToObject, getItemFromArrayByItemid}