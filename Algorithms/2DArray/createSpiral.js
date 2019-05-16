const createSpiral = (num) => {
  let start = 1;
  const length = num - 1;
  let right = length;
  const bottom = length;
  const left = 0;
  let top = 0;
  const matrix = Array(num).fill().map(() => Array(num).fill(0));

  for (let i = 0; i < num; i++) {
    matrix[top][i] = start;
    start++;
  }
  top++;

  while (length > 0) {
    const rightCount = 0;
    let left;
    while (right <= length) {
      matrix[right][length] = start;
      start++;
      right++;
    }

    while (bottom >= 0) {
      matrix[length][bottom];
    }
  }

  return matrix;
};
console.log(createSpiral(5));
