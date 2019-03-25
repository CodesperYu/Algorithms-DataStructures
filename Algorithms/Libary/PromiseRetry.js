function promiseRetry(ps, n) {
  console.log(ps);
  return new Promise(((resolve, reject) => {
    ps.then((result) => {
      resolve(result);
    }).catch((err) => {
      if (n <= 0) {
        reject(new Error('out of retries ', err));
      } else {
        promiseRetry(ps, n - 1);
      }
    });
  }));
}

// test

let count = 0;

function test() {
  console.log(count);
  count++;
  return new Promise(((resolve, reject) => {
    if (count < 2) {
      reject(new Error('not 3'));
    } else {
      resolve('true');
    }
  }));
}

promiseRetry(test(), 5).then(result => result).catch((err) => {
  console.log(err);
});
