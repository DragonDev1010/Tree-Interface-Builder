import React from 'react'
import {BiCopy} from 'react-icons/bi'
import { insertSampleDataIntoAceEditor } from '../../functions/insertSampleDataIntoAceEditor'

export default function ViewHeader(props) {
  const styles = {
    editorHeader: {
      background: '#9C6644',
      color: 'white',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 30,
      height: 50
    },
    sampleDataBtn: {
      fontSize: 20,
      cursor: 'pointer'
    },
    copyBtn: {
      width: 20,
      height: 20,
      cursor: 'pointer'
    }
  }

  const handleInsertSampleData = () => {
    insertSampleDataIntoAceEditor()
  }

  return (
    <div style={styles.editorHeader}>
      <span style={styles.sampleDataBtn} onClick={handleInsertSampleData}>Sample</span>
      <BiCopy style={styles.copyBtn} />
    </div>
  )
}
