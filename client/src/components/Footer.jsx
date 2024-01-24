import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">PLACEHOLDER</Link>
          </li>
          <li>
            <Link to="/">PLACEHOLDER</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Contact</h3>
        <Link to="/contact-us">
          <p>Contact us through our form</p>
        </Link>
      </div>

      <div className="footer-section disclaimer">
        <p>&copy; 2024 Budget Finance. All Rights Reserved.</p>
        <p>
          <Link to="/terms-of-service">Terms of Service</Link> |{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
