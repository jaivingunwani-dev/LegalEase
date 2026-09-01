import "./About.css";

function About() {
  return (
    <div className="section about-page">
      <div className="container about-inner">
        <p className="eyebrow">About LegalEase</p>
        <h1>A simpler way to find legal help</h1>
        <hr className="gold-rule" />

        <p className="about-text">
          LegalEase is a student project built to explore how a
          client-lawyer connection platform could work. The idea is
          simple: let clients search for lawyers by practice area,
          compare their experience, and reach out directly — without
          a confusing or overwhelming process.
        </p>

        <p className="about-text">
          This platform does not process payments, host real-time
          chat, or store any real client data. It is a frontend
          demonstration built with React as part of a college
          project, showing core concepts like components, props,
          state, and conditional rendering.
        </p>

        <div className="about-values">
          <div className="about-value-card">
            <h3>Clarity</h3>
            <p>Show clients exactly who a lawyer is and what they do.</p>
          </div>
          <div className="about-value-card">
            <h3>Simplicity</h3>
            <p>Keep the search and browsing experience straightforward.</p>
          </div>
          <div className="about-value-card">
            <h3>Trust</h3>
            <p>Present lawyer background clearly, with no hidden steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
