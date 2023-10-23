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

const without = function (source, itemsToRemove) {
  let newSource = source;
  let newArr = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    let sourceLength = source.length;
    for (let j = 0; j < sourceLength; j++) {
      if (itemsToRemove[i] === source[j]) {
        newArr = newSource.slice(0, j).concat(newSource.slice(j + 1, sourceLength));
      }
    }
  }
  return newArr;
}



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, 4, 5, 6], [3]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);