import React from 'react';
import Img from 'gatsby-image';

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <Img sizes={data.background.sizes} />
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Welcome to our new Gatsby site.</p>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/portrait-girl.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;