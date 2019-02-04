let numberOfDecode = (arr) => {
	let DP = 0;
	if (arr.length > 0 && arr[0] !== 0) {
		DP = 1;
	} else {
		return null;
	}
	
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === 0 &&  (i !== arr.length-1 || arr[i-1] > 2)) {
			return null;
		}

		if (arr[i-1] <= 2 && arr[i] !== 0 && arr[i] <= 6) {
			DP++;
		}
	}
	return DP;
}



let test = [2,3,6,7,4,2,6,8,1,0]
let test1 = [2,0,6]
let test2 = [0, 1]
let test3 = [1,1,1];


console.log(numberOfDecode(test));

console.log(numberOfDecode(test1));

console.log(numberOfDecode(test2));

console.log(numberOfDecode(test3));