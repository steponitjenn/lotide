const assertEqual = require('./assertEqual');

const findKeyByValue = function (input, show) {
  for (const item in input) {
    if (input[item] === show) {
      return item;
    }
  }
};
//loop over the object
//find the show that matches
//return that show's key

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci-fi");

module.exports = findKeyByValue;
