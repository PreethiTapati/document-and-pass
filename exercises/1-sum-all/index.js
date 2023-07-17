/**
 * Sum all numbers from num1 to num2
 *
 * @param {number} num1 - The start number.
 * @param {number} num2 - The end number.
 * @returns {number} - The sum of all numbers between num1 and num2 both included.
 */
const sumAll = (start, end) => {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) {
      return 'ERROR';
    }
  
    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  module.exports = sumAll;
  
 
  
