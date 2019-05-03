function groupAnagrams(words) {
  const result = [];
  const anagrams = {};

  words.forEach((word) => {
    const order = word.split('').sort().join('');
    if (anagrams[order]) {
      anagrams[order].push(word);
    } else {
      anagrams[order] = [word];
    }
  });

  for (const keys in anagrams) {
    result.push(anagrams[keys]);
  }

  return result;
}
