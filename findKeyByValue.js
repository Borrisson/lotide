const findKeyByValue = function(objectToSearch, searchByValue) {
  for (let [key, value] of Object.entries(objectToSearch)) {
    if (value === searchByValue) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   action: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
