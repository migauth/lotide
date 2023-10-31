// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢(*ΦωΦ*)🟢🟢-------> Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴(ノಠ益ಠ)ノ彡┻━┻🔴🔴 NOPE! Assertion failed: ${actual} !== ${expected}`);
  }
};

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

// const eqObjects = function (object1, object2) {
//   const keysArray1 = Object.keys(object1);
//   const count1 = keysArray1.length;
//   const keysArray2 = Object.keys(object2);
//   const count2 = keysArray2.length;
//   if (count1 !== count2) {
//     return false;
//   }
//   for (const key in object1) {
//     const checkArr1 = Array.isArray(object1[key]);
//     const checkArr2 = Array.isArray(object2[key]);
//     if (object1[key] === object2[key]) {
//       return true;
//     } else if (checkArr1 === true && checkArr2 === true) {
//       return eqArrays(object1[key], object2[key]);
//     } else {
//       return false;
//     }
//   }
// }

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



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);


const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
assertEqual(eqObjects({first: [1], second: true}, {first: [1], second: false}), false)
