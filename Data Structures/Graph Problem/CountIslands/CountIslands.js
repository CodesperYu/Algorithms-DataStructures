CountIslands = (matrix) => {
	let count = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 1) {
				markIsland(matrix, i, j);
				count++;
			}
		}
	}
	return count;
};

markIsland = (graph, i, j) => {
	let queue = [];
	queue.push([i, j]);
	while (queue.length > 0) {
		let coord = queue.pop();
		// console.log(coord);
		let x = coord[0];
		let y = coord[1];
		graph[x][y] = -1;
		let extra = findIsland(graph, x, y, graph.length, graph[0].length);
		for (var i = 0; i < extra.length; i++) {
			queue.push(extra[i]);
		}
	}
}

findIsland = (graph, x, y, maxX, maxY) => {
	let directions = [[-1, 0], [0, -1], [0,1], [1,0]];
	let coords = directions.map((direction) =>{ 
		return [ x+direction[0] , y+direction[1] ];
	});
	// console.log(coords);
	let land = coords.filter((coord) => {
		return coord[0] >= 0 && coord[1] >= 0 && coord[0] < maxX && coord[1] < maxY && graph[coord[0]][coord[1]] === 1; 
	});
	return land;
}

	let graph = [
		[1,0,0,0,0,1,0,0],
		[0,0,1,1,1,1,1,0],
		[1,0,0,0,0,1,0,0],
		[0,1,1,0,0,0,1,0],
		[0,1,1,0,0,1,1,0],
	]
console.log(CountIslands(graph));
module.exports = CountIslands;

let followLargeRoute = (arr) => {
	if (arr.length < 1) {
		return 0;
	}  
	let start = findLargestMid(arr);
	return addFood(start[0], start[1], arr, 0);
}

// let addFood = (y, x, arr, food) => {
// 	let queue = [];
// 	queue.push([y,x]);
// 	while(queue.length > 0) {
// 		let foodVal = queue.pop();
// 		y = foodVal[0];
// 		x = foodVal[1]
// 		food += arr[y][x];
// 		arr[y][x] = 0;
// 		let next = findNextPath(y, x, arr);
// 		if (next) {
// 			queue.push(next);
// 		}
// 	}
// 	return food;
// }

// let findNextPath = (y, x, arr) => {
// 	let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
// 	let largest = 0;
// 	let largestCoord = null;
// 	let coords = directions.forEach((direction) => {
// 		let foodVal = null
// 		if (arr[y + direction[0]]) {
// 			foodVal = arr[y + direction[0]][x + direction[1]]
// 		}
// 		if (foodVal > largest) {
// 			largest = foodVal;
// 			console.log(foodVal);
// 			largestCoord = [y + direction[0], x + direction[1]];
// 		}
// 	});
// 	let result = largest === 0 ? false : largestCoord;
// 	return result;
// }

// let findLargestMid = (arr) => {
// 	let y = arr.length;
// 	let x = arr[0].length;
// 	let valueCoord = {};
// 	let yMid = [];
// 	let xMid = [];

// 	yMid.push(Math.floor(y/2));
// 	xMid.push(Math.floor(x/2));

// 	if (y % 2 === 0) {
// 		yMid.push(Math.floor(y/2) - 1);
// 	}
// 	if (x % 2 === 0) {
// 		xMid.push(Math.floor(x/2) - 1);
// 	}

// 	let val1 = arr[yMid[0]][xMid[0]];
// 	let val2 = arr[yMid[0]][xMid[1]];
// 	let val3 = arr[yMid[1]][xMid[0]];
// 	let val4 = arr[yMid[1]][xMid[1]];

// 	let vals = [val1, val2, val3, val4].filter((val) => {
// 		return val !== undefined;
// 	});

// 	valueCoord[val1] = [yMid[0], xMid[0]] ? val1 : 0;
// 	valueCoord[val2] = [yMid[0], xMid[1]] ? [yMid[0], xMid[1]] : 0;
// 	valueCoord[val3] = [yMid[1], xMid[0]] ? [yMid[1], xMid[0]] : 0;
// 	valueCoord[val4] = [yMid[1], xMid[1]] ? [yMid[1], xMid[1]] : 0;

// 	let largest = Math.max(...vals);
// 	console.log(largest);
// 	return valueCoord[largest];
//  }