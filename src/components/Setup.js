// src/components/Setup.js
import React from 'react';
import SessionControls from './SessionControls';

const Setup = ({
  selectedGenerators,
  handleGeneratorChange,
  numQuestions,
  handleNumQuestionsChange,
  startSession,
  isRunning
}) => {
  return (
    <div className="container mt-4">
      <SessionControls
        selectedGenerators={selectedGenerators}
        handleGeneratorChange={handleGeneratorChange}
        numQuestions={numQuestions}
        handleNumQuestionsChange={handleNumQuestionsChange}
        startSession={startSession}
        isRunning={isRunning}
      />
    </div>
  );
};

export default Setup;
