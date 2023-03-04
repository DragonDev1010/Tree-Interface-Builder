import { useSelector, useDispatch } from "react-redux";
import Tree from "./interfaceBuilderTree/components/Tree";

function App() {
  const treeJsonData = useSelector((state) => state.tree)
  return (
    <div className="App">
      <Tree treeData = {treeJsonData}/>
    </div>
  );
}

export default App;
