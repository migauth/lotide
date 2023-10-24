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

const middle = function (arr) {
  const copyArr = [...arr];
  const newArr = [];
  const mid = (Math.floor(copyArr.length / 2))
  for (let i = 0; i < copyArr.length; i++) {
    const element = arr[i];
    if (copyArr.length <= 2) {
      return newArr;
    }
    if (i === mid && (copyArr.length % 2 === 0)) {
      newArr.push(element - 1, element)
    } else if (i === mid) {
      newArr.push(element);
    }
  }
  return newArr;
}


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]');
console.log(middle([1, 2, 3, 4])) // => [2, 3]);
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);