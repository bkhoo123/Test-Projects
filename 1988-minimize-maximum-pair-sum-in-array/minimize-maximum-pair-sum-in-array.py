class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()
        left = 0
        right = len(nums) - 1

        arr = []

        while left < right:
            arr.append(nums[left] + nums[right])
            left += 1
            right -= 1

        return max(arr)