const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const callback = function(item) {
//   return item[0];
// }
// assertArraysEqual(map(["take", "your", "protein", "pills"], callback), ["t", "y", "p", "p"]);
// assertArraysEqual(map(["and", "put", "your", "helmet", "on"], callback), ["a", "p", "y", "h", "o"]);

module.exports = map;
