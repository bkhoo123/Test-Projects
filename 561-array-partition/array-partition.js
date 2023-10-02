/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0

    let left = 0
    let right = 1

    while (left < right && right < nums.length) {
        sum += nums[left]
        left += 2
        right += 2
    }

    return sum

};