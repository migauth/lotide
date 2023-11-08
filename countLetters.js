// The countLetters function

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
assertEqual(countResult['l'], 2);
assertEqual(countResult['h'], 1);

module.exports = countLetters;