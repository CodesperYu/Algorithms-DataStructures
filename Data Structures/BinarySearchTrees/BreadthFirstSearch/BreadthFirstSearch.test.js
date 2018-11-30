const breadthFirstSearch = require('./BreadthFirstSearch');

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

test('standard test', () => {
	const list = new BST()
	list.insert('f');
	list.insert('d');
	list.insert('k');
	list.insert('b');
	list.insert('e');
	list.insert('g');
	list.insert('l');
	list.insert('a');
	list.insert('c');
	list.insert('h');
	list.insert('j');
	list.insert('i');
	
	console.log(list);
	expect(true).toEqual(true);
});