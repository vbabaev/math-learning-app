// src/components/QuestionTypes.js
import React from 'react';

const QuestionTypes = ({ selectedGenerators, handleGeneratorChange, isRunning }) => {
  const questionGenerators = {
    addition: 'Addition',
    subtraction: 'Subtraction',
    multiplication: 'Multiplication',
    division: 'Division'
  };

  return (
    <div className="mb-3">
      <label className="form-label">Select Question Types:</label>
      <div className="form-check">
        {Object.keys(questionGenerators).map(generator => (
          <div key={generator} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={generator}
              id={`checkbox-${generator}`}
              checked={selectedGenerators.includes(generator)}
              onChange={handleGeneratorChange}
              disabled={isRunning}
            />
            <label className="form-check-label" htmlFor={`checkbox-${generator}`}>
              {questionGenerators[generator]}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionTypes;
