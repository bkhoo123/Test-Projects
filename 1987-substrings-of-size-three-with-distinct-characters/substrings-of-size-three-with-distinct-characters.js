/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let left = 0
    let count = 0

    for (let right = 3; right <= s.length; right ++) {
        let set = new Set(s.slice(left, right))
        left ++
        if (set.size === 3) count ++
    }
    return count
};