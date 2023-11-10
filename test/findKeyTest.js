// Import chai for testing
const assert = require('chai').assert;

// Import findKey function for testing
const findKey = require('../findKey')

describe("#findKey", () => {
  it("returns 'noma' from {'noma': {stars: 2}", () => {
    assert.deepEqual(findKey({"noma": {stars: 2}}, x => x.stars === 2), "noma" );
  });
  it("returns 'noma' from {'Blue hill': {stars: 1}, 'Akaleri': {stars: 3}, 'noma': {stars: 2}}", () => {
    assert.deepEqual(findKey({'Blue hill': {stars: 1}, 'Akaleri': {stars: 3}, 'noma': {stars: 2}}, x => x.stars === 2), "noma" );
  });

})

