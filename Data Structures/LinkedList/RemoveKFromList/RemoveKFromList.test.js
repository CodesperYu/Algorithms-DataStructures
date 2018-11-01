const removeK = require('./RemoveKFromList');


class LinkedList {
	constructor(value) {
			this.value = null;
			this.next = null;
			this.length = 0;
			//initiate the class
			this.addToTail(value);
	}

	addToTail( value ){
		let node = { value }
		node.next = null;
 
    if (this.value === null) {
			this.value = value;
    } else {
      let currentNode = this;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
		this.length++;
		return this;
	}
}

test('basic test even', () => {
	let arr = [];
	const list = new LinkedList(1)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4)
	.addToTail(3)
	.addToTail(6);
	node = removeK(list, 3);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}
	expect(arr).toEqual([1,2,4,6]); 
});

test('basic test odd', () => {
	let arr = [];
	const list = new LinkedList(1)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4)
	.addToTail(3)
	.addToTail(5)
	.addToTail(6);
	node = removeK(list, 3);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([1,2,4,5,6]); 
});

test('one K', () => {
	let arr = [];
	const list = new LinkedList(1)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4)
	.addToTail(5)
	.addToTail(6);
	node = removeK(list, 3);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([1,2,4,5,6]); 
});

test('K at end', () => {
	let arr = [];
	const list = new LinkedList(1)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4)
	.addToTail(5)
	.addToTail(3);
	node = removeK(list, 3);
	console.log(node);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([1,2,4,5]); 
});


test('K in beginning', () => {
	let arr = [];
	const list = new LinkedList(3)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4)
	.addToTail(5);
	node = removeK(list, 3);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([2,4,5]); 
});

test('back to back K', () => {
	let arr = [];
	const list = new LinkedList(3)
	.addToTail(2)
	.addToTail(3)
	.addToTail(3)
	.addToTail(5);
	node = removeK(list, 3);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([2,5]); 
});



test('no K', () => {
	let arr = [];
	const list = new LinkedList();
	node = removeK(list, 3);
	let counter = 0;

	expect(node).toEqual([]); 
});

