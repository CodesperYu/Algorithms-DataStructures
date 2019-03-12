function retry (f, n, cb) {
  f(function (err, data) {
    if (err && n <= 0) {
      cb(err)
    } else if (err) {
      retry(f, n - 1, cb)
    } else {
      cb(null, data)
    }
  })
}

let count = 0
function test (cb) {
  count++
  if (count >= 5) {
    cb(null, 'success')
  } else {
    cb(new Error('failure'))
  }
}

retry(test, 10, function (err, value) {
  if (err) {
    console.log('retry error:', err)
  } else {
    console.log('retry success:', value)
  }
})
