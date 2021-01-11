const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function (obj1, obj2) {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  let condition = true;
  let length1 = Object.keys(obj1).length;
  let length2 = Object.keys(obj2).length;
  if (length1 !== length2) {
    return false;
  }
  for (let [key, value] of Object.entries(obj1)) {
    if (Array.isArray(obj1[key])) {
      condition = eqArrays(obj1[key], obj2[key]);
    } else if (typeof obj1[key] === 'object') {
      condition = eqObjects(obj1[key], obj2[key]);
    } else if (obj2[key] !== value) {
      condition = false;
    }
  }
  return condition;
};

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false