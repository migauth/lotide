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
    console.log(`❗️❗️❗️ ASssertion failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arr) {
  let copyArr = [...arr];
  let newArr = [];
  while (copyArr.length) {
    const isNest = copyArr.pop();
    if(Array.isArray(isNest)){
      copyArr.push(...isNest);
    } else {
      newArr.push(isNest);
    }
  }
  return newArr.reverse();
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
