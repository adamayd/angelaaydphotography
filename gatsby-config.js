module.exports = {
  siteMetadata: {
    title: 'Angela Ayd Photography',
    desc: "Portfolio and Photography Blog",
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!--- end --->`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
<<<<<<< HEAD
    'gatsby-transformer-remark'
=======
    'gatsby-plugin-netlify-cms',
>>>>>>> parent of a4857d5... refactoring to move CMS to contentful
  ],
}
