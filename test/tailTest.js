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

assertEqual(tail(one).length, 0);
assertEqual(tail(words)[0], "Lighthouse");