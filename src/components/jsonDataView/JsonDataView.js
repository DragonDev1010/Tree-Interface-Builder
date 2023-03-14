import React, { useEffect, useRef } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";

export default function JsonDataView(props) {
  const styles = {
    container: {
      width: '40%',
      background: 'white',
      border: 'none',
      boxShadow: `0 0 5px 2px rgba(0, 0, 0, 0.3)`
    }
  }

  return (
    <div style={styles.container}>
      <AceEditor 
        style={{width: '100%', height: '100%'}}
        name='jsonEditor'
        mode='json'
        ref = {props.jsonEditorRef}
      />
    </div>
  );
}
