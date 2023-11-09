//The letterPositions function returns an object with keys of each letter, and an array with the indices of each occuring letter as a value.

const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letters = sentence[i];
    if (letters !== " ") {
      if (result[letters]) {
        result[letters].push(i); //accounts for the duplicates
      } else {
        result[letters] = [i];   //sets the base number if no duplicate
      }
    }
  }
  return result;
}

module.exports = letterPositions;