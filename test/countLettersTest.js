const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', function() {
  it("returns { 'a': 1, 'e': 1, 'm': 2, 'n': 1, 'y': 1 } for 'my name'", function() {
    assert.deepEqual(countLetters('my name'), { 'a': 1, 'e': 1, 'm': 2, 'n': 1, 'y': 1 });
  });
  it("returns an empty object {} for empty string ''", function() {
    assert.deepEqual(countLetters(''), {});
  });
  it("throws an error for undefined", function() {
    assert.throws(countLetters, 'Undefined Error');
  });
  it("returns all lower case counts no matter the case { 'a': 2, 'c': 2, 'e': 1, 'r': 2 } for 'RacECAr'", function() {
    assert.deepEqual(countLetters('RacECAr'), { 'a': 2, 'c': 2, 'e': 1, 'r': 2 });
  });
});