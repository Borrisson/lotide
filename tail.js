const tail = function(array) {
  if (array === undefined) {
    throw new Error('Undefined Error');
  } else if (!array.length) {
    return array;
  } else {
  return array.slice(1);
  }
};

module.exports = tail;