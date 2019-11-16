/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
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
    return _isSameTree(p.left, q.left) && _isSameTree(q.right, p.right);
  }
  return _isSameTree(p, q);
};