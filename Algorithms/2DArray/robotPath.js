function robotPaths(matrix) {
  // YOUR WORK HERE
  return -1;
}


/*
 *  Matrix Spiral
 *
 *  Given an (MxN) matrix of integers, return an array in spiral order.
 *
 *
 *  Input:  matrix {Integer[][]}
 *  Output: {Integer}
 *
 *
 * Example:
 *  Input:  [[ 1, 2, 3],
 *           [ 4, 5, 6],
 *           [ 7, 8, 9]]
 *
 *  Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 */


// Time Complexity:
// Auxiliary Space Complexity:

function matrix_spiral(matrix) {
  const result = [];
  let firstRow = 0;
  let firstCol = 0;
  let lastRow = matrix.length - 1;
  let lastCol = matrix[0].length - 1;

  while (firstRow <= lastRow && firstCol <= lastCol) {
    // top row
    for (let col = firstCol; col <= lastCol; col++) {
      result.push(matrix[firstRow][col]);
    }

    firstRow++;

    // last col
    for (let row = firstRow; row <= lastRow; row++) {
      result.push(matrix[row][lastCol]);
    }

    lastCol--;


    // last row
    if (lastRow >= firstRow) {
      for (let col = lastCol; col >= firstCol; col--) {
        result.push(matrix[lastRow][col]);
      }
    }
    lastRow--;

    if (lastCol >= firstCol) {
      // first col
      for (let row = lastRow; row >= firstRow; row--) {
        result.push(matrix[row][firstCol]);
      }
    }

    firstCol++;
  }

  return result;
}
