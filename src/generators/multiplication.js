// src/generators/multiplication.js
export const generateMultiplicationQuestion = () => {
    const num1 = Math.floor(Math.random() * 12) + 1; // 1 to 12
    const num2 = Math.floor(Math.random() * 12) + 1; // 1 to 12
    const result = num1 * num2;
    const blankPosition = Math.floor(Math.random() * 3); // 0, 1, or 2
  
    return {
      firstOperand: num1,
      secondOperand: num2,
      operation: '*',
      result: result,
      blankPosition
    };
  };
  