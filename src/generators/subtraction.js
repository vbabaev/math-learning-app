// src/generators/subtraction.js
export const generateSubtractionQuestion = () => {
    let num1 = Math.floor(Math.random() * 99) + 1; // 1 to 100
    let num2 = Math.floor(Math.random() * 99) + 1; // 1 to 100
  
    if (num1 < num2) {
      [num1, num2] = [num2, num1];
    }
  
    const result = num1 - num2;
    const blankPosition = Math.floor(Math.random() * 3); // 0, 1, or 2
  
    return {
      firstOperand: num1,
      secondOperand: num2,
      operation: '-',
      result: result,
      blankPosition
    };
  };
  