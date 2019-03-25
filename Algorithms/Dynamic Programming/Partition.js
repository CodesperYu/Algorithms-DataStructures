const canPartition = (nums) => {
  const sum = nums.reduce((a, b) => a + b, 0);

  if (sum % 2 !== 0) return false;

  const halfSum = sum / 2;
  const { length } = nums;
  const DP = Array(nums.length).fill('').map(() => Array(halfSum).fill(''));
  for (let col = 0; col < length; col++) {
    const currNum = nums[col];
    for (let row = 0; row <= halfSum; row++) {
      if (row === 0) {
        DP[col][row] = true;
      } else if (col - 1 >= 0) {
        if (row < currNum) {
          DP[col][row] = DP[col - 1][row];
        } else {
          DP[col][row] = DP[col - 1][row] || DP[col - 1][row - currNum];
        }
      } else {
        DP[col][row] = false;
      }
    }
  }
  return DP[length - 1][halfSum];
};

const test1 = [1, 11, 3, 5];
const test2 = [1, 5, 5, 11];

console.log(canPartition(test1));
console.log(canPartition(test2));
