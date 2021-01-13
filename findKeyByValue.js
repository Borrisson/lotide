const findKeyByValue = function(objectToSearch, searchByValue) {
  if (objectToSearch === undefined || searchByValue === undefined) {
    throw new Error('error');
  }
  for (let [key, value] of Object.entries(objectToSearch)) {
    if (value === searchByValue) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;