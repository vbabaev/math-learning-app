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
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <span className="input-group-text">{`${question.firstOperand} ${operationSymbols[question.operation]} ${question.secondOperand} = `}</span>
        <input
          type="number"
          className="form-control"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">Submit</button>
    </form>
  );
};

export default Question;
