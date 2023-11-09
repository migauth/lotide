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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍀🍀(*ΦωΦ*)🍀🍀 Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❗️❗️(ノಠ益ಠ)ノ彡┻━┻ NOPE! ❗️❗️ Assertion failed: ${actual} !== ${expected}`);
  }
};

//The takeUntil function takes an array as the first parameter and returns a new array up to where the callback specifies
const takeUntil = function(array, callback){
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break
    }
  }
  return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); //Expected [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]) //pass
assertArraysEqual(results1, [ 2, 2, 5, 7, 2 ]) //fail

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); //Expected [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]) //pass
assertArraysEqual(results2, [ 'I\'ve', 'beeeeeen', 'to', 'Hollywood' ]) //fail
