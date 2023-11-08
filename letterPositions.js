//

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

console.log(letterPositions("lighthouse in the house"));


const result1 = letterPositions("hello");
assertArraysEqual(result1.e, [1]); //will pass
assertArraysEqual(result1.e, [2]); //will fail

const result2 = letterPositions("lighthouse in the house");
assertArraysEqual(result2.e, [9, 16, 22]); // will pass

module.exports = letterPositions;