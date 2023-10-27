const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

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
  
  