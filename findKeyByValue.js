// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢(*ΦωΦ*)🟢🟢-------> Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴(ノಠ益ಠ)ノ彡┻━┻🔴🔴 NOPE! Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, val) {
  for (const key in obj) {
    if (val === obj[key]) {
      return key;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "The"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);