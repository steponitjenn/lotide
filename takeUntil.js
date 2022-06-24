const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("❌ Assertion Failed: Arrays do not match")
      return false
  } else {
  } 
  } 
  console.log("✔ Assertion Passed: Arrays match")
  return true
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
};
