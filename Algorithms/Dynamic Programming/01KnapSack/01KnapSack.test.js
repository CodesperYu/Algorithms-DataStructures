const knapsack = require('./01knapsack');

console.log(knapsack);

test('basic test', () => {
	let space = 7;
	let items = [[5,7], [1,1], [3,4], [4,5]];
  expect(knapsack(space, items)).toBe(9);
});

test('two same weight', () => {
	let space = 7;
	let items = [[5,7], [3,1], [3,8], [4,5], [1,2]];
  expect(knapsack(space, items)).toBe(13);
});

test('same values', () => {
	let space = 6;
	let items = [[1,1], [1,1], [1,1], [1,1], [1,1]];
  expect(knapsack(space, items)).toBe(5);
});

test('no value', () => {
	let space = 7;
	let items = [];
  expect(knapsack(space, items)).toBe(0);
});

test('no space', () => {
	let space = 0;
	let items = [[3,7], [3,2], [1,4], [1,5], [3,7]];
  expect(knapsack(space, items)).toBe(0);
});

test('same value different weight', () => {
	let space = 7;
	let items = [[3,7], [3,2], [1,4], [1,5], [3,7]];
  expect(knapsack(space, items)).toBe(19);
});



