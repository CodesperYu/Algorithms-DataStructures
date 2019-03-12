function all (promises) {
  return new Promise(function (resolve, reject) {
    var successArr = new Array(promises.length)
    if (promises.length === 0) resolve(successArr)
    var pending = promises.length
    promises.forEach(function (promise, i) {
      promise.then(function (result) {
        successArr[i] = result
        pending -= 1
        if (pending === 0) { resolve(successArr) }
      }, function (error) {
        reject(error)
      })
    })
  })
}
// recursive, will grab values in order
function all (ps) {
  if (ps.length <= 0) return Promise.resolve([])
  let head = ps[0]
  let tail = ps.slice(1)
  return head.then(result => {
    return all(tail).then(results => [result, ...results])
  })
}

// Testing
function soon (val) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(val) },
      Math.random() * 500)
  })
}
console.log(all)
all([soon(1), soon(2), soon(3)]).then(function (array) {
  console.log('This should be [1, 2, 3]:', array)
})
// => [1, 2, 3]
