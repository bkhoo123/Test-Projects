var balancedStringSplit = function(s) {
    let count = 0;
    let l = 0;
    let r = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            r++;
        } else {
            l++;
        }
        if (l === r) {
            count++;
            l = 0;
            r = 0;
        }
    }
    return count;
};
