const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
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