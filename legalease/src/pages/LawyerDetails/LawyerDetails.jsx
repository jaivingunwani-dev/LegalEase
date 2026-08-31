import { useParams, Link } from "react-router-dom";
import lawyers from "../../data/lawyers.js";
import LawyerProfile from "./components/LawyerProfile.jsx";
import LawyerExperience from "./components/LawyerExperience.jsx";
import ContactLawyer from "./components/ContactLawyer.jsx";
import "./LawyerDetails.css";

function LawyerDetails() {
  const { lawyerId } = useParams();

  const lawyer = lawyers.find((item) => item.id === Number(lawyerId));

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
        <LawyerProfile lawyer={lawyer} />

        <div className="lawyer-details-grid">
          <LawyerExperience lawyer={lawyer} />
          <ContactLawyer lawyerName={lawyer.name} />
        </div>
      </div>
    </div>
  );
}

export default LawyerDetails;
