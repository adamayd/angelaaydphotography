import React from 'react';
import '../css/footer.css';

const Footer = () => (
  <div 
  style={{
    backgroundColor: 'lightgrey'
  }}
  >
    <footer 
      style={{
        margin: '0 auto',
        maxWidth: '960px',
        padding: '1rem',
      }}
    >
      <div className="footer-col">
        <h4>About Me</h4>
        <p>Lorem ipsum dolor sit amet, consectectuer adipiscing elit. Aenean commodo.</p>
      </div>
      <div className="footer-col">
        <h4>Phone &amp; Fax</h4>
        <ul>
          <li>Mon-Fri: 8:00-19:00</li>
          <li>Sat-Sun: 8:00-14:00</li>
        </ul>
        <ul>
          <li>443-555-1234</li>
          <li>443-555-1234</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Address</h4>
        <ul>
          <li>123 Main Street</li>
          <li>Suite 200</li>
          <li>Baltimore, MD</li>
          <li>21201</li>
        </ul>
      </div>
      <div className="footer-col">
        <p>Enter Your Email Address</p>
        <button>Submit</button>
      </div>
    </footer>
    <hr/>
      <div className="copyright">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </div>
  </div>
)

export default Footer
