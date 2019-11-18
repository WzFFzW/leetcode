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
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let res = 0;
  function _levelOrder(stack) {
    if (stack.length === 0) {
      return;
    }
    const nextStack = [];
    while (stack.length !== 0) {
      const node = stack.shift();
      node.left && nextStack.push(node.left);
      node.right && nextStack.push(node.right);
    }
    _levelOrder(nextStack);
    res++;
  }
  _levelOrder([root]);
  return res;
};