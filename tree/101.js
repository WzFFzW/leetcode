/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  function _isSameTree(p, q) {
    if (p === null && q === null) {
      return true;
    }
    if (p === null || q === null) {
      return false;
    }
    if (q.val !== p.val) {
      return false;
    }
    return _isSameTree(p.left, q.right) && _isSameTree(q.left, p.right);
  }
  return _isSameTree(root.left, root.right);
};