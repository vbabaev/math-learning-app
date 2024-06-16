// src/components/Question.js
import React, { useState } from 'react';

const operationSymbols = {
  '+': '+',
  '-': '-',
  '*': '×',
  '÷': '÷'
};

const Question = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(answer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{`${question.firstOperand} ${operationSymbols[question.operation]} ${question.secondOperand} = `}</label>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Question;
