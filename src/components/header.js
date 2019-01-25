import React from 'react'
// import NavBar from './navbar';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle, menuLinks }) => (
  /*<div
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          textAlign: `left`
        }}
      >
        <h3>AAP</h3>
      </Link>
      <NavBar/>
    </div>
  </div> */
  <nav style={{ display: 'flex', flex: 1 }}>
    {
      menuLinks.map(link => 
        <li key={link.name} style={{ 'listStyleType': 'none' }}>
          <Link to={link.link}>{link.name}</Link>
        </li>)
    }  
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
