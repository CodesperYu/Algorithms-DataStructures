function promiseRetry (ps, n) {
  console.log(ps)
  return new Promise(function (resolve, reject) {
    ps.then(function (result) {
      resolve(result)
    }).catch(function (err) {
      if (n <= 0) {
        reject(new Error('out of retries ', err))
      } else {
        promiseRetry(ps, n - 1)
      }
    })
  })
}

// test

let count = 0

function test () {
  console.log(count)
  count++
  return new Promise(function (resolve, reject) {
    if (count < 2) {
      reject(new Error('not 3'))
    } else {
      resolve('true')
    }
  })
}

promiseRetry(test(), 5).then(function (result) {
  return result
}).catch(function (err) {
  console.log(err)
})
