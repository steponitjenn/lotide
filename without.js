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

//loop through 2nd array
//for each item in 2nd array, check if item exists in 1st array
//if it exists in 1st array, remove item from 1st array
//create a boolean flag isMatching=false
//loop through 2nd array for each iteration of 1st array
//when we find a match, update flag
//wait until 2nd loop is over
//look up flag isMatching=false
//add element to array
//return array

const without = (source, itemsToRemove) => {
  const keepItems = []
  for (let i = 0; i < source.length; i++) {
    let isMatching = false
    const array1Value = source[i];
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (array1Value === itemsToRemove[j]) {
        isMatching = true
      }
    }
    if (isMatching === false) {
      keepItems.push(array1Value)
    }
  }
  return keepItems
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["red", "green", "purple"], ["green"])
without([1, 2, 3], [2]) //



// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);