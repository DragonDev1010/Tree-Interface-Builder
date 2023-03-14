import React from 'react'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";

export default function JsonEditor(props) {
  return (
    <AceEditor
      style={{ width: '100%', height: 'calc(100% - 50px)' }}
      name='jsonEditor'
      mode='json'
    />
  )
}
