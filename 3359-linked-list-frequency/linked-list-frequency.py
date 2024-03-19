# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def frequenciesOfElements(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        
        curr = head
        counter = {}

        while curr:
            if curr.val in counter:
                counter[curr.val] += 1
            else: 
                counter[curr.val] = 1

            curr = curr.next
        
        entries = list(counter.items())
        dummy_head = ListNode(entries[0][0])
        prev = dummy_head


        for [key, value] in entries:
            new_node = ListNode(value)
            prev.next = new_node
            prev = new_node

        return dummy_head.next