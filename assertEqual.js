// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢(*ΦωΦ*)🟢🟢-------> Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴(ノಠ益ಠ)ノ彡┻━┻🔴🔴 NOPE! Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs"); //Will return pass
assertEqual("Lighthouse Labs", "Bootcamp"); //Will return fail
assertEqual(1, 1); //Will return pass
assertEqual(1, 2); //Will return fail