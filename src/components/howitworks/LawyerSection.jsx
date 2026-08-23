function LawyerSection() {

  const lawyers = [
    {
      initials: "AS",
      name: "Advocate A. Sharma",
      specialization: "Family & Civil Law",
      rating: "4.8",
      experience: "8+ Years Experience"
    },
    {
      initials: "RK",
      name: "Advocate R. Kapoor",
      specialization: "Property & Business Law",
      rating: "4.6",
      experience: "6+ Years Experience"
    },
    {
      initials: "NP",
      name: "Advocate N. Patel",
      specialization: "Criminal & Consumer Law",
      rating: "4.7",
      experience: "10+ Years Experience"
    }
  ];

  return (
    <section className="lawyer-section">

      <div className="lawyer-heading">

        <span className="section-label">
          EXPLORE LAWYERS
        </span>

        <h2>
          Everything important,
          <br />
          at a quick glance.
        </h2>

        <p>
          Lawyer cards make it easier to explore
          professionals without going through
          complicated information.
        </p>

      </div>


      <div className="lawyer-grid">

        {lawyers.map((lawyer) => (

          <div
            className="lawyer-card"
            key={lawyer.initials}
          >

            <div className="lawyer-top">

              <div className="lawyer-avatar">
                {lawyer.initials}
              </div>

              <div>

                <h3>
                  {lawyer.name}
                </h3>

                <p>
                  {lawyer.specialization}
                </p>

              </div>

            </div>


            <div className="rating">

              <span>
                ★★★★★
              </span>

              <strong>
                {lawyer.rating}
              </strong>

            </div>


            <div className="lawyer-info">

              <span>
                ⚖ {lawyer.experience}
              </span>

              <span>
                📍 Local Practice
              </span>

            </div>


            <button className="view-button">
              View Profile →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default LawyerSection;