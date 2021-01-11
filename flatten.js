const flatten = function(array) {
  let newArray = array.reduce((flat, current) => flat.concat(current), []);
  for (let el of newArray) {
    if (Array.isArray(el)) {
      newArray = flatten(newArray);
    }
  }
  return newArray;
};
module.exports = flatten;
// const array = [1, 2, [[3], 4], 5, [[6]]];

// console.log(flatten(array));

// console.log(array);