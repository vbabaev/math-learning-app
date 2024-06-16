// src/components/Results.js
import React from 'react';
import Stats from './Stats';

const Results = ({ correctAnswers, totalQuestions, timeElapsed, results }) => {
  return (
    <div>
      <h2>Session Ended</h2>
      <Stats correctAnswers={correctAnswers} totalQuestions={totalQuestions} timeElapsed={timeElapsed} />
      <h3>Correct Questions</h3>
      <ul>
        {results.filter(result => result.isCorrect).map((result, index) => (
          <li key={index}>{`${result.firstOperand} ${result.operation} ${result.secondOperand} = ${result.result}`}</li>
        ))}
      </ul>
      <h3>Incorrect Questions</h3>
      <ul>
        {results.filter(result => !result.isCorrect).map((result, index) => (
          <li key={index}>{`${result.firstOperand} ${result.operation} ${result.secondOperand} = ${result.result}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
