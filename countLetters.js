const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢(*ΦωΦ*)🟢🟢-------> Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴(ノಠ益ಠ)ノ彡┻━┻🔴🔴 NOPE! Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let result = {};
  for (let letters of sentence) {
    if (result[letters]) {
      result[letters]++;
    } else {
      result[letters] = 1
    }
  }
  return (result);
};

console.log(countLetters("lighthouselabs"));
