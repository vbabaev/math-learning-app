// src/generators/addition.js
export const generateAdditionQuestion = () => {
    const num1 = Math.floor(Math.random() * 99) + 1; // 1 to 100
    const num2 = Math.floor(Math.random() * 99) + 1; // 1 to 100
    return {
      firstOperand: num1,
      secondOperand: num2,
      operation: '+',
      result: num1 + num2
    };
  };
  