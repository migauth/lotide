const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Testing two identical arrays. Will return pass.
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); //Testing two arrays with same elements but different order. Will return fail.
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true); //Testing more identical arrays. Will return pass.
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); //Testing arrays with different lengths. Will return fail.