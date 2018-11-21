const distanceOfK = require('./distanceOfK');

test('standard test', () => {
	let input = [1, 7, 5, 9, 2, 12, 3];
	let answer = [[1,3], [3,5], [5,7], [7,9]];
	let result = distanceOfK(input);
	expect(result).toEqual(answer.length); 
});
