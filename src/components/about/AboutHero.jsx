import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function AboutHero() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add("heading-visible");
    }
  }, []);

  return (
    <section className="about-hero">

      <span className="about-tag">
        ABOUT OUR PLATFORM
      </span>

      <h1 ref={headingRef}>
        About Us
      </h1>

      <p>
        Our platform is designed to make legal information
        simple, accessible and easy to understand.
      </p>

      <Link to="/how-it-works">
        <button className="how-button">
          How It Works →
        </button>
      </Link>

    </section>
  );
}

export default AboutHero;