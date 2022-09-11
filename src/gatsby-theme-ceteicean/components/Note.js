import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"

import "./note.css"

const Note = ({teiNode}) => {

  const note = teiNode
  const n = note.getAttribute('n') || ''
  const text = note.textContent

  // TODO:
  //
  // Add a popup (../../components/popup) to showed the content of the note
  // Use React.useState() to manage its visibility.

  return <Behavior node={teiNode}>
    <sup className="Note">{n}</sup>
  </Behavior>
}

export default Note
