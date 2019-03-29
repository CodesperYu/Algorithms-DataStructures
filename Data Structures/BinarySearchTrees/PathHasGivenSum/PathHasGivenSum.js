/*
Given a binary tree t and an integer s,
determine whether there is a root to leaf path in
t such that the sum of vertex values equals s.
*/

pathHasGivenSum = (t, s) => {
  // if both dont exist, return true
  if (!t && !s) {
    return true;
  }
  // otherwise check if path has given sum, (tree, expect sum, current sum)
  return check(t, s, 0);
};

function check(t, expected, actual) {
  // if only tree doesnt exist, but there's an number, it's false;
  if (!t) return false;

  // add current value
  actual += t.value;

  // if the sum wanted is the same as actual, AND it is a leaf, return true.
  if (expected === actual && !t.left && !t.right) return true;


  // check left and right until we hit the if statement of one side being true
  return check(t.left, expected, actual)
				|| check(t.right, expected, actual);
}


module.exports = pathHasGivenSum;
