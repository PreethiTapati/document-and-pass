/**
 * Extracts the titles from an array of objects and returns them in a new array.
 *
 * @param {Array<Object>} arr - An array of objects containing title properties.
 * @returns {Array} An array of titles extracted from the input array of objects.
 */
const getTheTitles = (arr) => {
  return arr.map(obj => obj.title);
};

module.exports = getTheTitles;

