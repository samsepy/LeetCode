/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let currentNode: ListNode = head;
  const h = new Map<number, ListNode>();
  const duplicateNodeVals: number[] = [];
  while (currentNode) {
    if (h.has(currentNode.val)) {
      duplicateNodeVals.push(currentNode.val);
    } else {
      h.set(currentNode.val, currentNode);
    }
    currentNode = currentNode.next;
  }
  for (let i = 0; i < duplicateNodeVals.length; i++) {
    h.delete(duplicateNodeVals[i]);
  }

  if (h.size === 0) return null;

  const nodeSet = [...h.values()];
  for (let i = 0; i < nodeSet.length; i++) {
    nodeSet[i].next = nodeSet[i + 1] || null;
  }

  return nodeSet[0];
}
