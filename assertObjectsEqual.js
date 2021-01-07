const eqArrays = function(ar1, ar2) {
  if(ar1.length !== ar2.length) {
    return false;
  }
  for (let index of ar1.keys()){
    if(ar1[index] !== ar2[index]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(obj1, obj2) {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  let condition = true;

  for (let [key, value] of Object.entries(obj1)) {
    if (Array.isArray(obj1[key])) {
      condition = eqArrays(obj1[key],obj2[key]);
    } else if (obj2[key] !== value) {
      condition = false;
    }
  }

  for (let [key, value] of Object.entries(obj2)) { //goes through both incase one has more {key:value} pairs.
    if (Array.isArray(obj2[key])) {
      condition = eqArrays(obj1[key],obj2[key]);
    } else if (obj1[key] !== value) {
      condition = false;
    }
  }
  return condition;
};

const assertObjectsEqual = function(ar1, ar2) {
  const inspect = require('util').inspect;
    if(eqObjects(ar1, ar2)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(ar1)} === ${inspect(ar2)}`)
    } else {
      console.log(`❌❌❌ Assertion Failed: ${inspect(ar1)} !==  ${inspect(ar2)}`)
    }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false