import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Tree from "./interfaceBuilderTree/components/Tree";
import save_new_tree_view_api from './api/save_new_tree_view_api';
import retrieve_tree_view_api from './api/retrieve_tree_view_api';

function App() {
  const dispatch = useDispatch()
  var treeJsonData = useSelector((state) => state.tree)

  const saveNewTreeView = () => {
    save_new_tree_view_api(treeJsonData)
  }

  useEffect(() => {
    retrieve_tree_view_api(dispatch)
  }, [])

  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div style={{ width: '60%' }}>
        <Tree treeData={treeJsonData} />
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button onClick={saveNewTreeView} style={{ width: 200, height: 50 }}>Save New Tree View</button>
      </div>
    </div>
  );
}

export default App;
