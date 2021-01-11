const countLetters = function(sentence) {
  if (sentence === undefined) {
    throw new Error('Undefined Error');
  } else {

    let output = {};

    for (let char of sentence.toLowerCase()) {
      if (/\s/.test(char)) {
        continue;
      } else if (!output[char]) {
        output[char] = 1;
      } else {
        output[char]++;
      }
    }
    return output;
  }
};
module.exports = countLetters;