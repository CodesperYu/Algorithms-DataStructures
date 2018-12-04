const LIS = require('./LIS');

test('standard test', () => {
	let input = [10, 22, 9 ,33, 21, 50, 41, 60, 80]  
	let answer = [10, 22, 33, 50, 60, 80]

	let result = LIS(input);
	expect(result).toEqual(answer);
});

test('test with larger gap', ()=>{
	let input = [10,22,9,33,23,50,41,52,53,60,80,24,25,226,27,28,29,30,31,32,33,34,29,30,31,32,33,34];
	let answer = [10,22,23,24,25,27,28,29,30,31,32,33,34];
	
	let result = LIS(input);
	expect(result).toEqual(answer);
});