import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LawyerContext } from "../../context/LawyerContext.jsx";
import LawyerCard from "../LawyerSearch/components/LawyerCard.jsx";
import "./RecentlyViewed.css";
import ErrorModal from "../../components/common/ErrorModal.jsx";

function RecentlyViewed() {
  const { lawyers, loading, error } = useContext(LawyerContext);

  const [recentlyViewed] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("recentlyViewedLawyers")) || []
    );
  });

  const recentlyViewedLawyers = recentlyViewed
    .map((id) =>
      lawyers.find((lawyer) => String(lawyer.id) === String(id))
    )
    .filter(Boolean);

  if (loading) {
    return <p>Loading recently viewed lawyers...</p>;
  }

  if (error) {
  return (
    <ErrorModal
      message={error}
      onClose={() => window.location.reload()}
    />
  );
}

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