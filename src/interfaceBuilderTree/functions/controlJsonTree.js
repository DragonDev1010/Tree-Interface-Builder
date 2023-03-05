// @input rootTreeJson : JSON data of the main tree
// @input idxOfMovingNode : id of node moving

var parentTreeOfMovingNode = null // this must global variable, because it is used in multiple functions
export function getParentTreeOfMovingNode(rootTreeJson, idxOfMovingNode) {
  rootTreeJson.nodes && rootTreeJson.nodes.map((item) => {
    if (item.id == idxOfMovingNode) {
      parentTreeOfMovingNode = rootTreeJson
    } else if (item.nodes !== undefined) {
      getParentTreeOfMovingNode(item, idxOfMovingNode)
    }
  })
  return parentTreeOfMovingNode
}

export function switchingForwardInNodeList(parentTreeOfMovingNode, idxOfMovingNode) {
  var childrenNodesArray = parentTreeOfMovingNode && parentTreeOfMovingNode.nodes ? parentTreeOfMovingNode.nodes : null
  // re-ordering of children
  // checking if there is previous node
  var idxOfMovingNodeInChildrenNodesArray = childrenNodesArray.findIndex(childNodeItem => childNodeItem.id === idxOfMovingNode)
  if (idxOfMovingNodeInChildrenNodesArray > 0)
    childrenNodesArray.splice(
      idxOfMovingNodeInChildrenNodesArray - 1,
      0,
      childrenNodesArray.splice(idxOfMovingNodeInChildrenNodesArray, 1)[0]
    )
  return parentTreeOfMovingNode
}

export function movingUp(rootTreeJson, idxOfMovingNode) {
  getParentTreeOfMovingNode(rootTreeJson, idxOfMovingNode)
  switchingForwardInNodeList(parentTreeOfMovingNode, idxOfMovingNode)
}

export function switchingBackwardInNodeList(parentTreeOfMovingNode, idxOfMovingNode) {
  var childrenNodesArray = parentTreeOfMovingNode && parentTreeOfMovingNode.nodes ? parentTreeOfMovingNode.nodes : null
  // re-ordering of children
  // checking if there is previous node
  var idxOfMovingNodeInChildrenNodesArray = childrenNodesArray.findIndex(childNodeItem => childNodeItem.id === idxOfMovingNode)
  if (idxOfMovingNodeInChildrenNodesArray < childrenNodesArray.length - 1) {
    childrenNodesArray.splice(
      idxOfMovingNodeInChildrenNodesArray + 1,
      0,
      childrenNodesArray.splice(idxOfMovingNodeInChildrenNodesArray, 1)[0]
    )
  }
  return parentTreeOfMovingNode
}

export function movingDown(rootTreeJson, idxOfMovingNode) {
  getParentTreeOfMovingNode(rootTreeJson, idxOfMovingNode)
  switchingBackwardInNodeList(parentTreeOfMovingNode, idxOfMovingNode)
}

export function getGrandParentOfMovingNode(rootTreeJson, idxOfMovingNode) {
  getParentTreeOfMovingNode(rootTreeJson, idxOfMovingNode)
  var idxOfParentTree = parentTreeOfMovingNode.id
  getParentTreeOfMovingNode(rootTreeJson, idxOfParentTree)
  return parentTreeOfMovingNode
}

export function getIdxOfNodeInArray (nodesArray, idxOfMovingNode) {
  var idxOfNodeInArray = null
  nodesArray.map((item, idx) => {
    if (item.id == idxOfMovingNode) 
      idxOfNodeInArray = idx
  })
  return idxOfNodeInArray
}

export function movingLeft(rootTreeJson, movingNode) {
  var idxOfMovingNode = movingNode.id
  var parent = getParentTreeOfMovingNode(rootTreeJson, idxOfMovingNode)
  var grandParent = getParentTreeOfMovingNode(rootTreeJson, parent.id)
  var idxOfNodeInArray = getIdxOfNodeInArray(parent.nodes, idxOfMovingNode)
  var idxOfParentNodeInGrandParentTree = getIdxOfNodeInArray(grandParent.nodes, parent.id)
  // insert new node into nodes_array at the specific position
  grandParent.nodes.splice(idxOfParentNodeInGrandParentTree+1, 0, movingNode)
  // remove moving node from old parent nodes
  parent.nodes.splice(idxOfNodeInArray, 1)
}

export function getSiblingOfNode (parentNode, movingNode) {

}

export function movingRight(rootTreeJson, movingNode) {
  // get the parent of moving-node
  var parent = getParentTreeOfMovingNode(rootTreeJson, movingNode.id)
  // get the index of moving-node in the parent-nodes
  var idxOfMovingNodeInParentNodes = getIdxOfNodeInArray(parent.nodes, movingNode.id)
  // if there is not previous-sibling, the movning-right is useless
  if (idxOfMovingNodeInParentNodes > 0){
    // find the previous sibling
    var previousSibling = parent.nodes[idxOfMovingNodeInParentNodes - 1]
    // if there is not nodes of previous-sibling, create new object called as `nodes`
    if(previousSibling.nodes == null) {
      previousSibling.nodes = [movingNode]
    } else {
      // insert moving-node as the last child of the sibling-node
      previousSibling.nodes.push(movingNode)
    }
  }
  // delete movingNode from the parent-nodes
  parent.nodes.splice(idxOfMovingNodeInParentNodes, 1)
}