const pathHasGivenSum = require('./PathHasGivenSum');

class Node { 
	constructor(value) { 
		this.value = value; 
		this.left = null; 
		this.right = null; 
	} 
} 

class BinarySearchTree { 
	constructor() { 
		this.root = null; 
	} 
	
	insert(value) { 
		var newNode = new Node(value); 
		if (this.root === null) {
			this.root = newNode; 
		} else {
			this.insertNode(this.root, newNode); 
		}
	} 
		
	// Method to insert a node in a tree 
	// it moves over the tree to find the location 
	// to insert a node with a given value
	insertNode(node, newNode) { 
		// if the value is less than the node 
		// value move left of the tree  
		if( newNode.value < node.value) { 
			// if left is null insert node here 
			if(node.left === null) {
				node.left = newNode; 
			} else {
				// if left is not null recurr until  
				// null is found 
				this.insertNode(node.left, newNode);  
			}
		} else {
		// if the value is more than the node 
		// value move right of the tree  
				// if right is null insert node here 
			if(node.right === null) {
					node.right = newNode; 
			} else {
				// if right is not null recurr until  
				// null is found 
				this.insertNode(node.right,newNode); 
			}
		}
		return this; 
	}
}

test('standard truth test', () => {
	const list = new BinarySearchTree()
	list.insert(5);
	list.insert(2);
	list.insert(3);
	list.insert(4);
	list.insert(6);
	list.insert(7);
	let result = pathHasGivenSum(list.root, 14);
	expect(result).toEqual(true); 
});

test('standard false test', () => {
	const list = new BinarySearchTree()
	list.insert(5);
	list.insert(2);
	list.insert(3);
	list.insert(4);
	list.insert(6);
	list.insert(7);

	let result = pathHasGivenSum(list.root, 10);
	expect(result).toEqual(false); 
});
