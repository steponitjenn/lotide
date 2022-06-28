const assertEqual = require('./assertEqual');

const findKey = function (object, callback) {
  for (const key in object) {
    const value = object[key];
    if (callback(value)) {
      return key;
    }
  }
};



// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

//assertEqual(result1, "noma");

module.exports = findKey;
