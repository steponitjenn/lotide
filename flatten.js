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

// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i <= arr1.length || i <= arr2.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     } else {
//     }
//   } return true;
// };

//loop through each item in array and determine if it's an array
//if item is not an array, push to flatArray
//if item is an array, loop over that array and push each item to flatArray
//push to flatArray
//return flatArray


const flatten = (array) => {
  const flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flatArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])