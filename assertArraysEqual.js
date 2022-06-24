const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log("❌ Assertion Failed: Arrays do not match")
    return false;
  } else {
    console.log("✔ Assertion Passed: Arrays match")
    return true;
  }
};





(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
(assertArraysEqual([1], ["1"]));