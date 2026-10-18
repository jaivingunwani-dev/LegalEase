import Button from "../../../components/common/Button.jsx";

function LoginSuccess({ user, onBrowse, onLogout }) {
  return (
    <div className="login-success-card">
      <div className="success-icon-badge">✓</div>
      <h2>Welcome Back, {user.name}!</h2>
      <p className="success-sub">
        You are currently authenticated as{" "}
        <strong className="text-gold">{user.role}</strong>.
      </p>

      <div className="user-profile-preview">
        <div className="user-avatar-circle">{user.avatar}</div>
        <div className="user-details">
          <p className="user-name-title">{user.name}</p>
          <p className="user-email-text">{user.email}</p>
          {user.barNumber && (
            <p className="user-bar-text">
              Bar Registration: {user.barNumber} (Verified)
            </p>
          )}
        </div>
      </div>

      <div className="success-actions">
        <Button onClick={onBrowse}>
          {user.role === "Verified Attorney"
            ? "Browse Client Inquiries"
            : "Find & Consult Lawyers"}
        </Button>
        <Button variant="outline" onClick={onLogout}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default LoginSuccess;
