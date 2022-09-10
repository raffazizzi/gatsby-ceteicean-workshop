import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
// import { GatsbyImage } from "gatsby-plugin-image"
import Popup from "../../components/popup"

import "./note.css"

const Note = ({teiNode}) => {

  const note = teiNode
  const n = note.getAttribute('n') || ''
  const text = note.textContent

  const [popupOn, setPopupOn] = React.useState(false)
  let popup = null

  const togglePopup = () => {
    setPopupOn(!popupOn)
  }

  if (popupOn) {
    popup = <Popup toggle={togglePopup} title={`Note ${n}`}>{text}</Popup>
  }

  return <Behavior node={teiNode}>
    <sup className="Note" onClick={togglePopup}>{n}</sup>
    {popup}
  </Behavior>
}

export default Note
