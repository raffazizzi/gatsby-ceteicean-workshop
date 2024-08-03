// const {applyxslt} = require('./scripts/applyxslt')

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
  plugins: [
    `gatsby-theme-ceteicean`,
    // ADVANCED USE EXAMPLE BELOW:
    // {
    //   resolve: `gatsby-theme-ceteicean`,
    //   options: {
    //     applyBefore: [(obj) => applyxslt(obj, "notenumbers.sef.json")],
    //     applyAfter: [],
    //     namespaces: {
    //       "http://www.tei-c.org/ns/1.0": "tei",
    //       "http://www.tei-c.org/ns/Examples": "teieg",
    //       "http://www.w3.org/2001/XInclude": "xi"
    //     }
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
  ],
}
