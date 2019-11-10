/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = [];
  function _scan(root) {
    if (!root) {
      return;
    }
    root.left && _scan(root.left);
    res.push(root.val);
    root.right && _scan(root.right);
  }
  _scan(root);
  return res;
};