import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import Header from './header';
import Footer from './footer';
import '../css/layout.css'

const Layout = ({ children }) => (
  <Location>
    {({ location }) => (
      <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              description,
              menuLinks {
                name,
                link
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Header 
            menuLinks={data.site.siteMetadata.menuLinks} 
            siteTitle={data.site.siteMetadata.title}
            location={location} 
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
          </div>
          <Footer />
        </>
      )}
    /> 
    )}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
