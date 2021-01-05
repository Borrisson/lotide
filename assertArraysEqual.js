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


const assertArraysEqual = function(ar1, ar2) {
  if(eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !==  ${ar2}`)
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
