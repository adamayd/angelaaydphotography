import React from 'react'
// import NavBar from './navbar';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle, menuLinks }) => (
  <div
    style={{
      background: `teal`,
      marginBottom: `1.45rem`
    }}
    >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.8rem 1.0875rem`,
      }}
    >
      <nav style={{ display: 'flex', justifyContent: 'center', }}>
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
