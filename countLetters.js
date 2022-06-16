const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letters = sentence.replace(/\s/g, '');
  //remove spaces
  const results = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    //loop over letters
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
    //check if letter exists as a key. start the count if not. add to the count if it does.
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters.h = 4, 4);

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }