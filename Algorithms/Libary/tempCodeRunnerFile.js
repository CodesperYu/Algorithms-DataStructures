function soon (val) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(val) },
      Math.random() * 500)
  })
}
all([soon(1), soon(2), soon(3)]).then(function (array) {
  console.log('This should be [1, 2, 3]:', array)
})