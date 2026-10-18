import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { LawyerContext } from "../../context/LawyerContext.jsx";
import LawyerProfile from "./components/LawyerProfile.jsx";
import LawyerExperience from "./components/LawyerExperience.jsx";
import ContactLawyer from "./components/ContactLawyer.jsx";
import "./LawyerDetails.css";

function LawyerDetails() {
  const { lawyers, loading, error } = useContext(LawyerContext);
  const { lawyerId } = useParams();

  const lawyer = lawyers.find(
    (item) => String(item.id) === lawyerId
  );

  useEffect(() => {
    if (!lawyer) return;

    const storedLawyers =
      JSON.parse(localStorage.getItem("recentlyViewedLawyers")) || [];

    const updatedLawyers = [
      lawyer.id,
      ...storedLawyers.filter(
        (id) => String(id) !== String(lawyer.id)
      ),
    ].slice(0, 5);

    localStorage.setItem(
      "recentlyViewedLawyers",
      JSON.stringify(updatedLawyers)
    );
  }, [lawyer]);

  if (loading) {
    return <p>Loading lawyer details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!lawyer) {
    return (
      <div className="section container lawyer-not-found">
        <h2>Lawyer not found</h2>
        <p>We couldn't find a profile for that lawyer.</p>

        <Link to="/search" className="lawyer-view-link">
          ← Back to search
        </Link>
      </div>
    );
  }

  return (
    <div className="section lawyer-details-page">
      <div className="container">
        <div className="lawyer-details-actions">
          <Link to="/search" className="lawyer-view-link">
            ← Back to Search
          </Link>

          <Link to="/recently-viewed" className="lawyer-view-link">
            🕒 Recently Viewed
          </Link>
        </div>

        <LawyerProfile lawyer={lawyer} />

        <div className="lawyer-details-grid">
          <LawyerExperience lawyer={lawyer} />

          <ContactLawyer
            lawyerName={lawyer.name}
            lawyerId={lawyer.id}
          />
        </div>
      </div>
    </div>
  );
}

export default LawyerDetails;