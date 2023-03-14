import React from 'react'
import Tree from '../../interfaceBuilderTree/components/Tree'
import { useSelector } from 'react-redux'
export default function TreeUiView() {
  const styles = {
    container: {
      width: '40%',
      background: 'white',
      border: 'none',
      boxShadow: `0 0 5px 2px rgba(0, 0, 0, 0.3)`,
      overflow: 'auto'
    }
  }

  var treeJsonData = useSelector((state) => state.tree)

  return (
    <div style={styles.container}>
      <Tree treeData={treeJsonData} />
    </div>
  )
}
