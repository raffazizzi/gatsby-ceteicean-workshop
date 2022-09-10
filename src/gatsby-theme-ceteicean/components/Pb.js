import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
// import { GatsbyImage } from "gatsby-plugin-image"

import "./pb.css"

const Pb = ({teiNode, facs}) => {
  const pb = teiNode
  const n = pb.getAttribute('n') || ''
  // const facRef = pb.getAttribute('facs') || ''
  // const img = facs.filter(f => f.name === facRef)[0]
  const img = undefined

  let page = undefined

  if (img) {

    // const [expanded, setExpanded] = React.useState(false)
    // const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    //   setExpanded(isExpanded)
    // }

    // const background: JSX.Element | undefined = expanded ? undefined : (<BackgroundImage
    //   image={img.childImageSharp.gatsbyImageData}
    //   alt=""/> ) 

    // // Setting expanded via state stops the Collapse transition from working
    // page = (
    //   <Box sx={{display: "grid"}}>
    //     {background}
    //     <Accordion sx={styles.accordion} onChange={handleChange} expanded={expanded}>
    //       <AccordionSummary
    //         expandIcon={<ExpandMore />}
    //         aria-controls="pb-content"
    //         id="pb-header"
    //       >
    //         {n}
    //       </AccordionSummary>
    //       <AccordionDetails sx={{textAlign: "center"}}>
    //         <GatsbyImage
    //           image={img.childImageSharp.gatsbyImageData}
    //           alt={`Image of page ${n}`}/>
    //       </AccordionDetails>
    //     </Accordion>
    //   </Box>
    // )
  } else if (n) {
    page = <div>Page: {n}</div>
  }

  if (n) {
    return (
      <Behavior node={teiNode}>
        <span className="Pb">{page}</span>
      </Behavior>    
    )
  }
  return null
}

export default Pb
