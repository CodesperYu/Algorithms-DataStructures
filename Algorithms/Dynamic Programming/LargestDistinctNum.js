const largestDistinctNum = (arr) => {
  // get a tracker with the largest value at the time
  // use two pointer to keep track of how long the disctinct num is
  // one pointer looks for when the start of the sub array is and increases to make sure there are no duplicates
  // second pointer keeps going forward
  // we need a storage to check if they are all distinct
  if (arr.length < 1) {
    if (arr.length === 0) {
      return 0;
    }
    return 1;
  }
  const track = {};
  track[arr[0]] = true;
  let start = 0;
  let count = 1;
  let largest = 1;
  for (let i = 1; i < arr.length; i += 1) {
    const curr = arr[i];
    if (track[curr]) {
      while (arr[start] !== arr[i]) {
        track[arr[start]] = false;
        start += 1;
        count -= 1;
      }
      start += 1;
    } else {
      track[curr] = true;
      count += 1;
    }
    // console.log(count);
    largest = Math.max(count, largest);
  }
  return count;
};

const test1 = [5, 1, 3, 5, 2, 3, 4, 1];
// [1, 2, 3, 3, 4, 3, ]
const test2 = [2, 1, 3, 3, 2, 3, 4, 1]; // 4
// [1, 2, 3, 1, 2, 2, 3, 4]
const test3 = [1, 1, 1, 1, 1, 1, 1, 1]; // 1
const test4 = [1]; // 1
const test5 = []; // 0
const test6 = [5, 5, 3, 3, 3, 3, 5, 3]; // 2

console.log(largestDistinctNum(test1));
console.log(largestDistinctNum(test2));
console.log(largestDistinctNum(test3));
console.log(largestDistinctNum(test4));
console.log(largestDistinctNum(test5));
console.log(largestDistinctNum(test6));
