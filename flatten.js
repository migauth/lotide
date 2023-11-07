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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍀🍀🍀 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗️❗️❗️ Assertion failed: ${actual} !== ${expected}`);
  }
};

//The flatten function will take an array with nested arrays (one level deep) and flatten them into a single array with one layer.

const flatten = (arr) => {
  const copyArr = [...arr]; //Creates a copy of the argument array
  const newArr = []; //Creates an empty array

  for (const element of copyArr) { //Loops through each element of argument array
    if (Array.isArray(element)) { //Checks to see if the element is an array
      for (const nested of element) {
        newArr.push(nested); //Adds element to new array unnested
      }
    } else {
      newArr.push(element); //Adds the remining elements of argument array
    }
  }
  return newArr;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])) // Will return [1, 2, 3, 4, 5, 6]
console.log(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]])) // Will return [6, 8, 3, 4, 7, 9, 5, 6, 8, 8]


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //Will return pass
assertArraysEqual(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]]), [6, 8, 3, 4, 7, 9, 5, 6, 8, 8]); //Will return pass
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [2, 2, 3, 4, 5, 6]); //Will return fail