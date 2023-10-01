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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {

    function dfs(node) {
        if (!node) return null;

        // Traverse the left and right subtrees
        node.left = dfs(node.left);
        node.right = dfs(node.right);

        // If the current node is a leaf and its value equals the target, remove it
        if (node.left === null && node.right === null && node.val === target) {
            return null;
        }

        return node;
    }

    return dfs(root);
};
