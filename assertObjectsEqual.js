// Import eqArrays function for comparing arrays
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const oneKeyArray = Object.keys(object1);
  const twoKeyArray = Object.keys(object2);

  if (oneKeyArray.length !== twoKeyArray.length) {
    return false;
  }

  for (let key of oneKeyArray) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
 return true;
}

//The assertOjbectsEqual function takes two object properties and compares them. It will return an assertion passed message if the properties are the same, and a fail message if they are not.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

    if (eqObjects(actual, expected)) {
      console.log(`🍀🍀(*ΦωΦ*)🍀🍀 Yay! Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`❗️❗️(ノಠ益ಠ)ノ彡┻━┻ NOPE! ❗️❗️ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

assertObjectsEqual({a:[1, 2, 3], b:2}, {a:[1, 2, 3], b:2})
assertObjectsEqual({b:2}, {a:[1, 2, 3], b:2})
assertObjectsEqual({function(){}}, {function(){}})
  
module.exports = assertObjectsEqual;