const PuzzleSolver = require('./PuzzleSlider');

let solution = [
	[1,2,3],
	[4,5,6],
	[7,8,0],
]

test('standard test', () => {
	let graph = [
		[4,8,7],
		[3,0,1],
		[2,5,6],
	]
	let result = PuzzleSolver(graph);
	expect(result).toEqual(solution); 
});


test('1 island', () => {
	let graph = [
		[0,8,7],
		[3,6,4],
		[2,5,1],
	]
	let result = PuzzleSolver(graph);
	expect(result).toEqual(solution); 
});

