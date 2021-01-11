const flatten = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Type Error');
  } else {
    let newArray = array.reduce((flat, current) => flat.concat(current), []);
    for (let el of newArray) {
      if (Array.isArray(el)) {
        newArray = flatten(newArray);
      }
    }
    return newArray;
  }
};
module.exports = flatten;
