const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
console.log(tail(words));
const none = [];
tail(none);
assertEqual(none.length, 0);
console.log(tail(none));
const one = [1];
tail(one);
console.log(tail(one));
assertEqual(one.length, 1);