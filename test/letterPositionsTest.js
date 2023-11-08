//Import chai for testing
const assert = require('chai').assert;

//Import letterPositions function for testing
const letterPositions = require('..letterPositions/')

describe("#letterPositions", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
})


// console.log(letterPositions("lighthouse in the house"));


// const result1 = letterPositions("hello");
// assertArraysEqual(result1.e, [1]); //will pass
// assertArraysEqual(result1.e, [2]); //will fail

// const result2 = letterPositions("lighthouse in the house");
// assertArraysEqual(result2.e, [9, 16, 22]); // will pass