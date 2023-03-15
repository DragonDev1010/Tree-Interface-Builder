import React from 'react'

export default function Header() {
  const styles = {
    headerContainer: {
      background: 'var(--background-color)',
      width: '100%',
      height: 100,
      color: 'var(--primary-font-color)',
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
