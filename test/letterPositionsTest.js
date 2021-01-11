const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', function() {
  it('returns { "e": [1], "h":[0], "l": [2,3], "o":[4] } for "hello"', function() {
    assert.deepEqual(letterPositions("hello"), { "e": [1], "h":[0], "l": [2,3], "o":[4] });
  });
  it('throws an Error for undefined', function() {
    assert.throws(letterPositions, 'Type Error');
  });
  it("returns { 'a': [1, 5], 'c': [2,4], 'e': [3], 'r': [0, 6] } for 'RacECAr'", function() {
    assert.deepEqual(letterPositions('RacECAr'), { 'a': [1, 5], 'c': [2,4], 'e': [3], 'r': [0, 6] });
  });
});

// const word = letterPositions("lighthouse in the house");

// assertArraysEqual(word["l"], [0]);
// assertArraysEqual(word["i"], [1, 11]);
// assertArraysEqual(word["g"], [2]);
// assertArraysEqual(word["h"], [3, 5, 15, 18]);
// assertArraysEqual(word["t"], [4, 14]);
// assertArraysEqual(word["o"], [6, 19]);
// assertArraysEqual(word["u"], [7, 20]);
// assertArraysEqual(word["s"], [8, 21]);
// assertArraysEqual(word["e"], [9, 16, 22]);
// assertArraysEqual(word["n"], [12]);
// assertEqual(word[" "], undefined);