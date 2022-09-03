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

function hasCycle(head: ListNode | null): boolean {
  let currentNode: ListNode = head;
  const checkedNodes = new Map<ListNode, boolean>();
  while (currentNode) {
    if (checkedNodes.has(currentNode)) {
      return true;
    } else {
      checkedNodes.set(currentNode, true);
      currentNode = currentNode.next;
    }
  }

  return false;
}
