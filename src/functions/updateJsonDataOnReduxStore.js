import ace from 'ace-builds/src-noconflict/ace';
import jsonDataSchemaValidator from './jsonDataSchemaValidator';
import { loadData } from '../redux/treeSlice';

export const updateJsonDataOnReduxStore = (dispatch) => {
  const jsonAceEditor = ace.edit('jsonEditor')
  const valueOfEditor = jsonAceEditor.getValue()
  const plainTxt = valueOfEditor.replace(/(\r\n|\n|\r)/gm, "")
  const parsedJson = JSON.parse(plainTxt)
  if (jsonDataSchemaValidator(parsedJson))
    dispatch(loadData(parsedJson))
  else {
    alert('editor text is not json data')
  }
}