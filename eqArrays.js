// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

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

console.log(eqArrays([1, 2, 3], [1, 2, 3])) //Will be true.
console.log(eqArrays([1, 2, 3], [3, 2, 1])) //Will be false.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //Will return pass.
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //Will return fail.