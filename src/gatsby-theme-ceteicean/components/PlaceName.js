import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"
import Popup from "../../components/popup"

import "./placename.css"

const PlaceName = (props) => {
  
  const placeName = props.teiNode
  const target = placeName.getAttribute("ref")
  const id = target.replace('#', '')
  const place = placeName.ownerDocument.getElementById(id)

  let placeText = placeName.textContent

  const [popupOn, setPopupOn] = React.useState(false)
  let popup = null

  const togglePopup = () => {
    setPopupOn(!popupOn)
  }

  if (popupOn) {
    popup = <Popup toggle={togglePopup} title={placeText}>
      <TEINodes 
        teiNodes={place.childNodes}
        {...props}/>
    </Popup>
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
