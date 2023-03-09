import { loadData } from "../redux/treeSlice"
export default function retrieve_tree_view_api(dispatch) {
  fetch(
    process.env.REACT_APP_API_URL,
    { headers: { 'Access-Control-Allow-Origin': "*" } }
  )
    .then(res => res.json())
    .then(data => {
      dispatch(loadData(data))
    })
}