const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
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

const assertArraysEqual = function(ar1, ar2) {
  if(eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !==  ${ar2}`)
  }
};

const letterPositions = function (sentence) {
 
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (/\s/.test(char)) {
      continue;
    } else if (!results[char]) {
      results[char] = [i];
    } else {
      results[char].push(i);
    }

  }

  return results;
};

const word = letterPositions("lighthouse in the house");

assertArraysEqual(word["l"], [0]);
assertArraysEqual(word["i"], [1, 11]);
assertArraysEqual(word["g"], [2]);
assertArraysEqual(word["h"], [3, 5, 15, 18]);
assertArraysEqual(word["t"], [4, 14]);
assertArraysEqual(word["o"], [6, 19]);
assertArraysEqual(word["u"], [7, 20]);
assertArraysEqual(word["s"], [8, 21]);
assertArraysEqual(word["e"], [9, 16, 22]);
assertArraysEqual(word["n"], [12]);
assertEqual(word[" "], undefined);