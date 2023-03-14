import React, {useState} from 'react'
import TreeNodeElementControlPanel from './TreeNodeElementControlPanel'

export default function TreeNodeElement(props) {
  const styles = {
    container: {
      borderRadius: 10,
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    },
    buttonStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    controlPanelContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => { setIsHovered(true) }

  const handleMouseLeave = () => { setIsHovered(false) }

  return (
    <div 
      style={styles.container} 
      onMouseEnter = {handleHover}
      onMouseLeave = {handleMouseLeave}
    >
      <TreeNodeElementControlPanel isHovered = {isHovered} node={props.node}/>
      <div style={{ textAlign: 'center', padding: 5, border: '1px solid #E6CCB2', cursor: 'pointer'}} >
        <span>ID : {props.node.id} : {props.node.value}</span>
      </div>
    </div >
  )
}
