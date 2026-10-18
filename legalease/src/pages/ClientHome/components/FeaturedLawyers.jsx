import { Link } from "react-router-dom";
import lawyers from "../../../data/lawyers.js";
import LawyerCard from "../../LawyerSearch/components/LawyerCard.jsx";

// This shows a small set of "featured" lawyers on the homepage.
// It reuses the same LawyerCard component from the search page,
// which is a good example of a reusable component in action.
function FeaturedLawyers() {
  const featuredLawyers = lawyers.filter((lawyer) => lawyer.featured);

  return (
    <section className="section featured-lawyers">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Featured Lawyers</p>
          <h2>Highly rated lawyers on LegalEase</h2>
        </div>

        <div className="lawyer-grid">
          {featuredLawyers.map((lawyer) => (
            <LawyerCard lawyer={lawyer} key={lawyer.id} />
          ))}
        </div>

        <div className="featured-view-all">
          <Link to="/search" className="featured-view-all-link">
            View all lawyers →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedLawyers;
