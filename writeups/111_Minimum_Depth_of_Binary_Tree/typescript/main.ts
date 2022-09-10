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

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const left: number = minDepth(root.left);
  const right: number = minDepth(root.right);
  if (left === 0 || right === 0) {
    return Math.max(...[left, right]) + 1;
  } else {
    return Math.min(...[left, right]) + 1;
  }
}
