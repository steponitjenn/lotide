const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } 
  return true;
};
const eqObjects = function (object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);
  if (obj1Arr.length !== obj2Arr.length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } 
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("❌ Assertion Failed: Objects do not match")
    return false
  } else { console.log("✔ Assertion Passed: Objects match")
  return true
    }
};


assertObjectsEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true );
assertObjectsEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true );
