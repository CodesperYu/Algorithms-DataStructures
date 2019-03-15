function callbackAll(fns, cb) {
  const result = new Array(fns.length);
  let pending = fns.length;
  fns.forEach((fn, i) => {
    fn((err, val) => {
      if (err) {
        cb(err);
      } else {
        result[i] = val;
        pending -= 1;
        if (pending <= 0) {
          cb(result);
        }
      }
    });
  });
}

// test
function test1(cb) {
  setTimeout(() => {
    cb(null, 1);
  }, 400);
}

function test2(cb) {
  setTimeout(() => {
    cb(null, 2);
  }, 200);
}

function test3(cb) {
  setTimeout(() => {
    cb(null, 3);
  }, 100);
}

function callback(err, val) {
  if (err) {
    console.log(err);
  } else if (val) {
    console.log(val);
  }
}

callbackAll([test1, test2, test3], callback);
