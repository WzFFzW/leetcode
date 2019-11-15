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
var isValidBST = function(root) {
  if (!root) {
    return true;
  }
  function _isValidBST(root, leftLimit, rightLimit) {
    if (!root) {
      return true;
    }
    if (leftLimit != null && leftLimit >= root.val) {
      return false;
    }
    if (rightLimit != null && rightLimit <= root.val) {
      return false;
    }
    if (root.left && !_isValidBST(root.left, leftLimit, root.val)) {
      return false;
    }
    if (root.right && !_isValidBST(root.right, root.val, rightLimit)) {
      return false;
    }
    return true;
  }
  return _isValidBST(root, null, null);
};