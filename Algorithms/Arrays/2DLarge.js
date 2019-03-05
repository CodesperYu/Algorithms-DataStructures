let carrotsEatenFromLargestPath = (carrotPatchGrid) => {
  if (carrotPatchGrid.length === 0 || carrotPatchGrid[0].length === 0) return 0
  let startPointCoord = findLargestCenter(carrotPatchGrid)
  return totalCarrots(startPointCoord, carrotPatchGrid)
}

// returns the number of carrots eaten based on the path
let totalCarrots = (currentPosition, carrotPatchGrid, carrots = 0) => {
  let currRow
  let currCol
  let numberCarrotInCurrPosition

  // while there are surrounding carrots, next will remain true
  while (currentPosition) {
    currRow = currentPosition[0]
    currCol = currentPosition[1]
    numberCarrotInCurrPosition = carrotPatchGrid[currRow][currCol]
    carrots += numberCarrotInCurrPosition
    carrotPatchGrid[currRow][currCol] = 0
    currentPosition = largestCarrotPath(currRow, currCol, carrotPatchGrid)
  }
  return carrots
}

// returns coordinates of largest path
let largestCarrotPath = (row, col, carrotPatchGrid) => {
  // directions to go up, left, down, right respectively
  let DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]]
  let largestCarrotAmount = 0
  let largestCarrotCoordinate = null

  // find next direction with largest carrots
  for (let i = 0; i < DIRECTIONS.length; i++) {
    let carrotVal = null
    if (carrotPatchGrid[row + DIRECTIONS[i][0]]) {
      carrotVal = carrotPatchGrid[row + DIRECTIONS[i][0]][col + DIRECTIONS[i][1]]
    }
    if (carrotVal > largestCarrotAmount) {
      largestCarrotAmount = carrotVal
      largestCarrotCoordinate = [row + DIRECTIONS[i][0], col + DIRECTIONS[i][1]]
    }
  }
  return largestCarrotAmount === 0 ? false : largestCarrotCoordinate
}

let findLargestCenter = (carrotPatchGrid) => {
  let numRows = carrotPatchGrid.length
  let numCols = carrotPatchGrid[0].length
  let centerCoords = findCenterCoordinates(numRows, numCols)

  // check each coordinates to compare and return the coordinates of the largest carrot value
  return centerCoords.reduce((currHighCoord, coord) => {
    let carrotAmount = carrotPatchGrid[coord[0]][coord[1]]
    let currHighestCarrotAmount = carrotPatchGrid[currHighCoord[0]][currHighCoord[1]]
    return carrotAmount > currHighestCarrotAmount ? coord : currHighCoord
  }, centerCoords[0])
}

let findCenterCoordinates = (numRows, numCols) => {
  let centerCoords = []
  let centerRow = Math.floor(numRows / 2)
  let centerCol = Math.floor(numCols / 2)
  centerCoords.push([centerRow, centerCol])

  // Add more coordinates if row or column or both have even numbers
  let hasEvenNumRows = numRows % 2 === 0
  let hasEvenNumCols = numCols % 2 === 0
  if (hasEvenNumRows) {
    centerCoords.push([centerRow - 1, centerCol])
  }
  if (hasEvenNumCols) {
    centerCoords.push([centerRow, centerCol - 1])
  }
  if (hasEvenNumRows && hasEvenNumCols) {
    centerCoords.push([centerRow - 1, centerCol - 1])
  }
  return centerCoords
}

// TESTS
let arr1 = [[5, 7, 8, 6, 3], [0, 0, 7, 0, 4], [4, 6, 3, 4, 9], [3, 1, 0, 5, 8]] // 27
let arr2 = [[5, 2, 3], [0, 2, 0], [1, 3, 4], [0, 5, 6]] // 18
let arr3 = [[3, 0], [0, 2]] // 3
let arr4 = [[1, 2, 3, 0, 2, 5, 0]] // 6
let arr5 = [[1], [5], [2], [8], [5]] // 15
let arr6 = [[0]] // 0
let arr7 = [[]] // 0
let arr8 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]] // 0
let arr9 = [[1, 5, 0], [9, 0, 2], [4, 1, 6]] // 22

console.log(carrotsEatenFromLargestPath(arr1))
console.log(carrotsEatenFromLargestPath(arr2))
console.log(carrotsEatenFromLargestPath(arr3))
console.log(carrotsEatenFromLargestPath(arr4))
console.log(carrotsEatenFromLargestPath(arr5))
console.log(carrotsEatenFromLargestPath(arr6))
console.log(carrotsEatenFromLargestPath(arr7))
console.log(carrotsEatenFromLargestPath(arr8))
console.log(carrotsEatenFromLargestPath(arr9))
