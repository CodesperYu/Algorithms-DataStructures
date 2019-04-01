const distributeCoins = function (root) {
  let moves = 0;
  function dfsCount(node) {
    if (node === null) return 0;
    const left = dfsCount(node.left);
    const right = dfsCount(node.right);
    moves += Math.abs(left) + Math.abs(right);
    return node.val + left + right - 1;
  }
  dfsCount(root);
  return moves;
};
