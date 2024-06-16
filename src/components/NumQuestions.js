// src/components/NumQuestions.js
import React from 'react';

const NumQuestions = ({ numQuestions, handleNumQuestionsChange, isRunning }) => {
  const questionNumbers = [10, 15, 20, 25, 30, 40, 50];

  return (
    <div className="mb-3">
      <label className="form-label">Number of Questions:</label>
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
              disabled={isRunning}
            />
            <label className="form-check-label" htmlFor={`radio-${num}`}>
              {num}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumQuestions;
