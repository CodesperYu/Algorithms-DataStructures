function isMatch(s, p) {
  const dp = Array(s.length + 1).fill('').map(() => Array(p.length + 1).fill(''));

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i === 0 || j === 0) {
        dp[i][j] = false;
      } else if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if ()
    }
  }
  console.log(dp);
}

console.log(isMatch('ab', '*b'));
