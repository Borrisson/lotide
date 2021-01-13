const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', function() {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  it("returns { 'a': 1, 'e': 1, 'm': 2, 'n': 1, 'y': 1 } for 'my name'", function() {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Jason: 1, Fang: 2 });
  });
  it("returns an empty object {} for itemsToCount undefined", function() {
    assert.deepEqual(countOnly(firstNames,), {});
  });
});
