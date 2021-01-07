const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !==  ${ar2}`);
  }
};

const eqArrays = function(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let index of ar1.keys()) {
    if (ar1[index] !== ar2[index]) {
      return false;
    }
  }
  return true;
};


const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);