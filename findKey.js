const findKey = function(object, callback) {
  for (let [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

module.exports = findKey;
// let testObject = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// let result = findKey(testObject, x => x.stars === 2); // => "noma"
// let result1 = findKey(testObject, X => X.stars === 0);
// const assertEqual = function(actual, expected) {
//   return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
// };

// assertEqual(result, "noma");
// assertEqual(result1, undefined);