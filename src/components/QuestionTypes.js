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
    <div>
      <label>Select Question Types:</label>
      <div>
        {Object.keys(questionGenerators).map(generator => (
          <div key={generator}>
            <input
              type="checkbox"
              value={generator}
              checked={selectedGenerators.includes(generator)}
              onChange={handleGeneratorChange}
              disabled={isRunning}
            />
            <label>{questionGenerators[generator]}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionTypes;
