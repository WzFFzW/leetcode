/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const postOrderLen = postorder.length;
  const rootVal = postorder[postOrderLen - 1];
  const root = new TreeNode(rootVal);
  const index = inorder.findIndex((item) => item === rootVal);
  postorder.splice(postOrderLen - 1, 1);
  root.right = buildTree(inorder.slice(index + 1), postorder);
  root.left = buildTree(inorder.slice(0, index), postorder);
  return root;
};