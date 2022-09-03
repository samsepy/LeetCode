function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let currentNode: ListNode = head;
  const stackNodes: (ListNode | null)[] = [null];
  while (currentNode.next) {
    stackNodes.push(currentNode);
    currentNode = currentNode.next;
  }
  const headNode: ListNode = currentNode;
  while (stackNodes.length) {
    currentNode.next = stackNodes.pop();
    currentNode = currentNode.next;
  }

  return headNode;
}
