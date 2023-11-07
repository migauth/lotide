const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //Will return pass.
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); //Will return fail.