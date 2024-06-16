// src/generators/subtraction.js
export const generateSubtractionQuestion = () => {
    let num1 = Math.floor(Math.random() * 99) + 1; // 1 to 100
    let num2 = Math.floor(Math.random() * 99) + 1; // 1 to 100
  
    // Ensure no negative results
    if (num1 < num2) {
      [num1, num2] = [num2, num1];
    }
  
    return {
      firstOperand: num1,
      secondOperand: num2,
      operation: '-',
      result: num1 - num2
    };
  };
  