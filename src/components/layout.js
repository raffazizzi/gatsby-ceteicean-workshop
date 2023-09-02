import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Head from "./head"
import Nav from "./nav"

import "./layout.css"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const {title, menuLinks} = data.site.siteMetadata
  return (
    <>
      <Head title={title}/>
      <Nav location={location || ''} title={title} menuLinks={menuLinks} />
      <main className="Content">{children}</main>
      <footer className="Footer">Gastby CETEIcean Workshop - Joint MEC and TEI Conference 2023 - Code license: MIT - Contents license: CC-A-NC-SA 4.0</footer>
    </>
  )
}

export default Layout
