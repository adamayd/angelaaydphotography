import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <div>
      <ul style={{
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}>
        <li>
          <Link to="/" style={{ fontFamily: `'Amatic SC', sans-serif` }}>Homer</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar