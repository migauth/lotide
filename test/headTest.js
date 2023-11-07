const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5,6,7]), 5); //Will pass.
assertEqual(head([6,6,7]), 5); //Will fail.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Will pass.
assertEqual(head([5]), 5) //Will pass.
assertEqual(head([]), undefined); //Will pass.
assertEqual(head(["Hello"]), "Hello"); //Will pass.
assertEqual(head(["Hello"]), "Goodbye"); //Will fail.