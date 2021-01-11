const head = function(array) {
  if (array === undefined) {
    throw new Error('Undefined Error');
  } else if (!array.length) {
    return array;
  } else {
    return array[0];
  }
};

module.exports = head;