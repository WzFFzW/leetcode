/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function _hight(node) {
    if (!node) {
      return 0;
    }
    let leftHight = _hight(node.left);
    if (leftHight === -1) {
      return -1;
    }
    leftHight += 1;
    let rightHight = _hight(node.right);
    if (rightHight === -1) {
      return -1;
    }
    rightHight += 1;
    return Math.abs(leftHight - rightHight) <= 1 ? Math.max(leftHight, rightHight) : -1;
  }
  return _hight(root, 1) !== -1;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function _hight(node) {
    if (!node) {
      return 0;
    }
    let leftHight = _hight(node.left);
    if (leftHight === -1) {
      return -1;
    }
    let rightHight = _hight(node.right);
    if (rightHight === -1) {
      return -1;
    }
    return Math.abs(leftHight - rightHight) <= 1 ? Math.max(leftHight, rightHight) + 1 : -1;
  }
  return _hight(root, 1) !== -1;
};