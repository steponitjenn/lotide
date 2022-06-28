const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const array = ['Yo Yo', 'Lighthouse', 'Labs'];
  const tailResult = tail(['Yo Yo', 'Lighthouse', 'Labs'])
  it("returns 2 for resulting array.length", () => {
    assert.strictEqual(tailResult.length, 2); 
  });
  it("returns Lighthouse for index 0", () => {
    assert.strictEqual(tailResult[0], 'Lighthouse'); 
  });
  it("returns Labs for index 1", () => {
    assert.strictEqual(tailResult[1], 'Labs'); 
  });
  it("returns ['Lighthouse', 'Labs'] for tail(array)", () => {
    assert.deepEqual(tailResult, ['Lighthouse', 'Labs']); 
  });
});
