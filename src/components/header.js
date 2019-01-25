import React from 'react'
import NavBar from './navbar';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <div
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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
