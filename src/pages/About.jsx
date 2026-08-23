import AboutHero from "../components/about/AboutHero";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutPurpose from "../components/about/AboutPurpose";
import AboutCTA from "../components/about/AboutCTA";

import "./About.css";

function About() {

  return (
    <div className="about-page">

      <AboutHero />

      <AboutFeatures />

      <AboutPurpose />

      <AboutCTA />

    </div>
  );
}

export default About;