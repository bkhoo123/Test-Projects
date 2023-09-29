/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) {
        return 0;
    }
    let max = 0;
    let set = new Set();
    let right;
    let left = 0;

    for (right = 0; right < s.length; right++) {
        if (!set.has(s[right])) {
            set.add(s[right]);
        } else {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
        }
        
        max = Math.max(max, right - left + 1);
    }
    return max;
};

