function StepDetails({
  current,
  showDetails,
  setShowDetails
}) {
  return (
    <section className="step-details">

      <span className="section-label">
        STEP {current.number}
      </span>

      <h2>
        {current.title}
      </h2>

      <p>
        {current.details}
      </p>


      <button
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails
          ? "Show Less ↑"
          : "Learn More ↓"}
      </button>


      {showDetails && (

        <div className="extra-details">

          <h3>
            Why is this useful?
          </h3>

          <p>
            The platform is designed to save time and
            make lawyer discovery easier. Instead of
            searching through different places, users
            can explore relevant information together
            and make a more informed choice.
          </p>

        </div>

      )}

    </section>
  );
}

export default StepDetails;