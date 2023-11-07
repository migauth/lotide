// Import assertArraysEqual function for testing
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Compairing two identical arrays. Will return pass.
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // Compairing two identical arrays. Will return pass.
assertArraysEqual([1], [1]); // Compairing two identical arrays. Will return pass.
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 3]); // Compairing two arrays with different values. Will return fail.
assertArraysEqual([1, 2, 3], [1, 2]); // Compairing two arrays with different lengths. Will return fail.
assertArraysEqual([1, 2, 3], []); // //Compairing an array with values and an empty array. //Will fail.
