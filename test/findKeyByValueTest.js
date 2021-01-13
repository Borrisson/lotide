const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe('#findKeyByValue', function() {
  it('returns "drama" from "The Wire"', function() {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      action: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined if no value exists', function() {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      action: "The Wire"
    };
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
  it('throws an error if either parameter is undefined', function() {
    assert.throws(findKeyByValue, 'error');
  });
});





// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   action: "The Wire"
// };

// // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);