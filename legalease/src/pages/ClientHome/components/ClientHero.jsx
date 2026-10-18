import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button.jsx";

// The hero section is the first thing a client sees.
// It has a headline, a short description, and a button
// that takes the user straight to the search page.
function ClientHero() {
  const navigate = useNavigate();

  function goToSearch() {
    navigate("/search");
  }

  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Client-Lawyer Connection Platform</p>

        <h1 className="hero-title">
          Find the right lawyer, <br />
          without the guesswork.
        </h1>

        <hr className="gold-rule" />

        <p className="hero-subtitle">
          LegalEase helps you search verified lawyers by practice area,
          compare their experience, and connect with the one who fits
          your case.
        </p>

        <div className="hero-actions">
          <Button onClick={goToSearch}>Find a Lawyer</Button>
          <Button variant="outline" onClick={goToSearch}>
            Browse Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ClientHero;
