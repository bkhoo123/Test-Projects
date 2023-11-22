# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        if not head:
          return None
        
        arr = []
        curr = head

        while curr != None:
          arr.append(curr.val)
          curr = curr.next

        left = 0
        right = len(arr) - 1
        maxy = float('-inf')
        
        while left < right:
          sum = arr[left] + arr[right]
          maxy = max(maxy, sum)
          left += 1
          right -= 1

        return maxy