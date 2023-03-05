import React from 'react'
import { useDispatch } from 'react-redux'
import { moveUp, moveDown, moveLeft, moveRight } from '../../redux/treeSlice'

export default function TreeNodeElement(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <span>ID : {props.node.id} : {props.node.type}</span>
      <button onClick={() => dispatch(moveUp(props.node.id))}>Up</button>
      <button onClick={() => dispatch(moveDown(props.node.id))}>Down</button>
      <button onClick={() => dispatch(moveLeft(props.node))}>Left</button>
      <button onClick={() => dispatch(moveRight(props.node))}>Right</button>
    </div>
  )
}
