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