import React from 'react';
// import NavBar from './navbar';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
// import StyledBackgroundSection from './backgroundsection';
import bgImg from '../images/portrait-girl.jpg';

const Header = ({ menuLinks, location }) => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(255,255,255,0.2)), url(${bgImg})`,
      marginBottom: `1.45rem`,
      height: location.pathname === "/" ? '100vh' : '25vh',
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
        borderBottom: `1px rgba(0,0,0,0.75) solid`,
        backgroundColor: 'white',
        zIndex: `3`
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        {
          menuLinks.map(link => 
            <li key={link.name} style={{ 'listStyleType': 'none', marginBottom: 0 }}>
              <Link to={link.link}
                style={{
                  color: `black`,
                  textDecoration: `none`,
                  textAlign: `left`,
                  padding: '20px',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  fontFamily: `'Amatic SC', sans-serif`
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
  location: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.shape).isRequired
}

export default Header
