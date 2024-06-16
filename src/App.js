// src/App.js
import React, { useState, useEffect } from 'react';
import Results from './components/Results';
import QuestionIteration from './components/QuestionIteration';
import Setup from './components/Setup';
import { generateQuestions } from './questionGenerator';
import './App.css';

const App = () => {
  const [selectedGenerators, setSelectedGenerators] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState('setup'); // 'setup', 'session', 'results'

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleGeneratorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedGenerators(prev => 
      checked ? [...prev, value] : prev.filter(generator => generator !== value)
    );
  };

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(parseInt(e.target.value));
  };

  const handleAnswer = (answer, questionIndex) => {
    const currentQuestion = questions[questionIndex];
    const correctAnswer =
      currentQuestion.blankPosition === 0
        ? currentQuestion.firstOperand
        : currentQuestion.blankPosition === 1
        ? currentQuestion.secondOperand
        : currentQuestion.result;
    const isCorrect = parseInt(answer) === correctAnswer;
    setResults(prev => [...prev, { ...currentQuestion, isCorrect, userAnswer: parseInt(answer) }]);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setTotalQuestions(prev => prev + 1);
  };

  const startSession = () => {
    if (selectedGenerators.length === 0) {
      alert("Please select at least one type of question.");
      return;
    }
    const generatedQuestions = generateQuestions(selectedGenerators, numQuestions);

    setQuestions(generatedQuestions);
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setTimeElapsed(0);
    setResults([]);
    setIsRunning(true);
    setPage('session');
  };

  const endSession = () => {
    setIsRunning(false);
    setPage('results');
  };

  const retrySession = () => {
    setPage('setup');
  };

  return (
    <div className="App container mt-4">
      <h1 className="text-center">Math Learning App</h1>
      {page === 'setup' && (
        <Setup
          selectedGenerators={selectedGenerators}
          handleGeneratorChange={handleGeneratorChange}
          numQuestions={numQuestions}
          handleNumQuestionsChange={handleNumQuestionsChange}
          startSession={startSession}
        />
      )}
      {page === 'session' && (
        <QuestionIteration 
          questions={questions}
          handleAnswer={handleAnswer}
          endSession={endSession}
        />
      )}
      {page === 'results' && (
        <Results
          correctAnswers={correctAnswers}
          totalQuestions={totalQuestions}
          timeElapsed={timeElapsed}
          results={results}
          retrySession={retrySession}
        />
      )}
    </div>
  );
};

export default App;
