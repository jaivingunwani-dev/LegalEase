import { useState } from "react";
import AuthInput from "./AuthInput";

function ForgotPasswordModal({ isOpen, onClose }) {
  const [resetEmail, setResetEmail] = useState("");
  const [resetSubmitted, setResetSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [resetError, setResetError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      setResetError("Please enter your registered email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
      setResetError("Please enter a valid email address.");
      return;
    }

    setResetError("");
    setIsSending(true);

    // Simulate sending reset instructions
    setTimeout(() => {
      setIsSending(false);
      setResetSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    setResetEmail("");
    setResetSubmitted(false);
    setResetError("");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="forgot-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {!resetSubmitted ? (
          <>
            <div className="modal-header-icon">🔑</div>
            <h2 className="modal-title">Reset Your Password</h2>
            <p className="modal-desc">
              Enter your registered email address below. We'll send you secure instructions to reset your account password.
            </p>

            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              <AuthInput
                id="reset-email-input"
                name="resetEmail"
                label="Registered Email Address"
                type="email"
                value={resetEmail}
                onChange={(e) => {
                  setResetEmail(e.target.value);
                  if (resetError) setResetError("");
                }}
                placeholder="e.g. advocate@legalease.in"
                icon="✉️"
                error={resetError}
                required
              />

              <button
                type="submit"
                className="modal-submit-btn"
                disabled={isSending}
              >
                {isSending ? "Sending instructions..." : "Send Reset Link →"}
              </button>

              <button
                type="button"
                className="modal-cancel-btn"
                onClick={handleClose}
              >
                Back to Sign In
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success-state">
            <div className="modal-success-icon">✉️✓</div>
            <h2 className="modal-title">Check Your Inbox</h2>
            <p className="modal-desc">
              We have dispatched password recovery instructions to:
              <br />
              <strong>{resetEmail}</strong>
            </p>
            <p className="modal-subtext">
              Didn't receive the email? Check your spam folder or try again in a few minutes.
            </p>

            <button
              type="button"
              className="modal-submit-btn"
              onClick={handleClose}
            >
              Return to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
