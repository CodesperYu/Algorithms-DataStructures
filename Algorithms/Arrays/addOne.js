function addOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const val = arr[i] + 1;
    if (val >= 10) {
      arr[i] = 0;
    } else {
      arr[i] = val;
      return arr;
    }
  }
  return [1].concat(arr);
}

console.log(addOne([9, 9, 9]));
console.log(addOne([8, 9, 9]));
console.log(addOne([1, 2, 3]));
