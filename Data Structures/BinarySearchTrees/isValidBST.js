var isValidBST = function(root, leftMin = -Infinity, rightMax = Infinity) {
  if (!root) return true
  
  if (root.val <= leftMin || root.val >= rightMax) return false
  
  return isValidBST(root.left, leftMin, root.val) && isValidBST(root.right, root.val, rightMax)
};
