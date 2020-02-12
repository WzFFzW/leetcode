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
var minDiffInBST = function(root) {
  const nodes = [];
  function search(node) {
    node.val && nodes.push(node.val);
    node.left && search(node.left);
    node.right && search(node.right);
  }
  search(root);
  nodes.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  nodes.reduce((pre, cur) => {
    min = Math.min(Math.abs(cur - pre), min);
    return cur;
  });
  return min;
};