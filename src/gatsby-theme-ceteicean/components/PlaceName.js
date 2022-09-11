import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import Popup from "../../components/popup"

import "./placename.css"

const PlaceName = (props) => {
  
  const placeName = props.teiNode
  const placeText = placeName.textContent
  
  // TODO: Find referenced place element.

  const [popupOn, setPopupOn] = React.useState(false)
  let popup = null

  const togglePopup = () => {
    setPopupOn(!popupOn)
  }

  if (popupOn) {
    // TODO: Add the content of the referenced place element.
    popup = <Popup toggle={togglePopup} title={placeText}/>
  }

  return <Behavior node={props.teiNode}>
    <span onClick={togglePopup} className="PlaceName">
      <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/>
    </span>
    {popup}
  </Behavior>
}

export default PlaceName
