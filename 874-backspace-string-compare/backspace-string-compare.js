/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = []
    let stack2 = []

    for (let i = 0; i < s.length; i ++) {
        if (s[i] === "#") {
            stack1.pop()
            continue
        }
        stack1.push(s[i])
    }

    for (let i = 0; i < t.length; i ++) {
        if (t[i] === "#") {
            stack2.pop()
            continue
        }
        stack2.push(t[i])
    }


    return stack1.join("") === stack2.join("") 
};