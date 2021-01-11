const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(ar1, ar2) {
  const inspect = require('util').inspect;
    if(eqObjects(ar1, ar2)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(ar1)} === ${inspect(ar2)}`)
    } else {
      console.log(`❌❌❌ Assertion Failed: ${inspect(ar1)} !==  ${inspect(ar2)}`)
    }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false