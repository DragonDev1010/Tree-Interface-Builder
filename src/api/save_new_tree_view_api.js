export default function save_new_tree_view_api(reqBody) {
  fetch(
    process.env.REACT_APP_API_URL + 'save',
    {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    }
  )
    .then(res => res.json())
    .catch(err => { console.log(err) })
}

