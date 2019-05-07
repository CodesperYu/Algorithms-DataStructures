breadthFirstSearch = (node) => {
  const result = [];
  const queue = [];
  // console.log('hi');
  if (node.value === null) {
    return;
  }

  queue.push(node);

  while (queue.length > 0) {
    let currentNode = queue[0];
    // console.log(currentNode);
    if (currentNode) {
      result.push(currentNode.value);
    }
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }

    queue.shift();
  }

  return result;
};

module.exports = breadthFirstSearch;
