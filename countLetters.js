const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
};


const countLetters = function(sentence) {

  let output = {};

  for (let char of sentence) {
    if (/\s/.test(char)) {
      continue;
    } else if (!output[char]) {
      output[char] = 1;
    } else {
      output[char]++;
    }
  }
  return output;
};

const word = countLetters("lighthouse in the house");

assertEqual(word["l"], 1);
assertEqual(word["i"], 2);
assertEqual(word["g"], 1);
assertEqual(word["h"], 4);
assertEqual(word["t"], 2);
assertEqual(word["o"], 2);
assertEqual(word["u"], 2);
assertEqual(word["s"], 2);
assertEqual(word["e"], 3);
assertEqual(word["n"], 1);