// src/components/Setup.js
import React, { useState } from 'react';
import Step1Generators from './Step1Generators';
import Step2NumQuestions from './Step2NumQuestions';

const Setup = ({
  selectedGenerators,
  handleGeneratorChange,
  numQuestions,
  handleNumQuestionsChange,
  startSession
}) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (selectedGenerators.length === 0) {
      alert("Please select at least one type of question.");
      return;
    }
    setStep(2);
  };

  const previousStep = () => {
    setStep(1);
  };

  return (
    <div className="container mt-4">
      {step === 1 && (
        <Step1Generators
          selectedGenerators={selectedGenerators}
          handleGeneratorChange={handleGeneratorChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2NumQuestions
          numQuestions={numQuestions}
          handleNumQuestionsChange={handleNumQuestionsChange}
          startSession={startSession}
          previousStep={previousStep}
        />
      )}
    </div>
  );
};

export default Setup;
