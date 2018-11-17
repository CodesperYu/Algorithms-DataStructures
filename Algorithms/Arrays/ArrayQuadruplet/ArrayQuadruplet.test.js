const arrayQuadruplet = require('./arrayQuadruplet');

test('standard test', () => {
	let arr = [2,7,4,0,9,5,1,3];
	let sum = 20;
	let result = arrayQuadruplet(arr, sum);
	expect(result).toEqual([0,4,7,9]); 
});

test('standard repeated numbers test', () => {
	const arr = [4,4,4,4];
	let sum = 16;
	let result = arrayQuadruplet(arr, sum);
	expect(result).toEqual([4,4,4,4]); 
});

test('less than length of 4', () => {
	const arr = [4,4,4];
	let sum = 16;
	let result = arrayQuadruplet(arr, sum);
	expect(result).toEqual([]); 
});

test('dont add up', () => {
	const arr = [4,4,4,3,6];
	let sum = 16;
	let result = arrayQuadruplet(arr, sum);
	expect(result).toEqual([]); 
});