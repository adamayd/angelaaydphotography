module.exports = {
  siteMetadata: {
    title: `Angela Ayd Photography`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `Portfolio`,
        link: `/portfolio`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
      {
        name: `About`,
        link: `/about`
      },
      {
        name: `Contact`,
        link: `/contact`
      }
    ],
    description: `Capturing the moments that mean the most`,
    author: `Eleven 23 Studios`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
