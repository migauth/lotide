// The countLetters function takes a string parameter returns an object with all letters as keys with the number of times the letter occurs as a value.

const countLetters = function (sentence) {
  let result = {};
  for (let letters of sentence) {
    if (letters !== " ") {
      if (result[letters]) {
        result[letters]++;
      } else {
        result[letters] = 1
      }
    }
  }
  return (result);
};

module.exports = countLetters;

