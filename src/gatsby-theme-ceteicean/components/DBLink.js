import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"

const DBLink = ({teiNode}) => {
  const link = teiNode
  const href = link.getAttribute('xlink:href') || ''

  if (href) {
    return (
      <Behavior node={teiNode}>
        <a href={href}>{link.textContent}</a>
      </Behavior>    
    )
  }
  return <SafeUnchangedNode/>
}

export default DBLink
