import React from "react"
import Ceteicean from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
// import Pb from "./Pb"
// import Note from "./Note"
// import PlaceName from "./PlaceName"
import DBLink from "./DBLink"
import Layout from "../../components/layout"

// import "./ceteicean.css"
// import "./style.css"

const MyCeteicean = ({pageContext}) => {

  const routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    // "tei-note": Note,
    // "tei-placename": PlaceName,
    // "tei-pb": Pb,
    // DocBook Components
    "db-link": DBLink
  }

  return(
    <Layout>
      <Ceteicean pageContext={pageContext} routes={routes} />
    </Layout>
  )

}

export default MyCeteicean
