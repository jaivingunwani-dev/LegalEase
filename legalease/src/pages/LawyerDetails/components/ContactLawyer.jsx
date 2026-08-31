import { useState } from "react";
import Button from "../../../components/common/Button.jsx";

const CONTACT_REQUESTS_KEY = "contactRequests";

function ContactLawyer({ lawyerName, lawyerId }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (trimmedName === "" || trimmedMessage === "") {
      return;
    }

    const storedRequests = JSON.parse(
      localStorage.getItem(CONTACT_REQUESTS_KEY)
    ) || [];

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

  if (submitted) {
    return (
      <div className="contact-lawyer contact-success">
        <h2>Request Sent</h2>

        <hr className="gold-rule" />

        <p>
          Thanks, {name}. Your message for {lawyerName} has been saved.
        </p>

        <p>
          This is a demo project, so no real message was sent to the lawyer.
        </p>
      </div>
    );
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
          onChange={(event) => setName(event.target.value)}
        />

        <label className="contact-label" htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          className="contact-input contact-textarea"
          rows="4"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}

export default ContactLawyer;