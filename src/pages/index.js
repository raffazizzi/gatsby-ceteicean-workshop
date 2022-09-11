import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Index = () => {

  // TODO: Create a TOC of TEI files.

  return (
    <Layout location="home">
      <h2>My edition</h2>
      <div>
        <h3>Documents:</h3>
        <Link to="example">Example</Link>
      </div>
    </Layout>
  )
}

export default Index
