const letterPositions = function(sentence) {
  const letters = sentence.replace(/\s/g, '');
  const results = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      const array = results[letter];
      array.push(i);
      results[letter] = array;
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
