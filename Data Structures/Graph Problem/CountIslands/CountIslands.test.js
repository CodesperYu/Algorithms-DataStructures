const CountIslands = require('./CountIslands');

test('standard test', () => {
	let graph = [
		[1,0,0,0,0,1,0,0],
		[0,0,1,1,1,1,1,0],
		[1,0,0,0,0,1,0,0],
		[0,1,1,0,0,0,1,0],
		[0,1,1,0,0,1,1,0],
	]
	let result = CountIslands(graph);
	expect(result).toEqual(5); 
});


test('1 island', () => {
	let graph = [
		[1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1],
		[1,0,0,0,0,1,0,0],
		[1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1],
	]
	let result = CountIslands(graph);
	expect(result).toEqual(1); 
});

