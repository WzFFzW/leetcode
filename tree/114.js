/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root) {
    const nodes = [];
    function _flatten(root) {
      root.right && _flatten(root.right);
      root.left && _flatten(root.left);
      nodes.push(root.val);
    }
    _flatten(root);
    let node = root;
    root.left = root.right = null;
    for (let i = nodes.length - 2; i >= 0; i--) {
      node.right = new TreeNode(nodes[i]);
      node = node.right;
    }
  }
};