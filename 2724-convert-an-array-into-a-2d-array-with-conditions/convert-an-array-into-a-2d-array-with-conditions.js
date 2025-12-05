/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let res = [];
    
    while (nums.length) {
        let seen = new Set();

        for (let i = 0; i < nums.length; i ++) {
            // Current Value
            let curr = nums[i]

            if (!seen.has(curr)) {
                // Remove the item in the array 
                nums.splice(i, 1)
                i --
            }

            // After the check add it to the set add 
            seen.add(curr);
        }
        let array = Array.from(seen)
        res.push(array)
    }
    return res 
}

// Thinking we need a results array to store the results
// Maybe I'll use a set and add into it until I find a duplicate number
// Once a duplicate is found turn the set into an array and push it into res
