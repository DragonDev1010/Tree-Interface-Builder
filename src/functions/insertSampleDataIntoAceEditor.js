import ace from 'ace-builds/src-noconflict/ace';

const sampleJsonData = `{
  "id": 1,
  "node_value": {
    "type": "label",
    "value": "User Sign Up"
  },
  "nodes": [
    {
      "id": 2, 
      "node_value": {
          "type": "label",
          "value": "Name"
      },
      "nodes": [
          {
              "id": 5,
              "node_value": {
                  "type": "text-input",
                  "value": "First Name"
              }
          }, {
              "id": 6,
              "node_value": {
                  "type": "text-input",
                  "value": "Last Name"
              }
          }
        ]
    }, {
      "id": 3, 
      "node_value": {
          "type": "text-input",
          "value": "Email Address"
      },
      "nodes": []
    }, {
        "id": 4,
        "node_value": {
            "type": "button",
            "value": "Sign Up"
        }
    }
  ]
}`
export const insertSampleDataIntoAceEditor = () => {
  const jsonAceEditor = ace.edit('jsonEditor')
  jsonAceEditor.setValue(sampleJsonData)
}