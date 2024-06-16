// src/components/Results.js
import React from 'react';
import Stats from './Stats';

const Results = ({ correctAnswers, totalQuestions, timeElapsed, results }) => {
  return (
    <div className="container mt-4">
      <h2>Session Ended</h2>
      <Stats correctAnswers={correctAnswers} totalQuestions={totalQuestions} timeElapsed={timeElapsed} />
      <h3 className="mt-4">Correct Questions</h3>
      <ul className="list-group">
        {results.filter(result => result.isCorrect).map((result, index) => (
          <li key={index} className="list-group-item">{`${result.firstOperand} ${result.operation} ${result.secondOperand} = ${result.result}`}</li>
        ))}
      </ul>
      <h3 className="mt-4">Incorrect Questions</h3>
      <ul className="list-group">
        {results.filter(result => !result.isCorrect).map((result, index) => (
          <li key={index} className="list-group-item">{`${result.firstOperand} ${result.operation} ${result.secondOperand} = ${result.result}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
