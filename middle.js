const middle = function(array) {
  let arrayLgt = array.length;
  let halfway = arrayLgt / 2;
  if (arrayLgt <= 2) {
    return [];
  } else if (arrayLgt % 2 === 0) {
    let elFirst = array[halfway - 1];
    let elSecond = array[halfway];
    return [elFirst, elSecond];
  } else {
    let el = array[Math.floor(halfway)];
    return [el];
  }
};

module.exports = middle;