//The eqArray function checks if two argument arrays match. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { //Will fail if the arrays are not the same length.
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { //Loops through the first array.
    if (arr1[i] !== arr2[i]) { //Checks if the elements in both arrays are not the same.
      return false; //If the elements are not the same, it will fail.
    }
  }
  return true; //If all elements of both arrays are the same, it will pass.
}

//The assertArraysEqual function 

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍀🍀(*ΦωΦ*)🍀🍀 Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗️❗️(ノಠ益ಠ)ノ彡┻━┻ NOPE! ❗️❗️ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2]); // should fail
