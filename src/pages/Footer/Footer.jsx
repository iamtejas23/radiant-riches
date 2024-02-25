import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Categories</h3>
          <p>Web Builder</p>
          <p>Data Center</p>
          <p>Hosting</p>
          <p>Robotic-Automation</p>
          {/* Add your content for Categories section here */}
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Categories</p>
          <p>About</p>
          {/* Add your content for Contact section here */}
        </div>
        <div className="footer-section">
          <h3>United States</h3>
          {/* Add your content for Web Builder section here */}
        </div>
        {/* Add more sections as needed */}
      </div>
    </footer>
  );
}

export default Footer;
