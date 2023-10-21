const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

assertEqual(words.length, 3);
const none = [];
tail(none);
assertEqual(none.length, 0);
const one = [1];
tail(one);
assertEqual(one.length, 1);