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

console.log(countLetters("lighthouselabs"));

const countResult = countLetters('lighthouselabs');
console.log(countLetters("hello"));
// assertEqual(countResult['l'], 2);
// assertEqual(countResult['h'], 1);

module.exports = countLetters;