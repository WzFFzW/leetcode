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
var postorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const stack = [root];
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return res;
};