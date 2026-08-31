function LawyerExperience({ lawyer }) {
  return (
    <div className="lawyer-experience">
      <h2>Background</h2>
      <hr className="gold-rule" />

      <div className="experience-grid">
        <div>
          <p className="experience-label">Education</p>
          <p className="experience-value">{lawyer.education}</p>
        </div>

        <div>
          <p className="experience-label">Bar Council</p>
          <p className="experience-value">{lawyer.barCouncil}</p>
        </div>

        <div>
          <p className="experience-label">Languages</p>
          <div className="language-tags">
            {lawyer.languages.map((language) => (
              <span className="language-tag" key={language}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerExperience;
