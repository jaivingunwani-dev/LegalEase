
function LawyerProfile({ lawyer }) {
  return (
    <div className="lawyer-profile">
      <div className="lawyer-profile-avatar">{lawyer.initials}</div>

      <div>
        <h1>{lawyer.name}</h1>
        <p className="lawyer-profile-area">{lawyer.practiceArea}</p>

        <div className="lawyer-profile-meta">
          <span>{lawyer.location}</span>
          <span>•</span>
          <span>{lawyer.experienceYears} years experience</span>
          <span>•</span>
          <span className="lawyer-profile-rating">★ {lawyer.rating}</span>
        </div>

        <p className="lawyer-profile-bio">{lawyer.bio}</p>
      </div>
    </div>
  );
}

export default LawyerProfile;
