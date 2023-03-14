import React from 'react'

export default function Header() {
  const styles = {
    headerContainer: {
      background: '#9C6644',
      width: '100%',
      height: 100,
      color: '#EDE0D4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      margin: 0
    }
  }
  return (
    <div style={styles.headerContainer}>
      <h1>JSON - TreeView Converter</h1>
    </div>
  )
}
