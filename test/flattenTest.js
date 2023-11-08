//Import chai for testing
const assert = require('chai').assert;

//Import flatten function for testing
const flatten = require('../flatten')

describe("#flatten", () => {
  it("Returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  })

})

// console.log(flatten([1, 2, [3, 4], 5, [6]])) // Will return [1, 2, 3, 4, 5, 6]
// console.log(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]])) // Will return [6, 8, 3, 4, 7, 9, 5, 6, 8, 8]


// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //Will return pass
// assertArraysEqual(flatten([6, 8, [3, 4, 7, 9], 5, [6, 8, 8]]), [6, 8, 3, 4, 7, 9, 5, 6, 8, 8]); //Will return pass
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [2, 2, 3, 4, 5, 6]); //Will return fail