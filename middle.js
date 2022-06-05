// const assertArraysEqual = function(arr1, arr2) {
//   for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log("❌ Assertion Failed: Arrays do not match")
//       return false
//   } else {
//   }
//   }
//   console.log("✔ Assertion Passed: Arrays match")
//   return true
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`:) Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`:() Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const middle = (array) => {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let evenMiddle1 = (array.length / 2) - 1;
    let evenMiddle2 = array.length / 2;
    return [array[evenMiddle1], array[evenMiddle2]]
  } else {
    let oddMiddle = (array.length / 2) - .5;
    return [array[oddMiddle]];
  }
};



console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, "lemon", 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 33, 44, 5, 6])) // => [3, 4]


// // TEST/ASSERTION FUNCTIONS
// const eqArrays = function(...) {
//   //...
// }

// const assertArraysEqual = function(actual, expected) {
//   //...
// }

// // ACTUAL FUNCTION
// const middle = function(array) {
//   //...
// }

// // TEST CODE
// // ...