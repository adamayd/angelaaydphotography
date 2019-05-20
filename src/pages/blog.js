import React from 'react';
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`Angela Ayd Photography`, `blog`]} />
    <div>
      <h1>Angela Ayd Photography Blog</h1>
      <p>Blogging about things in the photography-sphere</p>
      <ul>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <Link to={edge.node.frontmatter.path}>
                <h2>{edge.node.frontmatter.title} <span style={{ fontSize: `0.7em` }}>{edge.node.frontmatter.date}</span></h2>            
                <p>{edge.node.excerpt}</p>
              </Link>
            </li>
        )})}
      </ul>
    </div>
  </Layout>
)

export default Blog

Blog.propTypes = {
  data: PropTypes.node.isRequired
}

export const postsQuery = graphql`
  query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
        }
        excerpt
      }
    }
  }
}
`