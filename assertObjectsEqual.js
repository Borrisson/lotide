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