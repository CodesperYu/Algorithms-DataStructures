var permute = function (nums) {
  if (nums.length < 2) {
    return [nums]
  }
  let permutations = []
  for (let i = 0; i < nums.length; i++) {
    let start = [nums[i]]
    let leftOver = [...nums.slice(0, i), ...nums.slice(i + 1)]
    let combo = permute(leftOver)
    for (let j = 0; j < combo.length; j++) {
      let permutation = [start, ...combo[j]]
      permutations.push(permutation)
    }
  }
  return permutations
}

// var permute = function (nums) {
//   if (nums.length < 2) {
//     return [nums]
//   }

//   let allPerm = []
//   for (var i = 0; i < nums.length; i++) {
//     let start = [nums[i]]
//     let leftOver = nums.slice(0, i).concat(nums.slice(i + 1, nums.length))
//     console.log(leftOver)
//     let wordBank = permute(leftOver)
//     for (let j = 0; j < wordBank.length; j++) {
//       let newPerm = start.concat(wordBank[j])
//       allPerm.push(newPerm)
//     }
//   }
//   return allPerm
// }

// let permuteString = function (string) {
//   if (string.length < 2) {
//     return string
//   }
//   let allPerm = []
//   for (let i = 0; i < string.length; i++) {
//     let start = string[i]
//     let other = string.slice(0, i).concat(string.slice(i + 1))
//     let wordBank = permuteString(other)
//     for (let j = 0; j < wordBank.length; j++) {
//       let newPerm = start + wordBank[j]
//       allPerm.push(newPerm)
//     }
//   }
//   return allPerm
// }

// console.log(permuteString('abc'));

console.log(permute([1, 2, 3]))
