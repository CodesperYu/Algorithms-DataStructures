function oddEvenSeparation(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const leftVal = arr[left];
    const rightVal = arr[right];
    if (leftVal % 2 !== 0) {
      if (rightVal % 2 === 0) {
        arr[left] = rightVal;
        arr[right] = leftVal;
      }
      right -= 1;
    } else {
      left += 1;
    }
  }
  return arr;
}

console.log(oddEvenSeparation([-4, 7, 2, 0, 0, 3, 6, 10, 1]));
console.log(oddEvenSeparation([3, 7, 5, 2, 0, 3, 6, 10, 1]));
console.log(oddEvenSeparation([15, 7, 2, -12, -52, 3, 6, 10, 1]));
console.log(oddEvenSeparation([1, 2, 3, 4, 5, 6]));
console.log(oddEvenSeparation([-4, 2]));
