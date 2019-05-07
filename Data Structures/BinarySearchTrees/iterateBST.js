const inorderTraversal = function (root, arr) {
  const result = [];
  const stack = [];
  let currNode = root;
  while (stack.length || currNode) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    currNode = curr.right;
  }
  return result;
};
