/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  function _binaryTreePath(node, path) {
    if (!node.left && !node.right) {
      res.push(path === '' ? `${node.val}` : `${path}->${node.val}`);
    }
    node.left && _binaryTreePath(node.left, path === '' ? `${node.val}` : `${path}->${node.val}`);
    node.right && _binaryTreePath(node.right, path === '' ? `${node.val}` : `${path}->${node.val}`);
  }
  _binaryTreePath(root, '');
  return res;
};