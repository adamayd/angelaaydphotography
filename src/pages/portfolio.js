import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`Angela Ayd Photography`, `portfolio`]} />
    <div style={{ color: `teal` }}>
      <h1>Angela Ayd Photography Portfolio</h1>
      <p>Some of the latest works of Angela Ayd Photography!!</p>
    </div>
  </Layout>
)

export default Portfolio