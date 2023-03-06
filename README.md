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

# Working later
- replace Array.map() with for() in `getIdxOfNodeInArray()` of controlJsonTree.JS
It is to reduce performance, because Array.map() does not support break in loop.
