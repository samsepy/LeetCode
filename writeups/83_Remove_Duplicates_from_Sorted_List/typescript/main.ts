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
  while (currentNode) {
    if (!h.has(currentNode.val)) {
      h.set(currentNode.val, currentNode);
    }
    currentNode = currentNode.next;
  }
  const nodeSet = [...h.values()];
  for (let i = 0; i < nodeSet.length; i++) {
    nodeSet[i].next = nodeSet[i + 1] || null;
  }

  return head;
}
