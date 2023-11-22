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

    let count = 0;

    function dfs(node) {
        if(!node) return

        let left = dfs(node.left);
        count++
        if(count===k) return node.val
        

        let right = dfs(node.right);
        if(left!==undefined) return left
        else if (right!==undefined) return right
    }

    return dfs(root)
    
};

// inside recursive stack tree I will know the values
// find max value in bst and minus k