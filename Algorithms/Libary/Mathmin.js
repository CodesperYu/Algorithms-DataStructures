function min() {
	let num = arguments;
	let smallest = null;
	for (let i = 0; i < num.length; i++) {
		let currNum = num[i];
		if (smallest === null || currNum < smallest) {
			smallest = currNum
		} else if (isNaN(currNum)) {
			return NaN;
		}
	}
	console.log(num);
	return smallest;
}

console.log(min(2,4,5,6,1,2,9,1,-5,2,-2,8))