PuzzleSolver = (puzzle) => {
	//first get the 1 into 
	let tracker = {}
	for (var i = 0; i < puzzle.length; i++) {
		for (var j = 0; j < puzzle[0].length; j++) {
			let value = puzzle[i][j];
			tracker[value] = [i, j];
		} 
	}
};

moveToZero = (square, zero, moveMe) => {
	let blank = square[zero[0], zero[1]];
	if (blank === 0) {
		blank = square[moveMe[0], moveMe[1]];
	}
}

module.exports = PuzzleSolver;