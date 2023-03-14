import ViewHeader from './ViewHeader';
import JsonEditor from './JsonEditor';

export default function JsonDataView(props) {
  const styles = {
    container: {
      width: '40%',
      background: 'white',
      border: 'none',
      boxShadow: `0 0 5px 2px rgba(0, 0, 0, 0.3)`
    }
  }

  return (
    <div style={styles.container}>
      <ViewHeader />
      <JsonEditor />
    </div>
  );
}
