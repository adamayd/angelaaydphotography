import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`Angela Ayd Photography`, `portfolio`]} />
    <div style={{ color: `teal` }}>
      <h1>Angela Ayd Photography Portfolio</h1>
      <p>Some of the latest works of Angela Ayd Photography!!</p>
      <Image/>
    </div>
  </Layout>
)

export default Portfolio

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `