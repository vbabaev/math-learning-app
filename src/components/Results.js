// src/components/Results.js
import React from 'react';
import Stats from './Stats';
import './Results.css';

const Results = ({ correctAnswers, totalQuestions, timeElapsed, results, retrySession }) => {
  const renderResult = (result) => {
    const userAnswer = result.userAnswer;
    const correctAnswer =
      result.blankPosition === 0
        ? result.firstOperand
        : result.blankPosition === 1
        ? result.secondOperand
        : result.result;

    const isCorrect = userAnswer === correctAnswer;

    return (
      <li key={result.id} className="list-group-item">
        {result.blankPosition === 0 ? (
          <>
            {isCorrect ? (
              <span className="correct-green">{userAnswer}</span>
            ) : (
              <>
                <span className="incorrect">{userAnswer}</span> <span className="correct">{correctAnswer}</span>
              </>
            )}
            {` ${result.operation} ${result.secondOperand} = ${result.result}`}
          </>
        ) : result.blankPosition === 1 ? (
          <>
            {`${result.firstOperand} ${result.operation} `}
            {isCorrect ? (
              <span className="correct-green">{userAnswer}</span>
            ) : (
              <>
                <span className="incorrect">{userAnswer}</span> <span className="correct">{correctAnswer}</span>
              </>
            )}
            {` = ${result.result}`}
          </>
        ) : (
          <>
            {`${result.firstOperand} ${result.operation} ${result.secondOperand} = `}
            {isCorrect ? (
              <span className="correct-green">{userAnswer}</span>
            ) : (
              <>
                <span className="incorrect">{userAnswer}</span> <span className="correct">{correctAnswer}</span>
              </>
            )}
          </>
        )}
      </li>
    );
  };

  return (
    <div className="container mt-4">
      <h2>Session Ended</h2>
      <Stats correctAnswers={correctAnswers} totalQuestions={totalQuestions} timeElapsed={timeElapsed} />
      <h3 className="mt-4">Correct Questions</h3>
      <ul className="list-group">
        {results.filter(result => result.isCorrect).map(result => renderResult(result))}
      </ul>
      <h3 className="mt-4">Incorrect Questions</h3>
      <ul className="list-group">
        {results.filter(result => !result.isCorrect).map(result => renderResult(result))}
      </ul>
      <button className="btn btn-primary mt-4" onClick={retrySession}>Try Again</button>
    </div>
  );
};

export default Results;
