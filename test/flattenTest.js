const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', function() {
  it('returns [1,2,3,4,5,6] for [1,2,3,[4],[5],6]', function() {
    assert.deepEqual(flatten([1,2,3,[4],[5],6]), [1,2,3,4,5,6]);
  });
  it('returns [1] for [[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]', function() {
    assert.deepEqual(flatten([[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]), [1]);
  });
  it('returns an empty array [] for []', function() {
    assert.deepEqual(flatten([]), []);
  });
  it('throws a type Error if an array is not provided', function() {
    assert.throws(flatten, 'Type Error');
  });
});