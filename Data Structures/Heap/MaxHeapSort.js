let heapSort = (arr) => {
  let mid = Math.floor(arr.length / 2)
  for (let i = mid; i >= 0; i--) {
    let	largeChildIndex = hasLargerChild(arr, i)
    let save = i
    let parentIndex = i
    while (largeChildIndex) {
      bubbleDown(arr, parentIndex, largeChildIndex)
      parentIndex = largeChildIndex
      largeChildIndex = hasLargerChild(arr, largeChildIndex)
    }
    i = save
  }
  console.log(arr)
}

let hasLargerChild = (arr, i) => {
  let leftChildIndex = 2 * i + 1
  let rightChildIndex = 2 * i + 2
  let largerValueIndex = null
  let leftChildValue = arr[leftChildIndex]
  let rightChildValue = arr[rightChildIndex]

  if (leftChildValue && rightChildValue) {
    largerValueIndex = leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex
  } else if (leftChildValue) {
    largerValueIndex = leftChildIndex
  } else if (rightChildValue) {
    largerValueIndex = rightChildIndex
  }

  if (arr[i] === 10) {
    console.log(leftChildValue, rightChildValue, largerValueIndex)
  }
  return largerValueIndex
}

let bubbleDown = (arr, parentIndex, childIndex) => {
  console.log(parentIndex, childIndex)
  let temp = arr[parentIndex]
  arr[parentIndex] = arr[childIndex]
  arr[childIndex] = temp
}

let arr = [10, 6, 7, 5, 12, 17, 15]
console.log(heapSort(arr))
