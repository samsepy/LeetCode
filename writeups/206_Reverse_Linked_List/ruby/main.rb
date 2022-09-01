# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
  return [] if head.nil?

  current_node = head
  stack_nodes = [nil]
  while current_node.next do
    stack_nodes.push(current_node)
    current_node = current_node.next
  end
  head_node = current_node
  while !stack_nodes.empty?
    current_node.next = stack_nodes.pop
    current_node = current_node.next
  end

  head_node
end
