import React from 'react'
import TreeNode from './TreeNode.js'

export default function Tree({ treeData }) {

  return (
    <ul>
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  )
}
