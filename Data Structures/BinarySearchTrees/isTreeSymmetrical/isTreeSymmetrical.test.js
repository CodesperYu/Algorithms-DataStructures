const isTreeSymmetrical = require('./isTreeSymmetrical');

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
	const tree = t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
	let result = isTreeSymmetrical(tree);
	expect(result).toEqual(true); 
});

test('same, but not mirror', () => {
	const tree = t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    }
}

	let result = isTreeSymmetrical(tree);
	expect(result).toEqual(false); 
});

test('no tree', () => {
	const tree = t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    }
}

	let result = isTreeSymmetrical(tree);
	expect(result).toEqual(false); 
});

