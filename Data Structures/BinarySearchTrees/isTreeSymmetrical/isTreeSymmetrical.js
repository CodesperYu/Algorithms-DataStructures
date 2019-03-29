/*
Given a binary tree t, determine whether
it is symmetric around its center, i.e. each side mirrors the other.
*/

isTreeSymmetrical = (t) => {
  if (t === null) return true;

  return checkSameNode(t.left, t.right);
};

checkSameNode = (l, r) => {
  // console.log(l.value, r.value);
  if (!l && !r) return true;

  if (!l || !r) return false;

  return l.value === r.value && checkSameNode(l.left, r.right) && checkSameNode(l.right, r.left);
};

module.exports = isTreeSymmetrical;
