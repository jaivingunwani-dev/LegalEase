function SocialAuth({ activeRole, onSocialLogin }) {
  const isLawyer = activeRole === "lawyer";

  return (
    <div className="social-auth-container">
      <div className="social-auth-divider">
        <span className="divider-line"></span>
        <span className="divider-text">OR CONTINUE WITH</span>
        <span className="divider-line"></span>
      </div>

      <div className="social-auth-buttons">
        {/* Google Login */}
        <button
          type="button"
          className="social-btn google-btn"
          onClick={() => onSocialLogin("Google")}
        >
          <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.24v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.41l4.04-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.59l4.04 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
            />
          </svg>
          <span className="social-btn-text">Google</span>
        </button>

        {/* Alternate Provider based on role */}
        {isLawyer ? (
          <button
            type="button"
            className="social-btn barcouncil-btn"
            onClick={() => onSocialLogin("BarCouncilSSO")}
            title="Log in with DigiLocker / Bar ID"
          >
            <span className="social-custom-icon">📜</span>
            <span className="social-btn-text">DigiLocker SSO</span>
          </button>
        ) : (
          <button
            type="button"
            className="social-btn apple-btn"
            onClick={() => onSocialLogin("Apple")}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.77 1.05-1.84.93-2.92-1 .04-2.17.67-2.84 1.44-.57.65-1.08 1.73-.94 2.8 1.11.09 2.22-.55 2.85-1.32z" />
            </svg>
            <span className="social-btn-text">Apple</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SocialAuth;
