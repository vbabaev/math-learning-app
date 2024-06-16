// src/components/Question.js
import React, { useState, useEffect, useRef } from 'react';
import './Question.css';

const operationSymbols = {
  '+': '+',
  '-': '-',
  '*': '×',
  '÷': '÷'
};

const Question = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [question]);

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
          className="answer-input"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          ref={inputRef}
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
    <div className="question-container">
      <form onSubmit={handleSubmit} className="question-form">
        <div className="question-grid">
          <div className="question-item">{renderField(0)}</div>
          <div className="question-item">{operationSymbols[question.operation]}</div>
          <div className="question-item">{renderField(1)}</div>
          <div className="question-item">=</div>
          <div className="question-item">{renderField(2)}</div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Question;
