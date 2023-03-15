import React from 'react'
import { useDispatch } from 'react-redux';
import { updateJsonDataOnReduxStore } from '../../functions/updateJsonDataOnReduxStore';

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

  const dispatch = useDispatch(null)

  const handleClickConTreeToJsonBtn = () => {
    updateJsonDataOnReduxStore(dispatch)
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.convertBtn}
        id="conJsonToTree"
        onClick={handleClickConTreeToJsonBtn}
      >
        Convert
      </button>
    </div>
  )
}
