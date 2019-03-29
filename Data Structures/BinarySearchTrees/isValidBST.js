var isValidBST = function (root, min = Infinity, max = -Infinity) {
  if (!root) {
    return true;
  }

  if (root.val >= min || root.val <= max) {
    return false;
  }

  return isValidBST(root.left, Math.min(min, root.val), max) && isValidBST(root.right, min, Math.max(max, root.val));
};
