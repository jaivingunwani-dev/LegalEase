import { Link } from "react-router-dom";
import "./LawyerCard.css";

function LawyerCard({ lawyer }) {
  return (
    <div className="lawyer-card">
      <div className="lawyer-avatar">{lawyer.initials}</div>

      <h3 className="lawyer-name">{lawyer.name}</h3>
      <p className="lawyer-practice">{lawyer.practiceArea}</p>

      <div className="lawyer-meta">
        <span>{lawyer.experienceYears} yrs experience</span>
        <span className="lawyer-rating">★ {lawyer.rating}</span>
      </div>

      <p className="lawyer-location">{lawyer.location}</p>

      <Link to={`/lawyer/${lawyer.id}`} className="lawyer-view-link">
        View Profile →
      </Link>
    </div>
  );
}

export default LawyerCard;