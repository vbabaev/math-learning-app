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

  const renderField = (position) => {
    if (question.blankPosition === position) {
      return (
        <input
          type="number"
          className="form-control"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      );
    }
    switch (position) {
      case 0:
        return question.firstOperand;
      case 1:
        return question.secondOperand;
      case 2:
        return question.result;
      default:
        return '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <span className="input-group-text">
          {renderField(0)} {operationSymbols[question.operation]} {renderField(1)} = {renderField(2)}
        </span>
      </div>
      <button type="submit" className="btn btn-success mt-3">Submit</button>
    </form>
  );
};

export default Question;
