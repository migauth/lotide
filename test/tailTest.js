// Import assertEqual function for testing
const assertEqual = require('../assertEqual');
// Import tail function for testing
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
const none = [];
tail(none);
assertEqual(none.length, 0);
const one = [1];
tail(one);
assertEqual(one.length, 1);

const test1 = tail(words);
assertEqual(test1.length, 2);

const test2 = tail(one);
assertEqual(test2.length, 0);

const test3 = tail(words)[0]
assertEqual(test3, "Lighthouse"); //Tests that the tail function is correctly returning all but the first element of the array.
