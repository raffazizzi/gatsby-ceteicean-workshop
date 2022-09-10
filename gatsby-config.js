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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
  ],
}
