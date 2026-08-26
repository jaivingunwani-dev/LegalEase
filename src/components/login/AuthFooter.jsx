import { Link } from "react-router-dom";

function AuthFooter({ activeRole, onSignUpClick }) {
  const isLawyer = activeRole === "lawyer";

  return (
    <footer className="auth-card-footer">
      <div className="signup-prompt">
        <span>
          {isLawyer
            ? "New advocate to LegalEase? "
            : "Don't have a LegalEase account? "}
        </span>
        <button
          type="button"
          className="signup-link-btn"
          onClick={onSignUpClick}
        >
          {isLawyer ? "Register Your Practice" : "Create an Account"}
        </button>
      </div>

      <div className="auth-legal-links">
        <span className="secure-badge">🛡️ 256-Bit Encrypted & Compliant</span>
        <div className="policy-links">
          <Link to="/about" className="policy-link">Terms</Link>
          <span className="policy-separator">•</span>
          <Link to="/about" className="policy-link">Privacy</Link>
          <span className="policy-separator">•</span>
          <Link to="/how-it-works" className="policy-link">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default AuthFooter;
