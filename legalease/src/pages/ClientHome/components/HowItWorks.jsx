// This is a real ordered process, so numbered steps make sense here.
const steps = [
  {
    number: "01",
    title: "Search",
    description: "Browse lawyers by practice area, location, or experience.",
  },
  {
    number: "02",
    title: "Compare",
    description: "View profiles, ratings, and background to compare options.",
  },
  {
    number: "03",
    title: "Connect",
    description: "Reach out to the lawyer directly through their profile.",
  },
];

function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">How It Works</p>
          <h2>Three simple steps to find your lawyer</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
