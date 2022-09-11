const {applyxslt} = require('./scripts/applyxslt')

module.exports = {
  siteMetadata: {
    title: `Gatsby CETEIcean Workshop`,
    menuLinks: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About",
        link: "/about"
      }
    ]
  },
  // TODO: Add plugins
  // gatsby-theme-ceteicean
  // and gatsby-source-filesystem reading files from static/tei
}
