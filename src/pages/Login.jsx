import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthHeader from "../components/login/AuthHeader";
import AuthHeroBrand from "../components/login/AuthHeroBrand";
import RoleSelector from "../components/login/RoleSelector";
import LoginForm from "../components/login/LoginForm";
import SocialAuth from "../components/login/SocialAuth";
import ForgotPasswordModal from "../components/login/ForgotPasswordModal";
import AuthFooter from "../components/login/AuthFooter";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [activeRole, setActiveRole] = useState("client"); // "client" | "lawyer"
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setFormError("");
  };

  const handleLoginSubmit = (credentials) => {
    setIsLoading(true);
    setFormError("");

    // Simulate authentication API call
    setTimeout(() => {
      setIsLoading(false);
      const roleLabel = activeRole === "lawyer" ? "Advocate" : "Client";
      showToast(`Welcome back, ${roleLabel}! Login successful.`);

      // Optional redirect after short delay
      setTimeout(() => {
        navigate("/how-it-works");
      }, 1500);
    }, 1200);
  };

  const handleSocialLogin = (provider) => {
    showToast(`Connecting with ${provider}... (Demo Mode)`, "info");
  };

  const handleSignUpClick = () => {
    showToast(`Redirecting to registration for ${activeRole === "lawyer" ? "Advocates" : "Clients"}...`, "info");
  };

  return (
    <div className="login-page">
      {/* Background Decorative Elements */}
      <div className="login-bg-glow glow-1"></div>
      <div className="login-bg-glow glow-2"></div>

      {/* Floating Toast Notification */}
      {toast && (
        <div className={`login-toast-notification ${toast.type}`}>
          <span className="toast-icon">
            {toast.type === "success" ? "✅" : "ℹ️"}
          </span>
          <span className="toast-message">{toast.message}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToast(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Top Header */}
      <AuthHeader />

      {/* Main Split Layout Container */}
      <main className="login-main-container">
        {/* Left Side: Brand Value & Trust Showcase */}
        <AuthHeroBrand activeRole={activeRole} />

        {/* Right Side: Authentication Card */}
        <div className="auth-card-wrapper">
          <div className="auth-card">
            {/* Card Heading */}
            <div className="auth-card-header">
              <span className="auth-badge">SECURE PORTAL</span>
              <h2 className="auth-title">Welcome Back</h2>
              <p className="auth-subtitle">
                Please enter your credentials to access your LegalEase account.
              </p>
            </div>

            {/* Role Switcher */}
            <RoleSelector
              activeRole={activeRole}
              onSelectRole={handleRoleChange}
            />

            {/* Core Login Form */}
            <LoginForm
              activeRole={activeRole}
              onSubmit={handleLoginSubmit}
              onForgotPasswordClick={() => setIsForgotModalOpen(true)}
              isLoading={isLoading}
              formError={formError}
            />

            {/* Social / SSO Auth */}
            <SocialAuth
              activeRole={activeRole}
              onSocialLogin={handleSocialLogin}
            />

            {/* Card Footer (Sign Up & Legal) */}
            <AuthFooter
              activeRole={activeRole}
              onSignUpClick={handleSignUpClick}
            />
          </div>
        </div>
      </main>

      {/* Password Reset Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />
    </div>
  );
}

export default Login;
