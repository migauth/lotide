// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = arr => arr.slice(1);

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