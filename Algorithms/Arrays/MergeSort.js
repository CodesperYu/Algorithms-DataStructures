let mergeSort = (arr) => {
  if (arr.length < 2) return arr

  let mid = Math.floor(arr.length / 2)
  let leftSort = mergeSort(arr.slice(0, mid))
  let rightSort = mergeSort(arr.slice(mid))
  return combineTwoSortedArrays(leftSort, rightSort)
}

let combineTwoSortedArrays = (leftSort, rightSort) => {
  let sortedArray = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < leftSort.length || rightIndex < rightSort.length) {
    let leftVal = leftSort[leftIndex]
    let rightVal = rightSort[rightIndex]

    if (!leftVal) {
      sortedArray.push(rightVal)
      rightIndex++
    } else if (!rightVal) {
      sortedArray.push(leftVal)
      leftIndex++
    } else if (rightVal >= leftVal) {
      sortedArray.push(leftVal)
      leftIndex++
    } else if (leftVal > rightVal) {
      sortedArray.push(rightVal)
      rightIndex++
    }
  }
  return sortedArray
}

let arr = [10, 6, 7, 5, 12, 17, 15]
console.log(mergeSort(arr))
