import React from "react"
import { Link } from "gatsby"
import "./nav.css"

const Nav = ({ location, title, menuLinks }) => {
  console.log(location)
  return (
    <div className="Nav">
      <h1>{title}</h1>
      <ul>
        {menuLinks.map(m => (
          <li key={m.name} className={location === m.name.toLowerCase() ? 'active' : ''}>
            <Link to={m.link}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav