# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
  current_node = head
  checked_nodes = Set.new
  while current_node do
    if checked_nodes.include?(current_node)
      return true
    else
      checked_nodes.add(current_node)
      current_node = current_node.next
    end
  end
  
  false
end
