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
    const newNode = new Node(value);
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
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === null) {
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
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null recurr until
        // null is found
        this.insertNode(node.right, newNode);
      }
    }
    return this;
  }
}

const list = new BinarySearchTree();
list.insert(5);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(6);
list.insert(7);

const serialize = (root) => {
  let stringify = '';

  function iterate(root) {
    if (!root) {
      stringify += '#';
      return;
    }
    stringify += root.value;
    iterate(root.left);
    iterate(root.right);
  }

  iterate(root);
  return stringify;
};

const sol1 = serialize(list.root);

console.log(sol1);
const deserialize = (code) => {
  let i = 0;

  function iterateCode() {
    if (code[i] === '#') {
      i++;
      return null;
    }

    const tree = new Node(code[i]);
    i++;
    tree.left = iterateCode();
    tree.right = iterateCode();
    return tree;
  }

  return iterateCode(code);
};

const deSol1 = deserialize(sol1);
console.log(deSol1);

console.log(2 - 2 * 2);
