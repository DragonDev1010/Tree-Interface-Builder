var result = []

function getChildren(graph) {
  var childrenIdList = []
  graph.nodes.map((node) => {
    childrenIdList.push(node.id)
  })
  return childrenIdList
}

function getSiblingsNode(nodeList, nodeItem) {
  var siblingsId = [null, null]
  const nodeListLength = nodeList.length
  if (nodeListLength > 1) {
    nodeList.map((item, idx) => {
      if (item.id == nodeItem.id) {
        if (idx + 1 < nodeListLength)
          siblingsId[1] = nodeList[idx+1].id
        if (idx - 1 >= 0)
          siblingsId[0] = nodeList[idx - 1].id
      }
    })
  }
  return siblingsId
}

function generateTreeArrItem (graph, subGraph) {
  var treeArrayItem = {}
  treeArrayItem.id = subGraph.id
  treeArrayItem.parent = graph.id
  treeArrayItem.type = subGraph.type
  
  if (subGraph.type == 'node')
    treeArrayItem.children = getChildren(subGraph)
  else
    treeArrayItem.children = null

  treeArrayItem.siblings = getSiblingsNode(graph.nodes, subGraph)
  return treeArrayItem
}

function parseJsonRecursive(graph) {
  if (graph.type == 'node') {
    graph.nodes.map((subGraph) => {
      result.push(generateTreeArrItem(graph, subGraph))
      parseJsonRecursive(subGraph)
    })
  }
}
function parseJsonToTree(jsonData) {
  parseJsonRecursive(jsonData, null)
  return result
}

export {getChildren, generateTreeArrItem, getSiblingsNode, parseJsonRecursive, parseJsonToTree}