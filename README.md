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


