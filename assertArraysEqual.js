const eqArrays = require('./eqArrays');

//The assertArraysEqual function 

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍀🍀(*ΦωΦ*)🍀🍀 Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗️❗️(ノಠ益ಠ)ノ彡┻━┻ NOPE! ❗️❗️ Assertion failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;