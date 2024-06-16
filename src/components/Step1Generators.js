// src/components/Step1Generators.js
import React from 'react';

const Step1Generators = ({ selectedGenerators, handleGeneratorChange, nextStep }) => {
  const questionGenerators = {
    addition: 'Addition',
    subtraction: 'Subtraction',
    multiplication: 'Multiplication',
    division: 'Division'
  };

  return (
    <div className="mb-3">
      <h2>Select Question Types:</h2>
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
            />
            <label className="form-check-label" htmlFor={`checkbox-${generator}`}>
              {questionGenerators[generator]}
            </label>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1Generators;
