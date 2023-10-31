// The assertEqual function takes two parameters and compares them. It will return an assertion passed message if the arguments are the same, and a fail message if they are not.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

//The head function returns the first element of an array.

const head = arr => arr[0];

assertEqual(head([5,6,7]), 5); //Will pass.
assertEqual(head([6,6,7]), 5); //Will fail.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Will pass.
assertEqual(head([5]), 5) //Will pass.
assertEqual(head([])); //Will pass.
assertEqual(head(["Hello"]), "Hello"); //Will pass.
assertEqual(head(["Hello"]), "Goodbye"); //Will fail.
