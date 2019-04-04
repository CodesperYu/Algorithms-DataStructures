function minimumStepsToOne(num) {
  let lowestSteps = Infinity;
  function stepsTree(num, currSteps) {
    if (num === 1) {
      lowestSteps = Math.min(currSteps, lowestSteps);
      return;
    }
    if (num % 3 === 0) {
      stepsTree(num / 3, currSteps + 1);
    }
    if (num % 2 === 0) {
      stepsTree(num / 2, currSteps + 1);
    }
    stepsTree(num - 1, currSteps + 1);
  }
  stepsTree(num, 0);
  return lowestSteps;
}

console.log(minimumStepsToOne(11));
