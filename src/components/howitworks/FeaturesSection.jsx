function FeaturesSection() {

  const features = [
    {
      icon: "⚖",
      title: "Explore Lawyers",
      text: "Browse different lawyers and explore their available profile information."
    },
    {
      icon: "★",
      title: "Ratings",
      text: "Check available ratings to better understand and compare lawyer options."
    },
    {
      icon: "💰",
      title: "Budget Friendly",
      text: "Explore multiple options while keeping your budget and requirements in mind."
    },
    {
      icon: "🎯",
      title: "Relevant Expertise",
      text: "Find professionals whose area of expertise matches your legal concern."
    },
    {
      icon: "📋",
      title: "Clear Information",
      text: "Important details are presented in a simple and easy-to-read format."
    },
    {
      icon: "🤝",
      title: "Easier Connection",
      text: "Make the process of finding and approaching legal assistance simpler."
    }
  ];

  return (
    <section className="features-section">

      <div className="features-heading">

        <span className="section-label">
          WHY USE OUR PLATFORM?
        </span>

        <h2>
          Designed to make
          <br />
          lawyer discovery easier.
        </h2>

      </div>

      <div className="feature-grid">

        {features.map((feature) => (
          <div
            className="feature-box"
            key={feature.title}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturesSection;