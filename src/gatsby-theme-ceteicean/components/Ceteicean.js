import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Layout from "../../components/layout"

import "./ceteicean.css"
import "./style.css"

const MyCeteicean = ({pageContext}) => {

  // TODO: Add components for pb, note, and placeName

  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
  }

  return(
    <Layout>
      <Ceteicean pageContext={pageContext} routes={routes} />
    </Layout>
  )

}

export default MyCeteicean
