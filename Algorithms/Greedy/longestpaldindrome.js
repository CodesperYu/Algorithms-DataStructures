const longestPalindrome = function (s) {
  let startIndex = 0;
  let endIndex = 0;
  let largest = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      if (s[i + 1] === s[i]) {
        endIndex = 1;
        largest = 2;
      } else {
        endIndex = 0;
        largest = 1;
      }
    }
    if (i > 0) {
      if (s[i - 1] === s[i + 1]) {
        const count = findPalindromeLength(1, i - 1, i + 1, s);
        if (count > largest) {
          const difference = (count - 1) / 2;
          startIndex = i - difference;
          endIndex = i + difference;
          largest = count;
        }
      }
      if (s[i] === s[i + 1]) {
        const count = findPalindromeLength(2, i - 1, i + 2, s);
        if (count > largest) {
          const difference = (count - 2) / 2;
          startIndex = i - difference;
          endIndex = i + 1 + difference;
          largest = count;
        }
      }
    }
  }
  return s.slice(startIndex, endIndex + 1);
};


let findPalindromeLength = function (count, leftI, rightI, s) {
  while (leftI >= 0 && rightI < s.length && s[leftI] === s[rightI]) {
    count += 2;
    leftI--;
    rightI++;
  }
  return count;
};
