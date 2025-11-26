/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let res = []
    let counter = {}

    for (let i = 0; i < nums.length; i ++) {
        nums[i] in counter ? counter[nums[i]] ++ : counter[nums[i]] = 1 
    }
    
    for (let k in counter) {
        if (counter[k] === 2) {
            res.push(Number(k))
        } 
    }
    return res
};