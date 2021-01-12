const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe('#eqArrays', function() {
  it('returns true for [1,2,3] === [1,2,3]', function() {
    assert.isTrue(eqArrays([1,2,3], [1,2,3]), true);
  });
  it('returns true for ["1", "2", "3"] === ["1", "2", "3"]', function() {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it('returns true for [1, 2, 3] === [1, 2, 3]', function() {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns true for [[2, 3], [4]] === [[2, 3], [4]]', function() {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it('returns true for [] === []', function() {
    assert.isTrue(eqArrays([], []), true);
  });
  it('returns true for [{}] === [{}]', function() {
    assert.isTrue(eqArrays([{}], [{}]), true);
  });
  it('returns true for [1, 2, 3] !== [3, 2, 1]', function() {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), 'false');
  });
  it('returns true ["1", "2", "3"] !== ["1", "2", 3]', function() {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]), 'false');
  });
  it('returns true [2, 3], [4]] !== [[2, 3], [4, 5]] ', function() {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), 'false');
  });
  it('returns true [[2, 3], [4]] !== [[2, 3], 4] ', function() {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]), 'false');
  });
});