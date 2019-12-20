/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  function _sortedArrayToBST(arr = []) {
    if (arr.length === 0) {
      return null;
    }
    const mid = (0 + arr.length) >>> 1
    const node = new TreeNode(arr[mid]);
    node.left = _sortedArrayToBST(arr.slice(0, mid));
    node.right = _sortedArrayToBST(arr.slice(mid + 1));
    return node;
  }
  return _sortedArrayToBST(nums);
};