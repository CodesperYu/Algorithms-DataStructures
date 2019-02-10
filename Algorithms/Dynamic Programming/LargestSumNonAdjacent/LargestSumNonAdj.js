let largestSumNonAdj = (arr) => {
	if (arr.length <= 2) {
		return Math.max(arr[0], arr[1]);
	}

	let prev = arr[0];
	let curr = arr[1];

	for (let i = 2; i < arr.length; i++) {
		let large = Math.max(prev + arr[i], prev, arr[i], curr);
		prev = curr; 
		curr = large;
	}

	return curr;
}

let test1 = [2,4,6,2,5]; //13
let test2 = [0,0,0,0,0]; //0
let test3 = [0, -20, 1, 5, -1]; //5
let test4 = [1, 4, 2, -2, 8, 4]; //12
console.log(largestSumNonAdj(test4));