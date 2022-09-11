import React from "react"

import Head from "./head"
import Nav from "./nav"

import "./layout.css"

const Layout = ({ location, children }) => {
  return (
    <>
      <Head title=""/>
      <Nav location={location || ''} title="" menuLinks={[]} />
      <main className="Content">{children}</main>
      <footer className="Footer">Gastby CETEIcean Workshop - TEI Members Meeting and Conference 2022 - Code license: MIT - Contents license: CC-A-NC-SA 4.0</footer>
    </>
  )
}

export default Layout
