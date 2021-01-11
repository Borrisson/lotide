const letterPositions = function (sentence) {
  if (typeof sentence !== 'string') {
    throw new Error('Type Error');
  } else {
    const results = {};

    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i].toLowerCase();
      if (/\s/.test(char)) {
        continue;
      } else if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
    return results;
  }
};
module.exports = letterPositions;