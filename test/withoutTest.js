// Import chai for testing
const assert = require('chai').assert;

//Import without function for testing
const without = require('../without')

describe("#without", () => {
  it("returns [2, 3] from [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3])
  })
  it("returns ['1', '2'] from [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2'])
  })
  it("returns ['hello', 'world'] from ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world'])
  })
 
})