function robotPaths(matrix) {
  const numOfRows = matrix.length;
  const numOfCols = matrix[0].length;

  function traverse(row, col) {
    if (row < 0 || col < 0 || row >= numOfRows || col >= numOfCols) {
      return 0;
    }

    if (matrix[row][col] === 1) {
      return 0;
    }

    if (row === numOfRows - 1 && col === numOfCols - 1) {
      return 1;
    }

    // mark coordinate as visited
    matrix[row][col] = 1;

    const sum = traverse(row + 1, col) + traverse(row, col - 1) + traverse(row - 1, col) + traverse(row, col + 1);

    // backtrack
    matrix[row][col] = 0;

    return sum;


  }

  return traverse(0, 0);
}
