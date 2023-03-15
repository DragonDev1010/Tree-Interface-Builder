import React from 'react'
import { useDispatch } from 'react-redux'
import { moveUp, moveDown, moveLeft, moveRight } from '../../redux/treeSlice'
import {AiFillDownCircle, AiFillUpCircle, AiFillRightCircle, AiFillLeftCircle} from 'react-icons/ai'

export default function TreeNodeElementControlPanel(props) {

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 15,
      opacity: props.isHovered ? 1 : 0,
    },
    movingPanelContainer: {
      width: 60,
      height: 60,
      textAlign: 'center'
    },
    updatePanelContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: 60,
      justifyContent: 'space-around'
    },
    buttonStyle: {
      border: '1px solid #7F5539',
      background: '#9C6644',
      color: 'white',
      fontSize: 15
    },
    movingArrow: {
      width: 20,
      height: 20,
      cursor: 'pointer',
      fill: '#7F5539'
    }
  }

  const dispatch = useDispatch()

  return (
    <div style={styles.container}>
      <div style={styles.movingPanelContainer}>
        <AiFillUpCircle
          onClick={() => dispatch(moveUp(props.node.id))}
          style = {styles.movingArrow}
        />
        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>
          <AiFillLeftCircle
            onClick={() => dispatch(moveLeft(props.node))}
            style = {styles.movingArrow}
          />
          <AiFillRightCircle
            onClick={() => dispatch(moveRight(props.node))}
            style = {styles.movingArrow}
          />
        </div>
        <AiFillDownCircle
          onClick={() => dispatch(moveDown(props.node.id))}
          style = {styles.movingArrow}
        />
      </div>
      {/* <div style={styles.updatePanelContainer}>
        <button onClick={() => dispatch(createChild(props.node.id))} style={styles.buttonStyle}>Create</button>
        <button onClick={() => dispatch(deleteChild(props.node.id))} style={styles.buttonStyle}>Delete</button>
      </div> */}
    </div>
  )
}
