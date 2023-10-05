/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    nums.sort((a, b) => a - b)
    if (nums.length === 2) return -1
    if (nums.length === 1) return -1
    return nums[1]
};