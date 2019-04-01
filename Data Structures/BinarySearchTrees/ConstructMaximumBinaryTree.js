// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.


const constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;

  const largest = Math.max(...nums);
  const largestNumsIndex = nums.indexOf(largest);

  const tree = new TreeNode(largest);
  const left = nums.slice(0, largestNumsIndex);
  const right = nums.slice(largestNumsIndex + 1);

  tree.left = constructMaximumBinaryTree(left);
  tree.right = constructMaximumBinaryTree(right);

  return tree;
};
