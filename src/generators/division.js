// src/generators/division.js
export const generateDivisionQuestion = () => {
    const num1 = Math.floor(Math.random() * 11) + 2; // 1 to 12
    const num2 = Math.floor(Math.random() * 11) + 2; // 1 to 12
    const product = num1 * num2;
    const blankPosition = Math.floor(Math.random() * 3); // 0, 1, or 2
  
    return {
      firstOperand: product,
      secondOperand: num1,
      operation: '÷',
      result: num2,
      blankPosition
    };
  };
  