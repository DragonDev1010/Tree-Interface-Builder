import React from 'react'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'

export default function ControlPanel() {
  const styles = {
    container: {
      width: '20%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 25
    },
    convertBtn: {
      padding: '10px 20px',
      border: '1px solid #9C6644',
      borderRadius: '20px',
      color: '#9C6644',
      fontSize: 20,
      fontWeight: 'bolder',
      boxShadow: `0 0 5px 2px rgba(0, 0, 0, 0.2)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.convertBtn}
        id="conJsonToTree"
      >
        <GoArrowRight size={30} />
      </button>
      <button
        style={styles.convertBtn}
        id="conTreeToJson"
      >
        <GoArrowLeft size={30} />
      </button>
    </div>
  )
}
