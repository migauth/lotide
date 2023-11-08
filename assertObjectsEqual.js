// Import eqArrays function for comparing arrays
const eqArrays = require('./eqArrays');

//Import eqObjects function for comparing objects
const eqObjects = require('./eqObjects')

//The assertOjbectsEqual function takes two object properties and compares them. It will return an assertion passed message if the properties are the same, and a fail message if they are not.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

    if (eqObjects(actual, expected)) {
      console.log(`🟢(*ΦωΦ*)*-*-*-*-🟢 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🔴(ノಠ益ಠ)ノ彡┻━┻🔴 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

assertObjectsEqual({a:[1, 2, 3], b:2}, {a:[1, 2, 3], b:2})
assertObjectsEqual({b:2}, {a:[1, 2, 3], b:2})
assertObjectsEqual({function(){}}, {function(){}})
  
module.exports = assertObjectsEqual;