import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="about-cta">

      <div className="cta-content">

        <span className="section-label">
          EXPLORE THE PLATFORM
        </span>

        <h2>
          Take the next step
          <br />
          towards simpler legal discovery.
        </h2>

        <p>
          Finding the right legal assistance does not have to feel
          complicated. Our platform brings useful information together
          so you can explore lawyers, understand their expertise,
          compare available details and make a more informed decision.
        </p>

        <p>
          Whether you are looking for a lawyer based on specialization,
          experience, ratings or your specific requirements, the
          platform is designed to make the discovery process clearer,
          easier and more organized.
        </p>

        <div className="cta-points">

          <div className="cta-point">
            <span>✓</span>
            <div>
              <h3>Explore Your Options</h3>
              <p>
                Browse different lawyers and discover relevant
                professional information.
              </p>
            </div>
          </div>

          <div className="cta-point">
            <span>✓</span>
            <div>
              <h3>Understand Before Choosing</h3>
              <p>
                Review available expertise, experience and ratings
                to understand your options better.
              </p>
            </div>
          </div>

          <div className="cta-point">
            <span>✓</span>
            <div>
              <h3>Make an Informed Choice</h3>
              <p>
                Use organized information to find an option that
                matches your legal needs.
              </p>
            </div>
          </div>

        </div>

        <div className="cta-actions">

          <Link to="/how-it-works">
            <button className="cta-button">
              See How It Works →
            </button>
          </Link>

          <Link to="/about">
            <button className="cta-secondary">
              Learn More About Us
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;