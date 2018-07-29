module.exports = {
  siteMetadata: {
    title: 'Angela Ayd Photography',
    desc: "Portfolio and Photography Blog",
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "b29ircqr37nb",
        accessToken: "244aaf2859a3422f81491b9b3ff779e132bf7dcd6664f65540e5218405c3bcc0"
      }
    },
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
