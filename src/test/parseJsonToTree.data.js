export const testJsonData = {
  id: 0,
  type: 'node',
  nodes: [
    {
      id: 1,
      type: 'leaf'
    },
    {
      id: 2,
      type: 'node',
      nodes: [
        {
          id: 4,
          type: 'leaf'
        },
        {
          id: 5,
          type: 'node',
          nodes: [
            {
              id: 8,
              type: 'node',
              nodes: [
                {
                  id: 10,
                  type: 'leaf'
                },
                {
                  id: 11,
                  type: 'leaf'
                }
              ]
            },
            {
              id: 9,
              type: 'leaf'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      type: 'node',
      nodes: [
        {
          id: 6,
          type: 'leaf'
        },
        {
          id: 7,
          type: 'leaf'
        }
      ]
    }
  ]
}
