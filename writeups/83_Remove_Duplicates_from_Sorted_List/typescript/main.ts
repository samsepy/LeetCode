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
  let currentNode: ListNode | null = head;
  while (currentNode) {
    if (currentNode.next) {
      if (currentNode.val === currentNode.next.val) {
        currentNode.next = currentNode.next.next;
        deleteDuplicates(currentNode);
      }
    }
    currentNode = currentNode.next;
  }

  return head;
}
