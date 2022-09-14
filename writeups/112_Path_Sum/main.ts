/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;

  const remainingSum: number = targetSum - root.val;
  if (root.left === null && root.right === null && remainingSum === 0) {
    return true;
  }

  return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};
