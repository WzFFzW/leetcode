/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  function _pathSum(root, val) {
    if (!root.left && !root.right) {
      return val + root.val === sum;
    }
    return (root.left && _pathSum(root.left, root.val + val)) || (root.right && _pathSum(root.right, root.val + val));
  }
  return !!_pathSum(root, 0);
};