function getNodeFromTreeArray(treeArray, nodeId) {
  var nodeItem = null
  treeArray.map((arrayItem) => {
    if (arrayItem.id == nodeId)
      nodeItem = {...arrayItem} // to avoid `shallow copy` of object
  })
  return nodeItem
}

function getParentNodeOfChild(treeArray, childNode) {
  var parentNode = null
  const parentNodeId = childNode.parent
  parentNode = getNodeFromTreeArray(treeArray, parentNodeId)
  return parentNode
}

function getNeighbors(treeArray, childNode) {
  var currentPreviousChild, currentNextChild, twoPreviousChild
  var currentPreviousChildId = childNode.siblings[0]
  currentPreviousChild = getNodeFromTreeArray(treeArray, currentPreviousChildId)
  if (currentPreviousChild != null) {
    twoPreviousChild = getNodeFromTreeArray(treeArray, currentPreviousChild.siblings[0])
  } else {
    twoPreviousChild = null
  }
  var currentNextChildId = childNode.siblings[1]
  currentNextChild = getNodeFromTreeArray(treeArray, currentNextChildId)
  return {
    currentPreviousChild: {
      id: currentPreviousChild && currentPreviousChild.id,
      siblings: currentPreviousChild && [currentPreviousChild.siblings[0], currentPreviousChild.siblings[1]]
    },
    currentNextChild: {
      id: currentNextChild && currentNextChild.id,
      siblings: currentNextChild && [currentNextChild.siblings[0], currentNextChild.siblings[1]]
    }, 
    twoPreviousChild: {
      id: twoPreviousChild && twoPreviousChild.id,
      siblings: twoPreviousChild && [twoPreviousChild.siblings[0], twoPreviousChild.siblings[1]]
    }
  }
}

function moveNodeUp(treeArray, movingNode) {
  var neighbors = getNeighbors(treeArray, movingNode)
  treeArray.map((node) => {
    if (neighbors.twoPreviousChild != null && neighbors.twoPreviousChild.id == node.id)
      node.siblings[1] = movingNode.id
    if (neighbors.currentPreviousChild != null && neighbors.currentPreviousChild.id == node.id) {
      node.siblings[0] = movingNode.id
      node.siblings[1] = movingNode.siblings[1]
    }
    if (neighbors.currentNextChild != null && neighbors.currentNextChild.id == node.id)
      node.siblings[0] = neighbors.currentPreviousChild.id
    if (node.id == movingNode.id) {
      node.siblings[0] = neighbors.currentPreviousChild.siblings[0]
      node.siblings[1] = neighbors.currentPreviousChild.id
    }
  })
  return treeArray
}
export { getNodeFromTreeArray, getParentNodeOfChild, getNeighbors, moveNodeUp }