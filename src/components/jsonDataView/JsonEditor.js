import React from 'react'
import { useSelector } from 'react-redux';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";
import { getFormattedJsonString } from '../../functions/getFormattedJsonString';

export default function JsonEditor(props) {
  var treeJsonData = useSelector((state) => state.tree)
  return (
    <AceEditor
      style={{ width: '100%', height: 'calc(100% - 50px)' }}
      name='jsonEditor'
      mode='json'
      value={getFormattedJsonString(treeJsonData, 4)}
    />
  )
}
