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

function levelOrder(root: TreeNode | null): number[][] {
  const h = new Map<number, number[]>();
  function bfs(tree: TreeNode | null, level: number): void {
    if (!tree) return;

    if (!h.has(level)) {
      h.set(level, [tree.val]);
    } else {
      (h.get(level) ?? []).push(tree.val);
    }
    if (tree.left) {
      bfs(tree.left, level + 1);
    }
    if (tree.right) {
      bfs(tree.right, level + 1);
    }
  }
  bfs(root, 0);

  return [...h.values()];
}
