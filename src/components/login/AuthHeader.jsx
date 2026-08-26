import { Link } from "react-router-dom";

function AuthHeader() {
  return (
    <header className="auth-header">
      <Link to="/about" className="auth-logo">
        <span className="logo-icon">⚖️</span>
        <span className="logo-text">Legal<span className="logo-accent">Ease</span></span>
      </Link>

      <Link to="/about" className="auth-back-link">
        <span className="back-arrow">←</span>
        <span>Back to Home</span>
      </Link>
    </header>
  );
}

export default AuthHeader;
