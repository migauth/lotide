// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢(*ΦωΦ*)🟢🟢-------> Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴(ノಠ益ಠ)ノ彡┻━┻🔴🔴 NOPE! Assertion failed: ${actual} !== ${expected}`);
  }
};

//

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
