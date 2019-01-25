import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="Blog" keywords={[`Angela Ayd Photography`, `blog`]} />
    <div style={{ color: `teal` }}>
      <h1>Angela Ayd Photography Blog</h1>
      <p>Blogging about things in the photography-sphere</p>
    </div>
  </Layout>
)