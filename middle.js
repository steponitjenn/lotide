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

module.exports = middle;
