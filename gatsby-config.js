/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jose Riano Web Developer",
    description: "Jose Riano, Web Developer, Front End Developer, Software Developer",
    url: "https://joseriano.com",
    image: "/avatar.png",
    twitterUsername: "@joselriano",
    author: "Jose L Riano"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-fontawesome-css`
  ]
}
