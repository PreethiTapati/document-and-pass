/**
 * Repeats a given string a specified number of times.
 *
 * @param {string} str - The string to be repeated.
 * @param {number} repetitions - The number of times the string should be repeated.
 * @returns {string} - The resulting string after repetition.
 */

const repeatString = (str, num) => {
    if (num < 0) {
      return 'ERROR';
    }
  
    let result = '';
    for (let i = 0; i < num; i++) {
      result += str;
    }
  
    return result;
  };
  
  module.exports = repeatString;
  




// const repeatString = () => {

// }

// module.exports = repeatString
