class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
  addLeft(value) {
    let node = new Node(value);
    this.left = node;
  }
  addRight(value) {
    let node = new Node(value);
    this.right = node;
  }
}

let countUnivalTree = (tree) => {
	let count = 0;
	let checkForUni = (node) => {
		//count goes up when the left value and right value are unival
		//a single value is unival when it is the only one of its kind or it's at the end 
		if (!node) {
			return true;
		}
		
		let left = checkForUni(node.left);
		let right = checkForUni(node.right);

		if (!left || !right) {
			return false;
		}

		if (node.right && node.right.val !== node.val) {
			return false;
		}
		
		if (node.left && node.left.val !== node.val) return false;
		// console.log(node);
		count++;
		return true;
	}
	checkForUni(tree);
	return count;
}



let createTree = new Node(5);
createTree.addLeft(1)
createTree.left.addLeft(5);
createTree.left.left.addLeft(5);
createTree.left.left.addRight(1);
createTree.left.addRight(5)
createTree.left.right.addLeft(5)
createTree.left.right.addRight(5);
createTree.addRight(5);
createTree.right.addRight(5);
console.log(countUnivalTree(createTree));