class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0
        res = ["_" for _ in range(len(nums))]
        for i in range(len(nums) - 1):
            curr = nums[i]
            next = nums[i + 1]
            if curr == next:
                continue
            else:
                nums[k] = curr
                k += 1
            
        nums[k] = nums[-1]
        k += 1
        return k
               





