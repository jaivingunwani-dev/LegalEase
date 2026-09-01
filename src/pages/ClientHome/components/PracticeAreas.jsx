import { Link } from "react-router-dom";
import practiceAreas from "../../../data/practiceAreas.js";

// This section pulls its content from data/practiceAreas.js
// and renders one card per practice area using .map().
function PracticeAreas() {
  return (
    <section className="section section-alt practice-areas">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Practice Areas</p>
          <h2>Explore lawyers by area of law</h2>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <Link
              to="/search"
              className="practice-card"
              key={area.id}
            >
              <span className="practice-icon">{area.icon}</span>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;
