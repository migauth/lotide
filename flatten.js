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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍀🍀🍀 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗️❗️❗️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arr) {
  let copyArr = [...arr];
  let newArr = [];
  while (copyArr.length) {
    const element = copyArr.pop();
    if(Array.isArray(element)){
      copyArr.push(...element);
    } else {
      newArr.push(element);
    }
  }
  return newArr.reverse();
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]])) 


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]]), [6, 8, 3, 4, 7, 9, 5, 6, 8, 8]);