const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log("❌ Assertion Failed: Arrays do not match")
    return false;
  } else {
    console.log("✔ Assertion Passed: Arrays match")
    return true;
  }
};

module.exports = assertArraysEqual;
