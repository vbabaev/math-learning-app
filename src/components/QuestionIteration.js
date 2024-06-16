// src/components/QuestionIteration.js
import React, { useState } from 'react';
import Question from './Question';

const QuestionIteration = ({ questions, handleAnswer, endSession }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onAnswer = (answer) => {
    handleAnswer(answer, currentQuestionIndex);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      endSession();
    }
  };

  return (
    <Question question={questions[currentQuestionIndex]} onAnswer={onAnswer} />
  );
};

export default QuestionIteration;
