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
    <div>
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
      <button onClick={startSession} disabled={isRunning}>Start Session</button>
    </div>
  );
};

export default SessionControls;
