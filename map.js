const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// let cl = console.log;
// cl(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]));
// cl(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]));
// cl(assertArraysEqual(map(words, word => word.length > 3), [true, true, false, true, false]));