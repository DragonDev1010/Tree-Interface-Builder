import React from 'react'
import Tree from './Tree'
import TreeNodeElement from './TreeNodeElement'

export default function TreeNode(props) {
  return (
    <>
      <TreeNodeElement node = {props.treeNode}/>
      <ul>
        <Tree treeData = {{nodes: props.treeNode.nodes}}/>
      </ul>
    </>
  )
}
