require('./helpers.js').getFile('1', (file) => {
  const chars = file.split('');

  function calcSum(prevOffset) {
    return chars.reduce((sum, char, i) => {
      const prevIndex = i - prevOffset;
      return sum + (chars[prevIndex < 0 ? chars.length + prevIndex : prevIndex] === char ? +char : 0);
    }, 0);

  }

  console.log('Day 1a', calcSum(1));
  console.log('Day 1b', calcSum(chars.length / 2));
});
