const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);