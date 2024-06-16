// src/components/QuestionIteration.js
import React, { useState } from 'react';
import Question from './Question';
import './QuestionIteration.css';

const QuestionIteration = ({ questions, handleAnswer, endSession }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = (answer) => {
    handleAnswer(answer, currentQuestionIndex);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      endSession();
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="question-iteration">
      <div className="progress">
        <div
          className="progress-bar progress-text"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>
      <Question question={questions[currentQuestionIndex]} onAnswer={handleNextQuestion} />
    </div>
  );
};

export default QuestionIteration;
