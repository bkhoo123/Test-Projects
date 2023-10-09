/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let filter = nums.filter(ele => {
        return ele > 0;
    });
    let set = new Set(filter);

    for (let i = 1; i <= filter.length + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};
