/**
 * Calculates the Fibonacci number at a given index.
 *
 * @param {number|string} num - The index of the Fibonacci number to calculate.
 * @returns {number|string} The Fibonacci number at the given index or 'OOPS'
 * if the input is invalid.
 */
const fibonacci = (num) => {
    if (typeof num === 'string') {
    num = parseInt(num);
  }


    if (num < 0) {
      return 'OOPS';
    }
  
    num = parseInt(num);
  
    let prev = 0;
    let curr = 1;
  
    for (let i = 2; i <= num; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
  
    return curr;
  };
  
  module.exports = fibonacci;
  