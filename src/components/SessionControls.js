// src/components/SessionControls.js
import React from 'react';
import QuestionTypes from './QuestionTypes';
import NumQuestions from './NumQuestions';

const SessionControls = ({
  selectedGenerators,
  handleGeneratorChange,
  numQuestions,
  handleNumQuestionsChange,
  startSession,
  isRunning
}) => {
  return (
    <div className="container mt-4">
      <QuestionTypes
        selectedGenerators={selectedGenerators}
        handleGeneratorChange={handleGeneratorChange}
        isRunning={isRunning}
      />
      <NumQuestions
        numQuestions={numQuestions}
        handleNumQuestionsChange={handleNumQuestionsChange}
        isRunning={isRunning}
      />
      <button className="btn btn-primary mt-3" onClick={startSession} disabled={isRunning}>Start Session</button>
    </div>
  );
};

export default SessionControls;
