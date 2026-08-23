import { useState } from "react";

function AboutFeatures() {
  const [selectedCard, setSelectedCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: "⚖",
      title: "Simple & Clear",
      text:
        "Legal information is presented in a simple, structured and easy-to-understand format so users can explore important details without unnecessary complexity."
    },
    {
      id: 2,
      icon: "✓",
      title: "Reliable Information",
      text:
        "Important lawyer and platform information is organized clearly to help users understand available options before making a decision."
    },
    {
      id: 3,
      icon: "◉",
      title: "User Friendly",
      text:
        "A clean and organized interface makes it easier to move between different sections and find the information you are looking for."
    },
    {
      id: 4,
      icon: "🔎",
      title: "Easy Discovery",
      text:
        "Explore different lawyers and discover professionals based on their available expertise, experience and other useful information."
    },
    {
      id: 5,
      icon: "★",
      title: "Compare Options",
      text:
        "Review available ratings, specializations and experience to understand different lawyer options and compare them according to your requirements."
    },
    {
      id: 6,
      icon: "🤝",
      title: "Better Connection",
      text:
        "The platform makes the initial process of finding and approaching legal assistance more convenient, organized and easier to understand."
    }
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id);

    document.body.classList.add("card-selected");

    setTimeout(() => {
      document.body.classList.remove("card-selected");
    }, 300);
  };

  return (
    <section className="about-features-section">

      <div className="features-intro">

        <span className="section-label">
          WHY CHOOSE OUR PLATFORM
        </span>

        <h2>
          Built to make legal
          <br />
          information easier to explore.
        </h2>

        <p>
          Our platform focuses on making the process of discovering
          legal assistance simpler. From exploring lawyers to
          understanding their available information, everything is
          organized with the user in mind.
        </p>

      </div>


      <div className="about-cards">

        {features.map((feature) => (
          <div
            key={feature.id}
            className={
              selectedCard === feature.id
                ? "about-card active-card"
                : "about-card"
            }
            onClick={() => handleCardClick(feature.id)}
          >

            <div className="card-icon">
              {feature.icon}
            </div>

            <span className="feature-number">
              0{feature.id}
            </span>

            <h2>
              {feature.title}
            </h2>

            <p>
              {feature.text}
            </p>

            {selectedCard === feature.id && (
              <span className="selected-text">
                ✓ Selected
              </span>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default AboutFeatures;