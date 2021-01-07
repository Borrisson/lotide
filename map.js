const assertArraysEqual = function(ar1, ar2) {
  if(eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !==  ${ar2}`)
  }
};

const eqArrays = function(ar1, ar2) {
  if(ar1.length !== ar2.length) {
    return false;
  }
  for (let index of ar1.keys()){
    if(ar1[index] !== ar2[index]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
let cl = console.log;
cl(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]));
cl(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]));
cl(assertArraysEqual(map(words, word => word.length > 3), [true, true, false, true, false]));