/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = nums.indexOf(target)
    let last = nums.lastIndexOf(target)
    return [first, last]
};


