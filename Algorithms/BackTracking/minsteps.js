// function minimumStepsToOne(n) {
//   function traverse(current) {
//     if (current === 1) {
//       return 0;
//     }

//     // subtract 1 option
//     let option = traverse(current - 1);

//     // divide by 3 option
//     if (current % 3 === 0) {
//       const divide3 = traverse(current / 3);
//       option = Math.min(option, divide3);
//     }

//     // divide by 2 option
//     if (current % 2 === 0) {
//       const divide2 = traverse(current / 2);
//       option = Math.min(option, divide2);
//     }

//     return option + 1;
//   }

//   return traverse(n);
// }

// function minimumStepsToOne(num) {
//   const cache = {};
//   function stepsTree(num) {
//     if (cache[num]) {
//       return cache[num];
//     }
//     if (num === 1) {
//       return 0;
//     }

//     let option = stepsTree(num - 1);

//     if (num % 3 === 0) {
//       const div3 = stepsTree(num / 3);
//       option = Math.min(div3, option);
//     }

//     if (num % 2 === 0) {
//       const div2 = stepsTree(num / 2);
//       option = Math.min(div2, option);
//     }
//     cache[num] = option + 1;
//     return cache[num];
//   }
//   return stepsTree(num);
// }

function minimumStepsToOne(num) {
  const memoize = new Array(num + 1);
  memoize[1] = 0;
  for (let i = 2; i <= num; i++) {
    let lowest = memoize[i - 1];
    if (i % 3 === 0) {
      const val = memoize[i / 3];
      lowest = Math.min(val, lowest);
    }
    if (i % 2 === 0) {
      const val = memoize[i / 2];
      lowest = Math.min(val, lowest);
    }
    memoize[i] = lowest + 1;
  }
  return memoize[num];
}

console.time('test: ');
console.log(minimumStepsToOne(300));
console.timeEnd('test: ');
