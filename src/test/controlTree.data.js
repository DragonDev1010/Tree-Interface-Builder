export const testControlTreeData = [
  { id: 1, parent: null, type: 'node', children: [2, 3, 4, 5, 6], siblings: [null, null] },
  { id: 2, parent: 1, type: 'leaf', children: null, siblings: [ null, 3 ] },
  { id: 3, parent: 1, type: 'node', children: [ 8, 9 ], siblings: [ 2, 4 ] },
  { id: 4, parent: 1, type: 'node', children: [ 10, 11 ], siblings: [ 3, 5 ] },
  { id: 5, parent: 1, type: 'node', children: [ 12 ], siblings: [ 4, 6 ] },
  { id: 6, parent: 1, type: 'node', children: [ 13, 14 ], siblings: [ 5, null ] },
  { id: 8, parent: 3, type: 'leaf', children: null, siblings: [ null, 9 ] },
  { id: 9, parent: 3, type: 'leaf', children: null, siblings: [ 8, null ] },
  { id: 10, parent: 4, type: 'leaf', children: null, siblings: [ null, 11 ] },
  { id: 11, parent: 4, type: 'leaf', children: null, siblings: [ 10, null ] },
  { id: 12, parent: 5, type: 'leaf', children: null, siblings: [ null, null ] },
  { id: 13, parent: 6, type: 'leaf', children: null, siblings: [ null, 14 ] },
  { id: 14, parent: 6, type: 'node', children: [ 15, 16 ], siblings: [ 13, null ] },
  { id: 15, parent: 14, type: 'leaf', children: null, siblings: [ null, 16 ] },
  { id: 16, parent: 14, type: 'leaf', children: null, siblings: [ 15, null ] },
]

export const treeObjectTestData = {
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
        {id: 8, type: 'leaf'},
        {id: 9, type: 'leaf'}
      ]
    }, {
      id: 4,
      type: 'node',
      nodes: [
        {id: 10, type: 'leaf'},
        {id: 11, type: 'leaf'}
      ]
    }, {
      id: 5,
      type: 'node',
      nodes: [ {id: 12, type: 'leaf'} ]
    }, {
      id: 6,
      type: 'node',
      nodes: [
        { id: 13, type: 'leaf'},
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