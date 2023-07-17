/**
 * Removes specified values from an array.
 *
 * @param {Array} arr - The input array.
 * @param {...*} values - The values to be removed from the array.
 * @returns {Array} - A new array with the specified values removed.
 */
const removeFromArray = (array, ...valuesToRemove) => {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (!valuesToRemove.includes(value)) {
        result.push(value);
      }
    }
  
    return result;
  };
  
  module.exports = removeFromArray;



