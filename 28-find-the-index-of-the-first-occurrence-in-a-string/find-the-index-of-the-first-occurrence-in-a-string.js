/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = needle.length
    
    for (let i = 0; i <= haystack.length - len; i ++) {
        let substring = haystack.substring(i, i + len) 
        if (substring === needle) return i
    } 
    return - 1
};