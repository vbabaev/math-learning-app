// src/components/Step2NumQuestions.js
import React from 'react';

const Step2NumQuestions = ({ numQuestions, handleNumQuestionsChange, startSession, previousStep }) => {
  const questionNumbers = [10, 15, 20, 25, 30, 40, 50];

  return (
    <div className="mb-3">
      <h2>Select Number of Questions:</h2>
      <div>
        {questionNumbers.map(num => (
          <div key={num} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={num}
              id={`radio-${num}`}
              checked={numQuestions === num}
              onChange={handleNumQuestionsChange}
            />
            <label className="form-check-label" htmlFor={`radio-${num}`}>
              {num}
            </label>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary mt-3 me-2" onClick={previousStep}>Back</button>
      <button className="btn btn-primary mt-3" onClick={startSession}>Start Session</button>
    </div>
  );
};

export default Step2NumQuestions;
