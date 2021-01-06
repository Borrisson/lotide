const eqArrays = function (ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let index of ar1.keys()) {
    if (ar1[index] !== ar2[index]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${ar1} !==  ${ar2}`)
  }
};


const middle = function (array) {
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
}

const array = [1, 2, 3, 4, 5];
middle(array);
assertArraysEqual(array, [1, 2, 3, 4, 5]); //first checking that it doesn't alter the original array.
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);