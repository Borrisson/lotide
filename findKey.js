const findKey = function(object, callback) {
  for (let [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

module.exports = findKey;