/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = -Infinity;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = minHeight * (right - left);
        max = Math.max(max, currentArea);

        // Move the pointer pointing to the shorter line towards the other pointer
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};


// sliding window