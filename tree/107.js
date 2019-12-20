/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  function mapTree(stack) {
    if (stack.length === 0) {
      return;
    }
    const nextStack = [];
    const _res = []
    while (stack.length !== 0) {
      const node = stack.shift();
      _res.push(node.val);
      node.left && nextStack.push(node.left);
      node.right && nextStack.push(node.right);
    }
    res.unshift(_res);
    mapTree(nextStack);
  }
  mapTree([root]);
  return res;
};