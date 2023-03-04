import React from 'react'
import { useDispatch } from 'react-redux'
import { moveUp, moveDown } from '../../redux/treeSlice'

export default function TreeNodeElement(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <span>ID : {props.node.id} : {props.node.type}</span>
      <button onClick={() => dispatch(moveUp(props.node.id))}>Up</button>
      <button onClick={() => dispatch(moveDown(props.node.id))}>Down</button>
      <button>Left</button>
      <button>Right</button>
    </div>
  )
}
