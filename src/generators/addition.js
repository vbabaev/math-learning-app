// src/generators/addition.js
export const generateAdditionQuestion = () => {
    const num1 = Math.floor(Math.random() * 99) + 1; // 1 to 100
    const num2 = Math.floor(Math.random() * 99) + 1; // 1 to 100
    const result = num1 + num2;
    const blankPosition = Math.floor(Math.random() * 3); // 0, 1, or 2
  
    return {
      firstOperand: num1,
      secondOperand: num2,
      operation: '+',
      result: result,
      blankPosition
    };
  };
  