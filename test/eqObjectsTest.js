// Import chai for testing
const assert = require('chai').assert;

// Import eqObjects for testing
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for {color: 'red', size: 'medium' } ===  {size: 'medium', color: 'red' }", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });
  it("returns true for  colors: ['red', 'blue'], size: 'medium' } ===  { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.deepEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), true);
  });
  it("returns false for {color: 'red', size: 'medium' } === {size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, {size: 'medium', color: 'red', sleeveLength: 'long' }), false);
  });
})