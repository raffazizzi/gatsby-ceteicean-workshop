import React from "react"
import "./popup.css"

const Popup = ({ title, toggle, children }) => {

  return (<div className="Popup">
      <h2>{title}</h2>
      <span className="Close" onClick={toggle}>X</span>
      {children}
    </div>)
}

export default Popup