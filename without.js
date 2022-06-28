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

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// without(["red", "green", "purple"], ["green"])
// without([1, 2, 3], [2]) //

module.exports = without;

