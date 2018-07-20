import React from 'react';
import PostListing from '../components/postlisting';

const IndexPage = ({data}) => (
  <div>
    {/* <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p> */}
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key= {node.id} post={node} />
    ))}
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;