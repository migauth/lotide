// Import chai for testing
const assert = require('chai').assert;

// Import flatten function for testing
const flatten = require('../flatten')

describe("#flatten", () => {
  it("Returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  })
  it("Returns [6, 8, 3, 4, 7, 9, 5, 6, 8, 8] when given [6, 8, [3, 4, 7, 9], 5, [6, 8, 8]]", () => {
    assert.deepEqual(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]]), [6, 8, 3, 4, 7, 9, 5, 6, 8, 8])
  })

})
