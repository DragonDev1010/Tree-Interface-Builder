import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { BiCopy } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import ace from 'ace-builds/src-noconflict/ace';
import { insertSampleDataIntoAceEditor } from '../../functions/insertSampleDataIntoAceEditor'
import { loadData } from '../../redux/treeSlice';

export default function ViewHeader(props) {
  const styles = {
    editorHeader: {
      background: 'var(--background-color)',
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
  const dispatch = useDispatch()
  const [copied, setCopied] = useState(false)

  
  const handleInsertSampleData = () => {
    insertSampleDataIntoAceEditor()
  }

  const handleCopy = () => {
    const jsonAceEditor = ace.edit('jsonEditor')
    const jsonData = jsonAceEditor.getValue()
    navigator.clipboard.writeText(jsonData)
      .then(() => {
        setCopied(true)
        setTimeout(() => { setCopied(false) }, 1500)
      })
      .catch((err) => {
        console.error(`Failed to copy ${jsonData} to clipboard: `, err);
      });
  }

  const handleClear = () => {
    dispatch(loadData(null))
  }

  return (
    <div style={styles.editorHeader}>
      <span style={styles.sampleDataBtn} onClick={handleInsertSampleData}>Sample</span>
      {
        copied ?
          <p>Copied!</p>
          :
          <BiCopy style={styles.copyBtn} onClick={handleCopy} />
      }
      <RiDeleteBin5Line style={styles.copyBtn} onClick={handleClear} />
    </div>
  )
}
