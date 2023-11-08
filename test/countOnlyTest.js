//Import chai for testing
const assert = require('chai').assert;

//Import countOnly function for testing
const countOnly = require('../countOnly')

describe("#countOnly", () => {
  it("returns { Jason: 1 } for ['Jason']", () => {
    assert.deepEqual(countOnly(['Jason'], { Jason: true }), { Jason: 1 });
  });
  it("returns { Fang: 2, Jason: 1 } for ['Jason', 'Fang', 'Fang']", () => {
    assert.deepEqual(countOnly(['Jason', 'Fang', 'Fang'], { Jason: true, Fang: true}), { Jason: 1, Fang: 2 });
  });
  it("returns {} for name that's not present in array", () => {
    assert.deepEqual(countOnly(['Jason', 'Fang', 'Fang'], { Blob: true }), {});
  });
  it("returns {} for name that's present in array but not requested", () => {
    assert.deepEqual(countOnly(['Jason', 'Fang', 'Fang'], { Jason: false }), {});
  });

})
