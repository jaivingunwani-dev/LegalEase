import Logo from "../../../components/common/Logo.jsx";

function LoginHeader({ userRole, authMode, onRoleChange }) {
  return (
    <div className="auth-card-header">
      <div className="auth-logo-center">
        <Logo size="medium" showTagline={true} />
      </div>

      <div className="role-switcher">
        <button
          type="button"
          className={`role-btn ${userRole === "client" ? "role-btn-active" : ""}`}
          onClick={() => onRoleChange("client")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Client Portal
        </button>

        <button
          type="button"
          className={`role-btn ${userRole === "lawyer" ? "role-btn-active" : ""}`}
          onClick={() => onRoleChange("lawyer")}
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
  );
}

export default LoginHeader;
