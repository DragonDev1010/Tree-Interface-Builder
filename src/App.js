import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import Tree from "./interfaceBuilderTree/components/Tree";
import { loadData } from './redux/treeSlice';

function App() {
  const dispatch = useDispatch()
  var treeJsonData = useSelector((state) => state.tree)

  const saveNewTreeView = () => {
    console.log(treeJsonData)
    fetch(
      'http://localhost:8080/save',
      { 
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': "*",
          "Content-Type": "application/json"
        } ,
        body: JSON.stringify(treeJsonData)
      }
    )
      .then(res => res.json())
      .catch(err => {console.log(err)})
  }

  useEffect(() => {
    fetch(
      'http://localhost:8080',
      { headers: {'Access-Control-Allow-Origin': "*"} }
    )
      .then(res => res.json())
      .then(data => {
        dispatch(loadData(data))
      })
  }, [])

  return (
    <div className="App">
      <Tree treeData = {treeJsonData}/>
      <button onClick={saveNewTreeView}>Save New Tree View</button>
    </div>
  );
}

export default App;
