/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)

    for (let i = max; i >= 0; i --) {
        if (max % i === 0 && min % i === 0) return i
    }

};