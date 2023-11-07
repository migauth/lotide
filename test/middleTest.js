// Import assertArraysEqual function for testing
const assertArraysEqual = require('../assertArraysEqual')
// Import middle function for testing
const middle = require('../middle')

//There is no middle. Will pass.
assertArraysEqual(middle([1]), []);
//There is no middle and tester is 1. Will fail.
assertArraysEqual(middle([1]), [1]);
//The middle is 2 and the tester is 2. Will pass.
assertArraysEqual(middle([1, 2, 3]), [2]);
//The middle is 3, 4 and the tester is 3, 4. Will pass.
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//The middle is 3, 4 and the tester is 4, 4. Will fail.
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 4]);