// src/generators/division.js
export const generateDivisionQuestion = () => {
    const num1 = Math.floor(Math.random() * 12) + 1; // 1 to 12
    const num2 = Math.floor(Math.random() * 12) + 1; // 1 to 12
    const product = num1 * num2;
    
    return {
      firstOperand: product,
      secondOperand: num1,
      operation: '÷',
      result: num2
    };
  };
  