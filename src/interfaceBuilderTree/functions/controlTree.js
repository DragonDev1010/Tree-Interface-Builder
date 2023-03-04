function getNodeFromTreeArray(treeArray, nodeId) {
  var nodeItem = null
  treeArray.map((arrayItem) => {
    if (arrayItem.id == nodeId)
      nodeItem = { ...arrayItem } // to avoid `shallow copy` of object
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


function getAllChildrenOfParent(treeArray, movingNode) {
  // find parent of moving-node
  var parentNodeId = movingNode.parent
  var parentNode = null
  treeArray.map(arrayItem => {
    if (arrayItem.id == parentNodeId)
      parentNode = arrayItem
  })

  // get all children of parent
  var idxOfChildren = parentNode.children

  return idxOfChildren
}

function moveNodeUp(treeObject, movingNode) {
  var childrenNodesArray = treeObject && treeObject.nodes ? treeObject.nodes : null
  // re-ordering of children
  // checking if there is previous node
  var idxOfMovingNodeInChildrenIdArray = childrenNodesArray.findIndex(childNodeItem => childNodeItem.id === movingNode.id)
  if (idxOfMovingNodeInChildrenIdArray > 0)
    childrenNodesArray.splice(
      idxOfMovingNodeInChildrenIdArray - 1,
      0,
      childrenNodesArray.splice(idxOfMovingNodeInChildrenIdArray, 1)[0]
    )
}

export function handleNodeMoveUp(treeArray, movingNode, setTreeArray) {

}

function moveNodeDown(treeArray, movingNode) {
  var idxOfChildren = getAllChildrenOfParent(treeArray, movingNode)
  // re-ordering of children
  // checking if there is next node
  var idxOfMovingNodeInChildrenIdArray = idxOfChildren.indexOf(movingNode.id)
  if (idxOfMovingNodeInChildrenIdArray + 1 < idxOfChildren.length)
    idxOfChildren.splice(
      idxOfMovingNodeInChildrenIdArray + 1,
      0,
      idxOfChildren.splice(idxOfMovingNodeInChildrenIdArray, 1)[0]
    )
}

export { getNodeFromTreeArray, getParentNodeOfChild, getNeighbors, moveNodeUp, moveNodeDown }