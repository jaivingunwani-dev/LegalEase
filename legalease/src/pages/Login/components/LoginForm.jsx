import Button from "../../../components/common/Button.jsx";

function LoginForm({
  authMode,
  userRole,
  name,
  email,
  password,
  barNumber,
  practiceArea,
  rememberMe,
  showPassword,
  isSubmitting,
  errorMsg,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onBarNumberChange,
  onPracticeAreaChange,
  onRememberMeChange,
  onTogglePassword,
  onForgotPassword,
  onSubmit,
  onAuthModeChange
}) {
  return (
    <>
      {errorMsg && <div className="auth-error-banner">{errorMsg}</div>}

      <form onSubmit={onSubmit} className="auth-form">
        {authMode === "register" && (
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Legal Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder={
                userRole === "lawyer"
                  ? "e.g. Marcus Sterling, Esq."
                  : "e.g. Eleanor Vance"
              }
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
            />
          </div>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            {userRole === "lawyer"
              ? "Firm / Professional Email"
              : "Email Address"}
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
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
                onChange={(e) => onBarNumberChange(e.target.value)}
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
                onChange={(e) => onPracticeAreaChange(e.target.value)}
              >
                <option value="Criminal Defense">Criminal Defense</option>
                <option value="Corporate & Business Law">
                  Corporate & Business Law
                </option>
                <option value="Family & Divorce Law">
                  Family & Divorce Law
                </option>
                <option value="Intellectual Property">
                  Intellectual Property
                </option>
                <option value="Real Estate & Property">
                  Real Estate & Property
                </option>
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
                onClick={onForgotPassword}
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
              onChange={(e) => onPasswordChange(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={onTogglePassword}
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
              onChange={(e) => onRememberMeChange(e.target.checked)}
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
              onClick={() => onAuthModeChange("register")}
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
              onClick={() => onAuthModeChange("signin")}
            >
              Sign in instead
            </button>
          </p>
        )}
      </div>
    </>
  );
}

export default LoginForm;
