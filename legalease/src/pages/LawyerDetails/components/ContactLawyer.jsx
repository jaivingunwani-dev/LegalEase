import { useState } from "react";
import Button from "../../../components/common/Button.jsx";

const CONTACT_REQUESTS_KEY = "contactRequests";

function ContactLawyer({ lawyerName, lawyerId }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    const newErrors = {};

    if (trimmedName === "") {
      newErrors.name = "Please enter your name.";
    }

    if (trimmedMessage === "") {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const storedRequests =
      JSON.parse(localStorage.getItem(CONTACT_REQUESTS_KEY)) || [];

    const newRequest = {
      id: Date.now(),
      lawyerId,
      lawyerName,
      clientName: trimmedName,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    const updatedRequests = [...storedRequests, newRequest];

    localStorage.setItem(
      CONTACT_REQUESTS_KEY,
      JSON.stringify(updatedRequests)
    );

    setSubmitted(true);
  }

  function handleCloseModal() {
    setSubmitted(false);
    setName("");
    setMessage("");
    setErrors({});
  }

  return (
    <div className="contact-lawyer">
      <h2>Connect with {lawyerName}</h2>

      <hr className="gold-rule" />

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label" htmlFor="name">
          Your Name
        </label>

        <input
          id="name"
          type="text"
          className="contact-input"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setErrors({ ...errors, name: "" });
          }}
        />

        {errors.name && <p className="form-error">{errors.name}</p>}

        <label className="contact-label" htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          className="contact-input contact-textarea"
          rows="4"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setErrors({ ...errors, message: "" });
          }}
        />

        {errors.message && (
          <p className="form-error">{errors.message}</p>
        )}

        <Button type="submit">Send Message</Button>
      </form>

      {submitted && (
        <div
          className="success-modal-overlay"
          onClick={handleCloseModal}
        >
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="success-modal-close"
              onClick={handleCloseModal}
              aria-label="Close success message"
            >
              &times;
            </button>

            <div className="success-modal-icon">&#10003;</div>

            <h2 id="success-modal-title">Request Sent!</h2>

            <p>
              Thanks, {name.trim()}! Your message for{" "}
              <strong>{lawyerName}</strong> has been saved successfully.
            </p>

            

            <Button type="button" onClick={handleCloseModal}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactLawyer;