const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }
  return results;
}

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Aghouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Aghouhanna": false});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Aghouhanna"], undefined);

module.exports = countOnly;
