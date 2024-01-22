// Form.js
import React, { useState } from 'react';
import ProgressBar from './progressbar';

const Form = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3; // Update this if you have more or fewer steps

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 prevStep={prevStep} />}
    </div>
  );
};

export default Form;
