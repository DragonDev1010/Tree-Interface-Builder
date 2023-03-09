import { loadData } from "../redux/treeSlice"
export default function retrieve_tree_view_api(dispatch) {
  fetch(
    'http://localhost:8080',
    { headers: { 'Access-Control-Allow-Origin': "*" } }
  )
    .then(res => res.json())
    .then(data => {
      dispatch(loadData(data))
    })
}