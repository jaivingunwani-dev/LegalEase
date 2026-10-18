import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-logo">
            Legal<span className="footer-logo-accent">Ease</span>
          </p>
          <p className="footer-tagline">
            Connecting clients with the right lawyer, simply.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/search" className="footer-link">
            Find a Lawyer
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </div>
      </div>

      <p className="footer-copyright">
        © 2026 LegalEase. A student project — not a real legal service.
      </p>
    </footer>
  );
}

export default Footer;
