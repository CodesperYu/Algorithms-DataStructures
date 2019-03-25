const longSubKDistinct = (str, k) => {
  if (str.length < k) {
    return str.length;
  }
  let prev = [str[0], 1];
  let curr = null;
  let currLongest = 1;
  let Longest = 1;

  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    if (curr === null) {
      if (char === prev[0]) {
        prev[1]++;
        currLongest++;
      } else {
        curr = [char, 1];
        currLongest++;
      }
    } else if (prev[0] === char) {
      prev[1]++;
      currLongest++;
    } else if (curr[0] === char) {
      curr[1]++;
      currLongest++;
    } else {
      currLongest -= prev[1];
      prev = curr;
      curr = [char, 1];
      currLongest++;
    }
    Longest = Math.max(currLongest, Longest);
  }
  return Longest;
};

const test1 = 'aabbc';
const test2 = 'abbcba';
const test3 = 'aabbbbbddaaassseeeettksdnnnnnnnnnnndddddddddnnnnkasdw'; // 25

console.log(longSubKDistinct(test1, 3));
