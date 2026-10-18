function ErrorModal({ message, onClose }) {
  return (
    <div className="error-modal-overlay">
      <div
        className="error-modal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="error-modal-title"
      >
        <button
          type="button"
          className="error-modal-close"
          onClick={onClose}
          aria-label="Close error message"
        >
          &times;
        </button>

        <div className="error-modal-icon">!</div>

        <h2 id="error-modal-title">Something Went Wrong</h2>

        <p>{message}</p>

        <button
          type="button"
          className="error-modal-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;