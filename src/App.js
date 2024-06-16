// src/App.js
import React, { useState, useEffect } from 'react';
import Results from './components/Results';
import SessionControls from './components/SessionControls';
import QuestionIteration from './components/QuestionIteration';
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
    const isCorrect = parseInt(answer) === currentQuestion.result;
    setResults(prev => [...prev, { ...currentQuestion, isCorrect }]);
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
  };

  const endSession = () => {
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Math Learning App</h1>
      {!isRunning && (
        <SessionControls
          selectedGenerators={selectedGenerators}
          handleGeneratorChange={handleGeneratorChange}
          numQuestions={numQuestions}
          handleNumQuestionsChange={handleNumQuestionsChange}
          startSession={startSession}
          isRunning={isRunning}
        />
      )}
      {isRunning ? (
        <QuestionIteration 
          questions={questions}
          handleAnswer={handleAnswer}
          endSession={endSession}
        />
      ) : (
        totalQuestions > 0 && (
          <Results
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            timeElapsed={timeElapsed}
            results={results}
          />
        )
      )}
    </div>
  );
};

export default App;
