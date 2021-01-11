const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', function() {
  it('returns ["lighthouse", "labs"] for ["hello", "lighthouse", "labs"]', function() {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('throws Error for undefined', () => {
    assert.throws(tail, 'Undefined Error');
  });
});