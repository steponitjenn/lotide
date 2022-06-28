const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])

module.exports = flatten;
