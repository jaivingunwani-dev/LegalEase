import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button.jsx";

function ClientHero() {
  const navigate = useNavigate();

  function goToSearch() {
    navigate("/search");
  }

  function goToGuides() {
    navigate("/guides");
  }

  return (
    <section className="hero">
      <div className="hero-backdrop-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Trusted by 10,000+ Clients & Verified Attorneys</span>
          </div>

          <h1 className="hero-title">
            Find the right lawyer, <br />
            <span className="hero-title-accent">without the guesswork.</span>
          </h1>

          <hr className="gold-rule" />

          <p className="hero-subtitle">
            LegalEase simplifies your search for top legal representation.
            Explore verified attorneys by practice area, review case experience,
            and connect directly for confidential consultation.
          </p>

          <div className="hero-actions">
            <Button onClick={goToSearch}>Find a Lawyer</Button>
            <Button variant="outline" onClick={goToGuides}>
              How It Works & Guides
            </Button>
          </div>

          {/* Key Trust Metrics */}
          <div className="hero-metrics">
            <div className="hero-metric-item">
              <span className="hero-metric-value">500+</span>
              <span className="hero-metric-label">Verified Attorneys</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-item">
              <span className="hero-metric-value">100%</span>
              <span className="hero-metric-label">Confidential Inquiries</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-item">
              <span className="hero-metric-value">4.9/5</span>
              <span className="hero-metric-label">Client Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientHero;
