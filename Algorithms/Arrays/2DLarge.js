let followLargeRoute = (arr) => {
	if (arr.length === 0) {
		return 0;
	}
	return findLargestCenter(arr);

}

findLargestCenter = (arr) => {
	//find the lengths
	let column = arr.length;
	let row = arr[0].length;
	let valueCoord = {};

	//find points for center
	let midC = Math.floor(column/2);
	let midR = Math.floor(row/2);
	let evenMidC = column % 2 === 0 ? midC - 1 : null;
	let evenMidR = row % 2 === 0 ? midR - 1 : null;

	//assuming the worst that there will be a 2x2 center;
	let topLeftVal = null;
	let topRightVal = null;
	let bottomLeftVal = null;
	let bottomRightVal = null;
	
	//
	if (evenMidC) {
		topLeftVal = arr[evenMidC][evenMidR];
		topRightVal = arr[evenMidC][midR];
	}
	bottomLeftVal = arr[midC][evenMidR];
	bottomRightVal = arr[midC][midR];
	//set value and coordinate pairs
	valueCoord[topLeftVal] = [evenMidC, evenMidR];
	valueCoord[topRightVal] = [evenMidC, midR];
	valueCoord[bottomLeftVal] = [midC, evenMidR];
	valueCoord[bottomRightVal] = [midC, midR];

	//filter values
	let vals = [topLeftVal, topRightVal, bottomLeftVal, bottomRightVal].filter((val) => {
		return val !== undefined;
	});

	let largest = Math.max(...vals);
	return largest;

}

let arr1 = [[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]]

let arr2 = [[5, 7, 8, 6],
[0, 0, 2, 0],
[4, 6, 3, 4],
[3, 1, 0, 5]]

let arr3 = [[0]];


// console.log(followLargeRoute(arr1));
console.log(followLargeRoute(arr3));