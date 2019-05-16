function spiralOrder(matrix) {
  const sol = [];
  let cStart = 0;
  let rStart = 0;
  let column = matrix.length - 1;
  let row = matrix[0].length - 1;


  while (row >= rStart && column >= cStart) {
    spiralIteration(sol, matrix, rStart, row, cStart, column);
    cStart++;
    column--;
    rStart++;
    row--;
  }
  return sol;
  // [0,0] [0,1] [0,2] [0,3]
  // [1,0] [1,1] [1,2] [1,3]
  // [2,0] [2,1] [2,2] [2,3]
  // [3,0] [3,1] [3,2] [3,3]
}

function spiralIteration(sol, matrix, rowStart, rowEnd, colStart, colEnd) {
  for (let i = rowStart; i <= rowEnd; i++) {
    sol.push(matrix[colStart][i]);
  }
  colStart++;
  for (let j = colStart; j <= colEnd; j++) {
    sol.push(matrix[j][rowEnd]);
  }
  rowEnd--;
  if (colEnd >= colStart) {
    for (let k = rowEnd; k >= rowStart; k--) {
      sol.push(matrix[colEnd][k]);
    }
  }
  colEnd++;
  if (rowEnd >= rowStart) {
    for (let l = colEnd - 1; l >= colStart + 1; l--) {
      sol.push(matrix[l][colStart]);
    }
  }
  rowStart--;
}

console.log(spiralOrder([[1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18]]));


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
