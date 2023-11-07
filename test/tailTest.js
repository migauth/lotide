const assertEqual = require('../assertEqual');
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
const none = [];
tail(none);
assertEqual(none.length, 0);
const one = [1];
tail(one);
assertEqual(one.length, 1);

