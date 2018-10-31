const reverseList = require('./ReverseList');

console.log(reverseList);

class LinkedList {
	constructor(value) {
			this.value = null;
			this.length = 0;
			this.addToTail(value);
	}

	addToHead(value) {
		const newNode = { value }; // 1
		newNode.next = this.value;  // 2
		this.value = newNode;       // 3
		this.length++;
		return this;
	}

	addToTail( value ){
		let node = { value }
		node.next = null;
 
    if (this.value === null) {
      this.value = node;
    } else {
      let currentNode = this.value;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
		this.length++;
		return this;
	}
}

test('basic test', () => {
	// let space = 7;
	// let items = [[5,7], [1,1], [3,4], [4,5]];
	// expect(knapsack(space, items)).toBe(9);
	let arr = [];
	const list = new LinkedList(1)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4);

	node = reverseList(list.value);
	console.log('this is node ', JSON.stringify(node));
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	console.log(arr);

	expect(arr).toEqual([4,3,2,1]); 
});

// test('two same weight', () => {
// 	let space = 7;
// 	let items = [[5,7], [3,1], [3,8], [4,5], [1,2]];
//   expect(knapsack(space, items)).toBe(13);
// });

// test('same values', () => {
// 	let space = 6;
// 	let items = [[1,1], [1,1], [1,1], [1,1], [1,1]];
//   expect(knapsack(space, items)).toBe(5);
// });

// test('no value', () => {
// 	let space = 7;
// 	let items = [];
//   expect(knapsack(space, items)).toBe(0);
// });

// test('no space', () => {
// 	let space = 0;
// 	let items = [[3,7], [3,2], [1,4], [1,5], [3,7]];
//   expect(knapsack(space, items)).toBe(0);
// });

// test('same value different weight', () => {
// 	let space = 7;
// 	let items = [[3,7], [3,2], [1,4], [1,5], [3,7]];
//   expect(knapsack(space, items)).toBe(19);
// });



