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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) {
    return [];
  }
  const res = [];
  function _pathSum(root, val, path) {
    if (!root.left && !root.right && val + root.val === sum) {
      res.push([...path, root.val]);
    }
    return (root.left && _pathSum(root.left, val + root.val, [...path, root.val])) || (root.right && _pathSum(root.right, val + root.val, [...path, root.val]));
  }
  _pathSum(root, 0, [])
  return res;
};