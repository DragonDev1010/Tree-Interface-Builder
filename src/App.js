import JsonDataView from "./components/jsonDataView/JsonDataView";
import ControlPanel from "./components/controlPanel/ControlPanel";
import TreeUiView from "./components/treeUiView/TreeUiView";
import Header from "./components/header/Header";

function App() {
  const styles = {
    bodyCotainer: {
      height: 'calc(100vh - 100px)',
      width: '100%',
      display: 'flex',
      background: '#EDE0D4',
      padding: 20
    }
  }

  return (
    <>
      <Header />
      <div style={styles.bodyCotainer}>
        <JsonDataView/>
        <ControlPanel/>
        <TreeUiView />
      </div>
    </>
  );
}

export default App;
