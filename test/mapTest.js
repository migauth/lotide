// Import chai for testing
const assert = require('chai').assert;

//Import map function for testing
const map = require('../map');

describe("#map", () => {
  it("returns ['h', 'w'] from ['hello', 'world;]", () => {
    assert.deepEqual(map(['hello', 'world'], word => word[0]), ['h', 'w'])
  })

})
