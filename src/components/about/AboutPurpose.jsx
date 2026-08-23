function AboutPurpose({
  showMore,
  setShowMore
}) {
  return (
    <section className="about-purpose">

      <div>
        <span className="section-label">
          OUR PURPOSE
        </span>

        <h2>
          Making legal information easier to understand.
        </h2>
      </div>

      <div>
        <p>
          Legal information can sometimes feel complicated.
          Our platform organizes important information in a
          clear and convenient way.
        </p>

        <button
          className="more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>

        {showMore && (
          <p className="extra-text">
            We focus on creating a simple experience where
            users can navigate between different sections
            without unnecessary complexity.
          </p>
        )}
      </div>

    </section>
  );
}

export default AboutPurpose;