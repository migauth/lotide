const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍀🍀(*ΦωΦ*)🍀🍀 Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗️❗️(ノಠ益ಠ)ノ彡┻━┻ NOPE! ❗️❗️ Assertion failed: ${actual} !== ${expected}`);
  }
};

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

