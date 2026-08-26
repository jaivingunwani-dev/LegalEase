import { Link } from "react-router-dom";

function AuthHeroBrand({ activeRole }) {
  const isLawyer = activeRole === "lawyer";

  return (
    <div className="auth-hero-brand">
      <div className="hero-brand-content">
        <div className="hero-badge">
          <span className="badge-sparkle">✦</span>
          <span>{isLawyer ? "LEGAL PROFESSIONAL PORTAL" : "TRUSTED LEGAL ASSISTANCE"}</span>
        </div>

        <h1 className="hero-title">
          {isLawyer ? (
            <>
              Connect with Clients. <br />
              <span className="gradient-text">Manage Practice Seamlessly.</span>
            </>
          ) : (
            <>
              Your Gateway to <br />
              <span className="gradient-text">Verified Legal Expertise.</span>
            </>
          )}
        </h1>

        <p className="hero-desc">
          {isLawyer
            ? "Access your dashboard to review consultation requests, manage case documents, and provide verified advisory to verified clients across the country."
            : "Connect with verified advocates, compare transparent profiles, and resolve legal matters with complete confidence and security."}
        </p>

        {/* Highlight Stats */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Verified Lawyers</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number">99.4%</span>
            <span className="stat-label">Resolution Rate</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number">256-bit</span>
            <span className="stat-label">Data Privacy</span>
          </div>
        </div>

        {/* Mini Testimonial Quote */}
        <div className="hero-quote-box">
          <div className="quote-icon">“</div>
          <p className="quote-text">
            {isLawyer
              ? "LegalEase streamlined my client consultations and document vetting workflow significantly."
              : "Finding a specialized corporate advocate used to take weeks. LegalEase made it happen in hours."}
          </p>
          <div className="quote-author">
            <div className="author-avatar">{isLawyer ? "AS" : "RK"}</div>
            <div>
              <strong className="author-name">{isLawyer ? "Adv. Ananya Sharma" : "Rajesh Kapoor"}</strong>
              <span className="author-role">{isLawyer ? "High Court Advocate, 12 yrs exp" : "Corporate Client"}</span>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="hero-footer-link">
          <span>New to LegalEase? </span>
          <Link to="/how-it-works" className="hero-learn-more">
            Learn how the platform works →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthHeroBrand;
