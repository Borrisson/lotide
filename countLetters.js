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

// const word = countLetters("lighthouse in the house");

// assertArraysEqual(word["l"], 1);
// assertArraysEqual(word["i"], 2);
// assertArraysEqual(word["g"], 1);
// assertArraysEqual(word["h"], 4);
// assertArraysEqual(word["t"], 2);
// assertArraysEqual(word["o"], 2);
// assertArraysEqual(word["u"], 2);
// assertArraysEqual(word["s"], 2);
// assertArraysEqual(word["e"], 3);
// assertArraysEqual(word["n"], 1);
// assertArraysEqual(word[" "], undefined);

module.exports = countLetters;