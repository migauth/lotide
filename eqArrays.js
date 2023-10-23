const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false)
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS