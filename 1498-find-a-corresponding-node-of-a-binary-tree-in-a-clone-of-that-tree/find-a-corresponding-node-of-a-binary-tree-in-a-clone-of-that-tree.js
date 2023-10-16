/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let stackOriginal = [original];
    let stackCloned = [cloned];

    while (stackOriginal.length) {
        let currentNodeOriginal = stackOriginal.pop();
        let currentNodeCloned = stackCloned.pop();

        if (currentNodeOriginal === target) {
            return currentNodeCloned;
        }

        if (currentNodeOriginal.left) {
            stackOriginal.push(currentNodeOriginal.left);
            stackCloned.push(currentNodeCloned.left);
        }
        if (currentNodeOriginal.right) {
            stackOriginal.push(currentNodeOriginal.right);
            stackCloned.push(currentNodeCloned.right);
        }
    }

    // Return null if the target node was not found
    return null;
};
