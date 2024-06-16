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
  const [imageSrc, setImageSrc] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Fetch a random image from the motivational-images folder
    const images = [
      '/motivational-images/image1.webp',
      '/motivational-images/image2.webp',
      '/motivational-images/image3.webp',
      '/motivational-images/image4.webp',
      '/motivational-images/image5.webp',
      '/motivational-images/image6.webp',
      '/motivational-images/image7.webp',
      '/motivational-images/image8.webp',
      '/motivational-images/image9.webp',
      '/motivational-images/image10.webp',
      '/motivational-images/image11.webp',
      '/motivational-images/image12.webp',
      '/motivational-images/image13.webp',
      '/motivational-images/image14.webp',
      '/motivational-images/image15.webp',
      // Add more image paths as needed
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
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
        <div className="question-content">
          <div className="question-grid">
            <div className="question-item">{renderField(0)}</div>
            <div className="question-item">{operationSymbols[question.operation]}</div>
            <div className="question-item">{renderField(1)}</div>
            <div className="question-item">=</div>
            <div className="question-item">{renderField(2)}</div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </div>
        <div className="motivational-image">
          <img src={imageSrc} alt="Motivational" />
        </div>
      </form>
    </div>
  );
};

export default Question;
