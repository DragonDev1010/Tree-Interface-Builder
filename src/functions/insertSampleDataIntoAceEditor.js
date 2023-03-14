import ace from 'ace-builds/src-noconflict/ace';

const sampleJsonData = `{
  "id": 1,
  "node_value": "label",
  "nodes": [
    {
      "id": 2, 
      "node_value": "input"
    }, {
      "id": 3, 
      "node_value": "button"
    }
  ]
}`

export const insertSampleDataIntoAceEditor = () => {
  const jsonAceEditor = ace.edit('jsonEditor')
  jsonAceEditor.setValue(sampleJsonData)
}