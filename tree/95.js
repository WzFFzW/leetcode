/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return [];
  }
  function _generateTrees(start, end) {
    if (start > end) {
      return [null];
    }
    const allTrees = [];
    for (let i = start; i <= end; i++) {
      const leftTrees = _generateTrees(start, i - 1);
      const rightTrees = _generateTrees(i + 1, end);
      leftTrees.map((leftTree) => {
        rightTrees.map((rightTree) => {
          const curNode = new TreeNode(i);
          curNode.left = leftTree;
          curNode.right = rightTree;
          allTrees.push(curNode);
        });
      });
    }
    return allTrees;
  }
  const trees = _generateTrees(1, n);
  return trees;
};