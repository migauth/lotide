// Import chai for testing
const assert = require('chai').assert;

// Import takeUntil function for testing
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("return [ 1, 2, 5, 7, 2 ] from [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ])
  })
  it("return ['I've', 'been', 'to', 'Hollywood'] from ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    assert.deepEqual(takeUntil(["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'], x => x === ','), ["I've", 'been', 'to', 'Hollywood'])
  })
 
})
