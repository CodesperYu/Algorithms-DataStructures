let followLargeRoute = (arr) => {

	if (arr.length === 0 || arr[0].length === 0) {
		return 0;
	}

	let startPointCoord = findLargestCenter(arr);
	return addCarrotPaths(startPointCoord[0], startPointCoord[1], arr, 0);

}

let addCarrotPaths = (r, c, arr, carrots) => {
	//add carrots
	carrots += arr[r][c];
	arr[r][c] = 0;
	//initialize next
	let next = largestCarrotPath(r, c, arr);

	//Run until there are no more carrot path: add carrot, and change to 0;
	while(next) {
		r = next[0];
		c = next[1];
		carrots += arr[r][c];
		arr[r][c] = 0;
		next = largestCarrotPath(r, c, arr)
	}
	return carrots;
}


let largestCarrotPath = (r, c, arr) => {
	//directions
	let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
	let largest = 0;
	let largestCoord = null;

	//find next direction with largest carrots
	for (let i = 0; i < directions.length; i++) {
		let foodVal = null;
		if (arr[r + directions[i][0]]) {
			foodVal = arr[r+directions[i][0]][c+directions[i][1]] 
		}
		if (foodVal > largest) {
			largest = foodVal;
			largestCoord = [r + directions[i][0], c + directions[i][1]];
		}
	}
	
	let result = largest === 0 ? false : largestCoord;
	return result;
}

findLargestCenter = (arr) => {
	//length and value coordinate pair map
	let row = arr.length;
	let col = arr[0].length;
	let valueCoord = {};

	//center points
	let midC = Math.floor(col/2);
	let midR = Math.floor(row/2);
	let evenMidC = col % 2 === 0 ? midC - 1 : null;
	let evenMidR = row % 2 === 0 ? midR - 1 : null;

	// initialize values of center points
	let topLeftVal = null;
	let topRightVal = null;
	let bottomLeftVal = null;
	let bottomRightVal = null;

	// if row is not even, we don't have to check these 
	if (evenMidR !== null) {
		topLeftVal = arr[evenMidR][evenMidC];
		topRightVal = arr[evenMidR][midC];
	}
	bottomLeftVal = arr[midR][evenMidC];
	bottomRightVal = arr[midR][midC];

	//set value and coordinate pairs
	valueCoord[topLeftVal] = [evenMidR, evenMidC];
	valueCoord[topRightVal] = [evenMidR, midC];
	valueCoord[bottomLeftVal] = [midR, evenMidC];
	valueCoord[bottomRightVal] = [midR, midC];

	//filter out undefined (prevent NaN output for Math.max)
	let vals = [topLeftVal, topRightVal, bottomLeftVal, bottomRightVal].filter((val) => {
		return val !== undefined;
	});

	let largest = Math.max(...vals);

	//return coordinates of largest value;
	return valueCoord[largest];
}

let arr1 = [[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]]

let arr2 = [[5,2,3],
					[0,2,0],
					[1,3,4],
					[0,5,6]]

let arr3 = [[3,4],
					[0,2]
				];
let arr4 = [[1,2,3,0,2,5,0]]

let arr5 = [
						[1],
						[5],
						[2],
						[8],
						[5]
						]

let arr7 = [[0]];
let arr8 = [[]];


// console.log(followLargeRoute(arr1));
console.log(followLargeRoute(arr2));
