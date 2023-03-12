import { useSelector } from "react-redux";
import Tree from "./interfaceBuilderTree/components/Tree";

function App() {
  var treeJsonData = useSelector((state) => state.tree)

  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div style={{ width: '60%' }}>
        <Tree treeData={treeJsonData} />
      </div>
    </div>
  );
}

export default App;
