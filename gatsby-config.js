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
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
