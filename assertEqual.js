// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢(*ΦωΦ*)*-*-*-*-🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴(ノಠ益ಠ)ノ彡┻━┻🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;