// Import eqArrays function for comparing arrays
const eqArrays = require('./eqArrays');

//
const assertEqual = require('./assertEqual')

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