import React from 'react'
import TreeNode from './TreeNode'

export default function Tree(props) {
  return (
    <ul>
      {
        props.treeData && props.treeData.nodes && props.treeData.nodes.map(treeNode => (
          <TreeNode treeNode = {treeNode}/>
        ))
      }
    </ul>
  )
}
