//Import chai for testing
const assert = require('chai').assert;

//Import middle function for testing
const middle = require('../middle')

describe("#middle", () => {
  it("Returns an empty array for a single-element array", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("The middle value of an odd array is [2], the tester value is [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it("The middle value of an even array is [3, 4] the tester value is [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
  it("Make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });
})