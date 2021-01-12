const eqObjects = require('./eqObjects');

const eqArrays = function(ar1, ar2) {
  let condition = true;
  if (ar1.length !== ar2.length) {
    return false;
  }

  for (let index of ar1.keys()) {
    if (Array.isArray(ar1[index])) {
      condition = eqArrays(ar1[index], ar2[index]);
    } else if(typeof ar1[index] === 'object') {
      condition = eqObjects(ar1[index], ar2[index]);
    } else if (ar1[index] !== ar2[index]) {
      condition = false;
    }
  }
  return condition;
};

module.exports = eqArrays;