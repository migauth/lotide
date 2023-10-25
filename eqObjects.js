const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢(*ΦωΦ*)🟢🟢-------> Yay! Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴(ノಠ益ಠ)ノ彡┻━┻🔴🔴 NOPE! Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  for (const key in object1) {
    const keysArray1 = Object.keys(object1);
    const count1 = keysArray1.length;
    const keysArray2 = Object.keys(object1);
    const count2 = keysArray2.length;
    // console.log(object1[key]);
    // console.log(object2[key]);
    // console.log(Object.keys(object1));
    if (object1[key] === object2[key] && count1 === count2) {  //the values for keys match
      return true;
    }
  }
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true


// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);