import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="About" keywords={[`Angela Ayd Photography`, `about`]} />
    <div style={{ color: `teal` }}>
      <h1>About Angela Ayd Photography</h1>
      <p>She is a great photographer!!</p>
    </div>
  </Layout>
)