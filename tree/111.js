/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  let hight = Number.MAX_SAFE_INTEGER;
  function _hight(node, h) {
    if (!node.left && !node.right) {
      hight = Math.min(h, hight);
    }
    node.left && _hight(node.left, h + 1);
    node.right && _hight(node.right, h + 1);
  }
  if (!root) {
    return 0;
  }
  root && _hight(root, 1);
  return hight;
};