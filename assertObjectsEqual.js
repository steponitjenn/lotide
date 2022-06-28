const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
    return false
  } 
  else { console.log(`✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  return true
    }
};

// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
// assertObjectsEqual({ c: "11", d: ["2", 3] }, { d: ["2", 3], c: "1" })

module.exports = assertObjectsEqual;
