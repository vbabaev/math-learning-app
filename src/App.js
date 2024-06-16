// src/App.js
import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Stats from './components/Stats';
import QuestionTypes from './components/QuestionTypes';
import NumQuestions from './components/NumQuestions';
import { generateAdditionQuestion } from './generators/addition';
import { generateSubtractionQuestion } from './generators/subtraction';
import { generateMultiplicationQuestion } from './generators/multiplication';
import { generateDivisionQuestion } from './generators/division';
import './App.css';

const questionGenerators = {
  addition: generateAdditionQuestion,
  subtraction: generateSubtractionQuestion,
  multiplication: generateMultiplicationQuestion,
  division: generateDivisionQuestion
};

const App = () => {
  const [selectedGenerators, setSelectedGenerators] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = parseInt(answer) === currentQuestion.result;
    setResults(prev => [...prev, { ...currentQuestion, isCorrect }]);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setTotalQuestions(prev => prev + 1);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsRunning(false); // End session
    }
  };

  const startSession = () => {
    if (selectedGenerators.length === 0) {
      alert("Please select at least one type of question.");
      return;
    }
    const generatedQuestions = [];
    const questionsPerGenerator = Math.floor(numQuestions / selectedGenerators.length);

    for (let i = 0; i < questionsPerGenerator; i++) {
      selectedGenerators.forEach(generator => {
        let question;
        do {
          question = questionGenerators[generator]();
        } while (generatedQuestions.some(q => 
          q.firstOperand === question.firstOperand && 
          q.secondOperand === question.secondOperand && 
          q.operation === question.operation
        ));
        generatedQuestions.push(question);
      });
    }

    // Shuffle questions
    for (let i = generatedQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [generatedQuestions[i], generatedQuestions[j]] = [generatedQuestions[j], generatedQuestions[i]];
    }

    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setTimeElapsed(0);
    setResults([]);
    setIsRunning(true);
  };

  return (
    <div className="App">
      <h1>Math Learning App</h1>
      {!isRunning && (
        <>
          <QuestionTypes
            selectedGenerators={selectedGenerators}
            handleGeneratorChange={handleGeneratorChange}
            isRunning={isRunning}
          />
          <NumQuestions
            numQuestions={numQuestions}
            handleNumQuestionsChange={handleNumQuestionsChange}
            isRunning={isRunning}
          />
        </>
      )}
      <button onClick={startSession} disabled={isRunning}>Start Session</button>
      {isRunning ? (
        <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
      ) : (
        totalQuestions > 0 && (
          <div>
            <h2>Session Ended</h2>
            <Stats correctAnswers={correctAnswers} totalQuestions={totalQuestions} timeElapsed={timeElapsed} />
            <h3>Correct Questions</h3>
            <ul>
              {results.filter(result => result.isCorrect).map((result, index) => (
                <li key={index}>{`${result.firstOperand} ${result.operation} ${result.secondOperand} = ${result.result}`}</li>
              ))}
            </ul>
            <h3>Incorrect Questions</h3>
            <ul>
              {results.filter(result => !result.isCorrect).map((result, index) => (
                <li key={index}>{`${result.firstOperand} ${result.operation} ${result.secondOperand} = ${result.result}`}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default App;
