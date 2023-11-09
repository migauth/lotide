// Import chai for testing
const assert = require('chai').assert;

// Import findKeyByValue for testing
const findKeyByValue = require ('../findKeyByValue')

describe("#findKeyByValue", () => {
  it("returns 'drama' is the given 'The Wire'", () => {
    assert.deepEqual(findKeyByValue({drama: "The Wire"}, "The Wire"), "drama");
  });
  it("returns undefined is the given missing value", () => {
    assert.deepEqual(findKeyByValue({drama: "The Wire"}, "Twilight Zone"), undefined);
  });
  
})

