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

	minHeight(arr) {
		this.insertArr(arr, 0, arr.length-1);
	}

	insertArr(arr, start, end) {
		if (end < start) {
			return;
		}
		let mid = Math.floor((start+end)/2);
		this.insert(arr[mid]);
		this.insertArr(arr, start, mid-1);
		this.insertArr(arr, mid+1, end);
	}
}

// let result = new BST;
// result.minHeight([1,3,6,7,8,10,11,13,100,113]);

module.exports = BST;