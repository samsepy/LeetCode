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

 function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const l1Array: number[] = [];
  const l2Array: number[] = [];
  let currentL1Node = l1;
  let currentL2Node = l2;
  while (currentL1Node) {
    l1Array.push(currentL1Node.val);
    currentL1Node = currentL1Node.next;
  }
  while (currentL2Node) {
    l2Array.push(currentL2Node.val);
    currentL2Node = currentL2Node.next;
  }
  const sumBothList: string = String(
    Number(l1Array.reverse().join("")) + Number(l2Array.reverse().join("")),
  )
    .split("")
    .reverse()
    .join("");
  let sumBothListHead: ListNode = new ListNode(Number(sumBothList[0]));
  let currentNode: ListNode = sumBothListHead;
  for (let i = 1; i < sumBothList.length; i++) {
    currentNode.next = new ListNode(Number(sumBothList[i]));
    currentNode = currentNode.next;
  }

  return sumBothListHead;
}
