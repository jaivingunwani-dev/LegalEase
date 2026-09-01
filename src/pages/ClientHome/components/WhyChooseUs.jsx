const reasons = [
  {
    title: "Verified Profiles",
    description: "Every lawyer listed has their education and bar details on record.",
  },
  {
    title: "Simple Search",
    description: "Filter by practice area or location to find a fit in minutes.",
  },
  {
    title: "No Hidden Process",
    description: "See a lawyer's experience and background before you connect.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section section-alt why-choose-us">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Built to make finding a lawyer easier</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason.title}>
              <hr className="gold-rule" />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
