import React from 'react'

export default function TreeNodeElement(props) {
  return (
    <div>
      <span>ID : {props.node.id}</span>
      <button>Up</button>
      <button>Down</button>
      <button>Left</button>
      <button>Right</button>
    </div>
  )
}
