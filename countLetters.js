// The countLetters function takes a string parameter returns an object with all letters as keys with the number of times the letter occurs as a value.

const countLetters = function (sentence) {
  let result = {}; //Emtpy object for pushing values
  for (let letters of sentence) { //Loop through object
    if (letters !== " ") { //Skip spaces
      if (result[letters]) {
        result[letters]++; //If letter occurs more than once
      } else {
        result[letters] = 1 
      }
    }
  }
  return (result);
};

module.exports = countLetters;

