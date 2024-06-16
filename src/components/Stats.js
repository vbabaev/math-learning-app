// src/components/Stats.js
import React from 'react';

const Stats = ({ correctAnswers, totalQuestions, timeElapsed }) => {
  return (
    <div>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Total Questions: {totalQuestions}</p>
      <p>Time Elapsed: {timeElapsed} seconds</p>
    </div>
  );
};

export default Stats;
