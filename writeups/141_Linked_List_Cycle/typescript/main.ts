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
  const checkedNodes: ListNode[] = [];
  while (currentNode) {
    if (checkedNodes.includes(currentNode)) {
      return true;
    } else {
      checkedNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }

  return false;
}
