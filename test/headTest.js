// Import assertEqual function for testing
const assertEqual = require('../assertEqual');
// Import head function for testing
const head = require('../head')

//The first index of the array is 5, the tester is 5. Will pass.
assertEqual(head([5,6,7]), 5);
//The first index of the array is 6, the tester is 5. Will fail.
assertEqual(head([6,6,7]), 5); 
//The first index of the array is "Hello", the tester is "Hello". Will pass.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//The first index of the array is 5, the tester is 5. Will pass.
assertEqual(head([5]), 5)
//The first index of the array is undefined, the tester is undefined. Will pass.
assertEqual(head([]), undefined);
//The first index of the array is "Hello", the tester is "Hello". Will pass. Will pass.
assertEqual(head(["Hello"]), "Hello");
//The first index of the array is "Hello", the tester is "Goodbye". Will pass. Will pass.
assertEqual(head(["Hello"]), "Goodbye");