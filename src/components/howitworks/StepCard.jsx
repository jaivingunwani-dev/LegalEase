function StepCard({
  step,
  index,
  currentStep,
  selectStep
}) {
  return (
    <div
      className={
        currentStep === index
          ? "step-card active-step"
          : "step-card"
      }
      onClick={() => selectStep(index)}
    >

      <div className="step-icon">

        <span>
          {step.icon}
        </span>

        <small>
          {step.number}
        </small>

      </div>


      <div className="step-content">

        <span className="step-label">
          STEP {step.number}
        </span>

        <h2>
          {step.title}
        </h2>

        <p>
          {step.text}
        </p>

        {currentStep === index && (

          <span className="current-label">
            ● CURRENT STEP
          </span>

        )}

      </div>

    </div>
  );
}

export default StepCard;