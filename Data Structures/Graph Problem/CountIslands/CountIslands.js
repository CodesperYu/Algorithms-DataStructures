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