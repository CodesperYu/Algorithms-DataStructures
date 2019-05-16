const heapSort = (arr) => {
  const mid = Math.floor(arr.length / 2);
  for (let i = mid; i >= 0; i--) {
    let	largeChildIndex = hasLargerChild(arr, i);
    const save = i;
    let parentIndex = i;
    while (largeChildIndex) {
      bubbleDown(arr, parentIndex, largeChildIndex);
      parentIndex = largeChildIndex;
      largeChildIndex = hasLargerChild(arr, largeChildIndex);
    }
    i = save;
  }
  return arr;
};

let hasLargerChild = (arr, i) => {
  const leftChildIndex = 2 * i + 1;
  const rightChildIndex = 2 * i + 2;
  let largerValueIndex = null;
  const leftChildValue = arr[leftChildIndex];
  const rightChildValue = arr[rightChildIndex];

  if (leftChildValue && rightChildValue) {
    largerValueIndex = leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex;
  } else if (leftChildValue) {
    largerValueIndex = leftChildIndex;
  } else if (rightChildValue) {
    largerValueIndex = rightChildIndex;
  }
  return largerValueIndex;
};

let bubbleDown = (arr, parentIndex, childIndex) => {
  const temp = arr[parentIndex];
  arr[parentIndex] = arr[childIndex];
  arr[childIndex] = temp;
};

const arr = [10, 6, 7, 5, 12, 17, 15];
console.log(heapSort(arr));
