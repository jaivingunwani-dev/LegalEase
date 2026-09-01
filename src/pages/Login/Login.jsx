import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import Button from "../../components/common/Button.jsx";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("client"); // "client" | "lawyer"
  const [authMode, setAuthMode] = useState("signin"); // "signin" | "register"
  
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [barNumber, setBarNumber] = useState("");
  const [practiceArea, setPracticeArea] = useState("Criminal Defense");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Status & states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  function handleDemoLogin(role) {
    setIsSubmitting(true);
    setErrorMsg("");

    setTimeout(() => {
      setIsSubmitting(false);
      if (role === "client") {
        setLoggedInUser({
          name: "Eleanor Vance",
          email: "eleanor.vance@example.com",
          role: "Client",
          avatar: "EV"
        });
      } else {
        setUserRole("lawyer");
        setLoggedInUser({
          name: "Marcus Sterling, Esq.",
          email: "m.sterling@legalease.com",
          role: "Verified Attorney",
          barNumber: "CA-984210",
          avatar: "MS"
        });
      }
    }, 600);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please provide both email and password.");
      return;
    }

    if (authMode === "register" && !name.trim()) {
      setErrorMsg("Please enter your full legal name.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setLoggedInUser({
        name: name.trim() || (userRole === "lawyer" ? "Counselor " + email.split("@")[0] : email.split("@")[0]),
        email: email.trim(),
        role: userRole === "lawyer" ? "Verified Attorney" : "Client",
        barNumber: userRole === "lawyer" ? barNumber || "NY-552914" : null,
        avatar: (name.trim() || email.slice(0, 2)).toUpperCase()
      });
    }, 800);
  }

  function handleLogout() {
    setLoggedInUser(null);
    setEmail("");
    setPassword("");
    setName("");
  }

  function handleForgotSubmit(e) {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSubmitted(true);
    setTimeout(() => {
      setForgotSubmitted(false);
      setShowForgotModal(false);
      setForgotEmail("");
    }, 2500);
  }

  return (
    <div className="login-page">
      <div className="container login-container">
        {/* If already logged in: Display Interactive Session Card */}
        {loggedInUser ? (
          <div className="login-success-card">
            <div className="success-icon-badge">✓</div>
            <h2>Welcome Back, {loggedInUser.name}!</h2>
            <p className="success-sub">
              You are currently authenticated as a{" "}
              <strong className="text-gold">{loggedInUser.role}</strong>.
            </p>

            <div className="user-profile-preview">
              <div className="user-avatar-circle">{loggedInUser.avatar}</div>
              <div className="user-details">
                <p className="user-name-title">{loggedInUser.name}</p>
                <p className="user-email-text">{loggedInUser.email}</p>
                {loggedInUser.barNumber && (
                  <p className="user-bar-text">
                    Bar Registration: {loggedInUser.barNumber} (Verified)
                  </p>
                )}
              </div>
            </div>

            <div className="success-actions">
              {loggedInUser.role === "Verified Attorney" ? (
                <Button onClick={() => navigate("/search")}>
                  Browse Client Inquiries
                </Button>
              ) : (
                <Button onClick={() => navigate("/search")}>
                  Find & Consult Lawyers
                </Button>
              )}
              <Button variant="outline" onClick={handleLogout}>
                Sign Out
              </Button>
            </div>
          </div>
        ) : (
          /* Main Authentication Card */
          <div className="auth-card">
            <div className="auth-card-header">
              <div className="auth-logo-center">
                <Link to="/" className="auth-brand-link">
                  <img src={logoImg} alt="LegalEase Logo" className="auth-brand-logo" />
                  <div className="auth-brand-text">
                    <span className="auth-brand-name">
                      Legal<span className="brand-accent">Ease</span>
                    </span>
                    <span className="auth-brand-tagline">Verified Legal Access</span>
                  </div>
                </Link>
              </div>
              
              {/* Role Switcher Tab: Client vs Lawyer */}
              <div className="role-switcher">
                <button
                  type="button"
                  className={`role-btn ${
                    userRole === "client" ? "role-btn-active" : ""
                  }`}
                  onClick={() => {
                    setUserRole("client");
                    setErrorMsg("");
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Client Portal
                </button>
                <button
                  type="button"
                  className={`role-btn ${
                    userRole === "lawyer" ? "role-btn-active" : ""
                  }`}
                  onClick={() => {
                    setUserRole("lawyer");
                    setErrorMsg("");
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  Attorney Portal
                </button>
              </div>

              <h2 className="auth-heading">
                {authMode === "signin"
                  ? userRole === "client"
                    ? "Sign In to Your Client Account"
                    : "Attorney Portal Sign In"
                  : userRole === "client"
                  ? "Create Your Client Account"
                  : "Join Verified LegalEase Attorney Network"}
              </h2>

              <p className="auth-subheading">
                {authMode === "signin"
                  ? "Enter your credentials or test with one-click demo login below."
                  : "Fill in your details to start connecting."}
              </p>
            </div>

            {/* Quick Demo Login Triggers */}
            <div className="demo-login-box">
              <span className="demo-label">Quick Testing:</span>
              <div className="demo-buttons-row">
                <button
                  type="button"
                  className="demo-pill-btn"
                  onClick={() => handleDemoLogin("client")}
                >
                  ⚡ Demo Client
                </button>
                <button
                  type="button"
                  className="demo-pill-btn"
                  onClick={() => handleDemoLogin("lawyer")}
                >
                  ⚡ Demo Attorney
                </button>
              </div>
            </div>

            <div className="auth-divider">
              <span>or enter details</span>
            </div>

            {errorMsg && <div className="auth-error-banner">{errorMsg}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              {authMode === "register" && (
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Legal Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder={userRole === "lawyer" ? "e.g. Marcus Sterling, Esq." : "e.g. Eleanor Vance"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  {userRole === "lawyer" ? "Firm / Professional Email" : "Email Address"}
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {authMode === "register" && userRole === "lawyer" && (
                <>
                  <div className="form-group">
                    <label className="form-label" htmlFor="bar">
                      State Bar Registration #
                    </label>
                    <input
                      id="bar"
                      type="text"
                      className="form-input"
                      placeholder="e.g. CA-849201"
                      value={barNumber}
                      onChange={(e) => setBarNumber(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="practice">
                      Primary Practice Area
                    </label>
                    <select
                      id="practice"
                      className="form-input form-select"
                      value={practiceArea}
                      onChange={(e) => setPracticeArea(e.target.value)}
                    >
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Corporate & Business Law">Corporate & Business Law</option>
                      <option value="Family & Divorce Law">Family & Divorce Law</option>
                      <option value="Intellectual Property">Intellectual Property</option>
                      <option value="Real Estate & Property">Real Estate & Property</option>
                      <option value="Immigration Law">Immigration Law</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-group">
                <div className="password-label-row">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  {authMode === "signin" && (
                    <button
                      type="button"
                      className="forgot-link-btn"
                      onClick={() => setShowForgotModal(true)}
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Keep me signed in</span>
                </label>
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Authenticating..."
                  : authMode === "signin"
                  ? "Sign In to LegalEase"
                  : "Create Account"}
              </button>
            </form>

            <div className="auth-footer-toggle">
              {authMode === "signin" ? (
                <p>
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    className="auth-switch-link"
                    onClick={() => {
                      setAuthMode("register");
                      setErrorMsg("");
                    }}
                  >
                    Create one now
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="auth-switch-link"
                    onClick={() => {
                      setAuthMode("signin");
                      setErrorMsg("");
                    }}
                  >
                    Sign in instead
                  </button>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Forgot Password Modal */}
        {showForgotModal && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <button
                className="modal-close"
                onClick={() => setShowForgotModal(false)}
              >
                ✕
              </button>
              <h3 className="modal-title">Reset Your Password</h3>
              <p className="modal-desc">
                Enter your registered email address and we'll send you a secure password reset link.
              </p>

              {forgotSubmitted ? (
                <div className="modal-success">
                  ✓ Reset link sent to <strong>{forgotEmail}</strong>. Please check your inbox.
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="modal-form">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                  />
                  <div className="modal-actions">
                    <Button type="submit">Send Reset Link</Button>
                    <button
                      type="button"
                      className="modal-cancel-btn"
                      onClick={() => setShowForgotModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
