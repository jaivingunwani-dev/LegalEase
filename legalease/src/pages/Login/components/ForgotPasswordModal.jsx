import Button from "../../../components/common/Button.jsx";

function ForgotPasswordModal({
  forgotEmail,
  forgotSubmitted,
  onEmailChange,
  onSubmit,
  onClose
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          type="button"
          aria-label="Close reset password dialog"
        >
          ✕
        </button>

        <h3 className="modal-title">Reset Your Password</h3>
        <p className="modal-desc">
          Enter your registered email address and we'll send you a secure
          password reset link.
        </p>

        {forgotSubmitted ? (
          <div className="modal-success">
            ✓ Reset link sent to <strong>{forgotEmail}</strong>. Please check
            your inbox.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="modal-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              value={forgotEmail}
              onChange={(e) => onEmailChange(e.target.value)}
              required
            />

            <div className="modal-actions">
              <Button type="submit">Send Reset Link</Button>
              <button
                type="button"
                className="modal-cancel-btn"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
