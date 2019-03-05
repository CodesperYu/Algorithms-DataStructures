function all(promises) {
	//creates a new Promise with success and fail
  return new Promise(function(success, fail) {
		//results
		var successArr = new Array(promises.length);
		//if promise has nothing, return empty array
    if (promises.length == 0) success(successArr);
		var pending = promises.length;
		//in an actual setting, you would have a bunch of promises looping together. Here, you are doing the same thing, it would call a promise, wait til it's done, then add it to the results.
    promises.forEach(function(promise, i) {
      promise.then(function(result) {
        successArr[i] = result;
        pending -= 1;
        if (pending == 0)
          success(successArr);
      }, function(error) {
        fail(error);
      });
    });
  });
}

// Testing
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
// => [1, 2, 3]