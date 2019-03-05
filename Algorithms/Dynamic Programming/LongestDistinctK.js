let longSubKDistinct = (str, k) => {
  if (str.length < k) {
    return str.length
  }
  let prev = [str[0], 1]
  let curr = null
  let currLongest = 1
  let Longest = 1

  for (let i = 1; i < str.length; i++) {
    let char = str[i]
    if (curr === null) {
      if (char === prev[0]) {
        prev[1]++
        currLongest++
      } else {
        curr = [char, 1]
        currLongest++
      }
    } else {
      if (prev[0] === char) {
        prev[1]++
        currLongest++
      } else if (curr[0] === char) {
        curr[1]++
        currLongest++
      } else {
        currLongest -= prev[1]
        prev = curr
        curr = [char, 1]
        currLongest++
      }
    }
    console.log(currLongest)
    Longest = Math.max(currLongest, Longest)
  }
  return Longest
}

let test1 = 'aabbc'
let test2 = 'abbcba'
let test3 = 'aabbbbbddaaassseeeettksdnnnnnnnnnnndddddddddnnnnkasdw' // 25

console.log(longSubKDistinct(test1, 3))
