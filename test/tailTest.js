// Import chai for testing
const assert = require('chai').assert;

// Import tail function for testing
const tail = require('../tail')

describe("#tail", () => {
  it("Will return [2, 3, 4] from [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  })
  it("Will return ['b','c','d'] from ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd'])
  })
  it("Will return undefined from empty array", () => {
    assert.deepEqual(tail([]), [])
  })
 
})