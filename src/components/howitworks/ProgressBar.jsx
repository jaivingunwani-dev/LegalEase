function ProgressBar({
  currentStep,
  steps,
  progressRef
}) {
  const current = steps[currentStep];

  return (
    <section className="progress-container">

      <div className="progress-header">

        <span>
          YOUR PROGRESS
        </span>

        <strong>
          {currentStep + 1} / {steps.length}
        </strong>

      </div>


      <div className="progress-track">

        <div
          ref={progressRef}
          className="progress-bar"
        ></div>

      </div>


      <p>
        Step {currentStep + 1}:
        <strong> {current.title}</strong>
      </p>

    </section>
  );
}

export default ProgressBar;