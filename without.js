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

module.exports = without;
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);