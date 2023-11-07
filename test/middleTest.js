// // Import chai for testing
const assert = require('chai').assert;
// Import middle function for testing
const middle = require('../middle')

describe("#middle", () => {
  it("When there is only one value in array it will return undefined", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("The middle value of an odd array is [2], the tester value is [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it("The middle value of an even array is [3, 4] the tester value is [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
})