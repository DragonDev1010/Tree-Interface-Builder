## Move up item in the Tree
example:
```
  itemArray.splice(
    idxOfItem - 1,
    0,
    itemArray.splice(
      idxOfItem, 
      1
    )[0]
  )
```
## Move down item in the Tree
```
  itemArray.splice(
    idxOfItem + 1,
    0,
    itemArray.splice(
      idxOfItem, 
      1
    )[0]
  );
```

# Bug fix
## Sending JSON data to API
- setting header of fetch()
```
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
```

# Working later
- replace Array.map() with for() in `getIdxOfNodeInArray()` of controlJsonTree.JS
It is to reduce performance, because Array.map() does not support break in loop.

## color pallete
https://coolors.co/palette/ede0d4-e6ccb2-ddb892-b08968-7f5539-9c6644
