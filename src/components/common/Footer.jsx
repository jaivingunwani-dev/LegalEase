import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <Logo size="medium" showTagline={true} />
          <p className="footer-tagline">
            Connecting clients with verified, top-tier attorneys. Transparent
            credentials, direct consultation, and trusted legal guidance.
          </p>
        </div>

        <div className="footer-nav-grid">
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Platform</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/search" className="footer-link">
                Find a Lawyer
              </Link>
              <Link to="/guides" className="footer-link">
                Legal Guides & FAQ
              </Link>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Practice Areas</h4>
            <div className="footer-links">
              <Link to="/search" className="footer-link">
                Criminal Defense
              </Link>
              <Link to="/search" className="footer-link">
                Corporate Law
              </Link>
              <Link to="/search" className="footer-link">
                Family & Custody
              </Link>
              <Link to="/search" className="footer-link">
                Intellectual Property
              </Link>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Account</h4>
            <div className="footer-links">
              <Link to="/login" className="footer-link">
                Client Sign In
              </Link>
              <Link to="/login" className="footer-link">
                Lawyer Portal
              </Link>
              <Link to="/login" className="footer-link">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} LegalEase. All rights reserved. Connecting you to verified legal professionals.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
