import React from 'react'
import { useDispatch } from 'react-redux'
import { moveUp, moveDown, moveLeft, moveRight, createChild, deleteChild } from '../../redux/treeSlice'
import { GoChevronDown, GoChevronLeft, GoChevronRight, GoChevronUp, GoPlus, GoTrashcan } from 'react-icons/go'

export default function TreeNodeElement(props) {
  const dispatch = useDispatch()
  const styles = {
    buttonStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
  return (
    <div
      style={{
        width: 200,
        border: '1px solid blue',
        padding: '5px 30px',
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: 5
        }}
      >
        <span>ID : {props.node.id} : {props.node.value}</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <button onClick={() => dispatch(moveUp(props.node.id))} style={styles.buttonStyle}>
          <GoChevronUp />
        </button>
        <button onClick={() => dispatch(moveDown(props.node.id))} style={styles.buttonStyle}>
          <GoChevronDown />
        </button>
        <button onClick={() => dispatch(moveLeft(props.node))} style={styles.buttonStyle}>
          <GoChevronLeft />
        </button>
        <button onClick={() => dispatch(moveRight(props.node))} style={styles.buttonStyle}>
          <GoChevronRight />
        </button>
        <button onClick={() => dispatch(createChild(props.node.id))} style={styles.buttonStyle}>
          <GoPlus />
        </button>
        <button onClick={() => dispatch(deleteChild(props.node.id))} style={styles.buttonStyle}>
          <GoTrashcan />
        </button>
      </div>
    </div >
  )
}
