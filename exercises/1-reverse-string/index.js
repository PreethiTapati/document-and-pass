/**
 * Reverses the order of characters in a given string.
 *
 * @param {string} [str=''] - The string to be reversed.
 * @returns {string} - The reversed string.
 */
const reverseString = (str) => {
    return str.split('').reverse().join('');
  };
  
  module.exports = reverseString;
  