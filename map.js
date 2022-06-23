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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);


console.log(assertArraysEqual(map(["take", "your", "protein", "pills"], ["t", "y", "p", "p"])))