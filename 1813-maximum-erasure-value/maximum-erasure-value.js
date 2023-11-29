/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let left = 0
    let max = 0
    let sum = 0
    let set = new Set()

    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            sum -= nums[left]
            set.delete(nums[left])
            left++
        }

        set.add(nums[right])
        sum += nums[right]

        max = Math.max(max, sum);
    }

    return max;
};
