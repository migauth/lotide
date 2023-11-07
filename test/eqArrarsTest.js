const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


console.log(eqArrays([1, 2, 3], [1, 2, 3])) //Will be true.
console.log(eqArrays([1, 2, 3], [3, 2, 1])) //Will be false.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //Will return pass.
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //Will return fail.