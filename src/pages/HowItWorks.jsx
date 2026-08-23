import { useEffect, useRef, useState } from "react";

import HowHero from "../components/howitworks/HowHero";
import ProgressBar from "../components/howitworks/ProgressBar";
import StepCard from "../components/howitworks/StepCard";
import StepDetails from "../components/howitworks/StepDetails";
import LawyerSection from "../components/howitworks/LawyerSection";
import FeaturesSection from "../components/howitworks/FeaturesSection";

import "./HowItWorks.css";

function HowItWorks() {

  const [currentStep, setCurrentStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const progressRef = useRef(null);

  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Understand Your Need",
      text: "Identify the type of legal help you are looking for.",
      details:
        "Start by understanding your legal concern and the type of assistance you may need."
    },
    {
      number: "02",
      icon: "⚖",
      title: "Explore Lawyers",
      text: "Browse lawyers according to their area of expertise.",
      details:
        "Explore different lawyers and review their available profile information."
    },
    {
      number: "03",
      icon: "⭐",
      title: "Compare Information",
      text: "Compare ratings, experience and other available details.",
      details:
        "Use the available information to compare different lawyer options."
    },
    {
      number: "04",
      icon: "🎯",
      title: "Choose the Right Option",
      text: "Select a lawyer based on your requirements.",
      details:
        "Consider expertise, experience, ratings and your personal requirements."
    },
    {
      number: "05",
      icon: "📋",
      title: "View Profile",
      text: "Check the lawyer's profile for more information.",
      details:
        "Review the available profile details before making your decision."
    },
    {
      number: "06",
      icon: "🤝",
      title: "Connect",
      text: "Take the next step towards getting legal assistance.",
      details:
        "Once you have explored your options, you can proceed according to your requirements."
    }
  ];

  const selectStep = (index) => {
    setCurrentStep(index);
    setShowDetails(false);
  };

  useEffect(() => {

    if (progressRef.current) {
      const progress =
        ((currentStep + 1) / steps.length) * 100;

      progressRef.current.style.width = `${progress}%`;
    }

  }, [currentStep, steps.length]);

  return (
    <div className="how-page">

      <HowHero />

      <ProgressBar
        currentStep={currentStep}
        steps={steps}
        progressRef={progressRef}
      />

      <div className="steps-container">

        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            index={index}
            currentStep={currentStep}
            selectStep={selectStep}
          />
        ))}

      </div>

      <StepDetails
        current={steps[currentStep]}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />

      <LawyerSection />

      <FeaturesSection />

    </div>
  );
}

export default HowItWorks;