const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
const none = [];
tail(none);
assertEqual(none.length, 0);
const one = [1];
tail(one);
assertEqual(one.length, 1);

assertEqual(tail(words).length, 2);
assertEqual(tail(one).length, 0);
assertEqual(tail(words)[0], "Lighthouse");