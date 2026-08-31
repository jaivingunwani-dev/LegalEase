import { useState } from "react";
import { Link } from "react-router-dom";
import lawyers from "../../data/lawyers.js";
import LawyerCard from "../LawyerSearch/components/LawyerCard.jsx";
import "./RecentlyViewed.css";

function RecentlyViewed() {
  const [recentlyViewed] = useState(() => {
    const storedLawyers = JSON.parse(
      localStorage.getItem("recentlyViewedLawyers")
    ) || [];

    return storedLawyers;
  });

  const recentlyViewedLawyers = recentlyViewed
    .map((id) => lawyers.find((lawyer) => lawyer.id === id))
    .filter(Boolean);

  return (
    <div className="section recently-viewed-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Your History</p>
          <h2>Recently Viewed Lawyers</h2>
        </div>

        {recentlyViewedLawyers.length === 0 ? (
          <div className="recently-viewed-empty">
            <p>You haven't viewed any lawyer profiles yet.</p>

            <Link to="/search" className="lawyer-view-link">
              Find a Lawyer →
            </Link>
          </div>
        ) : (
          <div className="lawyer-grid">
            {recentlyViewedLawyers.map((lawyer) => (
              <LawyerCard lawyer={lawyer} key={lawyer.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentlyViewed;