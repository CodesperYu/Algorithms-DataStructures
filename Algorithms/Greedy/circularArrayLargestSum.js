// Given a circular array, compute its maximum subarray sum in O(n) time.

// For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

// Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.

const maximumSubArray = (arr) => {
  let sum = 0;
  let lowest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (currNum > 0) {
      sum += currNum;
    } else {
      lowest = Math.max(lowest, currNum);
    }
  }
  return sum === 0 ? lowest : sum;
};

const test1 = [8, -1, 3, 4];
const test2 = [-4, 5, 1, 0];
const test3 = [-4, -5, 50, 45, 10, 5, 1, 0];
const test4 = [-4, -5, 50, 45, 10, 5, 1, -3];
const test5 = [-4, -5, -50, -45, -10, -5, -1, -3];
const test6 = [-4, -5, -50, -45, -10, 0, -1, -3];


console.log(maximumSubArray(test1));
console.log(maximumSubArray(test2));
console.log(maximumSubArray(test3));
console.log(maximumSubArray(test4));
console.log(maximumSubArray(test5));
console.log(maximumSubArray(test6));
