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


const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !==  ${ar2}`);
  }
};

const without = function(source, itemsToRemove) {
  let output = [].concat(source);
  for (let itemRmver of itemsToRemove) {
    let index = source.indexOf(itemRmver);
    if (index === -1) {
      continue;
    } else {
      output.splice(index, 1);
    }
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);