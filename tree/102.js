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
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  function _levelOrder(stack) {
    if (stack.length === 0) {
      return;
    }
    const nextStack = [];
    const _res = [];
    while (stack.length !== 0) {
      const node = stack.shift();
      _res.push(node.val);
      node.left && nextStack.push(node.left);
      node.right && nextStack.push(node.right);
    }
    res.push(_res);
    _levelOrder(nextStack);
  }
  _levelOrder([root]);
  return res;
};