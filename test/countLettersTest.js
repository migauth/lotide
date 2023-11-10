// Import chai for testing
const assert = require('chai').assert;

// Import countLetters function for testing
const countLetters = require('../countLetters')

describe("#countLetters", () => {
  it("returns { h: 1, e: 1, l: 2, o: 1 } for 'hello'", () => {
    assert.deepEqual(countLetters('hello'),  { h: 1, e: 1, l: 2, o: 1 });
  });
  it("returns {} for ''", () => {
    assert.deepEqual(countLetters(''),  {});
  });

})
