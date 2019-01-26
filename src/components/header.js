import React from 'react';
// import NavBar from './navbar';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
// import StyledBackgroundSection from './backgroundsection';

import bgImg from '../images/portrait-girl.jpg';

const Header = ({ siteTitle, menuLinks }) => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(255,255,255,0.2)), url(${bgImg})`,
      marginBottom: `1.45rem`,
      height: '100vh',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
    >
    <div
      style={{
        margin: `0 auto`,
        position: 'fixed',
        width: `100%`,
        padding: `0.8rem 1.0875rem`,
        borderBottom: `1px rgba(255,255,255,0.75) solid`
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        {
          menuLinks.map(link => 
            <li key={link.name} style={{ 'listStyleType': 'none', marginBottom: 0 }}>
              <Link to={link.link}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  textAlign: `left`,
                  padding: '20px',
                  fontFamily: 'sans-serif',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}
              >{link.name}</Link>
            </li>
          )
        }  
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header