const BSTmin = require('./minHeight');

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root,newNode);
		}
	}
	insertNode(node, newNode) {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
		return this;
	}
}

iterateArr = (node) => {
	if (node) {
		iterateArr(node.left);
		if (node.value) {
			arr.push(node.value);
		}
		iterateArr(node.right);
	} 
	return arr;
}

test('standard even test', () => {
	let input = [1,3,6,7,8,10,11,13,100,113];
	let arr = [];
	let answer = [8,3,1,6,7,13,10,11,100,113];
	let resultBST = new BSTmin;

	resultBST.minHeight(input);
	iterateArr = (node) => {
		if (node) {
			if (node.value) {
				arr.push(node.value);
			}
			iterateArr(node.left);
			iterateArr(node.right);
		} 
	}
	
	iterateArr(resultBST.root);
	expect(answer).toEqual(arr); 
});

test('standard odd test', () => {
	let input = [1,3,6,7,8,10,11,13,100];
	let arr = [];
	let answer = [8,3,1,6,7,11,10,13,100];
	let resultBST = new BSTmin;

	iterateArr = (node) => {
		if (node) {
			if (node.value) {
				console.log(node.value)
				arr.push(node.value);
				console.log(arr);
			}
			iterateArr(node.left);
			iterateArr(node.right);
		} 
	}

	resultBST.minHeight(input);
	iterateArr(resultBST.root);
	console.log(resultBST.root);
	expect(arr).toEqual(answer); 
});


test('empty test', () => {
	let input = [];
	let arr = [];
	let answer = [];
	let resultBST = new BSTmin;

	resultBST.minHeight(input);
	iterateArr = (node) => {
		if (node) {
			if (node.value) {
				arr.push(node.value);
			}
			iterateArr(node.left);
			iterateArr(node.right);
		} 
	}
	
	iterateArr(resultBST.root);
	expect(answer).toEqual(arr); 
});