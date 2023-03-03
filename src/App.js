// import Tree from "./tree/Tree";
import Tree from "./interfaceBuilderTree/components/Tree";

function App() {
  const treeData = {
    id: 1,
    type: 'node',
    nodes: [
      {
        id: 2,
        type: 'leaf'
      }, {
        id: 3,
        type: 'node',
        nodes: [
          {
            id: 8,
            type: 'leaf'
          }, {
            id: 9,
            type: 'leaf'
          }
        ]
      }, {
        id: 4,
        type: 'node',
        nodes: [
          {
            id: 10,
            type: 'leaf'
          }, {
            id: 11, 
            type: 'leaf'
          }
        ]
      }, {
        id: 5, 
        type: 'node',
        nodes: [
          {id: 12, type: 'leaf'}
        ]
      }, {
        id: 6,
        type: 'node',
        nodes: [
          {id: 13, type: 'leaf'},
          {
            id: 14, 
            type: 'node',
            nodes: [
              {id: 15, type: 'leaf'},
              {id: 16, type: 'leaf'}
            ]
          }
        ]
      }
    ]
  }
  return (
    <div className="App">
      <Tree treeData = {treeData}/>
    </div>
  );
}

export default App;
