import { useState } from "react";
import Button from "../../../components/common/Button.jsx";

function ContactLawyer({ lawyerName }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-lawyer contact-success">
        <h2>Request Sent</h2>
        <hr className="gold-rule" />
        <p>
          Thanks, {name}. Your message has been noted for {lawyerName}.
          This is a demo form, so no real message was sent.
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
