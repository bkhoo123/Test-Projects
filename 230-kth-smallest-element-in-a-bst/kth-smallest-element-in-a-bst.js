/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return null
    
    let stack = [root]
    let min = Infinity

    while (stack.length) {
        let node = stack.pop()
        min = Math.min(min, node.val)

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return k + min - 1
};

// inside recursive stack tree I will know the values
// find max value in bst and minus k