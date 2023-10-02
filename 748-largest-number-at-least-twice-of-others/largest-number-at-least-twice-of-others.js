/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums) 

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === max) {
            continue
        }

        if (nums[i] > max / 2) {
            return -1
        } 
    }
    return nums.indexOf(max)
    
};

// needs to be twice as large 
// return the index