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
var longestUnivaluePath = function(root) {
  let max = 0;
  if (!root) {
    return max;
  }
  function scan(root, preValue, length) {
    let leftLength = 0;
    let rightLength = 0;
    if (root.left) {
      leftLength = scan(root.left, root.val, length);
    }
    if (root.right) {
      rightLength = scan(root.right, root.val, length);
    }
    let curLeftLength = 0;
    let curRightLength = 0;
    if (root.left && root.left.val === root.val) {
      curLeftLength += leftLength + 1;
    }
    if (root.right && root.right.val === root.val) {
      curRightLength += rightLength + 1;
    }
    max = Math.max(max, curLeftLength + curRightLength);
    return Math.max(curLeftLength, curRightLength);
  }
  scan(root, undefined, max);
  return max;
};