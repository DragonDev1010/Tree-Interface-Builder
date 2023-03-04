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
    console.log('test')
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