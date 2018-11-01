const reverseList = require('./ReverseList');

console.log(reverseList);

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
	.addToTail(4);
	node = reverseList(list);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([4,3,2,1]); 
});

test('basic test odd', () => {
	let arr = [];
	const list = new LinkedList(1)
	.addToTail(2)
	.addToTail(3)
	.addToTail(4)
	.addToTail(5);
	node = reverseList(list);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([5,4,3,2,1]); 
});

test('one value', () => {
	let arr = [];
	const list = new LinkedList(1);
	node = reverseList(list);
	let counter = 0;
	while(node) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([1]); 
});

test('no value', () => {
	let arr = [];
	const list = new LinkedList();
	node = reverseList(list);
	let counter = 0;
	while(node.value) {
		arr.push(node.value);
		node = node.next;
		counter++;
	}

	expect(arr).toEqual([]); 
});


