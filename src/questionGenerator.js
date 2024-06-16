// src/questionGenerator.js
import { generateAdditionQuestion } from './generators/addition';
import { generateSubtractionQuestion } from './generators/subtraction';
import { generateMultiplicationQuestion } from './generators/multiplication';
import { generateDivisionQuestion } from './generators/division';

const questionGenerators = {
  addition: generateAdditionQuestion,
  subtraction: generateSubtractionQuestion,
  multiplication: generateMultiplicationQuestion,
  division: generateDivisionQuestion
};

export const generateQuestions = (selectedGenerators, numQuestions) => {
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

  return generatedQuestions;
};
