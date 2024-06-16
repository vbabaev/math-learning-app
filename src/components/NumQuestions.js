// src/components/NumQuestions.js
import React from 'react';

const NumQuestions = ({ numQuestions, handleNumQuestionsChange, isRunning }) => {
  const questionNumbers = [10, 15, 20, 25, 30, 40, 50];

  return (
    <div>
      <label>Number of Questions:</label>
      <div>
        {questionNumbers.map(num => (
          <div key={num}>
            <input
              type="radio"
              value={num}
              checked={numQuestions === num}
              onChange={handleNumQuestionsChange}
              disabled={isRunning}
            />
            <label>{num}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumQuestions;
