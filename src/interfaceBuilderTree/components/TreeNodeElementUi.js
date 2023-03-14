import React from 'react'
import { convertJsonNodeValueToUi } from '../../functions/convertJsonNodeValueToUi'

export default function TreeNodeElementUi(props) {
  const htmlDomStr = convertJsonNodeValueToUi(props.node)
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlDomStr }} ></div>
  )
}
