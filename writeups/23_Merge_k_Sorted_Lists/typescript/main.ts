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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const h = new Map<number, number>();
  for (let i = 0; i < lists.length; i++) {
    let currentNode: ListNode = lists[i];
    while (currentNode) {
      const currentNodeVal = currentNode.val;
      if (h.has(currentNodeVal)) {
        h.set(currentNodeVal, (h.get(currentNodeVal) ?? 0) + 1);
      } else {
        h.set(currentNodeVal, 1);
      }
      currentNode = currentNode.next;
    }
  }
  const listVals = [...h.keys()].sort((a, b) => a - b);
  const head: ListNode = new ListNode();
  let currentNode: ListNode = head;
  for (let i = 0; i < listVals.length; i++) {
    for (let j = 0; j < h.get(listVals[i]) ?? 0; j++) {
      currentNode.next = new ListNode(listVals[i]);
      currentNode = currentNode.next;
    }
  }

  return head.next;
}
