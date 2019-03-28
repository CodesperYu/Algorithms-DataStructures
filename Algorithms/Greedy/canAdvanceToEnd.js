function canAdvanceToEnd(arr) {
  let moves = arr[0];
  if (moves === 0) return false;
  for (let i = 1; i < arr.length - 1; i += 1) {
    moves -= 1;
    const additionalSteps = arr[i];
    if (moves === 0 && additionalSteps === 0) return false;
    if (additionalSteps > moves) {
      moves = additionalSteps;
    }
  }
  return true;
}

console.log(canAdvanceToEnd([1, 3, 1, 2, 0, 1])); // true
console.log(canAdvanceToEnd([1, 0, 1, 3, 0, 1])); // false
console.log(canAdvanceToEnd([1, 2, 1, 0, 0])); // false
console.log(canAdvanceToEnd([1, 3, 1, 1, 0, 1])); // false
console.log(canAdvanceToEnd([5, 0, 0, 0, 0, 0])); // true
console.log(canAdvanceToEnd([0, 1])); // true
