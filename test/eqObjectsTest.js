const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
describe('#eqObjects', function() {
  it('returns true for { a: "1", b: "2" } === { b: "2", a: "1" }', function() {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });
  it('returns true for { a: "1", b: "2" } !== { a: "1", b: "2", c: "3" }', function() {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });


  it('returns true for { c: "1", d: ["2", 3] } === { d: ["2", 3], c: "1" }', function() {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });
  it('returns true for { c: "1", d: ["2", 3] } !== { c: "1", d: ["2", 3, 4] }', function() {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });


  it('returns true for { a: { z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 }', function() {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('returns true for { a: { y: 0, z: 1 }, b: 2 } !== { a: { z: 1 }, b: 2 }', function() {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('returns true { a: { y: 0, z: 1 }, b: 2 } !== { a: 1, b: 2 }', function() {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});