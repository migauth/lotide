// Import eqArrays function for comparing arrays
const eqArrays = require('./eqArrays');

// The assertArraysEqual function checks if two arrays arrays match. It will return an assertion passed message if the arrays are the same, and a fail message if they are not.

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢(*ΦωΦ*)*-*-*-*-🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴(ノಠ益ಠ)ノ彡┻━┻🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;